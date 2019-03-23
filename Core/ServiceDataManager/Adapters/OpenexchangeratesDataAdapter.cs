using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using TravelLine.CurrencyRate.Core.Util;

namespace TravelLine.CurrencyRate.Core.ServiceDataManager.Adapters
{
    class OpenexchangeratesDataAdapter : IServiceDataAdapter
    {
        private static string connectionUrl;
        private static void SetConnectionUrl(DateTime date)
        {
            connectionUrl = "https://openexchangerates.org/api/historical/" + date.ToString("yyyy-MM-dd") + ".json?app_id=d164219ce3aa4403adc977f9ee09b996";
        }
        public ServiceData GetData(DateTime date)
        {
            SetConnectionUrl(date);
            ServiceData serviceData = new ServiceData();
            string responseJSON = HttpClient.GetDataFromUrl(connectionUrl);
            Console.WriteLine(responseJSON);
            return serviceData;
        }
    }
}
