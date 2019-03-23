using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TravelLine.CurrencyRate.Core.ServiceDataManager
{
    public interface IServiceDataAdapter
    {
        ServiceData GetData(DateTime date);
    }
}
