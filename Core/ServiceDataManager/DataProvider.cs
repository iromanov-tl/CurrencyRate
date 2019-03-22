using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TravelLine.CurrencyRate.Core.ServiceDataManager
{
    class DataProvider
    {
        private List<ServiceData> servicesData;
        public List<ServiceData> GetServicesData()
        {
            return servicesData;
        }
    }
}
