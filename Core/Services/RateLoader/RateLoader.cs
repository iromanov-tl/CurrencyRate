using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TravelLine.WebAppTemplate.Core.Data.EFRepository;
using TravelLine.WebAppTemplate.Core.Data.Models.CurrencyRecord;

namespace TravelLine.WebAppTemplate.Core.Services.RateLoader
{
    class RateLoader
    {
        private CurrencyRecordRepository currencyRepository = new CurrencyRecordRepository();
        public void GetRates(DateTime date, string currencyCode)
        {
            List<CurrencyRecord> records = currencyRepository.GetItems(date, currencyCode);
            foreach(CurrencyRecord record in records)
            {
                //if (record.Rate == null)
            }
        }
    }
}
