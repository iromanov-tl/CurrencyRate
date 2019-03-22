using System;

namespace TravelLine.CurrencyRate.Core.Infrastructure
{
    public class ServiceFactory : IServiceFactory
    {
        #region IServiceFactory Members

        public T Get<T>() where T : class
        {
            return CurrencyRateContext.Current.Resolve<T>();
        }

        public T Get<T>( string name ) where T : class
        {
            return CurrencyRateContext.Current.Resolve<T>( name );
        }

        public object Get( Type type )
        {
            return CurrencyRateContext.Current.TryToResolve( type );
        }

        #endregion
    }
}
