using System.Data.Entity.ModelConfiguration;
using TravelLine.CurrencyRate.Core.Domain.Security;

namespace TravelLine.CurrencyRate.Core.Data.Mapping.Security
{
    public class ProviderObjectGroupMap : EntityTypeConfiguration<ProviderObjectGroup>
    {
        public ProviderObjectGroupMap()
        {
            ToTable( "ProviderObjectGroup" );
            HasKey( providerObjectGroup => providerObjectGroup.Id );
            Property( providerObjectGroup => providerObjectGroup.Id ).HasColumnName( "ProviderObjectGroupId" );
        }
    }
}