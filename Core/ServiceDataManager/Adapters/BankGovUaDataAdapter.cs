using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using ServiceManager.ServiceDataManager;
using TravelLine.WebAppTemplate.Core.Util;
using TravelLine.WebAppTemplate.Core.Data.Models.CurrencyRecord;

namespace TravelLine.WebAppTemplate.Core.ServiceDataManager.Adapters
{
    public class BankGovUaDataAdapter : IServiceDataAdapter
    {
        private const string CODE_PROPERTY = "cc";
        private const string RATE_PROPERTY = "rate";
        private const string SOURCE_CURRENCY_CODE = "RUB";
        private const string SERVICE_CURRENCY_CODE = "UAH";
        private const int SERVICE_ID = 0;

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

        private CurrencyRecord CreateCurrencyRecord(string code, DateTime date, double rate)
        {
            CurrencyRecord record = new CurrencyRecord();
            record.Code = code;
            record.Date = date.ToString();
            record.Rate = rate;
            record.ServiceId = SERVICE_ID;
            return record;
        }

        public List<CurrencyRecord> GetRates(DateTime date)
        {
            string connectionUrl = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=" + date.ToString("yyyyMMdd") + "&json";
            double sourceCourse = 0;
            string responseJSON = HttpClient.GetDataFromUrl(connectionUrl);
            JArray responseArray = JArray.Parse(responseJSON);
            ValidateResponse(responseArray);
            List<CurrencyRecord> records = new List<CurrencyRecord>();
            foreach (JObject item in responseArray)
            {
                if ((string)item[CODE_PROPERTY] == SOURCE_CURRENCY_CODE)
                {
                    sourceCourse = (double)item[RATE_PROPERTY];
                }
                CurrencyRecord record = CreateCurrencyRecord((string)item[CODE_PROPERTY], date, (double)item[RATE_PROPERTY]);
                records.Add(record);
            }

            // Add service currency record
            records.Add(CreateCurrencyRecord(SERVICE_CURRENCY_CODE, date, 1));

            if (sourceCourse == 0)
                throw new Exception("Can't compute currency with code:" + SOURCE_CURRENCY_CODE);

            // convert all currencies to source currency
            records.ForEach(item => item.Rate = item.Rate / sourceCourse);
            return records;
        }
    }
}
