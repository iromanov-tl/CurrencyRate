using TravelLine.Database.DataAccess;

namespace TravelLine.WebAppTemplate.Core.Data.Repository
{
    public class Repository<TEntity> : EfRepositoryWithTypedId<TEntity, int>, IRepository<TEntity>
        where TEntity : EntityWithTypedId<int>, new()
    {
        public Repository( IDbContextFactory dbFactory ) : base( dbFactory )
        {
        }
    }
}
