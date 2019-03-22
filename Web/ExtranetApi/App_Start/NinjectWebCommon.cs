using System;
using System.Web;
using Microsoft.Web.Infrastructure.DynamicModuleHelper;
using Ninject;
using Ninject.Web.Common;
using TravelLine.TLTransit.Common;
using TravelLine.CurrencyRate.Core.Configuration;
using TravelLine.CurrencyRate.Core.DependencyManagement;
using TravelLine.CurrencyRate.Core.Infrastructure;
using TravelLine.CurrencyRate.ExtranetApi;
using TravelLine.CurrencyRate.WebLib.Security;

[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(NinjectWebCommon), "Start")]
[assembly: WebActivatorEx.ApplicationShutdownMethodAttribute(typeof(NinjectWebCommon), "Stop")]

namespace TravelLine.CurrencyRate.ExtranetApi
{
    public static class NinjectWebCommon
    {
        private static readonly Bootstrapper bootstrapper = new Bootstrapper();

        /// <summary>
        /// Starts the application
        /// </summary>
        public static void Start()
        {
            DynamicModuleUtility.RegisterModule( typeof( OnePerRequestHttpModule ) );
            DynamicModuleUtility.RegisterModule( typeof( NinjectHttpModule ) );
            bootstrapper.Initialize( CreateKernel );
        }

        /// <summary>
        /// Stops the application.
        /// </summary>
        public static void Stop()
        {
            bootstrapper.ShutDown();
        }

        /// <summary>
        /// Creates the kernel that will manage your application.
        /// </summary>
        /// <returns>The created kernel.</returns>
        private static IKernel CreateKernel()
        {
            IDependencyContainerManager containerManager = CurrencyRateContext.Current.ContainerManager;
            containerManager.BindToMethod<Func<IKernel>>( ctx => () => new Bootstrapper().Kernel );
            containerManager.SetDefaultScope( () => HttpContext.Current );

            DependencyContainerServiceRegistrator.RegisterServices( containerManager );

            containerManager.BindToMethodAsSingleton( ctx => TLTransitConnectorFactory.GetConnector( Config.CurrencyRateWebBusQueueName ) );
            containerManager.Bind<IHttpModule, HttpApplicationInitializationHttpModule>();
            containerManager.Bind<IUserContextService, UserContextService>();
            containerManager.Bind<IFormsAuthService, FormsAuthService>();

            return containerManager.Resolve<IKernel>();
        }


    }
}