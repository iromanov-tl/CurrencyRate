using CurrencyRate.ServiceAdapters;
using CurrencyRate.ServiceAdapters.Adapters;
using Microsoft.Extensions.Configuration;

namespace ServiceAdapters.OpenExchangeRates
{
    public class NationalBankServiceCreator : IServiceCreator
    {
        private readonly IConfiguration _configuration;
        public NationalBankServiceCreator(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public IServiceDataAdapter CreateService()
        {
            return new OpenExchangeRatesDataAdapter(_configuration);
        }
    }
}
