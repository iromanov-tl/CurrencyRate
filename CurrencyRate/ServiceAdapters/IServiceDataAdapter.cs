using System;
using System.Collections.Generic;

namespace CurrencyRate.ServiceAdapters
{
    public interface IServiceDataAdapter
    {
        Dictionary<string, double> GetRates(string responseContent);
        string GetContent(DateTime date);
        int GetId();
    }
}
