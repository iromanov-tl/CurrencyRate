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
        private CurrencyRateContext db;
        public EFRepository(CurrencyRateContext db)
        {
            this.db = db;
            rateRepository = new RateRepository(db);
            serviceRepository = new ServiceRepository(db);
        }
        public RateRepository rateRepository;
        public ServiceRepository serviceRepository;
    }
}
