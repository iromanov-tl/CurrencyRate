using System;

namespace TravelLine.CurrencyRate.Core.Scheduler
{
    public class TaskEventArgs : EventArgs
    {
        public string TaskName { get; set; }
    }
}
