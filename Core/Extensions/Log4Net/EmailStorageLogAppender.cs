using TravelLine.CurrencyRate.Core.Domain.Logging;
using TravelLine.CurrencyRate.Core.Services.Logging;

namespace TravelLine.CurrencyRate.Core.Extensions.Log4Net
{
    public class EmailStorageLogAppender : AbstractLogAppender
    {
        protected override void LogToLogService( ILogService logService, LogLevel logLevel, LogItemInfo logItemInfo )
        {
            switch ( logLevel )
            {
                case LogLevel.Debug:
                    logService.Debug( logItemInfo );
                    break;
                case LogLevel.Info:
                    logService.Info( logItemInfo );
                    break;
                case LogLevel.Warning:
                    logService.Warning( logItemInfo );
                    break;
                case LogLevel.Error:
                    if ( logItemInfo.Exception != null )
                    {
                        logService.Error( logItemInfo );
                    }
                    else
                    {
                        logService.ErrorMessage( logItemInfo );
                    }
                    break;
                case LogLevel.Critical:
                    if ( logItemInfo.Exception != null )
                    {
                        logService.Critical( logItemInfo );
                    }
                    else
                    {
                        logService.CriticalMessage( logItemInfo );
                    }
                    break;
            }
        }
    }
}