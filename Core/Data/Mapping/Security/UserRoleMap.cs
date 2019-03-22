using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using TravelLine.CurrencyRate.Core.Domain.Security;

namespace TravelLine.CurrencyRate.Core.Data.Mapping.Security
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
