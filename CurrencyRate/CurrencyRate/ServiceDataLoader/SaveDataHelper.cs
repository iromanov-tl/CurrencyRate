using CurrencyRate.Data.EFRepository;
using CurrencyRate.Models.Rate;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CurrencyRate.ServiceDataLoader
{
    public class SaveDataHelper
    {
        private EFRepository repository;
        public void SaveData(List<Rate> rates)
        {
            foreach (Rate rate in rates)
            {
                repository.currencyRecordRepsitory.Save(rate);
            }
        }
    }
}
