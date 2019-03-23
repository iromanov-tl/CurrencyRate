using System.Collections.Generic;
using TravelLine.WebAppTemplate.Core.Domain.Logging;

namespace TravelLine.WebAppTemplate.Core.Services.Logging
{
    public interface IActivityLogService
    {
        int LogActivity(string url, string parameters, string details = null);
        int LogActivity(System.Web.HttpContextBase context);
        int LogActivity(System.Net.Http.HttpRequestMessage request);
        void LogActivityEntity(int activityLogId, string key, string name, string description, object details);

        IEnumerable<ActivityLog> GetLogPortion( int recordsCount );

        void DeleteActivity( IEnumerable<ActivityLog> activities );
    }
}