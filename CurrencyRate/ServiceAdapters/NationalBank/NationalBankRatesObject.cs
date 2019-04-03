using System.Collections.Generic;

namespace CurrencyRate.ServiceAdapters.Adapters
{
    public class NationalBankRatesObject
    {
        public string generator;
        public string title;
        public string link;
        public string description;
        public string copyright;
        public string date;
        public List<NationalBankRateObject> item;
    }
}
