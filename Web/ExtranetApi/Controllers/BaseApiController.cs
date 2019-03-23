using System;
using System.Web;
using System.Web.Http;
using Common.Logging;
using Ninject;
using TravelLine.WebAppTemplate.Core.Domain;
using TravelLine.WebAppTemplate.Core.Infrastructure;
using TravelLine.WebAppTemplate.Core.Services.Logging;
using TravelLine.WebAppTemplate.WebLib.Security;

namespace TravelLine.WebAppTemplate.ExtranetApi.Controllers
{
    public class BaseApiController : ApiController
    {
        private readonly Lazy<IActivityLogService> _lazyActivityLogService;
        private readonly Lazy<IUserContextService> _lazyUserContextService;

        /// <summary>
        /// Do not use this in Controller constructor
        /// </summary>
        [Inject]
        public IServiceFactory ServiceFactory { get; set; }

        protected readonly ILog Log = LogManager.GetLogger<BaseApiController>();
        protected IActivityLogService ActivityLogService => _lazyActivityLogService.Value;
        protected IUserContextService UserContextService => _lazyUserContextService.Value;

        public BaseApiController()
        {
            _lazyActivityLogService = new Lazy<IActivityLogService>( () => ServiceFactory.Get<IActivityLogService>() );
            _lazyUserContextService = new Lazy<IUserContextService>( () => ServiceFactory.Get<IUserContextService>() );
        }

        private HttpContextBase _currentHttpContext; 
        public HttpContextBase CurrentHttpContext
        {
            get
            {
                if ( ( Request != null ) && Request.Properties.ContainsKey( "MS_HttpContext" ) )
                {
                    _currentHttpContext = (HttpContextBase)Request.Properties[ "MS_HttpContext" ];
                }
                if ( HttpContext.Current != null )
                {
                    _currentHttpContext = new HttpContextWrapper( HttpContext.Current );
                }
                return _currentHttpContext;
            }
        }

        private Provider _provider;
        protected Provider Provider => _provider ?? ( _provider = UserContextService.GetCurrentProvider() );

        protected int LogActivity()
        {
            return ActivityLogService.LogActivity(Request);
        }

        protected void LogEntityState( int logId, object entity, string entityKey, string entityName = null, string entityDesc = null )
        {
            if ( entityName == null )
            {
                entityName = entity.GetType().Name;
            }

            ActivityLogService.LogActivityEntity( logId, entityKey, entityName, entityDesc, entity );
        }

        protected string CurrentUserLanguage => ( (WebAppTemplateIdentity)( (WebAppTemplatePrincipal)CurrentHttpContext.User ).Identity ).Language;

        protected string CurrentUserName => ( (WebAppTemplateIdentity)( (WebAppTemplatePrincipal)CurrentHttpContext.User ).Identity ).Name;
    }
}