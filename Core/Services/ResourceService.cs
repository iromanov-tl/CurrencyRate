using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Caching;
using TravelLine.MessageContracts.TLCore;
using TravelLine.TLTransit.Common;
using TravelLine.TLTransit.Common.Helpers;
using TravelLine.CurrencyRate.Core.Domain.TLHotel.Resources;

namespace TravelLine.CurrencyRate.Core.Services
{
    public class ResourceService : IResourceService
    {
        private const int CacheLifetimeInMinutes = 60;

        private const int TimeoutSec = 50;

        private readonly ITLTransitConnector _busConnector;

        private ObjectCache Cache
        {
            get { return MemoryCache.Default; }
        }

        private static readonly string _language = "ru";

        public ResourceService( ITLTransitConnector busConnector )
        {
            _busConnector = busConnector;
        }

        public List<City> GetCities()
        {
            return GetCitiesWithCache( _language ).ToList();
        }

        public List<City> GetCities( string countryId, int regionId )
        {
            var cities = GetCities();
            return cities.Where( c => c.CountryId == countryId && c.RegionId == regionId ).ToList();
        }

        public List<City> GetCities( string countryId )
        {
            var cities = GetCities();
            return cities.Where( c => c.CountryId == countryId ).ToList();
        }

        public List<City> GetCities( List<string> countryIds )
        {
            var cities = GetCities();
            if ( countryIds == null )
            {
                return cities.ToList();
            }

            return cities.Where( c => countryIds.Contains( c.CountryId ) ).ToList();
        }

        public List<City> GetCities( IEnumerable<int> cityIds )
        {
            var cities = GetCities();
            return cities.Where( c => cityIds.Contains( c.CityId ) ).ToList();
        }

        public List<City> GetCitiesByRegionId( int regionId )
        {
            var cities = GetCities();
            return cities.Where( c => c.RegionId == regionId ).ToList();
        }

        public List<City> GetCitiesByRegionIds( List<int> regionIds )
        {
            var cities = GetCities();
            if ( regionIds == null )
            {
                return cities.ToList();
            }

            return cities.Where( c => regionIds.Contains( c.RegionId ) ).ToList();
        }

        public City GetCity( int cityId )
        {
            var cities = GetCities();
            return cities.FirstOrDefault( c => c.CityId == cityId );
        }

        public List<Region> GetRegions()
        {
            return GetRegionsWithCache( _language ).ToList();
        }

        public List<Region> GetRegions( string countryId )
        {
            var regions = GetRegions();
            return regions.Where( r => r.CountryId == countryId ).ToList();
        }

        public List<Region> GetRegions( List<string> countryIds )
        {
            var regions = GetRegions();
            if ( countryIds == null )
            {
                return regions.ToList();
            }

            return regions.Where( r => countryIds.Contains( r.CountryId ) ).ToList();
        }

        public Region GetRegion( int regionId )
        {
            var regions = GetRegions();
            return regions.FirstOrDefault( r => r.RegionId == regionId );
        }

        public List<Country> GetCountries()
        {
            return GetCountriesWithCache( _language ).ToList();
        }

        public ProviderData GetProviderData( int providerId )
        {
            return GetProviderDataWithCache( providerId );
        }

        public Country GetCountry( string countryId )
        {
            var countries = GetCountries();
            return countries.FirstOrDefault( c => c.CountryId == countryId );
        }

        public IEnumerable<Country> GetCountriesWithCache( string language )
        {
            var cacheKey = string.Format( "countries_{0}", language );
            var data = Cache.Get( cacheKey );
            if ( data != null )
            {
                return data as IEnumerable<Country>;
            }

            GetCountriesRS response = _busConnector.GetResponseAsync<GetCountriesRQ, GetCountriesRS>( new GetCountriesRQ
            {
                LanguageId = language
            }, TimeoutSec ).Result;

            var result = response.Countries.Select( c => new Country
            {
                CountryId = c.Id,
                Name = c.Name,
                Alpha2Code = c.Alpha2Code
            } );

            Cache.Set( cacheKey, result, DateTimeOffset.Now.AddMinutes( CacheLifetimeInMinutes ) );
            return result;
        }

        public ProviderData GetProviderDataWithCache( int providerId )
        {
            var cacheKey = string.Format( "providerData_{0}", providerId );
            var data = Cache.Get( cacheKey );
            if ( data != null )
            {
                return data as ProviderData;
            }

            GetProviderDataRS response = _busConnector.GetResponseAsync<GetProviderDataRQ, GetProviderDataRS>( new GetProviderDataRQ
            {
                ProviderId = providerId
            }, TimeoutSec ).Result;

            var result = new ProviderData
            {
                Name = response.Name,
                City = response.City
            };

            Cache.Set( cacheKey, result, DateTimeOffset.Now.AddMinutes( CacheLifetimeInMinutes ) );

            return result;
        }

        public IEnumerable<Region> GetRegionsWithCache( string language )
        {
            var cacheKey = string.Format( "regions_{0}", language );
            var data = Cache.Get( cacheKey );
            if ( data != null )
            {
                return data as IEnumerable<Region>;
            }

            GetRegionsRS response = _busConnector.GetResponseAsync<GetRegionsRQ, GetRegionsRS>( new GetRegionsRQ
            {
                LanguageId = language
            }, TimeoutSec ).Result;

            var result = response.Regions.Select( r => new Region
            {
                RegionId = r.Id,
                Name = r.Name,
                CountryId = r.CountryId
            } );

            Cache.Set( cacheKey, result, DateTimeOffset.Now.AddMinutes( CacheLifetimeInMinutes ) );
            return result;
        }

        public IEnumerable<City> GetCitiesWithCache( string language )
        {
            var cacheKey = string.Format( "cities_{0}", language );
            var data = Cache.Get( cacheKey );
            if ( data != null )
            {
                return data as IEnumerable<City>;
            }

            GetCitiesRS response = _busConnector.GetResponseAsync<GetCitiesRQ, GetCitiesRS>( new GetCitiesRQ
            {
                LanguageId = language
            }, TimeoutSec ).Result;

            var result = response.Cities.Select( c => new City
            {
                CityId = c.Id,
                Name = c.Name,
                RegionId = c.RegionId,
                CountryId = c.CountryId
            } );

            Cache.Set( cacheKey, result, DateTimeOffset.Now.AddMinutes( CacheLifetimeInMinutes ) );
            return result;
        }
    }
}