using TravelLine.WebAppTemplate.Core.Data.Repository;

namespace TravelLine.WebAppTemplate.Core.Domain.Security
{
    public class UserRole : Entity
    {
        public virtual string Username { get; set; }
        public virtual string RoleId { get; set; }
    }
}