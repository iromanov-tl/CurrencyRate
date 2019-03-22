using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using Newtonsoft.Json;
using TravelLine.Database.DataAccess;
using TravelLine.CurrencyRate.Core.Data.Repository;
using TravelLine.CurrencyRate.Core.Domain.Logging;

namespace TravelLine.CurrencyRate.Core.Services.Logging
{
    public class ActivityLogService : IActivityLogService
    {
        private readonly IDbContextFactory _dbFactory;
        private readonly IRepository<ActivityLog> _activityLogRepository;
        private readonly IRepository<ActivityLogEntity> _activityLogEntityRepository;

        public ActivityLogService(IDbContextFactory dbFactory,
            IRepository<ActivityLog> activityLogRepository,
            IRepository<ActivityLogEntity> activityLogEntityRepository )
        {
            _dbFactory = dbFactory;
            _activityLogRepository = activityLogRepository;
            _activityLogEntityRepository = activityLogEntityRepository;
        }

        void DeleteActivity( ActivityLog activity )
        {
            if ( activity == null )
                throw new ArgumentNullException( nameof( activity ) );

            if ( activity.Id > 0 )
            {
                _activityLogEntityRepository.Delete( activity.Entities );
            }

            _activityLogRepository.Delete( activity );
        }

        #region IActivityLogService Members

        public int LogActivity(string url, string parameters, string detail = null)
        {
            var activityLog = new ActivityLog
            {
                Time = DateTime.Now,
                Url = url,
                Parameters = parameters,
                Detail = detail
            };

            _activityLogRepository.Save( activityLog );
            return activityLog.Id;
        }

        public int LogActivity(HttpContextBase context)
        {
            string parameters = "GET:" + context.Request.QueryString + " \nPOST:" + context.Request.Form;
            return LogActivity( context.Request.RawUrl, parameters, context.Request.ServerVariables + "\n\n" + parameters );
        }

        public int LogActivity(HttpRequestMessage request)
        {
            var context = GetHttpContext(request);
            string parameters = "GET:" + context.Request.QueryString + " \nPOST:" + context.Request.Form;
            return LogActivity(context.Request.RawUrl, parameters, context.Request.ServerVariables + "\n\n" + parameters);
        }

        public void LogActivityEntity( int activityLogId, string key, string name, string description, object data )
        {
            string dataString = ( data is string ) ? 
                data.ToString()
                :
                JsonConvert.SerializeObject( data, Formatting.None, new JsonSerializerSettings { ReferenceLoopHandling = ReferenceLoopHandling.Ignore } );

            var activityLogEntity = new ActivityLogEntity
            {
                ActivityLogId = activityLogId,
                Key = key,
                Name = name,
                Description = description,
                Data = dataString
            };

            _activityLogEntityRepository.Save( activityLogEntity );
        }

        public IEnumerable<ActivityLog> GetLogPortion( int recordsCount )
        {
            return _activityLogRepository.Table.OrderBy( item => item.Id ).Take( recordsCount );
        }

        public void DeleteActivity( IEnumerable<ActivityLog> activities )
        {
            using (var dbContextTransaction = _dbFactory.GetDbContext().BeginTransaction())
            {
                try
                {
                    foreach (var activity in activities)
                    {
                        DeleteActivity(activity);
                    }

                    dbContextTransaction.Commit();
                }
                catch (Exception)
                {
                    dbContextTransaction.Rollback();
                }
            } 
        }

        #endregion

        #region util methods

        private static HttpContext GetHttpContext(HttpRequestMessage request)
        {
            if (request.Properties.ContainsKey("MS_HttpContext"))
            {
                return ((HttpContextWrapper) (request.Properties["MS_HttpContext"])).ApplicationInstance.Context;
            }
            if (HttpContext.Current != null)
            {
                return HttpContext.Current;
            }
            return null;
        }

        #endregion
    }
}