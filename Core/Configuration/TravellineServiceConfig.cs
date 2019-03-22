using System.Configuration;

namespace TravelLine.CurrencyRate.Core.Configuration
{
    public class TravellineServiceConfig : ConfigurationSection
    {
        public static readonly TravellineServiceConfig Settings;
        static TravellineServiceConfig()
        {
            Settings = ConfigurationManager.GetSection( "travellineService" ) as TravellineServiceConfig;
        }

        [ConfigurationProperty( "apiKey", IsRequired = false, DefaultValue = "" )]
        public string ApiKey => this[ "apiKey" ] as string;

        [ConfigurationProperty( "servicesBaseUrl", IsRequired = true )]
        public string ServicesBaseUrl => this[ "servicesBaseUrl" ] as string;
    }
}