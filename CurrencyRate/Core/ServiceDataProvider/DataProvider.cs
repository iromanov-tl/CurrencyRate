using CurrencyRate.Core.Models.Rate;
using CurrencyRate.ServiceAdapters;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;

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
                rates = serviceRates.Select(serviceRate => new Rate()
                {
                    ServiceId = service.GetId(),
                    Code = serviceRate.Code,
                    Date = date.ToString(),
                    Value = serviceRate.Value
                }).ToList();
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
            adapters.ForEach(adapterName => rates.AddRange(GetServiceRates(adapterName, date)));
            return rates;
        }
    }
}
