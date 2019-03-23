using System;
using System.Collections.Generic;

namespace TravelLine.WebAppTemplate.Core.Scheduler
{
    public interface ITaskScheduler
    {
        void Schedule( ITask task, DateTime startTime );
        void Schedule( ITask task, DateTime startTime, TimeSpan interval );
        void Schedule( ITask task, TimeSpan interval );

        void Remove( string taskName );
        void RemoveAll();
        IEnumerable<ITask> FindAll();
        ITask FindByName( string taskName );

        /// <summary>
        /// Run task by name after delay.
        /// If call method Run several times in the course of time is less than now + delay, task is run once.
        /// </summary>
        /// <param name="taskName">Name of task</param>
        /// <param name="delay">Delay run </param>
        /// <param name="isRemoveScheduledRun">If True removed scheduled run if they exist</param>
        void Run( string taskName, TimeSpan delay, bool isRemoveScheduledRun = false );

        DateTime? GetTaskScheduledTime( string taskName );

        DateTime? NearTaskScheduledTime { get; }

        void Shutdown();
    }
}