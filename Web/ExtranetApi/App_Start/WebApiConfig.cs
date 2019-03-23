using System.Web.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using TravelLine.WebAppTemplate.Core.AppHealth;
using TravelLine.WebAppTemplate.Core.Configuration;
using TravelLine.WebAppTemplate.ExtranetApi.Util;
using TravelLine.WebAppTemplate.WebLib.Handlers;

namespace TravelLine.WebAppTemplate.ExtranetApi
{
    public static class WebApiConfig
    {
        public static void Register( HttpConfiguration config )
        {
            //configure placeholder param for logfile path used in app.config
            log4net.GlobalContext.Properties[ "LogsDir" ] = Config.LogsDir;

            // Handlers
            var logger = new MethodOverrideLogger();
            config.MessageHandlers.Add( new TLUILib.Handlers.MethodOverrideHandler( logger ) );
            config.MessageHandlers.Add( new UserContextInitHandler() );

            // Filters
            config.Filters.Add( new ServiceExceptionFilter() );

            // Routes
            config.Routes.MapAppHealthRoute( new HealthCheckParams
            {
                TestBusQueueConnection = true,
                TestDatabaseConnection = true
            } );
            config.MapHttpAttributeRoutes();

            // Media type formatters
            if ( config.Formatters.JsonFormatter != null )
            {
                config.Formatters.JsonFormatter.SerializerSettings.Converters.Add( new StringEnumConverter() );
                config.Formatters.JsonFormatter.SerializerSettings.DateFormatHandling = DateFormatHandling.IsoDateFormat;
                config.Formatters.JsonFormatter.SerializerSettings.DateTimeZoneHandling = DateTimeZoneHandling.Local;
                config.Formatters.JsonFormatter.SerializerSettings.NullValueHandling = NullValueHandling.Ignore;
                config.Formatters.JsonFormatter.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
                #if DEBUG
                config.Formatters.JsonFormatter.SerializerSettings.Formatting = Formatting.Indented;
                #endif
            }

        }
        
    }


}