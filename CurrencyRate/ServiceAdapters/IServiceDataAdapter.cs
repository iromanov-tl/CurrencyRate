using System;
using System.Collections.Generic;

namespace CurrencyRate.ServiceDataProvider
{
    public interface IServiceDataAdapter
    {
        Dictionary<string, double> GetRates(DateTime date);
        int GetId();
    }
}
