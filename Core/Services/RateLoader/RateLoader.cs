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
        private readonly EFRepository repository;
        public RequestData requestData;


        private CurrencyRecord LoadServiceData(Service service)
        {
            /*TODO: Refactor with polymorphysm*/
            switch (service.ServiceId)
            {
                case 0:
                    DataProvider.LoadServiceRate(new BankGovUaDataAdapter(), requestData);
                    return repository.currencyRecordRepsitory.GetItem(requestData.date, requestData.currencyCode, 0);
                case 1:
                    DataProvider.LoadServiceRate(new NationalBankDataAdapter(), requestData);
                    return repository.currencyRecordRepsitory.GetItem(requestData.date, requestData.currencyCode, 1);
                case 2:
                    DataProvider.LoadServiceRate(new OpenExchangeRatesDataAdapter(), requestData);
                    return repository.currencyRecordRepsitory.GetItem(requestData.date, requestData.currencyCode, 2);
                default: throw new Exception("Invalid service id");
            }
            /*End TODO: Refactor with polymorphysm*/
        }

        private List<CurrencyRecord> LoadRemainingData(List<Service> services)
        {
            List<CurrencyRecord> newRecords = new List<CurrencyRecord>();
            foreach (Service service in services)
            {
                newRecords.Add(LoadServiceData(service));
            }
            return newRecords;
        }

        public List<CurrencyRecord> GetRates(RequestData requestData)
        {
            List<Service> services = repository.serviceRepository.GetServices();
            List<CurrencyRecord> records = repository.currencyRecordRepsitory.GetItems(requestData.date, requestData.currencyCode);
            List<Service> servicesToCheck = services.Where(
                service => !records.Exists(
                    record => record.ServiceId == service.ServiceId
                    )
                ).ToList();

            if (servicesToCheck.Count == 0)
            {
                 return records;
            }
            records.AddRange(LoadRemainingData(servicesToCheck));
            return records;
        }
    }
}
