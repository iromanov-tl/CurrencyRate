using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using TravelLine.WebAppTemplate.Core.Domain.Logging;

namespace TravelLine.WebAppTemplate.Core.Data.Mapping.Logging
{
    public class ActivityLogMap : EntityTypeConfiguration<ActivityLog>
    {
        public ActivityLogMap()
        {
            ToTable( "ActivityLog" );
            HasKey( ev => ev.Id );
            Property(ev => ev.Id).HasColumnName("ActivityLogId").HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);
            Property( ev => ev.Url ).IsRequired();
            Property(ev => ev.Time).IsRequired();
            Property(ev => ev.Parameters);
            Property(ev => ev.Detail);

            HasMany( al => al.Entities )
                .WithOptional()
                .HasForeignKey( ale => ale.ActivityLogId );
        }
    }
}