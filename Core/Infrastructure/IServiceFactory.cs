using System;

namespace TravelLine.WebAppTemplate.Core.Infrastructure
{
    public interface IServiceFactory
    {
        /// <summary>
        /// Get service instance by binding name.
        /// </summary>
        /// <typeparam name="T">The service to resolve.</typeparam>
        T Get<T>() where T : class;

        /// <summary>
        /// Get service instance by binding name.
        /// </summary>
        /// <typeparam name="T">The service to resolve.</typeparam>
        /// <param name="name">The name of the binding.</param>
        T Get<T>( string name ) where T : class;

        object Get( Type type );
    }
}
