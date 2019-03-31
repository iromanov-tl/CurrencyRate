using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using CurrencyRate.Models.Rate;
using CurrencyRate.Tools;
using Microsoft.Extensions.Configuration;

namespace CurrencyRate.ServiceDataProvider.Adapters
{
    public class OpenExchangeRatesDataAdapter : IServiceDataAdapter
    {
        private readonly IConfiguration _configuration;
        private const string RatesProperty = "rates";
        private string _defaultCurrencyCode;
        private int _serviceId;

        public OpenExchangeRatesDataAdapter(IConfiguration configuration)
        {
            _configuration = configuration;
            const string SECTION_NAME = "OpenExchangeRates";
            _serviceId = _configuration.GetValue<int>("ServicesSettings:"+ SECTION_NAME +":ServiceId");
            _defaultCurrencyCode = _configuration.GetValue<string>("DefaultCurrencyCode");
        }

        public int GetId()
        {
            return _serviceId;
        }

        private void ValidateResponse(JObject responseObject)
        {
            string error = (string)responseObject["error"];
            string description = (string)responseObject["description"];
            if (error != null)
            {
                throw new Exception("Service returns message : " + description);
            }
        }

        public Dictionary<string, double> GetRates(DateTime date)
        {
            string connectionUrl = "https://openexchangerates.org/api/historical/" + date.ToString("yyyy-MM-dd") + ".json?app_id=d164219ce3aa4403adc977f9ee09b996";

            string responseJSON = HttpClient.GetDataFromUrl(connectionUrl);
            JObject responseObject = JObject.Parse(responseJSON);
            ValidateResponse(responseObject);
            JObject ratesObject = (JObject)responseObject[RatesProperty];

            double sourceCourse = (double)ratesObject[_defaultCurrencyCode];
            if (sourceCourse == 0)
                throw new Exception("Can't compute currency with code:" + _defaultCurrencyCode);

            Dictionary<string, double> rates = new Dictionary<string, double>();
            foreach (JProperty property in ratesObject.Properties())
            {
                rates.Add(property.Name, sourceCourse / (double)property.Value);
            }

            return rates;
        }
    }
}
