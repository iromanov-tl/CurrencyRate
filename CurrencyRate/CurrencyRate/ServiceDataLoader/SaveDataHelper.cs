using CurrencyRate.Data.EFRepository;
using CurrencyRate.Models;
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
        private readonly IRateRepository _rateRepository;

        public SaveDataHelper(IRateRepository rateRepository)
        {
            _rateRepository = rateRepository;
        }

        public void SaveData(List<Rate> rates)
        {
            foreach (Rate rate in rates)
            {
                _rateRepository.Save(rate);
            }
        }
    }
}
