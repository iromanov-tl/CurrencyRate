﻿using CurrencyRate.Core.Models.Service;
using CurrencyRate.Core.Models.Rate;
using System.Collections.Generic;
using System.Linq;
using CurrencyRate.Core.Models;

namespace CurrencyRate.Core.Data.EFRepository
{
    public class ServiceRepository : IServiceRepository
    {
        private readonly CurrencyRateContext _db;
        public ServiceRepository(CurrencyRateContext db)
        {
            _db = db;
        }
        public List<Service> GetServices()
        {
            var services =
                from service in _db.Service
                select new Service
                {
                    ServiceId = service.ServiceId,
                    Url = service.Url
                };
            return services.ToList();
        }

        public Service GetService(int id)
        {
            var services =
                from service in _db.Service
                where service.ServiceId == id
                select new Service
                {
                    ServiceId = service.ServiceId,
                    Url = service.Url
                };
            return services.First();
        }
    }
}
