namespace TravelLine.WebAppTemplate.ExtranetApi.Exceptions
{
    public class ServiceErrorResponse
    {
        public ErrorCode ErrorCode = ErrorCode.UnknownError;
        public string Message;
    }
}