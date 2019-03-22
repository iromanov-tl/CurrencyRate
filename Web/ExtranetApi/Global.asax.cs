using System.Web.Http;
using System.Web.Security;
using TravelLine.CurrencyRate.Core.Infrastructure;
using TravelLine.CurrencyRate.ExtranetApi.Mapper;
using TravelLine.CurrencyRate.WebLib.Security;

namespace TravelLine.CurrencyRate.ExtranetApi
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            GlobalConfiguration.Configure( WebApiConfig.Register );
            ExpressMapperConfiguration.Configure();
        }

        public void FormsAuthentication_OnAuthenticate( object sender, FormsAuthenticationEventArgs args )
        {
            using ( var serviceScope = ServiceScope.Create() )
            {
                IFormsAuthService formsAuthService = serviceScope.Get<IFormsAuthService>();
                formsAuthService.OnAuthenticate( sender, args );
            }
        }
    }
}