using System.Collections.Generic;
using TravelLine.Database.DataAccess;

namespace TravelLine.CurrencyRate.Core.Domain.Security
{
    public class Role : EntityWithTypedId<string>
    {
        private ICollection<Group> _groups;
        public virtual ICollection<Group> Groups
        {
            get { return _groups ?? ( _groups = new List<Group>() ); }
            protected set { _groups = value; }
        }

        public string Description { get; set; }
    }
}