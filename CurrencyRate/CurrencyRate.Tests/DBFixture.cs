using CurrencyRate.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace CurrencyRate.Tests
{
    public class DBFixture
    {
        public DBFixture()
        {
            var serviceCollection = new ServiceCollection();
            serviceCollection
                .AddDbContext<CurrencyRateContext>(options => options.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=CurrencyRateContext-d09038ed-707a-43fd-85c5-ea671c289162;Trusted_Connection=True;MultipleActiveResultSets=true"),
                    ServiceLifetime.Transient);

            ServiceProvider = serviceCollection.BuildServiceProvider();
        }

        public ServiceProvider ServiceProvider { get; private set; }
    }
}
