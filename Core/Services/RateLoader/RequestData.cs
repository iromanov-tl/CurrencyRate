using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TravelLine.WebAppTemplate.Core.Services.RateLoader
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
