using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TravelLine.WebAppTemplate.Core.Data.Models.CurrencyRecord;
using TravelLine.WebAppTemplate.Core.ServiceDataManager.Adapters;

namespace TravelLine.WebAppTemplate.Core.ServiceDataManager
{
    public class DataProvider
    {
        private static SaveDataHelper saveDataHelper;
        public static void LoadServiceRate(IServiceDataAdapter service, DateTime date)
        {
            List<CurrencyRecord> records = service.GetRates(date);
            /*Console.WriteLine("******************\n");
            foreach (CurrencyRecord record in records)
            {
                Console.WriteLine(record.Code + " | " + record.Rate + " | " + record.Date.ToString());
            }
            Console.WriteLine("******************\n");*/
            //saveDataHelper.SaveData(records);
        }

        public static void LoadServicesRates(DateTime date)
        {
            LoadServiceRate(new BankGovUaDataAdapter(), date);
            LoadServiceRate(new OpenExchangeRatesDataAdapter(), date);
            LoadServiceRate(new NationalBankDataAdapter(), date);
        }
    }
}
