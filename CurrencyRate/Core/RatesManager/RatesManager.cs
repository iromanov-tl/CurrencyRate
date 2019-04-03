﻿using CurrencyRate.Core.Models.Rate;
using CurrencyRate.Core.ServiceDataProvider;
using System;
using System.Collections.Generic;

namespace CurrencyRate.Core.RatesManager
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

        private List<ReportingRate> GetRatesFromDB(RequestData requestData)
        {
            return _rateRepository.GetItems(requestData.date, requestData.currencyCode);
        }

        public List<ReportingRate> GetRates(DateTime date, string currencyCode)
        {
            _requestData = new RequestData(date, currencyCode);

            List<ReportingRate> ratesRecords = GetRatesFromDB(_requestData);
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