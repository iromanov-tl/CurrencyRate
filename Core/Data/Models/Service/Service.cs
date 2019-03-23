using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TravelLine.WebAppTemplate.Core.Data.Models.Service
{
    public class Service
    {
        [Key, Column("id_service")]
        public int ServiceId { get; set; }

        [Column("url")]
        public string Url { get; set; }
    }
}
