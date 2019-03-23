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
        public static CurrencyData GetServiceData(IServiceDataAdapter service, RequestData requestData)
        {
            return service.GetData(requestData);
        }

        public static List<CurrencyData> GetServicesData(RequestData requestData)
        {
            List<CurrencyData> servicesData = new List<CurrencyData>();
            servicesData.Add(GetServiceData(new BankGovUaDataAdapter(), requestData));
            servicesData.Add(GetServiceData(new OpenexchangeratesDataAdapter(), requestData));
            servicesData.Add(GetServiceData(new NationalbankDataAdapter(), requestData));
            foreach (CurrencyData item in servicesData)
            {
                Console.WriteLine(item.rate);
            }
            return servicesData;
        }
    }
}
