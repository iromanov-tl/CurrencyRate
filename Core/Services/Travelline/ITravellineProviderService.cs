namespace TravelLine.CurrencyRate.Core.Services.Travelline
{
    public interface ITravellineProviderService
    {
        ProviderTranslatedInfo GetProviderTranslatedInfo( string providerId, string language = "ru" );
    }
}