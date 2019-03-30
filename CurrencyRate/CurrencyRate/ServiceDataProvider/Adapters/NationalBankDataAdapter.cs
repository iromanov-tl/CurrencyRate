using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using CurrencyRate.Models.Rate;
using CurrencyRate.Tools;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace CurrencyRate.ServiceDataProvider.Adapters
{
    public class NationalBankDataAdapter : IServiceDataAdapter
    {
        /* service return only xml format */
        private readonly IConfiguration _configuration;
        private const string RatesProperty = "rates";
        private const string ItemsProperty = "item";
        private const string CodeProperty = "title";
        private const string RateProperty = "description";
        private string _defaultCurrencyCode;
        private string _serviceCurrencyCode;
        private int _serviceId;

        public NationalBankDataAdapter(IConfiguration configuration)
        {
            _configuration = configuration;
            const string SectionName = "NationalBank";
            _serviceCurrencyCode = _configuration.GetValue<string>("ServicesSettings:"+ SectionName + ":ServiceCurrencyCode");
            _serviceId = _configuration.GetValue<int>("ServicesSettings:"+ SectionName + ":ServiceId");
            _defaultCurrencyCode = _configuration.GetValue<string>("DefaultCurrencyCode");
        }

        private JObject ConvertXmlToJSON(string xmlContent)
        {
            XmlDocument doc = new XmlDocument();
            doc.LoadXml(xmlContent);
            string responseJSON = JsonConvert.SerializeXmlNode(doc);
            JObject jsonObject = JObject.Parse(responseJSON);
            return jsonObject;
        }

        private void ValidateResponse(JObject responseObject)
        {
            string errorMessage = (string)responseObject["error"];
            if (errorMessage != null)
            {
                throw new Exception("Service returns error : " + errorMessage);
            }
            string infoMessage = (string)responseObject["info"];
            if (infoMessage != null)
            {
                throw new Exception("Service returns message : " + infoMessage);
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
            string connectionUrl = "http://www.nationalbank.kz/rss/get_rates.cfm?fdate=" + date.ToString("dd.MM.yyyy");
            double sourceCourse = 0;

            string responseXML = HttpClient.GetDataFromUrl(connectionUrl);
            JObject responseObject = ConvertXmlToJSON(responseXML);
            JObject ratesProperty = (JObject)responseObject[RatesProperty];
            ValidateResponse(ratesProperty);
            List<Rate> rates = new List<Rate>();
            JArray ratesPropertyItems = (JArray)ratesProperty[ItemsProperty];

            foreach (JObject item in ratesPropertyItems)
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
            rates.ForEach(item => item.Value /= sourceCourse);
            return rates;
        }
    }
}
