using System;

namespace TravelLine.CurrencyRate.ExtranetApi.Exceptions
{
    public class RequestException : Exception
    {
        public ErrorCode ErrorCode;

        public RequestException()
        {
        }

        public RequestException( string message, ErrorCode code ) : base( message )
        {
            ErrorCode = code;
        }
    }
}