using CurrencyRate.Core.Models.Rate;
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
            IServiceDataAdapter service = new ServiceFactory(_configuration).ExecuteCreation(serviceName);
            try {
                string content = service.GetContent(date);
                List<ServiceRate> serviceRates = service.GetRates(content);
                foreach (var item in serviceRates)
                {
                    rates.Add(new Rate()
                    {
                        ServiceId = service.GetId(),
                        Code = item.Code,
                        Date = date.ToString(),
                        Value = item.Value
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
