using System;
using TravelLine.CurrencyRate.Core.Data.Repository;

namespace TravelLine.CurrencyRate.Core.Domain.Logging
{
    public class Log : Entity
    {
        public virtual LogLevel LogLevel { get; set; }
        public virtual DateTime Created { get; set; }
        public virtual string LocationInfo { get; set; }
        public virtual string Message { get; set; }
        public virtual string Details { get; set; }
    }
}
