using System.Web.Http;
using System.Web.Security;
using TravelLine.WebAppTemplate.Core.Infrastructure;
using TravelLine.WebAppTemplate.ExtranetApi.Mapper;
using TravelLine.WebAppTemplate.WebLib.Security;

namespace TravelLine.WebAppTemplate.ExtranetApi
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