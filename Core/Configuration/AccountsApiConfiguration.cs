using System.Configuration;

namespace TravelLine.WebAppTemplate.Core.Configuration
{
    class AccountsApiConfiguration : ConfigurationSection
    {
        public static readonly AccountsApiConfiguration Settings;
        static AccountsApiConfiguration()
        {
            Settings = ConfigurationManager.GetSection( "accountsApi" ) as AccountsApiConfiguration;
        }

        [ConfigurationProperty( "apiKey", IsRequired = true )]
        public string ApiKey => this[ "apiKey" ] as string;
    }
}
