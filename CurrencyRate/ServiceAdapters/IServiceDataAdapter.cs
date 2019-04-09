using ServiceAdapters;
using System;
using System.Collections.Generic;

namespace CurrencyRate.ServiceAdapters
{
    public interface IServiceDataAdapter
    {
        List<ServiceRate> GetRates(string responseContent);
        string GetContent(DateTime date);
        int GetId();
    }
}
