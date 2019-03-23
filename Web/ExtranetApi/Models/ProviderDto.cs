using System;
using System.Runtime.Serialization;
using TravelLine.WebAppTemplate.Core.Domain;

namespace TravelLine.WebAppTemplate.ExtranetApi.Models
{
    [DataContract]
    public class ProviderDto
    {
        [DataMember( Name = "id" )]
        public int Id { get; set; }
        [DataMember( Name = "name" )]
        public string Name { get; set; }
        [DataMember( Name = "isEnabled" )]
        public bool IsEnabled { get; set; }
        [DataMember( Name = "mode" )]
        public OperationMode Mode { get; set; }
        [DataMember( Name = "language" )]
        public string Language { get; set; }
        [DataMember( Name = "creationDate" )]
        public DateTime CreationDate { get; set; }
        [DataMember( Name = "synctTime" )]
        public DateTime? SyncTime { get; set; }
        public TimeZoneInfo TimeZone { get; set; }
    }
}