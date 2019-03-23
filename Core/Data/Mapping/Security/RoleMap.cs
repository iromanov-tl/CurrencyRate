using System.Data.Entity.ModelConfiguration;
using TravelLine.WebAppTemplate.Core.Domain.Security;

namespace TravelLine.WebAppTemplate.Core.Data.Mapping.Security
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