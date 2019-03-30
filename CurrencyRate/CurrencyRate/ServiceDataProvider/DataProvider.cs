using CurrencyRate.Models;
using CurrencyRate.Models.Rate;
using CurrencyRate.ServiceDataProvider.Adapters;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
                rates = service.GetRates(date);
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
