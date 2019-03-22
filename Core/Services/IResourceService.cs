using System.Collections.Generic;
using TravelLine.CurrencyRate.Core.Domain.TLHotel.Resources;

namespace TravelLine.CurrencyRate.Core.Services
{
    public interface IResourceService
    {
        List<City> GetCities();
        List<City> GetCities( IEnumerable<int> cityIds );
        List<City> GetCities( string countryId, int regionId );
        List<City> GetCities( string countryId );
        List<City> GetCities( List<string> countryIds );
        List<City> GetCitiesByRegionId( int regionId );
        List<City> GetCitiesByRegionIds( List<int> regionIds );
        City GetCity( int cityId );
        List<Region> GetRegions();
        List<Region> GetRegions( string countryId );
        List<Region> GetRegions( List<string> countryIds );
        Region GetRegion( int regionId );
        Country GetCountry( string countryId );
        List<Country> GetCountries();
        ProviderData GetProviderData( int providerId );
        IEnumerable<City> GetCitiesWithCache( string language );
        IEnumerable<Region> GetRegionsWithCache( string language );
        IEnumerable<Country> GetCountriesWithCache( string language );
    }
}