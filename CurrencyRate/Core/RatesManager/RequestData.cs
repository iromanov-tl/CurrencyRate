using System;

namespace CurrencyRate.Core.RatesManager
{
    public class RequestData
    {
        public RequestData(DateTime date, string currencyCode)
        {
            this.date = date;
            this.currencyCode = currencyCode;
        }
        public DateTime date { get; set; }
        public string currencyCode { get; set; }
    }
}
