using CurrencyRate.Data.EFRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CurrencyRate.RatesManager
{
    public class RatesManager
    {
        public RatesManager(DateTime date, string currencyCode)
        {
            requestData.date = date;
            requestData.currencyCode = currencyCode;
        }
        private readonly EFRepository repository;
        public RequestData requestData;
    }
}
