using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using TravelLine.CurrencyRate.Core.Domain;
using TravelLine.CurrencyRate.Core.Domain.Security;
using TravelLine.CurrencyRate.Core.Services;
using TravelLine.CurrencyRate.ExtranetApi.Exceptions;
using TravelLine.CurrencyRate.ExtranetApi.Mapper;
using TravelLine.CurrencyRate.ExtranetApi.Models;
using TravelLine.CurrencyRate.WebLib.Security;

namespace TravelLine.CurrencyRate.ExtranetApi.Controllers
{
    [RoutePrefix( "provider" )]
    [CheckAccess( Role = RoleName.AccessProviderSettings )]
    public class ProviderController : BaseApiController
    {
        private readonly IProviderService _providerService;
        public ProviderController( IProviderService providerService )
        {
            _providerService = providerService;
        }

        [HttpGet, Route( "get-all" )]
        public ProvidersContainerDto GetProviders()
        {
            List<Provider> providers = _providerService.GetAllProviders();
            if ( !providers.Any() )
            {
                throw new RequestException( "No providers", ErrorCode.ProviderNotFound );
            }

            List<ProviderDto> list = providers.ConvertAll( provider => provider.Map() );
            return new ProvidersContainerDto
            {
                Items = list,
                TotalCount = list.Count,
                FilteredCount = list.Count
            };
        }

        [HttpGet, Route( "{providerId}/status/{status}" )]
        public void SetProviderStatus( bool status, int providerId )
        {
            var logId = LogActivity();
            LogEntityState( logId, new { IsEnabled = status }, $"Provider.{providerId}", "Provider", "Provider" );
            
            var provider = _providerService.Get( providerId );
            provider.IsEnabled = status;
            _providerService.Save( provider );
        }
    }
}