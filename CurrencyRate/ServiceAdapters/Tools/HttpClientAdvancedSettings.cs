using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CurrencyRate.ServiceAdapters.Tools
{
    public class HttpClientAdvancedSettings
    {
        public string User { get; set; }
        public string Password { get; set; }
        public int? Timeout { get; set; }
    }
}
