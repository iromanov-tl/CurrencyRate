using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using ServiceManager.ServiceDataManager;
using TravelLine.WebAppTemplate.Core.Util;

namespace TravelLine.WebAppTemplate.Core.ServiceDataManager.Adapters
{
    class OpenexchangeratesDataAdapter : IServiceDataAdapter
    {
        private static string connectionUrl;
        private const string RATES_PROPERTY = "rates";
        private const string SOURCE_CURRENCY_CODE = "RUB";
        private static void SetConnectionUrl(DateTime date)
        {
            connectionUrl = "https://openexchangerates.org/api/historical/" + date.ToString("yyyy-MM-dd") + ".json?app_id=d164219ce3aa4403adc977f9ee09b996";
        }
        public CurrencyData GetData(RequestData requestData)
        {
            SetConnectionUrl(requestData.date);
            CurrencyData currencyData = new CurrencyData();
            string responseJSON = HttpClient.GetDataFromUrl(connectionUrl);
            JObject responseObject = JObject.Parse(responseJSON);
            JObject rates = (JObject)responseObject[RATES_PROPERTY];
            currencyData.rate = (double)rates[SOURCE_CURRENCY_CODE] / (double)rates[requestData.currencyCode];
            return currencyData;
        }
    }
}
