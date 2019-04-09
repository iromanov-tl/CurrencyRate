using CurrencyRate.ServiceAdapters;
using Microsoft.Extensions.Configuration;
using ServiceAdapters.BankGovUa;
using ServiceAdapters.NationalBank;
using ServiceAdapters.OpenExchangeRates;
using System;
using System.Collections.Generic;
using System.Text;

namespace ServiceAdapters
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
