using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CurrencyRate.Models.Rate;
using CurrencyRate.Tools;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace CurrencyRate.ServiceDataProvider.Adapters
{
    public class BankGovUaDataAdapter : IServiceDataAdapter
    {
        private readonly IConfiguration _configuration;
        private string _defaultCurrencyCode;
        private string _serviceCurrencyCode;
        private int _serviceId;

        public BankGovUaDataAdapter(IConfiguration configuration)
        {
            _configuration = configuration;
            const string SectionName = "BankGovUa";
            _serviceCurrencyCode = _configuration.GetValue<string>("ServicesSettings:"+ SectionName + ":ServiceCurrencyCode");
            _serviceId = _configuration.GetValue<int>("ServicesSettings:"+ SectionName + ":ServiceId");
            _defaultCurrencyCode = _configuration.GetValue<string>("DefaultCurrencyCode");
        }

        public int GetId()
        {
            return _serviceId;
        }

        private void ValidateResponse(JArray responseArray)
        {
            if (responseArray.Count == 0)
            {
                throw new Exception("Service can't find information for this date");
            }
            string message = (string)responseArray.First["message"];
            if (responseArray.Count == 1 && message != null)
            {
                throw new Exception("Service returns message : " + message);
            }  
        }

        private Rate CreateRate(string code, DateTime date, double value)
        {
            Rate rate = new Rate
            {
                Code = code,
                Date = date.ToString(),
                Value = value,
                ServiceId = _serviceId
            };
            return rate;
        }

        private Dictionary<string, double> ConvertRatesToSource(Dictionary<string, double> rates, double sourceCourse)
        {
            Dictionary<string, double> newRates = new Dictionary<string, double>();
            foreach (var rate in rates)
            {
                newRates.Add(rate.Key, rate.Value / sourceCourse);
            }
            return newRates;
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
            return rates;
        }

        public Dictionary<string, double> GetRates(DateTime date)
        {
            string connectionUrl = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=" + date.ToString("yyyyMMdd") + "&json";
            double sourceCourse = 0;

            string responseJSON = HttpClient.GetDataFromUrl(connectionUrl);
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

            return ConvertRatesToSource(rates, sourceCourse);
        }
    }
}
