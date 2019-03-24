using System;
using System.Collections.Generic;
using System.Text;

namespace ServiceManager.ServiceDataManager
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
