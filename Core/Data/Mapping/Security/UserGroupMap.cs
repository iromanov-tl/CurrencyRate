using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using TravelLine.WebAppTemplate.Core.Domain.Security;

namespace TravelLine.WebAppTemplate.Core.Data.Mapping.Security
{
    public class UserGroupMap : EntityTypeConfiguration<UserGroup>
    {
        public UserGroupMap()
        {
            ToTable( "UserGroup" ).HasKey( ug => ug.Id );
            Property( ug => ug.Id ).HasDatabaseGeneratedOption( DatabaseGeneratedOption.Identity );
            Property( ug => ug.Username ).IsRequired().HasMaxLength( 255 );
            Property( ug => ug.GroupId ).IsRequired().HasMaxLength( 100 );
        }
    }
}