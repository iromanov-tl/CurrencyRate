namespace TravelLine.CurrencyRate.Core.Scheduler
{
    public delegate void RunMethod();

    public class SimpleTask : ITask
    {
        readonly RunMethod _runMethod;
        readonly string _taskName;

        public SimpleTask( RunMethod runMethod, string taskName )
        {
            _runMethod = runMethod;
            _taskName = taskName;
        }

        #region ITask Members

        public void Run()
        {
            if ( _runMethod != null )
            {
                _runMethod();
            }
        }

        public string Name
        {
            get { return _taskName; }
        }

        #endregion
    }
}
