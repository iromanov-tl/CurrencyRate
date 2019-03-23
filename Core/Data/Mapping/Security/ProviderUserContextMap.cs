using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using TravelLine.WebAppTemplate.Core.Domain.Security;

namespace TravelLine.WebAppTemplate.Core.Data.Mapping.Security
{
    public class ProviderUserContextMap : EntityTypeConfiguration<ProviderUserContext>
    {
        public ProviderUserContextMap()
        {
            ToTable( "ProviderUserContext" );
            HasKey( puc => puc.Id );
            Property( puc => puc.Id ).HasDatabaseGeneratedOption( DatabaseGeneratedOption.Identity );
            Property( puc => puc.Username ).IsRequired().HasMaxLength( 255 );
        }
    }
}