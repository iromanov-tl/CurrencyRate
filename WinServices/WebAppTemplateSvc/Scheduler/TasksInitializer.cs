using System;
using TravelLine.WebAppTemplate.Core.Configuration;
using TravelLine.WebAppTemplate.Core.Infrastructure;
using TravelLine.WebAppTemplate.Core.Scheduler;
using TravelLine.WebAppTemplate.Core.Services;

namespace TravelLine.WebAppTemplate.Services.WebAppTemplateSvc.Scheduler
{
    public class TasksInitializer
    {
        public const int BaseTaskQueueThreadPoolSize = 3;

        public const string BaseTaskSchedulerName = "BaseTaskScheduler";
        public const string BaseTaskQueueName = "BaseTaskQueue";

        private readonly ITaskScheduler _baseTaskScheduler;
        private readonly IServiceFactory _serviceFactory;

        public TasksInitializer( ITaskScheduler exportLogTaskScheduler, IServiceFactory serviceFactory )
        {
            _baseTaskScheduler = exportLogTaskScheduler;
            _serviceFactory = serviceFactory;
        }

        public void Init()
        {
            InitExportActivityLogTask();
        }

        protected void InitExportActivityLogTask()
        {
            var random = new Random();
            TimeSpan interval = TimeSpan.FromSeconds(LogSystemConfiguration.Settings.SendLogInterval);
            DateTime start = DateTime.UtcNow.AddSeconds(random.Next((int) interval.TotalSeconds));
            _baseTaskScheduler.Schedule(new SimpleTask(() =>
            {
                var exportActivityLogService = _serviceFactory.Get<IExportActivityLogService>();
                exportActivityLogService.SendLog();
            }, "ExportActivityLogTask"), start, interval);
        }


    }
}
