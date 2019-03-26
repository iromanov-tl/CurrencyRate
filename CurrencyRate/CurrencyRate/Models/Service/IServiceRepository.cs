using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CurrencyRate.Models.Service
{
    public interface IServiceRepository
    {
        List<Service> GetServices();
        Service GetService(int id);
    }
}
