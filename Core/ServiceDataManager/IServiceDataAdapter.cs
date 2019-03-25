using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TravelLine.WebAppTemplate.Core.Data.Models.CurrencyRecord;

namespace TravelLine.WebAppTemplate.Core.ServiceDataManager
{
    public interface IServiceDataAdapter
    {
        List<CurrencyRecord> GetRates(DateTime date);
    }
}
