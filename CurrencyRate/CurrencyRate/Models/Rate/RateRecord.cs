using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CurrencyRate.Models.Rate
{
    public class RateRecord
    {
        public int Id { get; set; }
        public string ServiceUrl { get; set; }
        public string Code { get; set; }
        public double Value { get; set; }
        public string Date { get; set; }
    }
}
