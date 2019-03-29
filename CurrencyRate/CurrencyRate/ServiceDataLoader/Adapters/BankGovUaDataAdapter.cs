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

namespace CurrencyRate.ServiceDataLoader.Adapters
{
    public class BankGovUaDataAdapter : IServiceDataAdapter
    {
        private readonly IConfiguration _configuration;
        private const string CODE_PROPERTY = "cc";
        private const string RATE_PROPERTY = "rate";
        private string _defaultCurrencyCode;
        private string _serviceCurrencyCode;
        private int _serviceId;

        public BankGovUaDataAdapter(IConfiguration configuration)
        {
            _configuration = configuration;
            const string SECTION_NAME = "BankGovUa";
            _serviceCurrencyCode = _configuration.GetValue<string>("ServicesSettings:"+ SECTION_NAME +":ServiceCurrencyCode");
            _serviceId = _configuration.GetValue<int>("ServicesSettings:"+ SECTION_NAME +":ServiceId");
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
            Rate rate = new Rate();
            rate.Code = code;
            rate.Date = date.ToString();
            rate.Value = value;
            rate.ServiceId = _serviceId;
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
                if ((string)item[CODE_PROPERTY] == _defaultCurrencyCode)
                {
                    sourceCourse = (double)item[RATE_PROPERTY];
                }
                Rate rate = CreateRate((string)item[CODE_PROPERTY], date, (double)item[RATE_PROPERTY]);
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
