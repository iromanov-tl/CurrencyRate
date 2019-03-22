using TravelLine.CurrencyRate.Core.Data.Repository;

namespace TravelLine.CurrencyRate.Core.Domain.Security
{
    public class UserRole : Entity
    {
        public virtual string Username { get; set; }
        public virtual string RoleId { get; set; }
    }
}