using System;
using System.Collections.Generic;
using CurrencyRate.ServiceAdapters;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;

namespace CurrencyRate.ServiceAdapters.Adapters
{
    public class NationalBankDataAdapter : IServiceDataAdapter
    {
        /* service return only xml format */
        private string _defaultCurrencyCode;
        private string _serviceCurrencyCode;
        private int _serviceId;
        private string _urlFormat;
        private string _dateFormat;

        public NationalBankDataAdapter(IConfiguration configuration)
        {
            const string SectionName = "NationalBank";
            _serviceCurrencyCode = configuration.GetValue<string>("ServicesSettings:"+ SectionName + ":ServiceCurrencyCode");
            _serviceId = configuration.GetValue<int>("ServicesSettings:"+ SectionName + ":ServiceId");
            _defaultCurrencyCode = configuration.GetValue<string>("CurrenciesSettings:DefaultCurrencyCode");
            _urlFormat = configuration.GetValue<string>("ServicesSettings:"+ SectionName + ":UrlFormat");
            _dateFormat = configuration.GetValue<string>("ServicesSettings:"+ SectionName + ":DateFormat");
        }

        public int GetId()
        {
            return _serviceId;
        }

        public string GetRequestConnectionUrl()
        {
            return _urlFormat;
        }

        public string GetRequestDateFormat()
        {
            return _dateFormat;
        }

        private List<NationalBankRateObject> GetDataFromJson(string json)
        {
            NationalBankDataObject dataObject;
            List<NationalBankRateObject> rates = new List<NationalBankRateObject>();
            try
            {
                dataObject = JsonConvert.DeserializeObject<NationalBankDataObject>(json);
                rates = dataObject.rates.item;
            }
            catch (Exception exception)
            {
                throw new Exception("Can not parse response from service. Exception text : " + exception.Message);
            }
            if (rates == null || rates.Count == 0)
                throw new Exception("Service did not return data");
            return rates;
        }

        public Dictionary<string, double> GetRates(string responseContent)
        {
            double sourceCourse = 0;
            string responseJson = AdapterHelper.ConvertXmlToJSON(responseContent);
            List<NationalBankRateObject> rateObjects = GetDataFromJson(responseJson);
            Dictionary<string, double> rates = new Dictionary<string, double>();

            foreach (NationalBankRateObject item in rateObjects)
            {
                if (item.title == _defaultCurrencyCode)
                {
                    sourceCourse = item.description;
                }
                rates.Add(item.title, item.description);
            }
            rates.Add(_serviceCurrencyCode, 1);

            if (sourceCourse == 0)
                throw new Exception("Can't compute currency with code:" + _defaultCurrencyCode);
            
            return AdapterHelper.ConvertRatesToSource(rates, sourceCourse);
        }
    }
}
