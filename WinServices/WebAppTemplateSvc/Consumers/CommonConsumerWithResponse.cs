using System;
using TravelLine.TLTransit.Common.Consumers;

namespace TravelLine.WebAppTemplate.Services.WebAppTemplateSvc.Consumers
{
    public class CommonConsumerWithResponse<TRequest, TResponse> : BaseConsumerWithContext<TRequest>
        where TRequest : class
        where TResponse : class, new()
    {
        private readonly IResponseBuilder<TRequest, TResponse> _responseBuilder;

        public CommonConsumerWithResponse( IResponseBuilder<TRequest, TResponse> responseBuilder )
        {
            _responseBuilder = responseBuilder;
        }

        protected override void Process( IConsumerContext<TRequest> context )
        {
            var response = _responseBuilder.BuildResponse( context.Message );
            context.Respond( response );
        }

        protected override void OnError( TRequest message, Exception ex )
        {
            throw ex;
        }
    }
}