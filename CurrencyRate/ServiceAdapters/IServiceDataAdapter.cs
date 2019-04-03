using System;
using System.Collections.Generic;

namespace CurrencyRate.ServiceAdapters
{
    public interface IServiceDataAdapter
    {
        Dictionary<string, double> GetRates(DateTime date);
        int GetId();
    }
}
