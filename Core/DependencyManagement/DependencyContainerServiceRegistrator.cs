using TravelLine.AccountsLib.Claims.Services;
using TravelLine.Database.DataAccess;
using TravelLine.Database.DataAccess.Initializers;
using TravelLine.WebAppTemplate.Core.Configuration;
using TravelLine.WebAppTemplate.Core.Data;
using TravelLine.WebAppTemplate.Core.Data.Repository;
using TravelLine.WebAppTemplate.Core.Infrastructure;
using TravelLine.WebAppTemplate.Core.Services;
using TravelLine.WebAppTemplate.Core.Services.Logging;
using TravelLine.WebAppTemplate.Core.Services.Travelline;

namespace TravelLine.WebAppTemplate.Core.DependencyManagement
{
    public class DependencyContainerServiceRegistrator
    {
        public static void RegisterServices( IDependencyContainerManager containerManager )
        {
            containerManager.BindDbContextFactory<IDbContextFactory,WebAppTemplateDbContextFactory>( DatabaseInitializerType.None, Config.DbConnectionString, Config.DbReadonlyConnectionString );

            containerManager.Bind( typeof ( IRepository<> ), typeof ( Repository<> ) );
            containerManager.Bind( typeof ( IRepositoryWithTypedId<,> ), typeof ( EfRepositoryWithTypedId<,> ) );

            containerManager.BindAsSingleton<IServiceFactory, ServiceFactory>();
            containerManager.Bind<ILogService, LogService>();
            containerManager.Bind<IActivityLogService, ActivityLogService>();
            containerManager.Bind<IExportActivityLogService, ExportActivityLogService>();
            containerManager.Bind<IUserService, UserService>();
            containerManager.Bind<IProviderService, ProviderService>();
            containerManager.Bind<IResourceService, ResourceService>();

            containerManager.Bind<IClaimsAuthService, ClaimsAuthService>();
            containerManager.Bind<IProviderObjectGroupService, ProviderObjectGroupService>();

            containerManager.Bind<ITravellineServiceClient, TravellineServiceClient>();
            containerManager.Bind<ITravellineProviderService, TravellineProviderService>();
        }
    }
}
