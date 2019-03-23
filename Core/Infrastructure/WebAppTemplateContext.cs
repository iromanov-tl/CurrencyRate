using System;
using TravelLine.WebAppTemplate.Core.DependencyManagement;
using TravelLine.WebAppTemplate.Core.DependencyManagement.Ninject;

namespace TravelLine.WebAppTemplate.Core.Infrastructure
{
    public class WebAppTemplateContext : IWebAppTemplateContext
    {
        private static IWebAppTemplateContext _instance;
        private static readonly object SyncObj = new Object();
        private readonly IDependencyContainerManager _containerManager;

        private WebAppTemplateContext()
        {
            _containerManager = new NinjectContainerManager();
        }

        public static IWebAppTemplateContext Current
        {
            get
            {
                lock ( SyncObj )
                {
                    return _instance ?? ( _instance = new WebAppTemplateContext() );
                }
            }
        }

        #region IWebAppTemplateContext Members

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
