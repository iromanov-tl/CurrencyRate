using System;
using TravelLine.Database.DataAccess;
using TravelLine.Database.DataAccess.Initializers;
using TravelLine.CurrencyRate.Core.Configuration;
using TravelLine.CurrencyRate.Core.Data;
using TravelLine.CurrencyRate.Core.DependencyManagement;
using TravelLine.CurrencyRate.Core.Infrastructure;

namespace Core.Tests.Services
{
    /// <summary>
    /// Использовать данный класс нужно только для тестирования сервисов, работающих с БД
    /// </summary>
    public abstract class PersistenseTest
    {
        protected ServiceScope Scope { get; private set; }
        private static bool _engineInited;
        private IDbContextFactory DbContextFactory { get; set; }

        private DbContext DbContext
        {
            get { return DbContextFactory.GetDbContext(); }
        }

        static PersistenseTest()
        {
            AppDomain.CurrentDomain.SetData( "DataDirectory", AppDomain.CurrentDomain.BaseDirectory );
        }

        protected static void InitDependencyContainer()
        {
            if ( _engineInited )
            {
                return;
            }
            DependencyContainerServiceRegistrator.RegisterServices( CurrencyRateContext.Current.ContainerManager );
            CurrencyRateContext.Current.ContainerManager.BindDbContextFactory<IDbContextFactory, CurrencyRateDbContextFactory>( DatabaseInitializerType.DropCreateDatabaseAlways, Config.DbConnectionString, Config.DbReadonlyConnectionString );
            _engineInited = true;
        }

        protected void CreateScope()
        {
            Scope = ServiceScope.Create();
            DbContextFactory = Scope.Get<IDbContextFactory>();
            InitDb();
        }

        protected void DisposeScope()
        {
            DbContext.Database.Connection.Close();
            if ( Scope != null )
            {
                Scope.Dispose();
            }
        }

        private void InitDb()
        {
            DbContextFactory.RecreateDbContext();
            DbContext.Database.Initialize( true );
        }
    }
}
