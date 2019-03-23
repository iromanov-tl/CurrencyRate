using TravelLine.WebAppTemplate.Core.Infrastructure;

namespace TravelLine.WebAppTemplate.Core.Scheduler
{
    public class ServiceScopeTask : ITask
    {
        public static ServiceScopeTask TaskToServiceScopeTask( ITask task )
        {
            return task == null ? null : new ServiceScopeTask( task );
        }

        public static ITask ServiceScopeTaskToTask( ITask task )
        {
            var serviceScopeTask = task as ServiceScopeTask;
            if ( serviceScopeTask == null )
                return task;
            return serviceScopeTask.Task;
        }

        readonly ITask _task;

        public ServiceScopeTask( ITask task )
        {
            _task = task;
        }

        public ITask Task { get { return _task; } }

        #region ITask Members

        public void Run()
        {
            using ( ServiceScope.Create() )
            {
                _task.Run();
            }
        }

        public string Name
        {
            get { return _task.Name; }
        }

        #endregion
    }
}
