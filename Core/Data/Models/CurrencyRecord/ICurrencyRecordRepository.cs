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
        void Save(int serviceId, string code, double rate, string date);
        List<CurrencyRecord> GetItems(DateTime date, string code);
    }
}
