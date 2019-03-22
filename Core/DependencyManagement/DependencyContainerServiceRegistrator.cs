using TravelLine.AccountsLib.Claims.Services;
using TravelLine.Database.DataAccess;
using TravelLine.Database.DataAccess.Initializers;
using TravelLine.CurrencyRate.Core.Configuration;
using TravelLine.CurrencyRate.Core.Data;
using TravelLine.CurrencyRate.Core.Data.Repository;
using TravelLine.CurrencyRate.Core.Infrastructure;
using TravelLine.CurrencyRate.Core.Services;
using TravelLine.CurrencyRate.Core.Services.Logging;
using TravelLine.CurrencyRate.Core.Services.Travelline;

namespace TravelLine.CurrencyRate.Core.DependencyManagement
{
    public class DependencyContainerServiceRegistrator
    {
        public static void RegisterServices( IDependencyContainerManager containerManager )
        {
            containerManager.BindDbContextFactory<IDbContextFactory,CurrencyRateDbContextFactory>( DatabaseInitializerType.None, Config.DbConnectionString, Config.DbReadonlyConnectionString );

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
