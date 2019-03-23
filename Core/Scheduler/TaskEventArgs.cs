using System;

namespace TravelLine.WebAppTemplate.Core.Scheduler
{
    public class TaskEventArgs : EventArgs
    {
        public string TaskName { get; set; }
    }
}
