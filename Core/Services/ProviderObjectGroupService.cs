using System.Collections.Generic;
using System.Linq;
using TravelLine.CurrencyRate.Core.Domain.Security;

namespace TravelLine.CurrencyRate.Core.Services
{
    class ProviderObjectGroupService : CommonService<ProviderObjectGroup>, IProviderObjectGroupService
    {
        public ProviderObjectGroupService( Data.Repository.IRepository<ProviderObjectGroup> repo ) : base( repo )
        {
        }

        public List<string> GetProviderObjectGroups( int providerId )
        {
            return Repository.Table
                .Where( item => item.ProviderId == providerId )
                .Select( item => item.ObjectGroup )
                .ToList();
        }

        public IDictionary<int, List<string>> GetProvidersObjectGroups( IEnumerable<int> providerIds )
        {
            return Repository.Table
                .Where( item => providerIds.Contains( item.ProviderId ) )
                .GroupBy( item => item.ProviderId )
                .ToDictionary( itemsGroup => itemsGroup.Key,
                    itemsGroup => itemsGroup.Select( item => item.ObjectGroup ).ToList() );
        }

        public void SaveProvidersObjectGroups( IDictionary<int, List<string>> mappings )
        {
            foreach ( var providerMapping in mappings )
            {
                SaveProviderObjectGroups( providerMapping.Key, providerMapping.Value );
            }
        }

        public void SaveProviderObjectGroups( int providerId, List<string> groupNames )
        {
            var providerObjectGroups = Repository.Table.Where( item => item.ProviderId == providerId );

            // удалим сущности из БД, если их нет в маппингах
            var deleteItems = new List<ProviderObjectGroup>();
            foreach (
                var providerObjectGroup in
                    providerObjectGroups.Where( item => !groupNames.Contains( item.ObjectGroup ) ) )
            {
                deleteItems.Add( providerObjectGroup );
            }

            // добавим сущности, если они есть в маппингах, но нет в БД
            var newItems = new List<ProviderObjectGroup>();
            foreach (
                var groupName in groupNames.Where( item => providerObjectGroups.All( pog => pog.ObjectGroup != item ) )
                )
            {
                newItems.Add( new ProviderObjectGroup
                {
                    ProviderId = providerId,
                    ObjectGroup = groupName
                } );
            }

            Repository.Delete( deleteItems );
            Repository.Save( newItems );
        }
    }
}