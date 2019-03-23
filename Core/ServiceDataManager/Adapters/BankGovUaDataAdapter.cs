using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using TravelLine.CurrencyRate.Core.Util;


namespace TravelLine.CurrencyRate.Core.ServiceDataManager.Adapters
{
    class BankGovUaDataAdapter : IServiceDataAdapter
    {
        private string connectionUrl;
        private void SetConnectionUrl(DateTime date)
        {
            connectionUrl = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20190320" + date.ToString("yyyyMMdd") + "&json";
        }
        DateTime date { get; set; }
        public ServiceData GetData(DateTime date)
        {
            SetConnectionUrl(date);
            ServiceData serviceData = new ServiceData();
            string responseJSON = HttpClient.GetDataFromUrl(connectionUrl);
            Console.WriteLine(responseJSON);
            return serviceData;
        }
    }
}
