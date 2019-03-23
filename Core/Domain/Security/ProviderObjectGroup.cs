using TravelLine.WebAppTemplate.Core.Data.Repository;

namespace TravelLine.WebAppTemplate.Core.Domain.Security
{
    public class ProviderObjectGroup : Entity
    {
        public virtual int ProviderId { get; set; }
        public virtual string ObjectGroup { get; set; }
    }
}