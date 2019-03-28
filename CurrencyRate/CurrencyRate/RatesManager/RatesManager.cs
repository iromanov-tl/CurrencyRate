using CurrencyRate.Data.EFRepository;
using CurrencyRate.Models;
using CurrencyRate.Models.Rate;
using CurrencyRate.Models.Service;
using CurrencyRate.ServiceDataLoader;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CurrencyRate.RatesManager
{
    public class RatesManager
    {
        private readonly IRateRepository _rateRepository;
        private RequestData requestData;
        private readonly DataProvider _dataProvider;
        public RatesManager(DataProvider dataProvider, IRateRepository rateRepository)
        {
            _dataProvider = dataProvider;
            _rateRepository = rateRepository;
        }

        private List<RateRecord> LoadRatesFromDB(RequestData requestData)
        {
            return _rateRepository.GetItems(requestData.date, requestData.currencyCode);
        }

        public List<RateRecord> GetRates(DateTime date, string currencyCode)
        {
            requestData = new RequestData(date, currencyCode);

            List<RateRecord> rates = LoadRatesFromDB(requestData);
            if (rates.Count == 0)
            {
                _dataProvider.LoadServicesRates(requestData.date);
            }
            rates = LoadRatesFromDB(requestData);
            return rates;
        }
    }
}
