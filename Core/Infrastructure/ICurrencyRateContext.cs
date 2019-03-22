using System;
using TravelLine.CurrencyRate.Core.DependencyManagement;

namespace TravelLine.CurrencyRate.Core.Infrastructure
{
    public interface ICurrencyRateContext
    {
        /// <summary>
        /// Dependency injection container.
        /// </summary>
        IDependencyContainerManager ContainerManager { get; }

        /// <summary>
        /// Get service instance by binding name.
        /// </summary>
        /// <typeparam name="T">The service to resolve.</typeparam>
        /// <param name="name">The name of the binding.</param>
        T Resolve<T>( string name = null ) where T : class;

        /// <summary>
        /// Get service instance by type.
        /// </summary>
        /// <param name="type">The service to resolve.</param>
        object Resolve( Type type );

        /// <summary>
        /// Try to get service instance by type.
        /// </summary>
        /// <param name="type">The service to resolve.</param>
        object TryToResolve( Type type );

        ServiceScope BeginServiceScope();
    }
}
