using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CurrencyRate.Models.Rate
{
    public class Rate
    {
        public int Id { get; set; }
        public int ServiceId { get; set; }
        public int CurrencyId { get; set; }
        public double Value { get; set; }
        public string Date { get; set; }
    }
}
