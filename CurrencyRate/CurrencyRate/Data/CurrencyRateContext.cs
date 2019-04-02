using Microsoft.EntityFrameworkCore;

namespace CurrencyRate.Models
{
    public class CurrencyRateContext : DbContext
    {
        public CurrencyRateContext (DbContextOptions<CurrencyRateContext> options)
            : base(options)
        {
        }

        public DbSet<Rate.Rate> Rate { get; set; }

        public DbSet<Service.Service> Service { get; set; }
    }
}
