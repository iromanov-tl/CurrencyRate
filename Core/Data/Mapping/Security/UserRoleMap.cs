using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using TravelLine.WebAppTemplate.Core.Domain.Security;

namespace TravelLine.WebAppTemplate.Core.Data.Mapping.Security
{
    public class UserRoleMap : EntityTypeConfiguration<UserRole>
    {
        public UserRoleMap()
        {
            ToTable( "UserRole" ).HasKey( ur => ur.Id );
            Property( ur => ur.Id ).HasDatabaseGeneratedOption( DatabaseGeneratedOption.Identity );
            Property( ur => ur.Username ).IsRequired().HasMaxLength( 255 );
            Property( ur => ur.RoleId ).IsRequired().HasMaxLength( 100 );
        }
    }
}
