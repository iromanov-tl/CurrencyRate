using System;
using System.Collections.Generic;
using Quartz;
using Quartz.Impl.Matchers;
using Quartz.Impl.Triggers;

namespace TravelLine.WebAppTemplate.Core.Scheduler.Quartz
{
    public class QuartzTaskQueue : ITaskQueue
    {
        const string TaskQueueDefaultName = "taskQueue";
        const string TriggerNamePrefix = "queue-trigger-";

        private readonly IScheduler _scheduler;

        public QuartzTaskQueue( int threadPoolSize = 1, string name = TaskQueueDefaultName )
        {
            _scheduler = QuartzHelper.CreateScheduler( threadPoolSize, new TimeSpan( 1, 0, 0, 0 ), name );
        }

        public QuartzTaskQueue( IScheduler scheduler )
        {
            _scheduler = scheduler;
        }

        protected string GetTriggerName( string taskName )
        {
            return TriggerNamePrefix + taskName;
        }

        protected void OnTaskExecuted( TaskEventArgs e )
        {
            if ( TaskExecuted != null )
            {
                TaskExecuted( this, e );
            }
        }

        #region ITaskQueue Members

        public void Push( ITask task )
        {
            IJobDetail jobDetail = QuartzHelper.TaskToJobDetail( task );
            QuartzTaskEvents quartzTaskEvents = new QuartzTaskEvents();
            quartzTaskEvents.Executed += ( sender, e ) => OnTaskExecuted( e );
            jobDetail.JobDataMap[ QuartzHelper.KeyQuartzTaskEvents ] = quartzTaskEvents;
            ITrigger trigger = new SimpleTriggerImpl( GetTriggerName( task.Name ) )
            {
                StartTimeUtc = new DateTimeOffset( DateTime.UtcNow ),
                MisfireInstruction = MisfireInstruction.SimpleTrigger.FireNow
            };
            _scheduler.ScheduleJob( jobDetail, trigger );
        }

        public void Remove( string taskName )
        {
            QuartzHelper.RemoveJob( _scheduler, taskName );
        }

        public void RemoveAll()
        {
            QuartzHelper.RemoveAll( _scheduler );
        }

        public ITask FindByName( string taskName )
        {
            return QuartzHelper.FindTaskByName( _scheduler, taskName );
        }

        public IEnumerable<ITask> FindAll()
        {
            return QuartzHelper.FindAllTasks( _scheduler );
        }

        public int Count { get { return _scheduler.GetJobKeys( GroupMatcher<JobKey>.GroupEquals( SchedulerConstants.DefaultGroup ) ).Count; } }

        public event EventHandler<TaskEventArgs> TaskExecuted;

        #endregion
    }
}
