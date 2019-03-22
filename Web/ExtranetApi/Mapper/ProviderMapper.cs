using TravelLine.CurrencyRate.Core.Domain;
using TravelLine.CurrencyRate.ExtranetApi.Models;

namespace TravelLine.CurrencyRate.ExtranetApi.Mapper
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