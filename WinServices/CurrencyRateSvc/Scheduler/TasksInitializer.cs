using System;
using TravelLine.CurrencyRate.Core.Configuration;
using TravelLine.CurrencyRate.Core.Infrastructure;
using TravelLine.CurrencyRate.Core.Scheduler;
using TravelLine.CurrencyRate.Core.Services;

namespace TravelLine.CurrencyRate.Services.CurrencyRateSvc.Scheduler
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
