using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TravelLine.AccountsLib.Claims.Services;
using TravelLine.CurrencyRate.Core.Domain;
using TravelLine.CurrencyRate.Core.Domain.Security;
using TravelLine.CurrencyRate.Core.Services;

namespace TravelLine.CurrencyRate.WebLib.Security
{
    public class UserContextService : IUserContextService
    {
        private const string CookieName = "provider-user-context";
        private const string HttpContextKey = "user-context";

        readonly HttpContextBase _httpContext;
        readonly IUserService _userService;
        readonly IProviderService _providerService;
        readonly IProviderObjectGroupService _providerObjectGroupService;
        readonly IClaimsAuthService _claimsAuthService;

        public UserContextService(
            HttpContextBase httpContext,
            IUserService userService,
            IProviderService providerService,
            IClaimsAuthService claimsAuthService,
            IProviderObjectGroupService providerObjectGroupService
        )
        {
            _httpContext = httpContext;
            _userService = userService;
            _providerService = providerService;
            _claimsAuthService = claimsAuthService;
            _providerObjectGroupService = providerObjectGroupService;
        }

        public bool IsAuthenticated()
        {
            return _httpContext.User.Identity.IsAuthenticated;
        }

        public bool IsAuthorized()
        {
            var user = _httpContext.User;
            if ( user.IsInRole( RoleName.AccessSystemSettings ) )
            {
                return true;
            }

            return _httpContext.Items[ HttpContextKey ] != null;
        }

        private bool Authorize( ProviderUserContext userContext )
        {
            var user = _httpContext.User;

            // проверяем имеет ли user админскую роль
            if ( user.IsInRole( RoleName.AccessSystemSettings ) )
            {
                return true;
            }

            // проверяем имеет ли user доступ к provider
            if ( _userService.UserContextExists( userContext ) )
            {
                return true;
            }

            CurrencyRatePrincipal principal = user as CurrencyRatePrincipal;
            if ( principal != null )
            {
                List<string> providerObjectGroups = _providerObjectGroupService.GetProviderObjectGroups( userContext.ProviderId );
                return _claimsAuthService.IsAccessAllowed( principal.Claims.ToList(), providerObjectGroups );
            }

            return false;
        }

        public ProviderUserContext GetCurrentUserContext()
        {
            return (ProviderUserContext)_httpContext.Items[ HttpContextKey ];
        }

        private ProviderUserContext Init( string username, int providerId )
        {
            ProviderUserContext userContext = new ProviderUserContext
            {
                ProviderId = providerId,
                Username = username
            };

            if ( !Authorize( userContext ) )
            {
                return null;
            }

            return userContext;
        }

        internal UserContextInitResult Init()
        {

            if ( _httpContext.User == null 
                || !(_httpContext.User.Identity is CurrencyRateIdentity) 
                || !( (CurrencyRateIdentity) _httpContext.User.Identity ).IsAuthenticated )
                return UserContextInitResult.NotAuthenticated;

            string username = _httpContext.User.Identity.Name;

            HttpCookie cookie = _httpContext.Request.Cookies.Get( CookieName );
            if ( cookie == null ) return UserContextInitResult.NoUserContextCookie;
            int providerId = int.Parse( cookie.Value );

            _httpContext.Items[ HttpContextKey ] = Init( username, providerId );

            return UserContextInitResult.Ok;
        }

        public Provider GetCurrentProvider()
        {
            var context = GetCurrentUserContext();

            if ( context == null )
            {
                return null;
            }

            return _providerService.Get( context.ProviderId );
        }

        public void CheckAccess( string role )
        {
            var roles = role.Split( '|' ).ToList();
            if ( !_userService.IsUserInAnyRoles( _httpContext.User.Identity.Name, roles ) )
            {
                throw new UnauthorizedAccessException( "No privilegies" );
            }
        }
    }

    public interface IUserContextService
    {
        Provider GetCurrentProvider();
        bool IsAuthenticated();
        bool IsAuthorized();
        void CheckAccess( string role );
    }

}