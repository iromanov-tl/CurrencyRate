using System;
using System.Web.Security;

namespace TravelLine.CurrencyRate.WebLib.Security
{
    public interface IFormsAuthService
    {
        void OnAuthenticate( object sender, FormsAuthenticationEventArgs args );
        string GetAuthenticationTicket();
        void LogOut();
        void SetAuthenticationCookie( string ticket, TimeSpan timeout );
        void RenewAuthenticationCookie();
    }
}