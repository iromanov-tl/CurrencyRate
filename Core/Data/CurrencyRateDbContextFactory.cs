using TravelLine.Database.DataAccess;
using TravelLine.Database.DataAccess.Initializers;
using TravelLine.CurrencyRate.Core.Configuration;

namespace TravelLine.CurrencyRate.Core.Data
{
    public class CurrencyRateDbContextFactory : TravelLine.Database.DataAccess.DbContextFactory
    {
        public CurrencyRateDbContextFactory( DatabaseInitializerType initializerType )
            : base( initializerType, DatabaseConfiguration.Settings.ConnectionString, DatabaseConfiguration.Settings.ReadonlyConnectionString )
        {
            SetDatabaseInitializer( initializerType );
        }

        private void SetDatabaseInitializer( DatabaseInitializerType dbInitializerType )
        {
            switch ( dbInitializerType )
            {
                case DatabaseInitializerType.CreateDatabaseIfNotExists:
                    System.Data.Entity.Database.SetInitializer(
                        new CreateDatabaseIfNotExists<CurrencyRateDbContext>() );
                    break;
                case DatabaseInitializerType.DropCreateDatabaseAlways:
                    System.Data.Entity.Database.SetInitializer(
                        new DropCreateDatabaseAlways<CurrencyRateDbContext>() );
                    break;
                case DatabaseInitializerType.DropCreateDatabaseIfModelChanges:
                    System.Data.Entity.Database.SetInitializer(
                        new DropCreateDatabaseIfModelChanges<CurrencyRateDbContext>() );
                    break;
                default:
                    System.Data.Entity.Database.SetInitializer<CurrencyRateDbContext>( null );
                    break;
            }
        }

        protected override DbContext CreateDbContext()
        {
            return new CurrencyRateDbContext( ConnectionString );
        }

        protected override ReadonlyDbContext CreateReadonlyDbContext()
        {
            return new CurrencyRateReadonlyDbContext( ReadonlyConnectionString );
        }

    }
}
