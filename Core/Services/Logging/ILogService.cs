using TravelLine.CurrencyRate.Core.Domain.Logging;

namespace TravelLine.CurrencyRate.Core.Services.Logging
{
    public interface ILogService
    {
        void Debug(LogItemInfo logItemInfo);
        void Info(LogItemInfo logItemInfo);
        void Warning(LogItemInfo logItemInfo);
        void ErrorMessage(LogItemInfo logItemInfo);
        void Error(LogItemInfo logItemInfo);
        void CriticalMessage(LogItemInfo logItemInfo);
        void Critical(LogItemInfo logItemInfo);
    }
}