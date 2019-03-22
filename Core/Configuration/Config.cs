using System.Configuration;
using TravelLine.CurrencyRate.Core.Configuration.MailDispatchPoint;

namespace TravelLine.CurrencyRate.Core.Configuration
{
    public class Config
    {
        private static CurrencyRateConfiguration Settings => CurrencyRateConfiguration.Settings;
        public static string DbConnectionString => DatabaseConfiguration.Settings.ConnectionString;
        public static string DbReadonlyConnectionString => DatabaseConfiguration.Settings.ReadonlyConnectionString;
        public static string ErrorMailDispatchPoint => ConfigurationManager.AppSettings[ "ErrorMailDispatchPoint" ];
        public static MailDispatchPointCollection MailDispatchPoints => MailDispatchPointsSection.MailDispatchPoints;
        public static string Environment => Settings.Environment;
        public static string SecurePath => Settings.SecurePath;
        public static string LogsDir => ConfigurationManager.AppSettings[ "LogsDir" ];
        public static string Version => ConfigurationManager.AppSettings[ "Version" ];
        public static string ErrorSenderEmailAddress => ConfigurationManager.AppSettings[ "ErrorSenderEmailAddress" ];
        public static string ErrorReceiverEmailAddress => ConfigurationManager.AppSettings[ "ErrorReceiverEmailAddress" ];
        public static string NotificationSenderEmailAddress => ConfigurationManager.AppSettings[ "NotificationSenderEmailAddress" ];
        public static string AccountsApiKey => AccountsApiConfiguration.Settings.ApiKey;
        public static string CurrencyRateWebBusQueueName => "currencyRate_web";
        public static string CurrencyRateWinServiceBusQueueName => "currencyRate_service";
    }
}