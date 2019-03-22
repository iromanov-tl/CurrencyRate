using System.Configuration;

namespace TravelLine.CurrencyRate.Core.Configuration
{
    public class CurrencyRateConfiguration : ConfigurationSection
    {
        public static readonly CurrencyRateConfiguration Settings;
        static CurrencyRateConfiguration()
        {
            Settings = ConfigurationManager.GetSection( "currencyRate" ) as CurrencyRateConfiguration;
        }

        [ConfigurationProperty( "environment", IsRequired = true )]
        public string Environment => this[ "environment" ] as string;

        [ConfigurationProperty( "applicationDomain", IsRequired = false )]
        public string ApplicationDomain => this[ "applicationDomain" ] as string;


        [ConfigurationProperty( "securePath", IsRequired = true )]
        public string SecurePath => this[ "securePath" ] as string;
    }
}
