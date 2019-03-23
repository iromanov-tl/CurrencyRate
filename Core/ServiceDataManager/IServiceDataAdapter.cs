using ServiceManager.ServiceDataManager;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TravelLine.WebAppTemplate.Core.ServiceDataManager
{
    public interface IServiceDataAdapter
    {
        CurrencyData GetData(RequestData requestData);
    }
}
