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
    class OpenExchangeRatesDataAdapter : IServiceDataAdapter
    {
        private const string RATES_PROPERTY = "rates";
        private const string SOURCE_CURRENCY_CODE = "RUB";

        private void ValidateResponse(JObject responseObject)
        {
            string error = (string)responseObject["error"];
            string description = (string)responseObject["description"];
            if (error != null)
            {
                throw new Exception("Service returns message : " + description);
            }
        }

        public double GetRate(RequestData requestData)
        {
            string connectionUrl = "https://openexchangerates.org/api/historical/" + requestData.date.ToString("yyyy-MM-dd") + ".json?app_id=d164219ce3aa4403adc977f9ee09b996";

            string responseJSON = HttpClient.GetDataFromUrl(connectionUrl);
            JObject responseObject = JObject.Parse(responseJSON);
            ValidateResponse(responseObject);
            JObject rates = (JObject)responseObject[RATES_PROPERTY];

            double sourceRate = (double)rates[SOURCE_CURRENCY_CODE];
            double requestRate = (double)rates[requestData.currencyCode];

            if (sourceRate == 0)
                throw new Exception("Can't compute currency with code:" + SOURCE_CURRENCY_CODE);
            if (requestRate == 0)
                throw new Exception("Can't compute currency with code:" + requestData.currencyCode);

            return sourceRate / requestRate;
        }
    }
}
