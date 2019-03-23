using System;
using System.Threading;
using TravelLine.WebAppTemplate.Core.DependencyManagement;

namespace TravelLine.WebAppTemplate.Core.Infrastructure
{
    public class ServiceScope : IDisposable, IServiceFactory
    {
        static readonly ThreadLocal<ServiceScope> _current = new ThreadLocal<ServiceScope>();

        public static ServiceScope Current
        {
            get { return _current.Value; }
            set { _current.Value = value; }
        }

        public static ServiceScope Create()
        {
            return WebAppTemplateContext.Current.BeginServiceScope();
        }

        readonly IDependencyContainerManager _manager;

        public ServiceScope( IDependencyContainerManager manager )
        {
            _manager = manager;
            if ( Current == null )
            {
                Current = this;
            }
        }

        #region IDisposable Members

        public void Dispose()
        {
            if ( Current == this )
            {
                _manager.ClearScopeCache( Current );
                Current = null;
            }
        }

        #endregion

        #region IServiceFactory Members

        public T Get<T>() where T : class
        {
            return _manager.Resolve<T>();
        }

        public T Get<T>( string name ) where T : class
        {
            return _manager.Resolve<T>( name );
        }

        public object Get( Type type )
        {
            return _manager.Resolve( type );
        }

        #endregion
    }
}
