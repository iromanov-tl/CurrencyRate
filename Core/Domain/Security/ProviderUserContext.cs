using TravelLine.WebAppTemplate.Core.Data.Repository;

namespace TravelLine.WebAppTemplate.Core.Domain.Security
{
    public class ProviderUserContext : Entity
    {
        public virtual int ProviderId { get; set; }
        public virtual string Username { get; set; }
    }
}