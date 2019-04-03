using System;
using System.Collections.Generic;
using Newtonsoft.Json.Linq;
using Microsoft.Extensions.Configuration;

namespace CurrencyRate.ServiceAdapters.Adapters
{
    public class OpenExchangeRatesDataAdapter : IServiceDataAdapter
    {
        private const string RatesProperty = "rates";
        private string _defaultCurrencyCode;
        private int _serviceId;
        private string _urlFormat;
        private string _dateFormat;

        public OpenExchangeRatesDataAdapter(IConfiguration configuration)
        {
            const string SectionName = "OpenExchangeRates";
            _serviceId = configuration.GetValue<int>("ServicesSettings:"+ SectionName +":ServiceId");
            _defaultCurrencyCode = configuration.GetValue<string>("CurrenciesSettings:DefaultCurrencyCode");
            _urlFormat = configuration.GetValue<string>("ServicesSettings:"+ SectionName + ":UrlFormat");
            _dateFormat = configuration.GetValue<string>("ServicesSettings:"+ SectionName + ":DateFormat");
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
            string responseJSON = AdapterHelper.GetResponse(_urlFormat, date, _dateFormat);
            JObject responseObject = JObject.Parse(responseJSON);
            ValidateResponse(responseObject);
            JObject ratesObject = (JObject)responseObject[RatesProperty];

            double sourceCourse = 1 / (double)ratesObject[_defaultCurrencyCode];
            if (sourceCourse == 0)
                throw new Exception("Can't compute currency with code:" + _defaultCurrencyCode);

            Dictionary<string, double> rates = new Dictionary<string, double>();
            foreach (JProperty property in ratesObject.Properties())
            {
                rates.Add(property.Name, 1 / (double)property.Value);
            }

            return AdapterHelper.ConvertRatesToSource(rates, sourceCourse);
        }
    }
}
