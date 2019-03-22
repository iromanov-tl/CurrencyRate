using System;
using Ninject;
using Ninject.Activation;
using Ninject.Activation.Caching;
using Ninject.Modules;
using TravelLine.Database.DataAccess.Initializers;

namespace TravelLine.CurrencyRate.Core.DependencyManagement.Ninject
{
    class NinjectContainerManager : IDependencyContainerManager
    {
        private readonly IKernel _kernel;
        private Func<object> _defaultScopeFunc = () => null;

        public NinjectContainerManager()
            : this( new StandardKernel() )
        {
        }

        public NinjectContainerManager( IKernel kernel )
        {
            _kernel = kernel;
        }

        public object Container { get { return _kernel; } }

        public void LoadModule( object module )
        {
            var modules = module as NinjectModule;
            if ( modules != null )
                _kernel.Load( modules );
            else
                throw new ArgumentException( "Module is not Ninject module" );
        }

        public void SetDefaultScope( Func<object> defaultScopeFunc )
        {
            _defaultScopeFunc = defaultScopeFunc;
        }

        public T Resolve<T>( string name = null ) where T : class
        {
            if ( string.IsNullOrEmpty( name ) )
            {
                return _kernel.Get<T>();
            }

            return _kernel.Get<T>( name );
        }

        public object Resolve( Type type )
        {
            return _kernel.Get( type );
        }

        public object TryToResolve( Type type )
        {
            return _kernel.TryGet( type );
        }

        public void ClearScopeCache( object scope )
        {
            _kernel.Components.Get<ICache>().Clear( scope );
        }

        public void BindAsSingleton<T1, T2>() where T2 : T1
        {
            _kernel.Bind<T1>().To<T2>().InSingletonScope();
        }

        public void RebindToConstant<TService>( TService obj )
        {
            _kernel.Rebind<TService>().ToConstant( obj );
        }

        public void BindToMethod<TService>( Func<IContext, TService> method )
        {
            _kernel.Bind<TService>().ToMethod( method ).InTransientScope();
        }

        public void BindToMethodAsSingleton<TService>( Func<IContext, TService> method )
        {
            _kernel.Bind<TService>().ToMethod( method ).InSingletonScope();
        }

        public void Bind<TService, TImplementation>() where TImplementation : TService
        {
            _kernel.Bind<TService>().To<TImplementation>().InScope( CurrentScope );
        }

        public void Bind( Type service, Type implementation )
        {
            _kernel.Bind( service ).To( implementation ).InScope( CurrentScope );
        }

        public void BindDbContextFactory<TService, TImplementation>( DatabaseInitializerType databaseInitializerType, string connectionString, string readOnlyConnectionString ) where TImplementation : TService
        {
            _kernel.Rebind<TService>().To<TImplementation>().InScope( CurrentScope )
                .WithConstructorArgument( "initializerType", context => databaseInitializerType )
                .WithConstructorArgument( "connectionString", context => connectionString )
                .WithConstructorArgument( "readonlyConnectionString", context => readOnlyConnectionString );
        }

        private object CurrentScope( IContext ctx )
        {
            return _defaultScopeFunc();
        }
    }

}
