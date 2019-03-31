﻿using System;
using System.Collections.Generic;

namespace CurrencyRate.Models.Rate
{
    public interface IRateRepository
    {
        void Save(Rate rate);
        void Save(List<Rate> rates);
        List<ReportingRate> GetItems(DateTime date, string code);
    }
}
