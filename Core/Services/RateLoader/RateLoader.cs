using ServiceManager.ServiceDataManager;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TravelLine.WebAppTemplate.Core.Data.EFRepository;
using TravelLine.WebAppTemplate.Core.Data.Models.CurrencyRecord;
using TravelLine.WebAppTemplate.Core.Data.Models.Service;
using TravelLine.WebAppTemplate.Core.ServiceDataManager;
using TravelLine.WebAppTemplate.Core.ServiceDataManager.Adapters;

namespace TravelLine.WebAppTemplate.Core.Services.RateLoader
{
    class RateLoader
    {
        public RateLoader(DateTime date, string currencyCode)
        {
            requestData.date = date;
            requestData.currencyCode = currencyCode;
        }
        private CurrencyRecordRepository currencyRepository = new CurrencyRecordRepository();
        private ServiceRepository serviceRepository = new ServiceRepository();
        public RequestData requestData;


        private void LoadServiceData(Service service)
        {
            switch (service.ServiceId)
            {
                case 0:
                    DataProvider.LoadServiceRate(new BankGovUaDataAdapter(), requestData);
                    break;
                case 1:
                    DataProvider.LoadServiceRate(new NationalBankDataAdapter(), requestData);
                    break;
                case 2:
                    DataProvider.LoadServiceRate(new OpenExchangeRatesDataAdapter(), requestData);
                    break;
            }
                
        }

        private List<CurrencyRecord> LoadRemainingData(List<Service> services)
        {
            foreach (Service service in services)
            {
                LoadServiceData(service);
            }
        }

        public List<CurrencyRecord> GetRates(RequestData requestData)
        {
            List<Service> services = serviceRepository.GetServices();
            List<CurrencyRecord> records = currencyRepository.GetItems(requestData.date, requestData.currencyCode);
            List<Service> servicesToCheck = services.Where(
                service => !records.Exists(
                    record => record.ServiceId == service.ServiceId
                    )
                ).ToList();

           if (servicesToCheck.Count == 0)
           {
                return records;
           }
           LoadRemainingData(servicesToCheck)
        }
    }
}
