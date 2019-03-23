using System;

namespace TravelLine.WebAppTemplate.Core.Infrastructure
{
    public class ServiceFactory : IServiceFactory
    {
        #region IServiceFactory Members

        public T Get<T>() where T : class
        {
            return WebAppTemplateContext.Current.Resolve<T>();
        }

        public T Get<T>( string name ) where T : class
        {
            return WebAppTemplateContext.Current.Resolve<T>( name );
        }

        public object Get( Type type )
        {
            return WebAppTemplateContext.Current.TryToResolve( type );
        }

        #endregion
    }
}
