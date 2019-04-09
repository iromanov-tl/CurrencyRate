using System.Collections.Generic;
using CurrencyRate.ServiceAdapters.Tools;
using System;

namespace CurrencyRate.ServiceAdapters
{
    public abstract class ServiceDataAdapter : IServiceDataAdapter
    {
        
        public abstract string GetRequestConnectionUrl();
        public abstract string GetRequestDateFormat();
        public abstract List<ServiceRate> GetRates(string responseContent);
        public abstract int GetId();
        public string GetContent(DateTime date)
        {
            var connectionUrl = String.Format(GetRequestConnectionUrl(), date.ToString(GetRequestDateFormat()));
            return HttpClient.GetDataFromUrl(connectionUrl);
        }
    }
}
