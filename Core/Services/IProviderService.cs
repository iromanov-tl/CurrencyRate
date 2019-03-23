using System.Collections.Generic;
using TravelLine.WebAppTemplate.Core.Domain;

namespace TravelLine.WebAppTemplate.Core.Services
{
    public interface IProviderService
    {
        Provider Get( int providerId );
        void Save(Provider provider);
        List<Provider> GetAllProviders();
        Provider Create();
    }
}