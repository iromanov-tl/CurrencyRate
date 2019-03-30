using CurrencyRate.Models;
using CurrencyRate.Models.Currency;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CurrencyRate.Data.EFRepository
{
    public class CurrencyRepository : ICurrencyRepository
    {
        private readonly CurrencyRateContext _db;
        public CurrencyRepository(CurrencyRateContext db)
        {
            _db = db;
        }
        public List<Currency> GetCurrencies()
        {
            var currencies =
                from currency in _db.Currency
                select new Currency
                {
                    CurrencyId = currency.CurrencyId,
                    Code = currency.Code
                };
            return currencies.ToList();
        }
    }
}

