namespace TravelLine.CurrencyRate.Core.AppHealth
{
    public class HealthCheckParams
    {
        public bool TestBusQueueConnection { get; set; }
        public bool TestDatabaseConnection { get; set; }
    }
}
