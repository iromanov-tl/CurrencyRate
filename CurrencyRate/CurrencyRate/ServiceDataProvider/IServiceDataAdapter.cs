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
        List<Rate> GetRates(DateTime date);
    }
}
