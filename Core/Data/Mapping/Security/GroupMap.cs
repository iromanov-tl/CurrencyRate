using System.Data.Entity.ModelConfiguration;
using TravelLine.CurrencyRate.Core.Domain.Security;

namespace TravelLine.CurrencyRate.Core.Data.Mapping.Security
{
    class GroupMap: EntityTypeConfiguration<Group>
    {
        public GroupMap()
        {
            ToTable( "Group" );
            HasKey( g => g.Id );
            Property( g => g.Id ).HasColumnName( "GroupId" );

            Property( g => g.IsPublic );
            Property( g => g.Description ).HasMaxLength( 500 );

            HasMany( g => g.Roles )
                .WithMany( r => r.Groups );
        }
    }
}