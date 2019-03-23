using System;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Reflection;
using TravelLine.WebAppTemplate.Core.Data.Models;

namespace TravelLine.WebAppTemplate.Core.Data
{
    public class WebAppTemplateDbContext : TravelLine.Database.DataAccess.DbContext
    {
        public WebAppTemplateDbContext( string nameOrConnectionString ) : base( nameOrConnectionString )
        {
        }

        protected override void OnModelCreating( DbModelBuilder modelBuilder )
        {
            var typesToRegister = Assembly.GetExecutingAssembly().GetTypes()
                .Where( type => !string.IsNullOrEmpty( type.Namespace ) )
                .Where(
                    type =>
                        type.BaseType != null && type.BaseType.IsGenericType &&
                        type.BaseType.GetGenericTypeDefinition() == typeof( EntityTypeConfiguration<> ) );
            foreach ( var type in typesToRegister )
            {
                dynamic configurationInstance = Activator.CreateInstance( type );
                modelBuilder.Configurations.Add( configurationInstance );
            }
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
            base.OnModelCreating( modelBuilder );
        }

        public DbSet<CurrencyRecord> CurrencyRecords { get; set; }
        public DbSet<Service> Service { get; set; }

    }
}
