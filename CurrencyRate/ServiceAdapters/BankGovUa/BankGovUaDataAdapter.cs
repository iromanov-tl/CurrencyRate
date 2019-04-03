using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;

namespace CurrencyRate.ServiceAdapters.Adapters
{
    public class BankGovUaDataAdapter : IServiceDataAdapter
    {
        private readonly IConfiguration _configuration;
        private string _defaultCurrencyCode;
        private string _serviceCurrencyCode;
        private int _serviceId;
        private string _urlFormat;
        private string _dateFormat;

        public BankGovUaDataAdapter(IConfiguration configuration)
        {
            _configuration = configuration;
            const string SectionName = "BankGovUa";
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

        private List<BankGovUaRateObject> GetDataFromJson(string json)
        {
            List<BankGovUaRateObject> rates = new List<BankGovUaRateObject>();
            try
            {
                rates = JsonConvert.DeserializeObject<BankGovUaRateObject[]>(json).ToList();
            }
            catch (Exception exception)
            {
                throw new Exception("Can not parse response from service. Exception text : " + exception.Message);
            }
            if (rates.Count == 0 || rates == null)
                throw new Exception("Service did not return data");
            return rates;
        }

        public Dictionary<string, double> GetRates(DateTime date)
        {
            double sourceCourse = 0;

            string responseJSON = AdapterHelper.GetResponse(_urlFormat, date, _dateFormat);
            List<BankGovUaRateObject> rateObjects = GetDataFromJson(responseJSON);
            
            Dictionary<string, double> rates = new Dictionary<string, double>();
            foreach (BankGovUaRateObject item in rateObjects)
            {
                if (item.cc == _defaultCurrencyCode)
                {
                    sourceCourse = item.rate;
                }
                rates.Add(item.cc, item.rate);
            }

            if (sourceCourse == 0)
                throw new Exception("Can't compute currency with code:" + _defaultCurrencyCode);

            // Add service currency record
            rates.Add(_serviceCurrencyCode, 1);

            return AdapterHelper.ConvertRatesToSource(rates, sourceCourse);
        }
    }
}
