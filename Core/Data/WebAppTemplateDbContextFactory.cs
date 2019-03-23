using TravelLine.Database.DataAccess;
using TravelLine.Database.DataAccess.Initializers;
using TravelLine.WebAppTemplate.Core.Configuration;

namespace TravelLine.WebAppTemplate.Core.Data
{
    public class WebAppTemplateDbContextFactory : TravelLine.Database.DataAccess.DbContextFactory
    {
        public WebAppTemplateDbContextFactory( DatabaseInitializerType initializerType )
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
                        new CreateDatabaseIfNotExists<WebAppTemplateDbContext>() );
                    break;
                case DatabaseInitializerType.DropCreateDatabaseAlways:
                    System.Data.Entity.Database.SetInitializer(
                        new DropCreateDatabaseAlways<WebAppTemplateDbContext>() );
                    break;
                case DatabaseInitializerType.DropCreateDatabaseIfModelChanges:
                    System.Data.Entity.Database.SetInitializer(
                        new DropCreateDatabaseIfModelChanges<WebAppTemplateDbContext>() );
                    break;
                default:
                    System.Data.Entity.Database.SetInitializer<WebAppTemplateDbContext>( null );
                    break;
            }
        }

        protected override DbContext CreateDbContext()
        {
            return new WebAppTemplateDbContext( ConnectionString );
        }

        protected override ReadonlyDbContext CreateReadonlyDbContext()
        {
            return new WebAppTemplateReadonlyDbContext( ReadonlyConnectionString );
        }

    }
}
