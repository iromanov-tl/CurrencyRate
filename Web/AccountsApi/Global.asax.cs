using System;
using System.Reflection;
using System.Web;
using System.Web.Routing;
using Common.Logging;
using CPSLabs.ServiceBoost;
using TravelLine.AccountsManagementLib;
using TravelLine.AccountsManagementLib.Transport;
using TravelLine.WebAppTemplate.Core.Configuration;
using TravelLine.WebAppTemplate.Core.DependencyManagement;
using TravelLine.WebAppTemplate.Core.Infrastructure;

namespace TravelLine.WebAppTemplate.AccountsApi
{
    public class Global : HttpApplication
    {
        protected void Application_Start()
        {
            // Log4net
            log4net.GlobalContext.Properties[ "LogsDir" ] = Config.LogsDir;

            // DI
            IDependencyContainerManager containerManager = WebAppTemplateContext.Current.ContainerManager;
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