using System.Configuration;

namespace TravelLine.CurrencyRate.Core.Configuration
{
    public class LogSystemConfiguration : ConfigurationSection
    {
        public static readonly LogSystemConfiguration Settings;

        [ConfigurationProperty("serviceUrl")]
        public string ServiceUrl => this["serviceUrl"] as string;

        [ConfigurationProperty("clientName")]
        public string ClientName => this["clientName"] as string;

        [ConfigurationProperty("recordsAtOnce", IsRequired = false, DefaultValue = 100)]
        public int RecordsAtOnce => (int)this["recordsAtOnce"];

        [ConfigurationProperty("maxContentLength", IsRequired = false, DefaultValue = 6144 )]
        public int MaxContentLength => (int)this["maxContentLength"];

        [ConfigurationProperty("exportAttempts", IsRequired = false, DefaultValue = 3)]
        public int ExportAttempts => (int)this["exportAttempts"];

        // Интервал запуска задачи в секундах
        [ConfigurationProperty("sendLogInterval", IsRequired = false, DefaultValue = 180)]
        public int SendLogInterval => (int)this["sendLogInterval"];

        static LogSystemConfiguration()
        {
            Settings = ConfigurationManager.GetSection("logSystem") as LogSystemConfiguration;
        }
    }
}
