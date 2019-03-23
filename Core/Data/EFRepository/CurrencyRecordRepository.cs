using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TravelLine.WebAppTemplate.Core.Data.Models.CurrencyRecord;

namespace TravelLine.WebAppTemplate.Core.Data.EFRepository
{
    class CurrencyRecordRepository : ICurrencyRecordRepository
    {
        private readonly WebAppTemplateDbContext db;
        public void Save(int serviceId, string code, double rate, string date)
        {
            db.CurrencyRecords.Add(new CurrencyRecord() {
                //Id = ,
                ServiceId = serviceId,
                Rate = rate,
                Date = date
            });
        }

        public List<CurrencyRecord> GetItems(DateTime date, string code)
        {

        }
    }
}

