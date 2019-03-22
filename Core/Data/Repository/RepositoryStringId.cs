using TravelLine.Database.DataAccess;

namespace TravelLine.CurrencyRate.Core.Data.Repository
{
    public class RepositoryStringId<TEntity> : EfRepositoryWithTypedId<TEntity, string>, IRepositoryStringId<TEntity>
        where TEntity : EntityWithTypedId<string>, new()
    {
        public RepositoryStringId( IDbContextFactory dbFactory ) : base( dbFactory )
        {
        }
    }
}