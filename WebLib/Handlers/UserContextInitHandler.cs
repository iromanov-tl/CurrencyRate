using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using TravelLine.AccountsLib.Claims.Services;
using TravelLine.WebAppTemplate.Core.Infrastructure;
using TravelLine.WebAppTemplate.Core.Services;
using TravelLine.WebAppTemplate.WebLib.Security;

namespace TravelLine.WebAppTemplate.WebLib.Handlers
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