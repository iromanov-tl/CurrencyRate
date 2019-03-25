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
    public class BankGovUaDataAdapter : IServiceDataAdapter
    {
        private const string CODE_PROPERTY = "cc";
        private const string RATE_PROPERTY = "rate";
        private const string SOURCE_CURRENCY_CODE = "RUB";
        private const string SERVICE_CURRENCY_CODE = "UAH";

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

        public double GetRates(DateTime date)
        {
            string connectionUrl = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=" + requestData.date.ToString("yyyyMMdd") + "&json";
            double rate = 0;
            double sourceCurrencyValue = 0;
            string responseJSON = HttpClient.GetDataFromUrl(connectionUrl);
            JArray responseArray = JArray.Parse(responseJSON);
            ValidateResponse(responseArray);
            bool isOneCurrencyFinded = false;
            foreach (JObject item in responseArray)
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

            return rate / sourceCurrencyValue;
        }
    }
}
