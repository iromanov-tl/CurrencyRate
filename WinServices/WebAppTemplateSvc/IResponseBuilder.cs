
namespace TravelLine.WebAppTemplate.Services.WebAppTemplateSvc
{
    public interface IResponseBuilder<in TRequest, out TResponse> where TResponse : new()
    {
        TResponse BuildResponse( TRequest request );
    }
}
