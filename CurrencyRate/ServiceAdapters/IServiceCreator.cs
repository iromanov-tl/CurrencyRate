namespace CurrencyRate.ServiceAdapters
{
    public interface IServiceCreator
    {
        IServiceDataAdapter CreateService();
    }
}
