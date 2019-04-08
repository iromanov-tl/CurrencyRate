using CurrencyRate.ServiceAdapters;

namespace ServiceAdapters
{
    public interface IServiceCreator
    {
        IServiceDataAdapter CreateService();
    }
}
