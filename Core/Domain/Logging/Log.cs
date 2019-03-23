using System;
using TravelLine.WebAppTemplate.Core.Data.Repository;

namespace TravelLine.WebAppTemplate.Core.Domain.Logging
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
