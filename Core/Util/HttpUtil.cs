using System;
using System.Web;

namespace TravelLine.CurrencyRate.Core.Util
{
    public static class HttpUtil
    {
        public static string GetCookie( HttpContext httpContext, string name )
        {
            var cookie = httpContext.Request.Cookies[ name ];
            return cookie == null ? String.Empty : cookie.Value;
        }

    }
}