using System;
using TravelLine.WebAppTemplate.Core.Data.Repository;

namespace TravelLine.WebAppTemplate.Core.Domain
{
    public class Provider : Entity
    {
        public virtual string Name { get; set; }
        public virtual bool IsEnabled { get; set; }
        public virtual OperationMode Mode { get; set; }
        public virtual string Language { get; set; }

        public virtual DateTime CreationDate { get; set; }
        public virtual DateTime? SyncTime { get; set; }
        public virtual string TimezoneId { get; set; }

        private TimeZoneInfo _timeZone;

        public TimeZoneInfo TimeZone
        {
            get
            {
                return _timeZone ?? ( _timeZone = TimezoneId != null ? TimeZoneInfo.FindSystemTimeZoneById( TimezoneId ) : null );
            }
        }
    }
}
