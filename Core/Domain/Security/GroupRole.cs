using TravelLine.CurrencyRate.Core.Data.Repository;

namespace TravelLine.CurrencyRate.Core.Domain.Security
{
    public class GroupRole : Entity
    {
        public virtual string GroupId { get; set; }
        public virtual string RoleId { get; set; }
    }
}