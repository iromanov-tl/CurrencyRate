using System.Collections.Generic;
using System.Linq;
using TravelLine.WebAppTemplate.Core.Domain;

namespace TravelLine.WebAppTemplate.Core.Services
{
    public class ProviderService : CommonService<Provider>, IProviderService
    {
        public ProviderService( Data.Repository.IRepository<Provider> repo ) : base( repo )
        {
        }

        public List<Provider> GetAllProviders()
        {
            return Repository.Table.ToList();
        }
    }
}