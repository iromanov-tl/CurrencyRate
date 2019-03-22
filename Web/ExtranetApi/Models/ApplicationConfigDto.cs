using System.Runtime.Serialization;

namespace TravelLine.CurrencyRate.ExtranetApi.Models
{
    [DataContract]
    public class ApplicationConfigDto
    {
        [DataMember( Name = "userAuthenticated" )]
        public bool UserAuthenticated { get; set; }

        [DataMember( Name = "userRoles" )]
        public string[] UserRoles { get; set; }

        [DataMember( Name = "appEnabled" )]
        public bool AppEnabled { get; set; }
        
        [DataMember( Name = "providerName" )]
        public string ProviderName { get; set; }
    }
}