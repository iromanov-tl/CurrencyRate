using System;
using System.Reflection;
using System.Web;
using System.Web.Routing;
using Common.Logging;
using CPSLabs.ServiceBoost;
using TravelLine.AccountsManagementLib;
using TravelLine.AccountsManagementLib.Transport;
using TravelLine.CurrencyRate.Core.Configuration;
using TravelLine.CurrencyRate.Core.DependencyManagement;
using TravelLine.CurrencyRate.Core.Infrastructure;

namespace TravelLine.CurrencyRate.AccountsApi
{
    public class Global : HttpApplication
    {
        protected void Application_Start()
        {
            // Log4net
            log4net.GlobalContext.Properties[ "LogsDir" ] = Config.LogsDir;

            // DI
            IDependencyContainerManager containerManager = CurrencyRateContext.Current.ContainerManager;
            RegisterServices( containerManager );


            // Route
            var remoteAuthManagementService = containerManager.Resolve<IRemoteAuthManageAPI>();

            var routeHandler = new RouteHandler( delegate ( ServiceContext context )
            {
                containerManager.RebindToConstant( context );
                var handler = containerManager.Resolve<DefaultServiceHttpHandler>();
                handler.RegisterService( RemoteAuthManageService.NAME, utility => new RemoteAuthManageService( utility, remoteAuthManagementService ) );
                handler.SetDecoratorForService( RemoteAuthManageService.NAME, ( version, name, function, httpContext ) =>
                    new ApiKeyAuthorizationDecorator( "X-TravelLine-ApiKey", new[] { Config.AccountsApiKey }, new HttpContextWrapper( httpContext ) ) );
                handler.OnServiceError = OnServiceError;
                return handler;
            } );

            RouteTable.Routes.Add(
                new Route(
                    "{version}/{serviceName}/{function}",
                    new RouteValueDictionary {{"serviceName", RemoteAuthManageService.NAME}},
                    new RouteValueDictionary {{"version", @"\d+(\.\d+)?"}},
                    routeHandler
                    )
                );
        }

        private void OnServiceError( Exception ex )
        {
            ILog log = LogManager.GetLogger( MethodBase.GetCurrentMethod().DeclaringType );
            log.Error( ex.Message, ex );
            throw ex;
        }

        private void RegisterServices( IDependencyContainerManager containerManager )
        {
            containerManager.SetDefaultScope( () => HttpContext.Current );
            DependencyContainerServiceRegistrator.RegisterServices( containerManager );

            containerManager.Bind<IRemoteAuthManageAPI, RemoteAuthManageAPI>();
        }
    }
}