using CurrencyRate.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CurrencyRate.Data.EFRepository
{
    public class EFRepository
    {
        public EFRepository(CurrencyRateContext db)
        {
            rateRepository = new RateRepository(db);
            serviceRepository = new ServiceRepository(db);
        }
        public RateRepository rateRepository;
        public ServiceRepository serviceRepository;
    }
}
