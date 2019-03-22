using System.Collections.Generic;

namespace TravelLine.CurrencyRate.Core.Services
{
    public interface IProviderObjectGroupService
    {
        List<string> GetProviderObjectGroups( int providerId );
        IDictionary<int, List<string>> GetProvidersObjectGroups( IEnumerable<int> providerIds );
        void SaveProvidersObjectGroups( IDictionary<int, List<string>> objectGroupNames );
        void SaveProviderObjectGroups( int providerId, List<string> objectGroupNames );
    }
}