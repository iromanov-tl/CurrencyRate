using CurrencyRate.Models;
using CurrencyRate.Models.Rate;
using CurrencyRate.ServiceDataLoader.Adapters;
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

        public DataProvider(SaveDataHelper saveDataHelper)
        {
            _saveDataHelper = saveDataHelper;
        }

        private void LoadServiceRate(IServiceDataAdapter service, DateTime date)
        {
            List<Rate> rates = service.GetRates(date);
           /* foreach (var rate in rates)
            {
                Console.WriteLine("Rate:" + rate.Code + " | " + rate.Date);
            }*/
            _saveDataHelper.SaveData(rates);
        }

        public void LoadServicesRates(DateTime date)
        {
            LoadServiceRate(new BankGovUaDataAdapter(), date);
            LoadServiceRate(new OpenExchangeRatesDataAdapter(), date);
            LoadServiceRate(new NationalBankDataAdapter(), date);
        }
    }
}
