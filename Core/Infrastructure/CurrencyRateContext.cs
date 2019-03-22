using System;
using TravelLine.CurrencyRate.Core.DependencyManagement;
using TravelLine.CurrencyRate.Core.DependencyManagement.Ninject;

namespace TravelLine.CurrencyRate.Core.Infrastructure
{
    public class CurrencyRateContext : ICurrencyRateContext
    {
        private static ICurrencyRateContext _instance;
        private static readonly object SyncObj = new Object();
        private readonly IDependencyContainerManager _containerManager;

        private CurrencyRateContext()
        {
            _containerManager = new NinjectContainerManager();
        }

        public static ICurrencyRateContext Current
        {
            get
            {
                lock ( SyncObj )
                {
                    return _instance ?? ( _instance = new CurrencyRateContext() );
                }
            }
        }

        #region ICurrencyRateContext Members

        public IDependencyContainerManager ContainerManager { get { return _containerManager; } }

        public T Resolve<T>( string name = null ) where T : class
        {
            return _containerManager.Resolve<T>( name );
        }

        public object Resolve( Type type )
        {
            return _containerManager.Resolve( type );
        }

        public object TryToResolve( Type type )
        {
            return _containerManager.TryToResolve( type );
        }

        public ServiceScope BeginServiceScope()
        {
            return new ServiceScope( ContainerManager );
        }

        #endregion
    }
}
