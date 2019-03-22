using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using TravelLine.CurrencyRate.Core.Domain.Logging;

namespace TravelLine.CurrencyRate.Core.Data.Mapping.Logging
{
    public class LogMap : EntityTypeConfiguration<Log>
    {
        public LogMap()
        {
            ToTable("Log");
            HasKey(l => l.Id);
            Property(l => l.Id).HasColumnName("LogId").HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);

            Property(l => l.LogLevel);
            Property(l => l.Created).IsRequired();
            Property(l => l.Message).IsRequired();
            Property(l => l.Details);
            Property(l => l.LocationInfo);
        }
    }
}