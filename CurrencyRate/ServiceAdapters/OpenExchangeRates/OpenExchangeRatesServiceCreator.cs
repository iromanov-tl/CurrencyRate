using CurrencyRate.ServiceAdapters;
using CurrencyRate.ServiceAdapters.Adapters;
using Microsoft.Extensions.Configuration;

namespace ServiceAdapters.OpenExchangeRates
{
    public class OpenExchangeRatesServiceCreator : IServiceCreator
    {
        private readonly IConfiguration _configuration;
        public OpenExchangeRatesServiceCreator(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public IServiceDataAdapter CreateService()
        {
            return new OpenExchangeRatesDataAdapter(_configuration);
        }
    }
}
