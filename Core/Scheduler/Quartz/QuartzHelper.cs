using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Globalization;
using System.Linq;
using Common.Logging;
using Quartz;
using Quartz.Impl;
using Quartz.Impl.Matchers;

namespace TravelLine.WebAppTemplate.Core.Scheduler.Quartz
{
    internal class QuartzTaskEvents
    {
        internal void OnExecuted(TaskEventArgs e)
        {
            if (Executed != null)
            {
                Executed(this, e);
            }
        }

        public event EventHandler<TaskEventArgs> Executed;
    }

    public static class QuartzHelper
    {
        public const string KeyTask = "task";
        public const string KeyQuartzTaskEvents = "quartzTaskEvents";
        public const string KeyRunAgain = "runAgain";
        public const int RunCountMax = 5;

        public static uint CountSchdeuler;

        public static IScheduler CreateScheduler(int threadPoolSize, TimeSpan misfireThreshold,
            string name = "scheduler")
        {
            var properties = new NameValueCollection();
            properties["quartz.scheduler.instanceName"] = name + CountSchdeuler++;
            properties["quartz.jobStore.misfireThreshold"] =
                misfireThreshold.TotalMilliseconds.ToString(CultureInfo.InvariantCulture);
            properties["quartz.threadPool.threadCount"] = threadPoolSize.ToString(CultureInfo.InvariantCulture);

            ISchedulerFactory schedulerFactory = new StdSchedulerFactory(properties);
            IScheduler scheduler = schedulerFactory.GetScheduler();
            scheduler.Start();
            return scheduler;
        }

        public static IJobDetail TaskToJobDetail(ITask task)
        {
            var jobDetail = new JobDetailImpl(task.Name, typeof (Job));
            jobDetail.JobDataMap[KeyTask] = task;
            jobDetail.Durable = false;
            return jobDetail;
        }

        public static ITask JobDetailToTask(IJobDetail jobDetail)
        {
            ITask task = null;
            if (jobDetail != null)
            {
                task = jobDetail.JobDataMap.ContainsKey(KeyTask) ? jobDetail.JobDataMap[KeyTask] as ITask : null;
            }
            return task;
        }

        public static IEnumerable<ITask> FindAllTasks(IScheduler scheduler)
        {
            var tasks = new List<ITask>();
            IEnumerable<JobKey> keys =
                scheduler.GetJobKeys(GroupMatcher<JobKey>.GroupEquals(SchedulerConstants.DefaultGroup));
            foreach (JobKey key in keys)
            {
                ITask task = JobDetailToTask(scheduler.GetJobDetail(key));
                if (task != null)
                {
                    tasks.Add(task);
                }
            }
            return tasks;
        }

        public static void RemoveJob(IScheduler scheduler, string taskName)
        {
            scheduler.DeleteJob(new JobKey(taskName));
        }

        public static void RemoveAll(IScheduler scheduler)
        {
            scheduler.Clear();
        }

        public static ITask FindTaskByName(IScheduler scheduler, string taskName)
        {
            return JobDetailToTask(scheduler.GetJobDetail(new JobKey(taskName)));
        }

        public static void SetTaskRunAgain(IScheduler scheduler, string taskName, bool isTaskRunAgain = true)
        {
            //executing jobs
            var equalExecutingJobs = scheduler.GetCurrentlyExecutingJobs()
                .Where(
                    rjc =>
                        rjc.JobDetail.Key.Group == SchedulerConstants.DefaultGroup && rjc.JobDetail.Key.Name == taskName);
            foreach (var equalExecutingJob in equalExecutingJobs)
            {
                equalExecutingJob.JobDetail.JobDataMap[KeyRunAgain] = isTaskRunAgain;
            }

            //no executing job
            var jobDetail = scheduler.GetJobDetail(new JobKey(taskName));
            if (jobDetail == null)
            {
                return;
            }
            jobDetail.JobDataMap[KeyRunAgain] = isTaskRunAgain;
        }

        public static bool IsTriggerExist(IScheduler scheduler, string triggerName)
        {
            return scheduler.GetTrigger(new TriggerKey(triggerName)) != null;
        }

        public static bool IsTaskCurrentlyExecuting(IScheduler scheduler, string taskName)
        {
            return scheduler.GetCurrentlyExecutingJobs().FirstOrDefault(
                rjc => rjc.JobDetail.Key.Group == SchedulerConstants.DefaultGroup &&
                       rjc.JobDetail.Key.Name == taskName) != null;
        }

        private class Job : IJob
        {
            private static readonly ILog Log = LogManager.GetLogger(typeof (Job));

            #region IJob Members

            protected static void Execute(ITask task)
            {
                try
                {
                    task.Run();
                }
                catch (Exception e)
                {
                    Log.Error("Run task error. name: " + task.Name, e);
                }
            }

            public void Execute(IJobExecutionContext context)
            {
                if (!context.JobDetail.JobDataMap.ContainsKey(KeyTask))
                    return;

                ITask task = (ITask) context.JobDetail.JobDataMap[KeyTask];
                var equalsTasks = context.Scheduler.GetCurrentlyExecutingJobs()
                    .Where(rjc => rjc.JobDetail.Key.Group == SchedulerConstants.DefaultGroup &&
                                  rjc.JobDetail.Key.Name == task.Name).ToList();
                if (equalsTasks.Count() > 1 &&
                    equalsTasks.OrderBy(t => t.FireInstanceId).First().FireInstanceId != context.FireInstanceId)
                {
                    SetTaskRunAgain(context.Scheduler, task.Name, true);
                    return;
                }
                Execute(task);
                int runCount = 0;
                while (context.JobDetail.JobDataMap.ContainsKey(KeyRunAgain) &&
                       (bool) context.JobDetail.JobDataMap[KeyRunAgain] && (runCount < RunCountMax))
                {
                    SetTaskRunAgain(context.Scheduler, task.Name, false);
                    Execute(task);
                    runCount++;
                }
                if (runCount >= RunCountMax)
                {
                    Log.Error(string.Format("Run task again count >= RunCountMax. taskName:{0}", task.Name));
                }
                if (context.JobDetail.JobDataMap.ContainsKey(KeyQuartzTaskEvents))
                {
                    QuartzTaskEvents quartzTaskEvents =
                        (QuartzTaskEvents) context.JobDetail.JobDataMap[KeyQuartzTaskEvents];
                    if (quartzTaskEvents != null)
                    {
                        quartzTaskEvents.OnExecuted(new TaskEventArgs() {TaskName = task.Name});
                    }
                }
            }

            #endregion
        }
    }
}
