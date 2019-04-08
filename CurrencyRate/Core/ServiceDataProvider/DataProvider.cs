using CurrencyRate.Core.Models.Rate;
using CurrencyRate.Core.Tools;
using CurrencyRate.ServiceAdapters;
using CurrencyRate.ServiceAdapters.Adapters;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using ServiceAdapters;
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
            switch(serviceName)
            {
                case ServiceName.BankGovUa:
                    break;
                case ServiceName.NationalBank:
                    break;
                case ServiceName.OpenExchangeRates:
                    break;
            }
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
            foreach (IServiceDataAdapter adapter in adapters)
            {
                rates.AddRange(GetServiceRates(adapter, date));
            }
            return rates;
        }
    }
}
