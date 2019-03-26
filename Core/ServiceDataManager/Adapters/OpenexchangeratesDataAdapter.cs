using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using TravelLine.WebAppTemplate.Core.Util;
using TravelLine.WebAppTemplate.Core.Data.Models.Rate;

namespace TravelLine.WebAppTemplate.Core.ServiceDataManager.Adapters
{
    public class OpenExchangeRatesDataAdapter : IServiceDataAdapter
    {
        private const string RATES_PROPERTY = "rates";
        private const string SOURCE_CURRENCY_CODE = "RUB";
        private const int SERVICE_ID = 2;

        private void ValidateResponse(JObject responseObject)
        {
            string error = (string)responseObject["error"];
            string description = (string)responseObject["description"];
            if (error != null)
            {
                throw new Exception("Service returns message : " + description);
            }
        }

        public List<Rate> GetRates(DateTime date)
        {
            string connectionUrl = "https://openexchangerates.org/api/historical/" + date.ToString("yyyy-MM-dd") + ".json?app_id=d164219ce3aa4403adc977f9ee09b996";

            string responseJSON = HttpClient.GetDataFromUrl(connectionUrl);
            JObject responseObject = JObject.Parse(responseJSON);
            ValidateResponse(responseObject);
            JObject ratesObject = (JObject)responseObject[RATES_PROPERTY];

            double sourceCourse = (double)ratesObject[SOURCE_CURRENCY_CODE];
            if (sourceCourse == 0)
                throw new Exception("Can't compute currency with code:" + SOURCE_CURRENCY_CODE);

            List<Rate> rates = new List<Rate>();
            foreach (JProperty property in ratesObject.Properties())
            {
                Rate rate = new Rate();
                rate.Code = property.Name;
                rate.Date = date.ToString();
                rate.ServiceId = SERVICE_ID;
                rate.Value = sourceCourse / (double)property.Value;
                rates.Add(rate);
            }

            return rates;
        }
    }
}
