using CurrencyRate.Models.Rate;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CurrencyRate.ServiceDataProvider
{
    public interface IServiceDataAdapter
    {
        Dictionary<string, double> GetRates(DateTime date);
        int GetId();
    }
}
