using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using ServiceManager.ServiceDataManager;
using TravelLine.WebAppTemplate.Core.Util;

namespace TravelLine.WebAppTemplate.Core.ServiceDataManager.Adapters
{
    class NationalBankDataAdapter : IServiceDataAdapter
    {
        /* service return only xml format */
        private const string RATES_PROPERTY = "rates";
        private const string ITEMS_PROPERTY = "item";
        private const string CODE_PROPERTY = "title";
        private const string RATE_PROPERTY = "description";
        private const string SOURCE_CURRENCY_CODE = "RUB";
        private const string SERVICE_CURRENCY_CODE = "KZT";

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
                throw new Exception("Service returns message :" + errorMessage);
            }
        }

        public double GetRate(RequestData requestData)
        {
            string connectionUrl = "http://www.nationalbank.kz/rss/get_rates.cfm?fdate=" + requestData.date.ToString("dd.MM.yyyy");
            double rate = 0;
            double sourceCurrencyValue = 0;
            string responseXML = HttpClient.GetDataFromUrl(connectionUrl);
            JObject responseObject = ConvertXmlToJSON(responseXML);
            JObject ratesProperty = (JObject)responseObject[RATES_PROPERTY];
            ValidateResponse(ratesProperty);
            JArray ratesPropertyItems = (JArray)ratesProperty[ITEMS_PROPERTY];
            bool isOneCurrencyFinded = false;
            foreach (JObject item in ratesPropertyItems)
            {
                if ((string)item[CODE_PROPERTY] == requestData.currencyCode)
                {
                    rate = (double)item[RATE_PROPERTY];

                    if (isOneCurrencyFinded)
                    {
                        break;
                    }

                    isOneCurrencyFinded = true;
                }

                if ((string)item[CODE_PROPERTY] == SOURCE_CURRENCY_CODE)
                {
                    if (requestData.currencyCode == SERVICE_CURRENCY_CODE)
                    {
                        rate = 1 / (double)item[RATE_PROPERTY];
                        return rate;
                    }

                    sourceCurrencyValue = (double)item[RATE_PROPERTY];

                    if (isOneCurrencyFinded)
                    {
                        break;
                    }
                    isOneCurrencyFinded = true;
                }
            }

            if (rate == 0)
                throw new Exception("Can't compute currency with code:" + requestData.currencyCode);

            if (sourceCurrencyValue == 0)
                throw new Exception("Can't compute currency with code:" + SOURCE_CURRENCY_CODE);

            rate = rate / sourceCurrencyValue;
            return rate;
        }
    }
}
