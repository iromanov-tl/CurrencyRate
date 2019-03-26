using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using CurrencyRate.Models.Rate;
using CurrencyRate.Tools;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace CurrencyRate.ServiceDataLoader.Adapters
{
    public class NationalBankDataAdapter : IServiceDataAdapter
    {
        /* service return only xml format */
        private const string RATES_PROPERTY = "rates";
        private const string ITEMS_PROPERTY = "item";
        private const string CODE_PROPERTY = "title";
        private const string RATE_PROPERTY = "description";
        private const string SOURCE_CURRENCY_CODE = "RUB";
        private const string SERVICE_CURRENCY_CODE = "KZT";
        private const int SERVICE_ID = 1;

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
            Rate rate = new Rate();
            rate.Code = code;
            rate.Date = date.ToString();
            rate.Value = value;
            rate.ServiceId = SERVICE_ID;
            return rate;
        }

        public List<Rate> GetRates(DateTime date)
        {
            string connectionUrl = "http://www.nationalbank.kz/rss/get_rates.cfm?fdate=" + date.ToString("dd.MM.yyyy");
            double sourceCourse = 0;

            string responseXML = HttpClient.GetDataFromUrl(connectionUrl);
            JObject responseObject = ConvertXmlToJSON(responseXML);
            JObject ratesProperty = (JObject)responseObject[RATES_PROPERTY];
            ValidateResponse(ratesProperty);
            List<Rate> rates = new List<Rate>();
            JArray ratesPropertyItems = (JArray)ratesProperty[ITEMS_PROPERTY];
            foreach (JObject item in ratesPropertyItems)
            {
                
                if ((string)item[CODE_PROPERTY] == SOURCE_CURRENCY_CODE)
                {
                    sourceCourse = (double)item[RATE_PROPERTY];
                }
                Rate rate = CreateRate((string)item[CODE_PROPERTY], date, (double)item[RATE_PROPERTY]);
                rates.Add(rate);
            }

            // Add service currency record
            rates.Add(CreateRate(SERVICE_CURRENCY_CODE, date, 1));

            if (sourceCourse == 0)
                throw new Exception("Can't compute currency with code:" + SOURCE_CURRENCY_CODE);

            // convert all currencies to source currency
            rates.ForEach(item => item.Value = item.Value / sourceCourse);
            return rates;
        }
    }
}
