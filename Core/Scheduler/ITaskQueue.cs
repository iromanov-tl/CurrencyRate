using System;
using System.Collections.Generic;

namespace TravelLine.WebAppTemplate.Core.Scheduler
{
    public interface ITaskQueue
    {
        void Push( ITask task );

        void Remove( string taskName );
        void RemoveAll();
        IEnumerable<ITask> FindAll();
        ITask FindByName( string taskName );

        int Count { get; }

        event EventHandler<TaskEventArgs> TaskExecuted;
    }
}
