using System;
using System.Collections.Generic;
using TravelLine.WebAppTemplate.Core.Data.Repository;

namespace TravelLine.WebAppTemplate.Core.Domain.Logging
{
    public class ActivityLog : Entity
    {
        public virtual DateTime Time { get; set; }
        public virtual string Url { get; set; }
        public virtual string Parameters { get; set; }
        public virtual string Detail { get; set; }

        private ICollection<ActivityLogEntity> _entities;
        public virtual ICollection<ActivityLogEntity> Entities
        {
            get { return _entities ?? ( _entities = new List<ActivityLogEntity>() ); }
            protected set { _entities = value; }
        }
    }
}