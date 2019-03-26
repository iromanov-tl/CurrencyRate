using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TravelLine.WebAppTemplate.Core.Data.Models.Rate
{
    public class Rate
    {
        [Key, Column("id_rate")]
        public int Id { get; set; }

        [Column("id_service")]
        public int ServiceId { get; set; }

        [Column("code")]
        public string Code { get; set; }

        [Column("value")]
        public double Value { get; set; }

        [Column("date")]
        public string Date { get; set; }
    }
}
