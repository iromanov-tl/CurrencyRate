using Ninject;
using Ninject.Modules;
using TravelLine.MessageContracts.IntranetIntegration;
using TravelLine.MessageContracts.IntranetIntegration.ObjectGroups;
using TravelLine.TLTransit.Common;
using TravelLine.TLTransit.Common.Configurator;
using TravelLine.CurrencyRate.Core.Configuration;
using TravelLine.CurrencyRate.Core.Infrastructure;
using TravelLine.CurrencyRate.Core.Scheduler;
using TravelLine.CurrencyRate.Core.Scheduler.Quartz;
using TravelLine.CurrencyRate.Services.CurrencyRateSvc.Consumers;
using TravelLine.CurrencyRate.Services.CurrencyRateSvc.Scheduler;

namespace TravelLine.CurrencyRate.Services.CurrencyRateSvc
{
    public class MainNinjectModule : NinjectModule
    {
        public override void Load()
        {
            Bind<ITLTransitConnector>()
                .ToMethod(
                    ctx => TLTransitConnectorFactory.GetConnector( Config.CurrencyRateWinServiceBusQueueName, ConfigureTransitBus ) )
                .InSingletonScope();

            Bind<ITaskQueue>().ToMethod<ITaskQueue>( ctx =>
            {
                return new ServiceScopeTaskQueue(
                    new QuartzTaskQueue( TasksInitializer.BaseTaskQueueThreadPoolSize, TasksInitializer.BaseTaskQueueName ) );
            } ).InSingletonScope().Named( TasksInitializer.BaseTaskQueueName );

            Bind<ITaskScheduler>().ToMethod<ITaskScheduler>( ctx =>
            {
                var taskScheduler = new QuartzTaskScheduler( 1, "Inner " + TasksInitializer.BaseTaskSchedulerName );
                return new RunInQueueTaskScheduler( taskScheduler, ctx.Kernel.Get<ITaskQueue>( TasksInitializer.BaseTaskQueueName ) );
            } ).InSingletonScope().Named( TasksInitializer.BaseTaskSchedulerName );

            Bind<TasksInitializer>().ToMethod<TasksInitializer>( ctx => new TasksInitializer(
                 ctx.Kernel.Get<ITaskScheduler>( TasksInitializer.BaseTaskSchedulerName ),
                 ctx.Kernel.Get<IServiceFactory>()
             ) ).InSingletonScope();

        }

        private void ConfigureTransitBus( ITLTransitConfigurator configurator )
        {
            configurator.SetDefaultRetryLimit( 1 );

            configurator.Subscribe( subs =>
            {
                subs.Consumer<IntranetOperationModeNotificationConsumer, SetOperationModeNotification>( Kernel );
                subs.Consumer<GetProviderStatusListConsumer, GetProviderStatusListNotification>( Kernel );
                subs.Consumer<MasterProvidersObjectGroupsNotificationConsumer, MasterProvidersObjectGroupsNotification>( Kernel );
            } );
        }
    }
}