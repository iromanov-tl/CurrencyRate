using CurrencyRate.ServiceAdapters;
using System.Collections.Generic;

namespace ServiceAdapters
{
    public abstract class ServiceDataAdapter : IServiceDataAdapter
    {
        public abstract Dictionary<string, double> GetRates(string responseContent);
        public abstract string GetRequestConnectionUrl();
        public abstract string GetRequestDateFormat();
        public abstract int GetId();
    }
}
