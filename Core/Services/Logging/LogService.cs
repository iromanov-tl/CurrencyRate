using System;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Web;
using TravelLine.CurrencyRate.Core.Configuration;
using TravelLine.CurrencyRate.Core.Configuration.MailDispatchPoint;
using TravelLine.CurrencyRate.Core.Data.Repository;
using TravelLine.CurrencyRate.Core.Domain.Logging;

namespace TravelLine.CurrencyRate.Core.Services.Logging
{
    public class LogService : CommonService<Log>, ILogService
    {
        private const string Separator = "\n------------------------------\n\n";
        private readonly HttpContextBase _httpContext;


        public LogService(HttpContextBase httpContext, IRepository<Log> logRepository ) : base( logRepository )
        {
            _httpContext = httpContext;
            Repository = logRepository;
        }

        public LogService( IRepository<Log> logRepository ) : base( logRepository )
        {
            _httpContext = null;
            Repository = logRepository;
        }

        #region ILogger Members

        public void Debug(LogItemInfo logItemInfo)
        {
            Log(LogLevel.Debug, logItemInfo);
        }

        public void Info(LogItemInfo logItemInfo)
        {
            Log(LogLevel.Info, logItemInfo);
        }

        public void Warning(LogItemInfo logItemInfo)
        {
            Log(LogLevel.Warning, logItemInfo);
        }

        public void ErrorMessage(LogItemInfo logItemInfo)
        {
            Log(LogLevel.Error, logItemInfo);
        }

        public void Error(LogItemInfo logItemInfo)
        {
            if (String.IsNullOrEmpty(logItemInfo.Message))
                logItemInfo.Message = GetExceptionMessage(logItemInfo.Exception);
            if (logItemInfo.Details == null)
                logItemInfo.Details = GetExceptionDetails(logItemInfo.Exception);

            Log(LogLevel.Error, logItemInfo);
        }

        public void CriticalMessage(LogItemInfo logItemInfo)
        {
            Log(LogLevel.Critical, logItemInfo);
        }

        public void Critical(LogItemInfo logItemInfo)
        {
            if (String.IsNullOrEmpty(logItemInfo.Message))
                logItemInfo.Message = GetExceptionMessage(logItemInfo.Exception);
            if (logItemInfo.Details == null)
                logItemInfo.Details = GetExceptionDetails(logItemInfo.Exception);

            Log(LogLevel.Critical, logItemInfo);
        }

        #endregion

        void Log(LogLevel logLevel, LogItemInfo logItemInfo)
        {
            string details = logItemInfo.Details;

            if (logLevel == LogLevel.Error || logLevel == LogLevel.Critical)
            {
                string requestParams = GetRequestParametersMessage();
                if (!String.IsNullOrEmpty(requestParams))
                {
                    details = String.Format("{0}\n{1}", requestParams, details);
                }
            }

            var logItem = new Log
            {
                Created = DateTime.Now,
                LogLevel = logLevel,
                LocationInfo = logItemInfo.LocationInfo,
                Message = logItemInfo.Message,
                Details = details
            };

            switch (logLevel)
            {
                case LogLevel.Debug:
                case LogLevel.Info:
                case LogLevel.Warning:
                    StoreLog(logItem);
                    break;
                case LogLevel.Error:
                case LogLevel.Critical:
                    EmailLog(logItem);
                    StoreLog(logItem);
                    break;
            }
        }

        void EmailLog(Log logItem)
        {
            if (logItem == null) return;

            var emailMessage = new MailMessage(Config.ErrorSenderEmailAddress, Config.ErrorReceiverEmailAddress);
            string logLevelString = logItem.LogLevel.ToString().ToUpper();
            emailMessage.Subject = String.Format("CurrencyRate [{0}] {1}", Config.Environment, logLevelString);

            string body = String.Format("{0:yyyy-MM-dd HH:mm:ss,fff} (UTC) {1}\n{2}",
                logItem.Created.ToUniversalTime(), logLevelString, logItem.Message);
            if (!String.IsNullOrEmpty(logItem.Details))
            {
                body += String.Format("{0}{1}\n", Separator, logItem.Details);
            }
            emailMessage.Body = body;

            MailDispatchPoint dispatchPoint = Config.MailDispatchPoints[Config.ErrorMailDispatchPoint];
            SmtpClient smtpClient = new SmtpClient(dispatchPoint.Server);
            smtpClient.Credentials = new NetworkCredential(dispatchPoint.Username, dispatchPoint.Password);
            try
            {
                smtpClient.Send(emailMessage);
            }
            catch { }
        }

        void StoreLog(Log logItem)
        {
            try
            {
                if (logItem == null) return;

                Repository.Save(logItem);
            }
            catch (Exception ex)
            {
                // При ошибке сохранения лога уведомляем об ошибке другими способами
                // send exception to email
                EmailLog(new Log
                {
                    Created = DateTime.Now,
                    LogLevel = LogLevel.Error,
                    LocationInfo = GetType().FullName + ".Log",
                    Message = GetExceptionMessage(ex)
                });
            }
        }

        string GetRequestParametersMessage()
        {
            if (_httpContext == null)
            {
                return String.Empty;
            }

            HttpRequestBase r = _httpContext.Request;
            StringBuilder sb = new StringBuilder();

            if (!String.IsNullOrEmpty(r.RawUrl))
            {
                sb.Append("RawUrl: ");
                sb.Append(r.RawUrl);
                sb.Append("\n");
            }

            try
            {
                if (r.QueryString.Count > 0)
                {
                    sb.Append("QueryString: ");
                    sb.Append(r.QueryString);
                    sb.Append("\n");
                }

                if (r.Form.Count > 0)
                {
                    sb.Append("Form: ");
                    sb.Append(r.Form);
                    sb.Append("\n");
                }
            }
            catch { }

            return sb.ToString();
        }

        string GetExceptionMessage(Exception ex)
        {
            string errorMessage = String.Empty;
            while (ex != null)
            {
                errorMessage = ex.Message;
                ex = ex.InnerException;
            }

            return errorMessage;
        }

        string GetExceptionDetails(Exception ex)
        {
            StringBuilder sb = new StringBuilder();

            const string exceptionSeparator = "\n---\n";
            bool addSeparator = false;

            if (ex != null)
            {
                sb.Append(ex);
                sb.Append(Separator);
            }

            while (ex != null)
            {
                if (addSeparator)
                    sb.Append(exceptionSeparator);
                sb.AppendFormat("{0}: {1}\n{2}", ex.GetType(), ex.Message, ex.StackTrace);

                ex = ex.InnerException;
                addSeparator = true;
            }

            if (_httpContext != null)
            {
                try
                {
                    HttpRequestBase r = _httpContext.Request;
                    string urlDecode = HttpUtility.UrlDecode(r.ServerVariables.ToString()) ?? String.Empty;

                    if (r.ServerVariables != null)
                    {
                        sb.Append(Separator);
                        sb.Append("ServerVariables:\n");
                        sb.Append(urlDecode.Replace("&", "\n"));
                    }
                }
                catch { }
            }

            return sb.ToString();
        }

    }
}
