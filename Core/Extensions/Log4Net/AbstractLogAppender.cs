using System;
using log4net.Appender;
using log4net.Core;
using TravelLine.CurrencyRate.Core.Domain.Logging;
using TravelLine.CurrencyRate.Core.Infrastructure;
using TravelLine.CurrencyRate.Core.Services.Logging;

namespace TravelLine.CurrencyRate.Core.Extensions.Log4Net
{
    public abstract class AbstractLogAppender : AppenderSkeleton
    {
        protected override void Append( LoggingEvent loggingEvent )
        {
            var logLevel = ResolveLogLevel(loggingEvent.Level.Name);
            if ( logLevel == LogLevel.Unknown ) return;

            var logItemInfo = new LogItemInfo();
            if ( loggingEvent.LocationInformation != null )
            {
                logItemInfo.LocationInfo = String.Format( "{0}.{1}:{2}", loggingEvent.LocationInformation.ClassName,
                    loggingEvent.LocationInformation.MethodName, loggingEvent.LocationInformation.LineNumber );
            }
            if ( loggingEvent.ExceptionObject != null )
            {
                logItemInfo.Exception = loggingEvent.ExceptionObject;
            }

            switch ( logLevel )
            {
                case LogLevel.Debug:
                case LogLevel.Info:
                case LogLevel.Warning:
                    logItemInfo.Message = RenderLoggingEvent( loggingEvent );
                    break;
                case LogLevel.Error:
                case LogLevel.Critical:
                    logItemInfo.Message = Convert.ToString( loggingEvent.MessageObject );
                    break;
            }

            using ( var serviceScope = ServiceScope.Create() )
            {
                var logService = serviceScope.Get<ILogService>();
                LogToLogService( logService, logLevel, logItemInfo );
            }
        }

        protected abstract void LogToLogService( ILogService logService, LogLevel logLevel, LogItemInfo logItemInfo );

        LogLevel ResolveLogLevel(string logLevelName)
        {
            var logLevel = LogLevel.Unknown;
            switch (logLevelName)
            {
                case "DEBUG":
                    logLevel = LogLevel.Debug;
                    break;
                case "INFO":
                    logLevel = LogLevel.Info;
                    break;
                case "WARN":
                    logLevel = LogLevel.Warning;
                    break;
                case "ERROR":
                    logLevel = LogLevel.Error;
                    break;
                case "FATAL":
                    logLevel = LogLevel.Critical;
                    break;
            }
            return logLevel;
        }

    }
}
