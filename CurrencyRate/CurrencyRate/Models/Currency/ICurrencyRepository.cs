using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CurrencyRate.Models.Currency
{
    public interface ICurrencyRepository
    {
        List<Currency> GetCurrencies();
    }
}
