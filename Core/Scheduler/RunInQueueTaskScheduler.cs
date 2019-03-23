using System.Collections.Generic;
using System.Linq;

namespace TravelLine.WebAppTemplate.Core.Scheduler
{
    public class RunInQueueTaskScheduler : ITaskScheduler
    {
        readonly ITaskScheduler _taskScheduler;
        readonly ITaskQueue _taskQueue;

        #region ITaskScheduler Members

        public void Schedule( ITask task, System.DateTime startTime )
        {
            _taskScheduler.Schedule( new RunInQueueWrapTask( _taskQueue, task ), startTime );
        }

        public void Schedule( ITask task, System.DateTime startTime, System.TimeSpan interval )
        {
            _taskScheduler.Schedule( new RunInQueueWrapTask( _taskQueue, task ), startTime, interval );
        }

        public void Schedule( ITask task, System.TimeSpan interval )
        {
            _taskScheduler.Schedule( new RunInQueueWrapTask( _taskQueue, task ), interval );
        }

        public void Remove( string taskName )
        {
            _taskScheduler.Remove( RunInQueueWrapTask.GetWrapTaskName( taskName ) );
            _taskQueue.Remove( taskName );
        }

        public void RemoveAll()
        {
            _taskScheduler.RemoveAll();
            _taskQueue.RemoveAll();
        }

        public IEnumerable<ITask> FindAll()
        {
            var tasks = _taskScheduler.FindAll().Select( t =>
            {
                var wrapTask = t as RunInQueueWrapTask;
                return wrapTask != null ? wrapTask.InnerTask : t;
            } ).ToList();

            return tasks;
        }

        public ITask FindByName( string taskName )
        {
            var wrapTask = _taskScheduler.FindByName( RunInQueueWrapTask.GetWrapTaskName( taskName ) ) as RunInQueueWrapTask;
            if ( wrapTask != null )
                return wrapTask.InnerTask;

            return _taskScheduler.FindByName( taskName );
        }

        public void Run( string taskName, System.TimeSpan delay, bool isRemoveScheduledRun = false )
        {
            _taskScheduler.Run( RunInQueueWrapTask.GetWrapTaskName( taskName ), delay, isRemoveScheduledRun );
        }

        public System.DateTime? GetTaskScheduledTime( string taskName )
        {
            return _taskScheduler.GetTaskScheduledTime( taskName );
        }

        public System.DateTime? NearTaskScheduledTime
        {
            get { return _taskScheduler.NearTaskScheduledTime; }
        }

        public void Shutdown()
        {
            _taskScheduler.Shutdown();
        }

        #endregion

        public RunInQueueTaskScheduler( ITaskScheduler taskScheduler, ITaskQueue taskQueue )
        {
            _taskScheduler = taskScheduler;
            _taskQueue = taskQueue;
        }

        protected class RunInQueueWrapTask : ITask
        {
            readonly ITask _task;
            readonly ITaskQueue _taskQueue;

            #region ITask Members

            public void Run()
            {
                var task = _taskQueue.FindByName( _task.Name );
                if ( task == null )
                {
                    _taskQueue.Push( _task );
                }
            }

            public string Name
            {
                get { return GetWrapTaskName( _task.Name ); }
            }

            #endregion

            public ITask InnerTask { get { return _task; } }

            public RunInQueueWrapTask( ITaskQueue taskQueue, ITask task )
            {
                _taskQueue = taskQueue;
                _task = task;
            }

            public static string GetWrapTaskName( string innerTaskName )
            {
                return string.Format( "RunInQueueWrapTask innerTaskName:{0}", innerTaskName );
            }
        }
    }
}