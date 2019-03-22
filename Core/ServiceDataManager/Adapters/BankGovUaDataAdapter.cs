using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TravelLine.CurrencyRate.Core.ServiceDataManager.Adapters
{
    class BankGovUaDataAdapter : IServiceDataAdapter
    {
        public string connectionUrl;
        private void SetConnectionUrl(DateTime date)
        {
            connectionUrl = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20190320" + date.ToString("yyyyMMdd") + "&json";
        }
        DateTime date { get; set; }
        public ServiceData GetData()
        {
            ServiceData serviceData = new ServiceData();
            return serviceData;
        }
    }
}
