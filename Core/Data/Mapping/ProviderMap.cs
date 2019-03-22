using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using TravelLine.CurrencyRate.Core.Domain;

namespace TravelLine.CurrencyRate.Core.Data.Mapping
{
    public class ProviderMap : EntityTypeConfiguration<Provider>
    {
        public ProviderMap()
        {
            ToTable( "Provider" );
            HasKey( provider => provider.Id );
            Property( provider => provider.Id ).HasColumnName( "ProviderId" ).HasDatabaseGeneratedOption( DatabaseGeneratedOption.None );
            Property( provider => provider.Name ).IsRequired().HasMaxLength( 1000 );
            Property( provider => provider.IsEnabled ).IsRequired();
            Property( provider => provider.CreationDate ).IsRequired();
            Property( provider => provider.SyncTime );
            Property( pr => pr.TimezoneId ).HasMaxLength( 100 ).IsRequired();
            Property( provider => provider.Language ).IsRequired().HasMaxLength( 5 );
            Ignore( provider => provider.TimeZone );
        }
    }
}