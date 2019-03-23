using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using TravelLine.WebAppTemplate.Core.Domain;
using TravelLine.WebAppTemplate.Core.Domain.Security;
using TravelLine.WebAppTemplate.Core.Services;
using TravelLine.WebAppTemplate.ExtranetApi.Exceptions;
using TravelLine.WebAppTemplate.ExtranetApi.Mapper;
using TravelLine.WebAppTemplate.ExtranetApi.Models;
using TravelLine.WebAppTemplate.WebLib.Security;

namespace TravelLine.WebAppTemplate.ExtranetApi.Controllers
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