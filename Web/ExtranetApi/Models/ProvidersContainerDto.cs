using System.Collections.Generic;
using System.Runtime.Serialization;

namespace TravelLine.WebAppTemplate.ExtranetApi.Models
{
    [DataContract]
    public class ProvidersContainerDto
    {
        [DataMember( Name = "totalCount" )]
        public int TotalCount { get; set; }

        [DataMember( Name = "filteredCount" )]
        public int FilteredCount { get; set; }

        [DataMember( Name = "items" )]
        public List<ProviderDto> Items { get; set; }
    }
}