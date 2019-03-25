using ServiceManager.ServiceDataManager;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TravelLine.WebAppTemplate.Core.ServiceDataManager.Adapters;

namespace TravelLine.WebAppTemplate.Core.ServiceDataManager
{
    public class DataProvider
    {
        private SaveDataHelper saveDataHelper;
        public static double LoadServiceRate(IServiceDataAdapter service, RequestData requestData)
        {
            return service.GetRate(requestData);
        }

        public static List<double> LoadServicesRates(RequestData requestData)
        {
            return new List<double> {
                LoadServiceRate(new BankGovUaDataAdapter(), requestData),
                LoadServiceRate(new OpenExchangeRatesDataAdapter(), requestData),
                LoadServiceRate(new NationalBankDataAdapter(), requestData)
            };
        }
    }
}
