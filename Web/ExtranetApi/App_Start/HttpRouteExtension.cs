using System.Web.Http;
using TravelLine.AppHealth;
using TravelLine.CurrencyRate.Core.AppHealth;

namespace TravelLine.CurrencyRate.ExtranetApi
{
    public static class HttpRouteExtension
    {
        public static void MapAppHealthRoute( this HttpRouteCollection httpRoutes, HealthCheckParams healthCheckParams )
        {
            IAppHealthFactory appHealthFactory = AppHealthLib.CreateHealthFactory();
            IAppHealthWebHandler appHealthWebHandler = appHealthFactory.CreateWebHealthHandler( new HealthCheckClient( healthCheckParams ) );
            httpRoutes.MapHttpRoute(
                name: "Health",
                routeTemplate: "health/ping",
                defaults: null,
                constraints: null,
                handler: appHealthWebHandler.GetHttpMessageHandler()
            );
        }
    }
}