using TravelLine.WebAppTemplate.Core.Domain;
using TravelLine.WebAppTemplate.ExtranetApi.Models;

namespace TravelLine.WebAppTemplate.ExtranetApi.Mapper
{
    public static class ProviderMapper
    {
        public static ProviderDto Map( this Provider provider )
        {
            if ( provider == null )
            {
                return null;
            }

            return new ProviderDto
            {
                Id = provider.Id,
                Name = provider.Name,
                SyncTime = provider.SyncTime,
                TimeZone = provider.TimeZone,
                CreationDate = provider.CreationDate,
                IsEnabled = provider.IsEnabled,
                Language = provider.Language,
                Mode = provider.Mode
            };
        }
    }
}