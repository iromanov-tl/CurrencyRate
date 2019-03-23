using System;

namespace TravelLine.WebAppTemplate.Core.Domain.Logging
{
    public class LogItemInfo
    {
        public string LocationInfo { get; set; }
        public Exception Exception { get; set; }
        public string Message { get; set; }
        public string Details { get; set; }
    }
}
