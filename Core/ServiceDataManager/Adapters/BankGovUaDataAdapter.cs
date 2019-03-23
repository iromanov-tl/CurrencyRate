using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using ServiceManager.ServiceDataManager;
using TravelLine.WebAppTemplate.Core.Util;

namespace TravelLine.WebAppTemplate.Core.ServiceDataManager.Adapters
{
    class BankGovUaDataAdapter : IServiceDataAdapter
    {
        private string connectionUrl;
        private const string CODE_PROPERTY = "cc";
        private const string RATE_PROPERTY = "rate";
        private const string SOURCE_CURRENCY_CODE = "RUB";
        private const string SERVICE_CURRENCY_CODE = "UAH";
        private double sourceCurrencyValue;
        private void SetConnectionUrl(DateTime date)
        {
            connectionUrl = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=" + date.ToString("yyyyMMdd") + "&json";
        }
        public CurrencyData GetData(RequestData requestData)
        {
            SetConnectionUrl(requestData.date);
            CurrencyData currencyData = new CurrencyData();
            string responseJSON = HttpClient.GetDataFromUrl(connectionUrl);
            JArray responseArray = JArray.Parse(responseJSON);
            bool isOneCurrencyFinded = false;
            foreach (JObject item in responseArray)
            {
                if ((string)item[CODE_PROPERTY] == requestData.currencyCode)
                {
                    currencyData.rate = (double)item[RATE_PROPERTY];
                    if (isOneCurrencyFinded)
                    {
                        break;
                    }
                    isOneCurrencyFinded = true;

                };
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
