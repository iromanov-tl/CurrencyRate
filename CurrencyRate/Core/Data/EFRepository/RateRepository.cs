using CurrencyRate.Models;
using CurrencyRate.Models.Rate;
using System;
using System.Collections.Generic;
using System.Linq;


namespace CurrencyRate.Data.EFRepository
{
    public class RateRepository : IRateRepository
    {
        private readonly CurrencyRateContext _db;
        public RateRepository(CurrencyRateContext db)
        {
            _db = db;
        }
        public void Save(Rate rate)
        {
            List<Rate> dbRecords = _db.Rate.ToList();
            var equalItemIndex = dbRecords.FindIndex(
                item => (item.Date == rate.Date &&
                         item.Code == rate.Code &&
                         item.Value == rate.Value &&
                         item.ServiceId == rate.ServiceId));
            if (equalItemIndex != -1)
            {
                dbRecords[equalItemIndex].Code = rate.Code;
                dbRecords[equalItemIndex].Date = rate.Date;
                dbRecords[equalItemIndex].Value = rate.Value;
                dbRecords[equalItemIndex].ServiceId = rate.ServiceId;
            }
            else
            {
                _db.Rate.Add(rate);
            }
            _db.SaveChanges();
        }

        public void Save(List<Rate> rates)
        {
           foreach (Rate rate in rates)
           {
                Save(rate);
           }
        }

        public List<ReportingRate> GetItems(DateTime date, string code)
        {
            var items = from record in _db.Rate
                join service in _db.Service on record.ServiceId equals service.ServiceId
                where record.Date.Equals(date.ToString()) && record.Code == code
                select new ReportingRate
                {
                    Code = record.Code,
                    Value = record.Value,
                    ServiceUrl = service.Url
                };
            return items.ToList();
        }

    }
}

