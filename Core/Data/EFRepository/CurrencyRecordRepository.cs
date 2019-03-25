using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TravelLine.WebAppTemplate.Core.Data.Models.CurrencyRecord;


namespace TravelLine.WebAppTemplate.Core.Data.EFRepository
{
    public class CurrencyRecordRepository : ICurrencyRecordRepository
    {
        private readonly WebAppTemplateDbContext db;
        public void Save(CurrencyRecord record)
        {
            List<CurrencyRecord> dbRecords = db.CurrencyRecords.ToList();
            var equalItemIndex = dbRecords.FindIndex(
                item => (item.Date == record.Date &&
                         item.Code == record.Code &&
                         item.Rate == record.Rate &&
                         item.ServiceId == record.ServiceId));
            if (equalItemIndex != -1)
            {
                dbRecords[equalItemIndex].Code = record.Code;
                dbRecords[equalItemIndex].Date = record.Date;
                dbRecords[equalItemIndex].Rate = record.Rate;
                dbRecords[equalItemIndex].ServiceId = record.ServiceId;
            }
            else
            {
                db.CurrencyRecords.Add(record);
            }
            
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

        public CurrencyRecord GetItem(DateTime date, string code, int serviceId)
        {
            var item =
                (from record in db.CurrencyRecords
                where record.Date.Equals(date.ToString()) && record.Code == code && record.ServiceId == serviceId
                select new CurrencyRecord
                {
                    Id = record.Id,
                    Code = record.Code,
                    Date = record.Date,
                    Rate = record.Rate,
                    ServiceId = record.ServiceId
                }).First();
            return item;
        }
    }
}

