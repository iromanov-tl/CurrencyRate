using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using TravelLine.WebAppTemplate.Core.Domain.Logging;

namespace TravelLine.WebAppTemplate.Core.Data.Mapping.Logging
{
    public class ActivityLogEntityMap : EntityTypeConfiguration<ActivityLogEntity>
    {
        public ActivityLogEntityMap()
        {
            ToTable( "ActivityLogEntity" );
            HasKey( ev => ev.Id );
            Property(ev => ev.Id).HasColumnName("ActivityLogEntityId").HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);
            Property( ev => ev.Key ).IsRequired();
            Property( ev => ev.Data ).IsRequired();
            Property(ev => ev.ActivityLogId).IsRequired();
            Property(ev => ev.Name);
            Property(ev => ev.Description);
        }
    }
}