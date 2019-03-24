using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TravelLine.WebAppTemplate.Core.Data.EFRepository;
using TravelLine.WebAppTemplate.Core.Data.Models.CurrencyRecord;
using TravelLine.WebAppTemplate.Core.Data.Models.Service;

namespace TravelLine.WebAppTemplate.Core.Services.RateLoader
{
    class RateLoader
    {
        private CurrencyRecordRepository currencyRepository = new CurrencyRecordRepository();
        private ServiceRepository serviceRepository = new ServiceRepository();
        public void GetRates(DateTime date, string currencyCode)
        {
            List<Service> services = serviceRepository.GetServices();
            List<CurrencyRecord> records = currencyRepository.GetItems(date, currencyCode);
            List<Service> servicesToCheck = services.Where(
                service => !records.Exists(
                    record => record.ServiceId == service.ServiceId
                    )
                ).ToList();

            foreach(CurrencyRecord record in records)
            {
                //if (record.Rate == null)
            }
        }
    }
}
