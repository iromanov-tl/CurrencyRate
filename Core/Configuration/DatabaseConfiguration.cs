using System.Configuration;

namespace TravelLine.CurrencyRate.Core.Configuration
{
    class DatabaseConfiguration : ConfigurationSection
    {
        public static readonly DatabaseConfiguration Settings;
        static DatabaseConfiguration()
        {
            Settings = ConfigurationManager.GetSection( "database" ) as DatabaseConfiguration;
        }

        [ConfigurationProperty( "connectionString", IsRequired = true )]
        public string ConnectionString => this[ "connectionString" ] as string;

        [ConfigurationProperty( "readonlyConnectionString", IsRequired = false )]
        public string ReadonlyConnectionString => this[ "readonlyConnectionString" ] as string;
    }
}
