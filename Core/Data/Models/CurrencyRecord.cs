using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TravelLine.WebAppTemplate.Core.Data.Models
{
    public class CurrencyRecord
    {
        [Key, Column("id_record")]
        public int Id { get; set; }

        [Column("id_service")]
        public int ServiceId { get; set; }

        [Column("code")]
        public string Code { get; set; }

        [Column("rate")]
        public double Rate { get; set; }

        [Column("date")]
        public string Date { get; set; }
    }
}
