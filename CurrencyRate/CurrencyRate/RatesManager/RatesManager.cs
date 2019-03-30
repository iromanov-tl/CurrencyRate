using CurrencyRate.Data.EFRepository;
using CurrencyRate.Models;
using CurrencyRate.Models.Rate;
using CurrencyRate.Models.Service;
using CurrencyRate.ServiceDataProvider;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CurrencyRate.RatesManager
{
    public class RatesManager
    {
        private readonly IRateRepository _rateRepository;
        private RequestData _requestData;
        private readonly DataProvider _dataProvider;
        public RatesManager(DataProvider dataProvider, IRateRepository rateRepository)
        {
            _dataProvider = dataProvider;
            _rateRepository = rateRepository;
        }

        private List<RateRecord> GetRatesFromDB(RequestData requestData)
        {
            return _rateRepository.GetItems(requestData.date, requestData.currencyCode);
        }

        public List<RateRecord> GetRates(DateTime date, string currencyCode)
        {
            _requestData = new RequestData(date, currencyCode);

            List<RateRecord> ratesRecords = GetRatesFromDB(_requestData);
            if (ratesRecords.Count == 0)
            {
                List<Rate> rates = _dataProvider.GetServicesRates(_requestData.date);
                _rateRepository.Save(rates);
            }
            ratesRecords = GetRatesFromDB(_requestData);
            return ratesRecords;
        }
    }
}
