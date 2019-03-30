using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CurrencyRate.RatesManager
{
    public class RequestData
    {
        public RequestData(DateTime date, int currencyId)
        {
            this.date = date;
            this.currencyId = currencyId;
        }
        public DateTime date { get; set; }
        public int currencyId { get; set; }
    }
}
