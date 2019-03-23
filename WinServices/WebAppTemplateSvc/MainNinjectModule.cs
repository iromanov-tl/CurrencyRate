using Ninject;
using Ninject.Modules;
using TravelLine.MessageContracts.IntranetIntegration;
using TravelLine.MessageContracts.IntranetIntegration.ObjectGroups;
using TravelLine.TLTransit.Common;
using TravelLine.TLTransit.Common.Configurator;
using TravelLine.WebAppTemplate.Core.Configuration;
using TravelLine.WebAppTemplate.Core.Infrastructure;
using TravelLine.WebAppTemplate.Core.Scheduler;
using TravelLine.WebAppTemplate.Core.Scheduler.Quartz;
using TravelLine.WebAppTemplate.Services.WebAppTemplateSvc.Consumers;
using TravelLine.WebAppTemplate.Services.WebAppTemplateSvc.Scheduler;

namespace TravelLine.WebAppTemplate.Services.WebAppTemplateSvc
{
    public class MainNinjectModule : NinjectModule
    {
        public override void Load()
        {
            Bind<ITLTransitConnector>()
                .ToMethod(
                    ctx => TLTransitConnectorFactory.GetConnector( Config.WebAppTemplateWinServiceBusQueueName, ConfigureTransitBus ) )
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