using CurrencyRate.Models;
using CurrencyRate.Models.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CurrencyRate.Data.EFRepository
{
    public class ServiceRepository : IServiceRepository
    {
        private CurrencyRateContext db;
        public ServiceRepository(CurrencyRateContext db)
        {
            this.db = db;
        }
        public List<Service> GetServices()
        {
            var services =
                from service in db.Service
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
                from service in db.Service
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

