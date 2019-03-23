using System;
using System.Collections.Generic;
using Quartz;
using Quartz.Impl.Matchers;
using Quartz.Impl.Triggers;

namespace TravelLine.WebAppTemplate.Core.Scheduler.Quartz
{
    public class QuartzTaskScheduler : ITaskScheduler
    {
        private const string RunTaskTriggerNameSuffix = "trigger-run";
        private const string TaskSchedulerDefaultName = "taskScheduler";
        private const string TriggerNamePrefix = "scheduler-trigger-";

        private readonly IScheduler _scheduler;
        private readonly Object _thisLock = new Object();

        protected string GetTriggerNameByTaskName(string taskName)
        {
            return TriggerNamePrefix + taskName;
        }

        protected DateTime? GetJobScheduledTimeByJobKey(JobKey jobKey)
        {
            DateTime? taskScheduledTime = null;
            var triggers = _scheduler.GetTriggersOfJob(jobKey);
            if (triggers == null)
            {
                return null;
            }

            foreach (ITrigger trigger in triggers)
            {
                var triggerNextFireTimeUtc = trigger.GetNextFireTimeUtc();
                if (triggerNextFireTimeUtc == null)
                    continue;

                if (taskScheduledTime == null || taskScheduledTime.Value > triggerNextFireTimeUtc.Value.DateTime)
                {
                    taskScheduledTime = triggerNextFireTimeUtc.Value.DateTime;
                }
            }
            return taskScheduledTime;
        }

        public QuartzTaskScheduler(int threadPoolSize = 1, string name = TaskSchedulerDefaultName)
        {
            _scheduler = QuartzHelper.CreateScheduler(threadPoolSize, TimeSpan.FromSeconds(10), name);
        }

        public QuartzTaskScheduler(IScheduler scheduler)
        {
            _scheduler = scheduler;
        }

        #region ITaskScheduler Members

        public void Schedule(ITask task, DateTime startTime)
        {
            var jobDetail = QuartzHelper.TaskToJobDetail(task);
            ITrigger trigger = new SimpleTriggerImpl(GetTriggerNameByTaskName(task.Name))
            {
                StartTimeUtc = startTime,
                MisfireInstruction = MisfireInstruction.SimpleTrigger.RescheduleNowWithRemainingRepeatCount
            };
            _scheduler.ScheduleJob(jobDetail, trigger);
        }

        public void Schedule(ITask task, DateTime startTime, TimeSpan interval)
        {
            var jobDetail = QuartzHelper.TaskToJobDetail(task);
            var trigger = new SimpleTriggerImpl(GetTriggerNameByTaskName(task.Name))
            {
                RepeatInterval = interval,
                MisfireInstruction = MisfireInstruction.SimpleTrigger.RescheduleNowWithRemainingRepeatCount,
                RepeatCount = SimpleTriggerImpl.RepeatIndefinitely,
                StartTimeUtc = startTime
            };
            _scheduler.ScheduleJob(jobDetail, trigger);
        }

        public void Schedule(ITask task, TimeSpan interval)
        {
            Schedule(task, DateTime.UtcNow, interval);
        }

        public void Remove(string taskName)
        {
            QuartzHelper.RemoveJob(_scheduler, taskName);
        }

        public void RemoveAll()
        {
            QuartzHelper.RemoveAll(_scheduler);
        }

        public ITask FindByName(string taskName)
        {
            return QuartzHelper.FindTaskByName(_scheduler, taskName);
        }

        public IEnumerable<ITask> FindAll()
        {
            return QuartzHelper.FindAllTasks(_scheduler);
        }

        public DateTime? NearTaskScheduledTime
        {
            get
            {
                DateTime? lastTaskScheduledTime = null;
                try
                {
                    _scheduler.PauseAll();
                    IEnumerable<JobKey> keys =
                        _scheduler.GetJobKeys(GroupMatcher<JobKey>.GroupEquals(SchedulerConstants.DefaultGroup));
                    foreach (JobKey key in keys)
                    {
                        var taskScheduledTime = GetJobScheduledTimeByJobKey(key);
                        if (taskScheduledTime == null)
                            continue;

                        if (lastTaskScheduledTime == null || lastTaskScheduledTime.Value > taskScheduledTime.Value)
                        {
                            lastTaskScheduledTime = taskScheduledTime;
                        }
                    }
                }
                finally
                {
                    _scheduler.ResumeAll();
                }
                return lastTaskScheduledTime;
            }
        }

        public DateTime? GetTaskScheduledTime(string taskName)
        {
            return GetJobScheduledTimeByJobKey(new JobKey(taskName));
        }

        public void Run(string taskName, TimeSpan delay, bool isRemoveScheduledRun = false)
        {
            var task = FindByName(taskName);
            if (task == null)
                return;
            string triggerName = taskName + RunTaskTriggerNameSuffix;
            bool isExistRunTrigger = QuartzHelper.IsTriggerExist(_scheduler, triggerName);
            if (!isExistRunTrigger)
            {
                lock (_thisLock)
                {
                    isExistRunTrigger = QuartzHelper.IsTriggerExist(_scheduler, triggerName);
                    if (!isExistRunTrigger)
                    {
                        ISimpleTrigger triggerRun = new SimpleTriggerImpl(triggerName)
                        {
                            StartTimeUtc = DateTime.UtcNow.Add(delay),
                            JobKey = new JobKey(taskName)
                        };
                        _scheduler.ScheduleJob(triggerRun);
                        if (isRemoveScheduledRun)
                        {
                            foreach (ITrigger trigger in _scheduler.GetTriggersOfJob(new JobKey(taskName)))
                            {
                                if (trigger.Key.Name != triggerName)
                                {
                                    _scheduler.UnscheduleJob(trigger.Key);
                                }
                            }
                        }
                        return;
                    }
                }
            }
            if (QuartzHelper.IsTaskCurrentlyExecuting(_scheduler, taskName))
            {
                QuartzHelper.SetTaskRunAgain(_scheduler, taskName, true);
            }
        }

        public void Shutdown()
        {
            _scheduler.Shutdown();
        }

        #endregion
    }
}
