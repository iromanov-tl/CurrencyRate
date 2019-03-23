using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TravelLine.WebAppTemplate.Core.Data.Models.Service;

namespace TravelLine.WebAppTemplate.Core.Data.EFRepository
{
    class ServiceRepository : IServiceRepository
    {
        private readonly WebAppTemplateDbContext db;
        public List<Service> GetServices()
        {
            /*List<Service> services =
                from service in services
                select new Service
                {
                    ServiceId = service.Id,
                    Url = service.Url
                };
            return services;*/
        }
    }
}

