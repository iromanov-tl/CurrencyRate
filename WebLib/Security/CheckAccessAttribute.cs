using System;
using System.Net;
using System.Net.Http;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;
using TravelLine.CurrencyRate.Core.Infrastructure;

namespace TravelLine.CurrencyRate.WebLib.Security
{
    public class CheckAccessAttribute : ActionFilterAttribute
    {
        public CheckAccessAttribute()
        {
            NeedRole = true;
        }

        public string Role { get; set; }
        public bool NeedRole { get; set; }

        public override void OnActionExecuting( HttpActionContext actionContext )
        {
            using ( var scope = ServiceScope.Create() )
            {
                var userContextService = scope.Get<IUserContextService>();

                if ( !userContextService.IsAuthenticated() )
                {
                    actionContext.Response = new HttpResponseMessage( HttpStatusCode.Unauthorized );
                    return;
                }

                if ( !userContextService.IsAuthorized() )
                {
                    actionContext.Response = new HttpResponseMessage( HttpStatusCode.Forbidden );
                    return;
                }

                if ( !NeedRole || String.IsNullOrEmpty( Role ) )
                {
                    return;
                }

                try
                {
                    userContextService.CheckAccess( Role );
                }
                catch ( UnauthorizedAccessException )
                {
                    actionContext.Response = new HttpResponseMessage( HttpStatusCode.Forbidden );
                }
            }
        }
    }
}