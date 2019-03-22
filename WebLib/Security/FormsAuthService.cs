using System;
using System.Web;
using System.Web.Security;
using TravelLine.AccountsLib;
using TravelLine.CurrencyRate.Core.Services;

namespace TravelLine.CurrencyRate.WebLib.Security
{
    public class FormsAuthService : IFormsAuthService
    {
        readonly HttpContextBase _httpContext;
        readonly IAccountsCachedSecurityService _tlAccountsSecurityService;
        readonly IUserService _userService;

        public FormsAuthService( HttpContextBase httpContext, IUserService userService )
        {
            _httpContext = httpContext;
            _tlAccountsSecurityService = AccountsFactory.AccountsCachedSecurityService;
            _userService = userService;
        }

        public void OnAuthenticate( object sender, FormsAuthenticationEventArgs args )
        {
            if ( FormsAuthentication.CookiesSupported )
            {
                CurrencyRatePrincipal principal = null;
                string ticket = FormsAuthUtil.GetAuthenticationTicket( args.Context );
                string ipAddress = FormsAuthUtil.GetIp( args.Context );
                string authHash = FormsAuthUtil.GetAuthenticationHash( args.Context );
                if ( !String.IsNullOrEmpty( ticket ) )
                {
                    var authenticatedUser = _tlAccountsSecurityService.AuthenticateUser( ticket, ipAddress, authHash, true );
                    if ( authenticatedUser != null )
                    {
                        principal = CurrencyRatePrincipal.Create( _userService, authenticatedUser );
                    }
                }
                if ( principal == null )
                {
                    principal = CurrencyRatePrincipal.Create();
                }

                args.User = principal;
            }
            else
            {
                throw new HttpException( "Cookieless Forms Authentication is not supported for this application." );
            }
        }

        public string GetAuthenticationTicket()
        {
            return FormsAuthUtil.GetAuthenticationTicket( _httpContext.ApplicationInstance.Context );
        }

        public void LogOut()
        {
            FormsAuthUtil.LogOut( _httpContext.ApplicationInstance.Context );
        }

        public void SetAuthenticationCookie( string ticket, TimeSpan timeout )
        {
            FormsAuthUtil.SetAuthenticationCookie( _httpContext.ApplicationInstance.Context, ticket, timeout );
        }

        public void RenewAuthenticationCookie()
        {
            RenewAuthenticationCookie( _httpContext.ApplicationInstance.Context );
        }

        public static void RenewAuthenticationCookie( HttpContext httpContext )
        {
            FormsAuthUtil.RenewAuthenticationCookie( httpContext.ApplicationInstance.Context );
        }
    }
}