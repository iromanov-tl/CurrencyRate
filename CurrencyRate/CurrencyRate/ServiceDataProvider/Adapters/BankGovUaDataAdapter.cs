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
        private const string CodeProperty = "cc";
        private const string RateProperty = "rate";
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

        public List<Rate> GetRates(DateTime date)
        {
            string connectionUrl = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=" + date.ToString("yyyyMMdd") + "&json";
            double sourceCourse = 0;
            string responseJSON = HttpClient.GetDataFromUrl(connectionUrl);
            JArray responseArray = JArray.Parse(responseJSON);
            ValidateResponse(responseArray);
            List<Rate> rates = new List<Rate>();
            foreach (JObject item in responseArray)
            {
                if ((string)item[CodeProperty] == _defaultCurrencyCode)
                {
                    sourceCourse = (double)item[RateProperty];
                }
                Rate rate = CreateRate((string)item[CodeProperty], date, (double)item[RateProperty]);
                rates.Add(rate);
            }

            // Add service currency record
            rates.Add(CreateRate(_serviceCurrencyCode, date, 1));

            if (sourceCourse == 0)
                throw new Exception("Can't compute currency with code:" + _defaultCurrencyCode);

            // convert all currencies to source currency
            rates.ForEach(item => item.Value = item.Value / sourceCourse);
            return rates;
        }
    }
}
