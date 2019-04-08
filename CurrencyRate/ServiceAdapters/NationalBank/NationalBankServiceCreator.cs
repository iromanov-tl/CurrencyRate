using CurrencyRate.ServiceAdapters;
using CurrencyRate.ServiceAdapters.Adapters;
using Microsoft.Extensions.Configuration;

namespace ServiceAdapters.NationalBank
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
            return new NationalBankDataAdapter(_configuration);
        }
    }
}
