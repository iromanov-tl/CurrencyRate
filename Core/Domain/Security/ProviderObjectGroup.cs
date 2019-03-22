using TravelLine.CurrencyRate.Core.Data.Repository;

namespace TravelLine.CurrencyRate.Core.Domain.Security
{
    public class ProviderObjectGroup : Entity
    {
        public virtual int ProviderId { get; set; }
        public virtual string ObjectGroup { get; set; }
    }
}