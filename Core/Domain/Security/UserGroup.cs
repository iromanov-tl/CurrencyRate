using TravelLine.WebAppTemplate.Core.Data.Repository;

namespace TravelLine.WebAppTemplate.Core.Domain.Security
{
    public class UserGroup : Entity
    {
        public virtual string Username { get; set; }
        public virtual string GroupId { get; set; }
    }
}