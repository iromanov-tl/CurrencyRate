using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using TravelLine.CurrencyRate.Core.Util;

namespace TravelLine.CurrencyRate.Core.ServiceDataManager.Adapters
{
    class NationalbankDataAdapter : IServiceDataAdapter
    {
        /* service return only xml format */
        private string connectionUrl;
        private void SetConnectionUrl(DateTime date)
        {
            connectionUrl = "http://www.nationalbank.kz/rss/get_rates.cfm?fdate=" + date.ToString("dd.MM.yyyy");
        }

        public ServiceData GetData(DateTime date)
        {
            SetConnectionUrl(date);
            ServiceData serviceData = new ServiceData();
            string responseXML = HttpClient.GetDataFromUrl(connectionUrl);
            Console.WriteLine(responseXML);
            return serviceData;
        }
    }
}
