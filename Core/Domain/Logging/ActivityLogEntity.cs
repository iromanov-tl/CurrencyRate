using TravelLine.WebAppTemplate.Core.Data.Repository;

namespace TravelLine.WebAppTemplate.Core.Domain.Logging
{
    public class ActivityLogEntity : Entity
    {
        public virtual int ActivityLogId { get; set; }
        public virtual string Key { get; set; }
        public virtual string Name { get; set; }
        public virtual string Description { get; set; }
        public virtual string Data { get; set; }
    }
}