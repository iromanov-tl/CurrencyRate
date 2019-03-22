using System.Collections.Specialized;

namespace TravelLine.CurrencyRate.Core.Services.Travelline
{
    class TravellineProviderService : ITravellineProviderService
    {
        private const string ProviderParamName = "provider-id";
        private const string LanguageParamName = "language";

        private readonly ITravellineServiceClient _client;

        public TravellineProviderService( ITravellineServiceClient travellineServiceClient )
        {
            _client = travellineServiceClient;
        }

        public ProviderTranslatedInfo GetProviderTranslatedInfo( string providerId, string language )
        {
            NameValueCollection parameters = new NameValueCollection
            {
                { ProviderParamName, providerId },
                { LanguageParamName, language }
            };
            return _client.CallMethod<ProviderTranslatedInfo>( "get-provider-translated-info", parameters );
        }
    }
}