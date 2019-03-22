namespace TravelLine.CurrencyRate.Core.Scheduler
{
    public interface ITask
    {
        void Run();
        string Name { get; }
    }
}
