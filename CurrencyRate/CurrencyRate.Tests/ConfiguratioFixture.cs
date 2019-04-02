using Microsoft.Extensions.Configuration;

namespace CurrencyRate.Tests
{
    public class IConfigurationFixture
    {
        public IConfiguration Configuration { get; }
        public IConfigurationFixture()
        {
            IConfigurationBuilder configurationBuilder = new ConfigurationBuilder();
            // Duplicate here any configuration sources you use.
            configurationBuilder.AddJsonFile("appsettings.json");
            Configuration = configurationBuilder.Build();
        }
    }
}
