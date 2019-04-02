using CurrencyRate.Models.Rate;
using CurrencyRate.ServiceDataProvider.Adapters;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;

namespace CurrencyRate.ServiceDataProvider
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

        private List<Rate> GetServiceRates(IServiceDataAdapter service, DateTime date)
        {
            List<Rate> rates = new List<Rate>();
            try {
                Dictionary<string, double> dictionary = service.GetRates(date);
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
            List<IServiceDataAdapter> adapters = new List<IServiceDataAdapter>()
            {
                new BankGovUaDataAdapter(_configuration),
                new OpenExchangeRatesDataAdapter(_configuration),
                new NationalBankDataAdapter(_configuration)
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
