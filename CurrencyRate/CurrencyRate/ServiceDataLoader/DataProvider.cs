using CurrencyRate.Models;
using CurrencyRate.Models.Rate;
using CurrencyRate.ServiceDataLoader.Adapters;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CurrencyRate.ServiceDataLoader
{
    public class DataProvider
    {
        private readonly SaveDataHelper _saveDataHelper;
        private readonly ILogger<SaveDataHelper> _logger;

        public DataProvider(SaveDataHelper saveDataHelper, ILogger<SaveDataHelper> logger)
        {
            _saveDataHelper = saveDataHelper;
            _logger = logger;
        }

        private void LoadServiceRate(IServiceDataAdapter service, DateTime date)
        {
            try {
                List<Rate> rates = service.GetRates(date);
                _saveDataHelper.SaveData(rates);
            }
            catch(Exception exception) {
                _logger.LogWarning(exception.Message);
            }
            
        }

        public void LoadServicesRates(DateTime date)
        {
            LoadServiceRate(new BankGovUaDataAdapter(), date);
            LoadServiceRate(new OpenExchangeRatesDataAdapter(), date);
            LoadServiceRate(new NationalBankDataAdapter(), date);
        }
    }
}
