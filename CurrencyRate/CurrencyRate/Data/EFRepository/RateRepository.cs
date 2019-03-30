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
                         item.CurrencyId == rate.CurrencyId &&
                         item.Value == rate.Value &&
                         item.ServiceId == rate.ServiceId));
            if (equalItemIndex != -1)
            {
                dbRecords[equalItemIndex].CurrencyId = rate.CurrencyId;
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

        public List<RateRecord> GetItems(DateTime date, int currencyId)
        {
            var items = from record in _db.Rate
                join service in _db.Service on record.ServiceId equals service.ServiceId
                join currency in _db.Currency on record.ServiceId equals currency.CurrencyId
                where record.Date.Equals(date.ToString()) && record.CurrencyId == currencyId
                        select new RateRecord
                {
                    Id = record.Id,
                    Code = currency.Code,
                    Value = record.Value,
                    ServiceUrl = service.Url
                };
            return items.ToList();
        }
    }
}

