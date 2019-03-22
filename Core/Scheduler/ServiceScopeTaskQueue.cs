using System;
using System.Collections.Generic;
using System.Linq;

namespace TravelLine.CurrencyRate.Core.Scheduler
{
    public class ServiceScopeTaskQueue : ITaskQueue
    {
        readonly ITaskQueue _taskQueue;

        public ServiceScopeTaskQueue( ITaskQueue taskQueue )
        {
            _taskQueue = taskQueue;
            _taskQueue.TaskExecuted += ( obj, e ) =>
            {
                if ( TaskExecuted == null )
                    return;
                TaskExecuted( obj, e );
            };
        }

        #region ITaskQueue Members

        public void Push( ITask task )
        {
            _taskQueue.Push( ServiceScopeTask.TaskToServiceScopeTask( task ) );
        }

        public void Remove( string taskName )
        {
            _taskQueue.Remove( taskName );
        }

        public void RemoveAll()
        {
            _taskQueue.RemoveAll();
        }

        public IEnumerable<ITask> FindAll()
        {
            return _taskQueue.FindAll().Select( task => ServiceScopeTask.ServiceScopeTaskToTask( task ) );
        }

        public ITask FindByName( string taskName )
        {
            return ServiceScopeTask.ServiceScopeTaskToTask( _taskQueue.FindByName( taskName ) );
        }

        public int Count
        {
            get { return _taskQueue.Count; }
        }

        public event EventHandler<TaskEventArgs> TaskExecuted;

        #endregion
    }
}
