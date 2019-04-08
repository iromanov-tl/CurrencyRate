using CurrencyRate.Core.Models.Service;
using System.Collections.Generic;

namespace CurrencyRate.Core.Repository
{
    public interface IServiceRepository
    {
        List<Service> GetServices();
        Service GetService(int id);
    }
}
