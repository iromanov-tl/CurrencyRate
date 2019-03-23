using System;
using System.Reflection;
using System.ServiceProcess;
using Common.Logging;
using TravelLine.AppHealth;
using TravelLine.TLTransit.Common;
using TravelLine.WebAppTemplate.Core.AppHealth;
using TravelLine.WebAppTemplate.Core.Infrastructure;
using TravelLine.WebAppTemplate.Services.WebAppTemplateSvc.Scheduler;

namespace TravelLine.WebAppTemplate.Services.WebAppTemplateSvc
{
    public partial class WebAppTemplateSvc : ServiceBase
    {
        readonly IServiceFactory _serviceFactory;
        private readonly ITLTransitConnector _busConnector;
        private static readonly ILog _log = LogManager.GetLogger( MethodBase.GetCurrentMethod().DeclaringType );
        private IAppHealthHttpServer _appHealthTcpAgent;

        public WebAppTemplateSvc( IServiceFactory serviceFactory, ITLTransitConnector busConnector )
        {
            InitializeComponent();
            _serviceFactory = serviceFactory;
            _busConnector = busConnector;
        }

        protected override void OnStart( string[] args )
        {
            _log.Info( "Start " + this.ServiceName );
            StartAppHealth();

            var tasksInitializer = _serviceFactory.Get<TasksInitializer>();
            tasksInitializer.Init();
        }

        protected override void OnStop()
        {
            _log.Info( "Stop " + this.ServiceName );
            _appHealthTcpAgent.Stop();
        }


        private void StartAppHealth()
        {
            try
            {
                IAppHealthFactory appHealthFactory = AppHealthLib.CreateHealthFactory();
                _appHealthTcpAgent = appHealthFactory.CreateHttpHealthServer( new HealthCheckClient( new HealthCheckParams { TestBusQueueConnection = true, TestDatabaseConnection = true } ), null );
                _appHealthTcpAgent.Start();
            }
            catch ( Exception ex )
            {
                _log.Error( String.Format( "AppHealth service onstart error: {0}", ex.Message ), ex );
            }
        }

    }
}
