namespace TravelLine.WebAppTemplate.Core.Scheduler
{
    public interface ITask
    {
        void Run();
        string Name { get; }
    }
}
