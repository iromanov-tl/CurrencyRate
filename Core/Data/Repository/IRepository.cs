using TravelLine.Database.DataAccess;

namespace TravelLine.CurrencyRate.Core.Data.Repository
{
    /// <summary> Entity repository interface (for entity with int primary key)  </summary>
    /// <typeparam name="TEntity">The entity type.</typeparam>
    public interface IRepository<TEntity> : IRepositoryWithTypedId<TEntity, int>
        where TEntity : EntityWithTypedId<int>, new()
    {

    }
}
