using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TravelLine.CurrencyRate.Core.ServiceDataManager.Adapters;

namespace TravelLine.CurrencyRate.Core.ServiceDataManager
{
    class DataProvider
    {
        public static ServiceData GetServiceData(IServiceDataAdapter service, DateTime date)
        {
            return service.GetData(date);
        }

        public static List<ServiceData> GetServicesData(DateTime date)
        {
            List<ServiceData> servicesData = new List<ServiceData>();
            servicesData.Add(GetServiceData(new BankGovUaDataAdapter(), date));
            servicesData.Add(GetServiceData(new NationalbankDataAdapter(), date));
            servicesData.Add(GetServiceData(new OpenexchangeratesDataAdapter(), date));
            return servicesData;
        }
    }
}
