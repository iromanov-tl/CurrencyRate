using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using CurrencyRate.Models;

namespace CurrencyRate.Models
{
    public class CurrencyRateContext : DbContext
    {
        public CurrencyRateContext (DbContextOptions<CurrencyRateContext> options)
            : base(options)
        {
        }

        public DbSet<CurrencyRate.Models.Rate.Rate> Rate { get; set; }

        public DbSet<CurrencyRate.Models.Service.Service> Service { get; set; }
    }
}
