using System;
using System.Collections.Generic;

namespace CurrencyRate.ServiceAdapters
{
    public interface IServiceDataAdapter
    {
        Dictionary<string, double> GetRates(string responseContent);
        string GetRequestConnectionUrl();
        string GetRequestDateFormat();
        int GetId();
    }
}
