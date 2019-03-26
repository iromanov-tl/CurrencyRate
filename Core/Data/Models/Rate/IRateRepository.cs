using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TravelLine.MessageContracts.TLCore.Resources;

namespace TravelLine.WebAppTemplate.Core.Data.Models.Rate
{
    public interface IRateRepository
    {
        void Save(Rate rate);
        List<Rate> GetItems(DateTime date, string code);
        Rate GetItem(DateTime date, string code, int serviceId);
    }
}
