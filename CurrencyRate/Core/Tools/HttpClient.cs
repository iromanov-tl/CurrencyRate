using CurrencyRate.Tools;
using System;
using System.IO;
using System.Net;
using System.Text;

namespace CurrencyRate.Core.Tools
{
    public class HttpClient
    {

        private const string BasicAuthorizationHeader = "Authorization";
        private const string PostParamsContentType = "application/x-www-form-urlencoded";

        private static string GetBasicAuthorizationHeaderValue(string user, string password)
        {
            string authInfo = user + ":" + password;
            authInfo = Convert.ToBase64String(Encoding.Default.GetBytes(authInfo));
            return "Basic " + authInfo;
        }

        private static void SetBasicAuthHeader(WebRequest request, string user, string password)
        {
            request.Headers[BasicAuthorizationHeader] = GetBasicAuthorizationHeaderValue(user, password);
        }

        public static HttpWebRequest CreateWebRequest(string url, HttpClientAdvancedSettings advancedSettings = null)
        {
            HttpWebRequest webRequest = (HttpWebRequest)WebRequest.Create(url);
            webRequest.AllowAutoRedirect = false;

            if (advancedSettings == null)
                return webRequest;

            if (advancedSettings.Timeout != null)
            {
                webRequest.Timeout = advancedSettings.Timeout.Value;
            }

            if (!string.IsNullOrEmpty(advancedSettings.User) || !string.IsNullOrEmpty(advancedSettings.Password))
            {
                SetBasicAuthHeader(webRequest, advancedSettings.User, advancedSettings.Password);
            }
            return webRequest;
        }

        private static string GetResponse(HttpWebRequest webRequest, HttpClientAdvancedSettings advancedSettings = null)
        {
            string output;
            HttpWebResponse response = null;

            if (advancedSettings != null && advancedSettings.Timeout != null)
            {
                webRequest.Timeout = advancedSettings.Timeout.Value;
            }

            try
            {
                response = (HttpWebResponse)webRequest.GetResponse();
                output = GetResponseData(response);

                if (response.StatusCode != HttpStatusCode.OK && response.StatusCode != HttpStatusCode.NoContent)
                {
                    throw new Exception(string.Format("Status is {0}, code: {1}.", response.StatusCode, (int)response.StatusCode));
                }
            }
            catch (WebException e)
            {
                if (e.Response == null)
                    throw;
                response = (HttpWebResponse)e.Response;
                if (response == null)
                    throw;

                output = GetResponseData(response);
            }
            finally
            {
                if (response != null)
                    response.Close();
            }
            return output;
        }

        private static string GetResponseData(HttpWebResponse response)
        {
            string output = string.Empty;
            using (Stream data = response.GetResponseStream())
            {
                if (data != null)
                {
                    using (var reader = new StreamReader(data))
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
