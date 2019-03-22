using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using TravelLine.AccountsLib.Claims.Services;
using TravelLine.CurrencyRate.Core.Infrastructure;
using TravelLine.CurrencyRate.Core.Services;
using TravelLine.CurrencyRate.WebLib.Security;

namespace TravelLine.CurrencyRate.WebLib.Handlers
{
    public class UserContextInitHandler : DelegatingHandler
    {
        protected override Task<HttpResponseMessage> SendAsync( HttpRequestMessage request, CancellationToken cancellationToken )
        {
            using ( var serviceScope = ServiceScope.Create() )
            {
                var httpContext = serviceScope.Get<HttpContextBase>();
                var userService = serviceScope.Get<IUserService>();
                var providerService = serviceScope.Get<IProviderService>();
                var claimsAuthService = serviceScope.Get<IClaimsAuthService>();
                var providerObjectGroupService = serviceScope.Get<IProviderObjectGroupService>();
                var userContextService = new UserContextService( httpContext, userService, providerService, claimsAuthService, providerObjectGroupService );

                userContextService.Init();
            }

            return base.SendAsync( request, cancellationToken );
        }
    }
}