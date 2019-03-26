using System;
using System.Collections.Generic;

namespace CurrencyRate.Models.Rate
{
    public interface IRateRepository
    {
        void Save(Rate rate);
        List<Rate> GetItems(DateTime date, string code);
        Rate GetItem(DateTime date, string code, int serviceId);
    }
}
