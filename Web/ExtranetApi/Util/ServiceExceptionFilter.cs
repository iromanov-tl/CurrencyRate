using System.Net;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Reflection;
using System.Web.Http.Filters;
using Common.Logging;
using TravelLine.CurrencyRate.ExtranetApi.Exceptions;

namespace TravelLine.CurrencyRate.ExtranetApi.Util
{
    public class ServiceExceptionFilter : ExceptionFilterAttribute
    {
        private static ILog _log = LogManager.GetLogger( MethodBase.GetCurrentMethod().DeclaringType );

        public override void OnException( HttpActionExecutedContext context )
        {
            _log.Error( context.Exception.Message, context.Exception );

            var exception = context.Exception as RequestException;
            if ( exception != null )
            {
                var response = new ServiceErrorResponse
                {
                    ErrorCode = exception.ErrorCode,
                    Message = exception.Message
                };
                context.Response = new HttpResponseMessage( HttpStatusCode.InternalServerError )
                {
                    Content = new ObjectContent( typeof( ServiceErrorResponse ), response,
                        new JsonMediaTypeFormatter() )
                };
            }
            else
            {
                base.OnException( context );
            }
        }
    }
}