using ServiceManager.ServiceDataManager;
using System;
using System.Reflection;
using System.ServiceProcess;
using TravelLine.WebAppTemplate.Core.Configuration;
using TravelLine.WebAppTemplate.Core.DependencyManagement;
using TravelLine.WebAppTemplate.Core.Infrastructure;
using TravelLine.WebAppTemplate.Core.ServiceDataManager;

namespace TravelLine.WebAppTemplate.Services.WebAppTemplateSvc
{
    internal static class Program
    {
        /// <summary>
        /// The main entry point for the application.
        /// </summary>
        private static void Main()
        {
            //configure placeholder param for logfile path used in app.config
            log4net.GlobalContext.Properties[ "LogsDir" ] = Config.LogsDir;

            IDependencyContainerManager containerManager = WebAppTemplateContext.Current.ContainerManager;
            containerManager.SetDefaultScope( () => ServiceScope.Current );
            DependencyContainerServiceRegistrator.RegisterServices( containerManager );
            containerManager.LoadModule( new MainNinjectModule() );

            RequestData data = new RequestData();
            data.currencyCode = "USD";
            data.date = DateTime.Today;
            foreach (var item in DataProvider.GetServicesRates(data))
            {
                Console.WriteLine(item);
            }
           

            ServiceBase[] servicesToRun = new ServiceBase[]
            {
                containerManager.Resolve<WebAppTemplateSvc>()
            };
            if ( Environment.UserInteractive )
            {
                RunInteractiveServices( servicesToRun );
            }
            else
            {
                ServiceBase.Run( servicesToRun );
            }
        }


        /// <summary>
        /// Run services in interactive mode
        /// </summary>
        static void RunInteractiveServices( ServiceBase[] servicesToRun )
        {
            Console.WriteLine();
            Console.WriteLine( "Start the services in interactive mode." );
            Console.WriteLine();

            // Get the method to invoke on each service to start it
            MethodInfo onStartMethod = typeof( ServiceBase ).GetMethod( "OnStart", BindingFlags.Instance | BindingFlags.NonPublic );

            // Start services loop
            foreach ( ServiceBase service in servicesToRun )
            {
                Console.Write( "Starting {0} ... ", service.ServiceName );
                onStartMethod.Invoke( service, new object[] { new string[] { } } );
                Console.WriteLine( "Started" );
            }

            // Waiting the end
            Console.WriteLine();
            Console.WriteLine( "Press a key to stop services and finish process..." );
            Console.ReadKey();
            Console.WriteLine();

            // Get the method to invoke on each service to stop it
            MethodInfo onStopMethod = typeof( ServiceBase ).GetMethod( "OnStop", BindingFlags.Instance | BindingFlags.NonPublic );

            // Stop loop
            foreach ( ServiceBase service in servicesToRun )
            {
                Console.Write( "Stopping {0} ... ", service.ServiceName );
                onStopMethod.Invoke( service, null );
                Console.WriteLine( "Stopped" );
            }

            Console.WriteLine();
            Console.WriteLine( "All services are stopped." );

            // Waiting a key press to not return to VS directly
            if ( System.Diagnostics.Debugger.IsAttached )
            {
                Console.WriteLine();
                Console.Write( "=== Press a key to quit ===" );
                Console.ReadKey();
            }
        }
    }
}