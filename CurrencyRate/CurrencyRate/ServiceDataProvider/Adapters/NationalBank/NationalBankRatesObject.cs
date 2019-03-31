using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CurrencyRate.ServiceDataProvider.Adapters
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
