using TravelLine.CurrencyRate.Core.Data.Repository;

namespace TravelLine.CurrencyRate.Core.Domain.Security
{
    public class ProviderUserContext : Entity
    {
        public virtual int ProviderId { get; set; }
        public virtual string Username { get; set; }
    }
}