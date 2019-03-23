using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.IO;
using System.Net;
using System.Text;
using System.Web;
using TravelLine.CurrencyRate.Core.Configuration;

namespace TravelLine.CurrencyRate.Core.Util
{
    class HttpClient
    {
        private const string BasicAuthorizationHeader = "Authorization";
        private const string PostParamsContentType = "application/x-www-form-urlencoded";

        private static string GetBasicAuthorizationHeaderValue( string user, string password )
        {
            string authInfo = user + ":" + password;
            authInfo = Convert.ToBase64String( Encoding.Default.GetBytes( authInfo ) );
            return "Basic " + authInfo;
        }

        private static void SetBasicAuthHeader( WebRequest request, string user, string password )
        {
            request.Headers[ BasicAuthorizationHeader ] = GetBasicAuthorizationHeaderValue( user, password );
        }

        private static string GetResponse( HttpWebRequest webRequest, HttpClientAdvancedSettings advancedSettings = null )
        {
            string output;
            HttpWebResponse response = null;

            if ( advancedSettings != null && advancedSettings.Timeout != null )
            {
                webRequest.Timeout = advancedSettings.Timeout.Value;
            }

            try
            {
                response = (HttpWebResponse)webRequest.GetResponse();
                output = GetResponseData( response );

                if ( response.StatusCode != HttpStatusCode.OK && response.StatusCode != HttpStatusCode.NoContent )
                {
                    throw new Exception( string.Format( "Status is {0}, code: {1}.", response.StatusCode, (int)response.StatusCode ) );
                }
            }
            catch ( WebException e )
            {
                if ( e.Response == null )
                    throw;
                response = (HttpWebResponse)e.Response;
                if ( response == null )
                    throw;

                output = GetResponseData( response );
            }
            finally
            {
                if ( response != null )
                    response.Close();
            }
            return output;
        }

        private static void FillBody( HttpWebRequest webRequest, string body )
        {
            if ( String.IsNullOrEmpty( body ) )
            {
                webRequest.ContentLength = 0;
                return;
            }

            var bodyBytes = Encoding.UTF8.GetBytes( body );

            webRequest.ContentLength = bodyBytes.Length;
            using ( Stream dataStream = webRequest.GetRequestStream() )
            {
                dataStream.Write( bodyBytes, 0, bodyBytes.Length );
            }
        }

        public static HttpWebRequest CreateWebRequest( string url, HttpClientAdvancedSettings advancedSettings = null )
        {
            HttpWebRequest webRequest = (HttpWebRequest)WebRequest.Create( url );
            webRequest.AllowAutoRedirect = false;

            var env = CurrencyRateConfiguration.Settings.Environment;
            if ( env != "prod" )
            {
                ServicePointManager.ServerCertificateValidationCallback = delegate { return true; };
            }
            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls11 | SecurityProtocolType.Tls12 | SecurityProtocolType.Tls;

            if ( advancedSettings == null )
                return webRequest;

            if ( advancedSettings.Timeout != null )
            {
                webRequest.Timeout = advancedSettings.Timeout.Value;
            }

            if ( !string.IsNullOrEmpty( advancedSettings.User ) || !string.IsNullOrEmpty( advancedSettings.Password ) )
            {
                SetBasicAuthHeader( webRequest, advancedSettings.User, advancedSettings.Password );
            }
            return webRequest;
        }

        private static string RequestPost( HttpWebRequest webRequest, string body, HttpClientAdvancedSettings advancedSettings = null )
        {
            webRequest.Method = WebRequestMethods.Http.Post;
            FillBody( webRequest, body );
            return GetResponse( webRequest, advancedSettings );
        }

        public static string RequestPost( HttpWebRequest webRequest, NameValueCollection postParams, HttpClientAdvancedSettings advancedSettings = null )
        {
            webRequest.ContentType = PostParamsContentType;
            string body = String.Empty;
            if ( postParams != null )
            {
                body = ParamsToString( postParams );
            }
            return RequestPost( webRequest, body, advancedSettings );
        }

        public static string RequestPost( HttpWebRequest webRequest, NameValueCollection postParams, IList<KeyValuePair<string, byte[]>> files, HttpClientAdvancedSettings advancedSettings = null )
        {
            webRequest.Method = WebRequestMethods.Http.Post;
            string boundary = "----------------------------" + DateTime.Now.Ticks.ToString( "x" );
            byte[] boundarybytes = Encoding.ASCII.GetBytes( "\r\n--" + boundary + "\r\n" );
            string fileHeaderTemplate = "Content-Disposition: form-data; name=\"{0}\";filename=\"{1}\"\r\n Content-Type: application/octet-stream\r\n\r\n";
            string paramHeaderTemplate = "Content-Disposition: form-data; name=\"{0}\"\r\n\r\n{1}";
            webRequest.ContentType = "multipart/form-data; boundary=" + boundary;

            if ( postParams != null && files != null )
            {
                Stream requestStream = webRequest.GetRequestStream();

                for ( int i = 0; i < files.Count; i++ )
                {
                    requestStream.Write( boundarybytes, 0, boundarybytes.Length );

                    string header = string.Format( fileHeaderTemplate, "file" + i, files[ i ].Key );
                    byte[] headerbytes = Encoding.UTF8.GetBytes( header );

                    requestStream.Write( headerbytes, 0, headerbytes.Length );

                    requestStream.Write( files[ i ].Value, 0, files[ i ].Value.Length );
                }
                foreach ( var paramName in postParams.AllKeys )
                {
                    requestStream.Write( boundarybytes, 0, boundarybytes.Length );

                    string formitem = string.Format( paramHeaderTemplate, paramName, postParams[ paramName ] );
                    byte[] formitembytes = Encoding.UTF8.GetBytes( formitem );
                    requestStream.Write( formitembytes, 0, formitembytes.Length );
                }
                requestStream.Write( boundarybytes, 0, boundarybytes.Length );
                requestStream.Close();
            }
            return GetResponse( webRequest, advancedSettings );
        }

        private static string ParamsToString( NameValueCollection nvc )
        {
            return string.Join( "&", Array.ConvertAll( nvc.AllKeys, key => string.Format( "{0}={1}", HttpUtility.UrlEncode( key ), HttpUtility.UrlEncode( nvc[ key ] ) ) ) );
        }

        public static string ParamsToString( List<KeyValuePair<string, string>> kvs )
        {
            return string.Join( "&", Array.ConvertAll( kvs.ToArray(), kv => string.Format( "{0}={1}", HttpUtility.UrlEncode( kv.Key ), HttpUtility.UrlEncode( kv.Value ) ) ) );
        }

        private static string GetResponseData( HttpWebResponse response )
        {
            string output = string.Empty;
            using ( Stream data = response.GetResponseStream() )
            {
                if ( data != null )
                {
                    using ( var reader = new StreamReader( data ) )
                    {
                        output = reader.ReadToEnd();
                    }
                }
            }
            return output;
        }

        public static string GetDataFromUrl(string url, HttpClientAdvancedSettings advancedSettings = null)
        {
            HttpWebRequest request = CreateWebRequest(url);
            return GetResponse(request);
        }
    }
}
