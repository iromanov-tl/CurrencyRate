using ServiceManager.ServiceDataManager;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TravelLine.WebAppTemplate.Core.Data.EFRepository;
using TravelLine.WebAppTemplate.Core.Data.Models.Rate;
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


       /* private Rate LoadServiceData(Service service)
        {
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
        }

        private List<Rate> LoadRemainingData(List<Service> services)
        {
            List<Rate> newRecords = new List<Rate>();
            foreach (Service service in services)
            {
                newRecords.Add(LoadServiceData(service));
            }
            return newRecords;
        }*/

        private List<Rate> LoadRatesFromDB(RequestData requestData)
        {
            return repository.currencyRecordRepsitory.GetItems(requestData.date, requestData.currencyCode);
        }

        public List<Rate> GetRates(RequestData requestData)
        {
            List<Rate> rates = LoadRatesFromDB(requestData);
            if (rates.Count == 0)
            {
                DataProvider.LoadServicesRates(requestData.date);
            }
            rates = LoadRatesFromDB(requestData);
            return rates;
        }
    }
}
