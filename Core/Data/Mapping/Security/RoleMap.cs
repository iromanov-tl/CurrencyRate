using System.Data.Entity.ModelConfiguration;
using TravelLine.CurrencyRate.Core.Domain.Security;

namespace TravelLine.CurrencyRate.Core.Data.Mapping.Security
{
    class RoleMap : EntityTypeConfiguration<Role>
    {
        public RoleMap()
        {
            ToTable( "Role" ).HasKey( r => r.Id );
            Property( r => r.Id ).HasColumnName( "RoleId" );

            Property( r => r.Description ).HasMaxLength( 500 );
        }
    }
}