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
        private static SaveDataHelper saveDataHelper;
        public static void LoadServiceRate(IServiceDataAdapter service, DateTime date)
        {
            List<Rate> rates = service.GetRates(date);
            Console.WriteLine("******************\n");
            foreach (Rate rate in rates)
            {
                Console.WriteLine(rate.Code + " | " + rate.Value + " | " + rate.Date.ToString());
            }
            Console.WriteLine("******************\n");
            //saveDataHelper.SaveData(rates);
        }

        public static void LoadServicesRates(DateTime date)
        {
            LoadServiceRate(new BankGovUaDataAdapter(), date);
            LoadServiceRate(new OpenExchangeRatesDataAdapter(), date);
            LoadServiceRate(new NationalBankDataAdapter(), date);
        }
    }
}
