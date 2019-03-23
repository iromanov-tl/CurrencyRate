using ServiceManager.ServiceDataManager;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TravelLine.WebAppTemplate.Core.ServiceDataManager.Adapters;

namespace TravelLine.WebAppTemplate.Core.ServiceDataManager
{
    class DataProvider
    {
        public static double GetServiceRate(IServiceDataAdapter service, RequestData requestData)
        {
            return service.GetRate(requestData);
        }

        public static List<double> GetServicesRates(RequestData requestData)
        {
            return new List<double> {
                GetServiceRate(new BankGovUaDataAdapter(), requestData),
                GetServiceRate(new OpenExchangeRatesDataAdapter(), requestData),
                GetServiceRate(new NationalBankDataAdapter(), requestData)
            };
        }
    }
}
