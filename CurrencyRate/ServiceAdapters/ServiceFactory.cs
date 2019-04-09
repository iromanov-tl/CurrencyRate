using Microsoft.Extensions.Configuration;
using CurrencyRate.ServiceAdapters.BankGovUa;
using CurrencyRate.ServiceAdapters.NationalBank;
using CurrencyRate.ServiceAdapters.OpenExchangeRates;
using System.Collections.Generic;

namespace CurrencyRate.ServiceAdapters
{
    public class ServiceFactory
    {
        private readonly Dictionary<ServiceName, IServiceCreator> _creators;
        public ServiceFactory(IConfiguration configuration)
        {
            _creators = new Dictionary<ServiceName, IServiceCreator>
            {
                { ServiceName.BankGovUa, new BankGovUaServiceCreator(configuration) },
                { ServiceName.OpenExchangeRates, new OpenExchangeRatesServiceCreator(configuration) },
                { ServiceName.NationalBank, new NationalBankServiceCreator(configuration) },
            };
        }

        public IServiceDataAdapter ExecuteCreation(ServiceName serviceName) => _creators[serviceName].CreateService();
    }
}
