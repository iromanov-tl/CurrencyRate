
namespace TravelLine.CurrencyRate.Services.CurrencyRateSvc
{
    public interface IResponseBuilder<in TRequest, out TResponse> where TResponse : new()
    {
        TResponse BuildResponse( TRequest request );
    }
}
