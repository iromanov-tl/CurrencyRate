using System.Configuration;

namespace TravelLine.WebAppTemplate.Core.Configuration
{
    public class WebAppTemplateConfiguration : ConfigurationSection
    {
        public static readonly WebAppTemplateConfiguration Settings;
        static WebAppTemplateConfiguration()
        {
            Settings = ConfigurationManager.GetSection( "webAppTemplate" ) as WebAppTemplateConfiguration;
        }

        [ConfigurationProperty( "environment", IsRequired = true )]
        public string Environment => this[ "environment" ] as string;

        [ConfigurationProperty( "applicationDomain", IsRequired = false )]
        public string ApplicationDomain => this[ "applicationDomain" ] as string;


        [ConfigurationProperty( "securePath", IsRequired = true )]
        public string SecurePath => this[ "securePath" ] as string;
    }
}
