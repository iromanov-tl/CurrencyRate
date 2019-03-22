using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TravelLine.CurrencyRate.Core.ServiceDataManager.Adapters
{
    class NationalbankDataAdapter : IServiceDataAdapter
    {
        /* service return only xml format */
        public string connectionUrl;
        private void SetConnectionUrl(DateTime date)
        {
            connectionUrl = "http://www.nationalbank.kz/rss/get_rates.cfm?fdate=" + date.ToString("dd.MM.yyyy");
        }
     
        public ServiceData GetData()
        {
            ServiceData serviceData = new ServiceData();
            return serviceData;
        }
    }
}
