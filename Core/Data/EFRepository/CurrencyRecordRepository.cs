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

        /*public List<Currency> GetItems(DateTime date, string code)
        {
            var items =
                from record in db.CurrencyRecords
                join service in db.Services on record.ServiceId equals service.ServiceId
                where record.Date.Equals(date.ToString()) && record.Code == code
                select new Currency
                {
                    code = record.Code,
                    date = Convert.ToDateTime(record.Date),
                    rate = record.Rate,
                    serviceUrl = service.Url
                };
            return items.ToList();
        }*/

        public List<CurrencyRecord> GetItems(DateTime date, string code)
        {
            var items =
                from record in db.CurrencyRecords
                where record.Date.Equals(date.ToString()) && record.Code == code
                select new CurrencyRecord
                {
                    Id = record.Id,
                    Code = record.Code,
                    Date = record.Date,
                    Rate = record.Rate,
                    ServiceId = record.ServiceId
                };
            return items.ToList();
        }
    }
}

