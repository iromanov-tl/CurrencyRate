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
        private readonly ILogger _logger;

        public DataProvider(SaveDataHelper saveDataHelper)
        {
            _saveDataHelper = saveDataHelper;
        }

        private void LoadServiceRate(IServiceDataAdapter service, DateTime date)
        {
            try {
                List<Rate> rates = service.GetRates(date);
                _saveDataHelper.SaveData(rates);
            }
            catch(Exception exception) {
                _logger.LogInformation(exception.Message);
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
