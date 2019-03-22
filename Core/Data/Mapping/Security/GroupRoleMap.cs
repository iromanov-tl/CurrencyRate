using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using TravelLine.CurrencyRate.Core.Domain.Security;

namespace TravelLine.CurrencyRate.Core.Data.Mapping.Security
{
    internal class GroupRoleMap : EntityTypeConfiguration<GroupRole>
    {
        public GroupRoleMap()
        {
            ToTable( "GroupRole" ).HasKey( ug => ug.Id );
            Property( ug => ug.Id ).HasDatabaseGeneratedOption( DatabaseGeneratedOption.Identity );
            Property( ug => ug.RoleId ).IsRequired().HasMaxLength( 100 );
            Property( ug => ug.GroupId ).IsRequired().HasMaxLength( 100 );
        }
    }
}