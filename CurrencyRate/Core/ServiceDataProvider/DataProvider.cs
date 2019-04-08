using CurrencyRate.Core.Models.Rate;
using CurrencyRate.Core.Tools;
using CurrencyRate.ServiceAdapters;
using CurrencyRate.ServiceAdapters.Adapters;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using ServiceAdapters;
using ServiceAdapters.BankGovUa;
using ServiceAdapters.NationalBank;
using ServiceAdapters.OpenExchangeRates;
using System;
using System.Collections.Generic;

namespace CurrencyRate.Core.ServiceDataProvider
{
    public class DataProvider
    {
        private readonly ILogger<DataProvider> _logger;
        private readonly IConfiguration _configuration;
        public DataProvider(ILogger<DataProvider> logger, IConfiguration configuration)
        {
            _logger = logger;
            _configuration = configuration;
        }

        private List<Rate> GetServiceRates(ServiceName serviceName, DateTime date)
        {
            List<Rate> rates = new List<Rate>();
            IServiceCreator creator;
            IServiceDataAdapter service;
            switch(serviceName)
            {
                case ServiceName.BankGovUa:
                    creator = new BankGovUaServiceCreator(_configuration);
                    break;
                case ServiceName.NationalBank:
                    creator = new NationalBankServiceCreator(_configuration);
                    break;
                case ServiceName.OpenExchangeRates:
                    creator = new OpenExchangeRatesServiceCreator(_configuration);
                    break;
                default:
                    throw new Exception("Can not find service:" + serviceName.ToString());
            }
            service = creator.CreateService();
            try {
                var connectionUrl = String.Format(service.GetRequestConnectionUrl(), date.ToString(service.GetRequestDateFormat()));
                var content = HttpClient.GetDataFromUrl(connectionUrl);
                Dictionary<string, double> dictionary = service.GetRates(content);
                foreach (var element in dictionary)
                {
                    rates.Add(new Rate()
                    {
                        ServiceId = service.GetId(),
                        Code = element.Key,
                        Date = date.ToString(),
                        Value = element.Value
                    });
                }
            }
            catch(Exception exception) {
                _logger.LogWarning(exception.Message);
            }
            return rates;
        }

        public List<Rate> GetServicesRates(DateTime date)
        {
            List<ServiceName> adapters = new List<ServiceName>()
            {
                ServiceName.BankGovUa,
                ServiceName.NationalBank,
                ServiceName.OpenExchangeRates
            };
            List<Rate> rates = new List<Rate>();
            foreach (ServiceName adapterName in adapters)
            {
                rates.AddRange(GetServiceRates(adapterName, date));
            }
            return rates;
        }
    }
}
