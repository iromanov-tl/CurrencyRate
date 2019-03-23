using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using TravelLine.WebAppTemplate.Core.Domain.Security;

namespace TravelLine.WebAppTemplate.Core.Data.Mapping.Security
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