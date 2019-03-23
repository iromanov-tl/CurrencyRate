using TravelLine.WebAppTemplate.Core.Data.Repository;

namespace TravelLine.WebAppTemplate.Core.Domain.Security
{
    public class GroupRole : Entity
    {
        public virtual string GroupId { get; set; }
        public virtual string RoleId { get; set; }
    }
}