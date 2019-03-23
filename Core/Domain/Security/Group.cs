using System.Collections.Generic;
using TravelLine.Database.DataAccess;

namespace TravelLine.WebAppTemplate.Core.Domain.Security
{
    public class Group : EntityWithTypedId<string>
    {
        private ICollection<Role> _roles;
        public virtual ICollection<Role> Roles
        {
            get { return _roles ?? ( _roles = new List<Role>() ); }
            protected set { _roles = value; }
        }

        public bool? IsPublic { get; set; }
        public string Description { get; set; }
    }
}