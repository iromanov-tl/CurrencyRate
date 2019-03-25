using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TravelLine.WebAppTemplate.Core.Data.Models.Service;

namespace TravelLine.WebAppTemplate.Core.Data.EFRepository
{
    public class ServiceRepository : IServiceRepository
    {
        private readonly WebAppTemplateDbContext db;
        public List<Service> GetServices()
        {
            var services =
                from service in db.Services
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
                from service in db.Services
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

