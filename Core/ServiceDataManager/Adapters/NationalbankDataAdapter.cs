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
    class NationalbankDataAdapter : IServiceDataAdapter
    {
        /* service return only xml format */
        private string connectionUrl;
        private const string RATES_PROPERTY = "rates";
        private const string ITEMS_PROPERTY = "item";
        private const string CODE_PROPERTY = "title";
        private const string RATE_PROPERTY = "description";
        private const string SOURCE_CURRENCY_CODE = "RUB";
        private const string SERVICE_CURRENCY_CODE = "KZT";
        private double sourceCurrencyValue;
        private void SetConnectionUrl(DateTime date)
        {
            connectionUrl = "http://www.nationalbank.kz/rss/get_rates.cfm?fdate=" + date.ToString("dd.MM.yyyy");
        }

        public CurrencyData GetData(RequestData requestData)
        {
            SetConnectionUrl(requestData.date);
            CurrencyData currencyData = new CurrencyData();
            string responseXML = HttpClient.GetDataFromUrl(connectionUrl);
            XmlDocument doc = new XmlDocument();
            doc.LoadXml(responseXML);
            string responseJSON = JsonConvert.SerializeXmlNode(doc);
            JObject responseObject = JObject.Parse(responseJSON);
            JObject ratesProperty = (JObject)responseObject[RATES_PROPERTY];
            JArray ratesPropertyItems = (JArray)ratesProperty[ITEMS_PROPERTY];
            bool isOneCurrencyFinded = false;
            foreach (JObject item in ratesPropertyItems)
            {
                if ((string)item[CODE_PROPERTY] == requestData.currencyCode)
                {
                    currencyData.rate = (double)item[RATE_PROPERTY];
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
                        currencyData.rate = 1 / (double)item[RATE_PROPERTY];
                        return currencyData;
                    }
                    sourceCurrencyValue = (double)item[RATE_PROPERTY];
                    if (isOneCurrencyFinded)
                    {
                        break;
                    }
                    isOneCurrencyFinded = true;
                }
            }
            currencyData.rate = currencyData.rate / sourceCurrencyValue;
            return currencyData;
        }
    }
}
