using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Net;
using Newtonsoft.Json;
using TravelLine.CurrencyRate.Core.Configuration;
using TravelLine.CurrencyRate.Core.Util;

namespace TravelLine.CurrencyRate.Core.Services.Travelline
{
    class TravellineServiceClient : ITravellineServiceClient
    {
        static readonly TravellineServiceConfig Settings = TravellineServiceConfig.Settings;

        const string ApiKeyHeaderName = "X-TravelLine-ApiKey";
        readonly string _serviceType;

        public TravellineServiceClient()
        {
            _serviceType = "provider";
        }


        public string CallMethod( string method, NameValueCollection parameters, IList<KeyValuePair<string, byte[]>> files = null )
        {
            HttpWebRequest webRequest = CreateWebRequest( method );
            string response = ( files == null ) ? HttpClient.RequestPost( webRequest, parameters ) : HttpClient.RequestPost( webRequest, parameters, files );
            return response;
        }

        public TResponse CallMethod<TResponse>( string method, NameValueCollection parameters, IList<KeyValuePair<string, byte[]>> files = null )
        {
            string response = CallMethod( method, parameters, files );
            TResponse responseObj = default( TResponse );
            if ( response != null )
            {
                responseObj = JsonConvert.DeserializeObject<TResponse>( response );
            }
            return responseObj;
        }

        private string CreateUrl( string method, string version = "2.0" )
        {
            return String.Format( "{0}/service/{1}/{2}/{3}", Settings.ServicesBaseUrl, version, _serviceType, method );
        }

        private HttpWebRequest CreateWebRequest( string method )
        {
            HttpWebRequest webRequest = HttpClient.CreateWebRequest( CreateUrl( method ) );
            webRequest.Headers.Add( ApiKeyHeaderName, Settings.ApiKey );
            return webRequest;
        }
    }
}