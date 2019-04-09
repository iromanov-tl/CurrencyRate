using System;
using System.Collections.Generic;
using Newtonsoft.Json.Linq;
using Microsoft.Extensions.Configuration;
using System.Linq;

namespace CurrencyRate.ServiceAdapters.Adapters
{
    public class OpenExchangeRatesDataAdapter : ServiceDataAdapter
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

        public override int GetId()
        {
            return _serviceId;
        }

        public override string GetRequestConnectionUrl()
        {
            return _urlFormat;
        }

        public override string GetRequestDateFormat()
        {
            return _dateFormat;
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

        public override List<ServiceRate> GetRates(string responseContent)
        {
            JObject responseObject = JObject.Parse(responseContent);
            ValidateResponse(responseObject);
            JObject ratesObject = (JObject)responseObject[RatesProperty];
            double sourceCourse = 1 / (double)ratesObject[_defaultCurrencyCode];
            if (sourceCourse == 0)
                throw new Exception("Can't compute currency with code:" + _defaultCurrencyCode);

            List<ServiceRate> rates = new List<ServiceRate>();
            rates = ratesObject.Properties().Select(property => new ServiceRate()
            {
                Code = property.Name,
                Value = 1 / (double)property.Value
            }).ToList();

            return AdapterHelper.ConvertRatesToSource(rates, sourceCourse);
        }
    }
}
