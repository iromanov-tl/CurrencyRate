using System.Collections.Generic;

namespace CurrencyRate.Core.Models.Service
{
    public interface IServiceRepository
    {
        List<Service> GetServices();
        Service GetService(int id);
    }
}
