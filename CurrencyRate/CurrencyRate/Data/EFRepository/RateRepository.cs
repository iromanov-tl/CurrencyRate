﻿using CurrencyRate.Models;
using CurrencyRate.Models.Rate;
using System;
using System.Collections.Generic;
using System.Linq;


namespace CurrencyRate.Data.EFRepository
{
    public class RateRepository : IRateRepository
    {
        private readonly CurrencyRateContext db;
        public RateRepository(CurrencyRateContext db)
        {
            this.db = db;
        }
        public void Save(Rate rate)
        {
            List<Rate> dbRecords = db.Rate.ToList();
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
                db.Rate.Add(rate);
            }
            db.SaveChanges(); 
        }

        /*public List<Currency> GetItems(DateTime date, string code)
        {
            var items =
                from record in db.Rates
                join service in db.Services on record.ServiceId equals service.ServiceId
                where record.Date.Equals(date.ToString()) && record.Code == code
                select new Currency
                {
                    code = record.Code,
                    date = Convert.ToDateTime(record.Date),
                    rate = record.Value,
                    serviceUrl = service.Url
                };
            return items.ToList();
        }*/

        public List<Rate> GetItems(DateTime date, string code)
        {
            var items = from record in db.Rate
                where record.Date.Equals(date.ToString()) && record.Code == code
                select new Rate
                {
                    Id = record.Id,
                    Code = record.Code,
                    Date = record.Date,
                    Value = record.Value,
                    ServiceId = record.ServiceId
                };
            return items.ToList();
        }

        public Rate GetItem(DateTime date, string code, int serviceId)
        {
            var item =
                (from record in db.Rate
                where record.Date.Equals(date.ToString()) && record.Code == code && record.ServiceId == serviceId
                select new Rate
                {
                    Id = record.Id,
                    Code = record.Code,
                    Date = record.Date,
                    Value = record.Value,
                    ServiceId = record.ServiceId
                }).First();
            return item;
        }
    }
}
