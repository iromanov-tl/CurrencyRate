using System.Collections.Generic;
using System.Collections.Specialized;

namespace TravelLine.WebAppTemplate.Core.Services.Travelline
{
    interface ITravellineServiceClient
    {
        string CallMethod( string method, NameValueCollection parameters, IList<KeyValuePair<string, byte[]>> files = null );
        TResponse CallMethod<TResponse>( string method, NameValueCollection parameters, IList<KeyValuePair<string, byte[]>> files = null );
    }
}