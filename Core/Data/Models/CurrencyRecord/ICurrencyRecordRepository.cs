using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TravelLine.MessageContracts.TLCore.Resources;

namespace TravelLine.WebAppTemplate.Core.Data.Models.CurrencyRecord
{
    public interface ICurrencyRecordRepository
    {
        void Save(CurrencyRecord record);
        List<CurrencyRecord> GetItems(DateTime date, string code);
        CurrencyRecord GetItem(DateTime date, string code, int serviceId);
    }
}
