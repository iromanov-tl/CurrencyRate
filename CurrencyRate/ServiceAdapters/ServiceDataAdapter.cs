using CurrencyRate.ServiceAdapters;
using System.Collections.Generic;
using CurrencyRate.ServiceAdapters.Tools;
using System;

namespace ServiceAdapters
{
    public abstract class ServiceDataAdapter : IServiceDataAdapter
    {
        public abstract string GetRequestConnectionUrl();
        public abstract string GetRequestDateFormat();
        public abstract Dictionary<string, double> GetRates(string responseContent);
        public abstract int GetId();
        public string GetContent(DateTime date)
        {
            Console.WriteLine(String.Format(GetRequestConnectionUrl(), date.ToString(GetRequestDateFormat())));
            var connectionUrl = String.Format(GetRequestConnectionUrl(), date.ToString(GetRequestDateFormat()));
            return HttpClient.GetDataFromUrl(connectionUrl);
        }
    }
}
