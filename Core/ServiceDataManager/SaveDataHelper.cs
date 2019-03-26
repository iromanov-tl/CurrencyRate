using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TravelLine.WebAppTemplate.Core.Data.EFRepository;
using TravelLine.WebAppTemplate.Core.Data.Models.Rate;

namespace TravelLine.WebAppTemplate.Core.ServiceDataManager
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
