using TravelLine.Database.DataAccess;

namespace TravelLine.WebAppTemplate.Core.Data.Repository
{
    /// <summary> Entity repository interface (for entity with string primary key)  </summary>
    /// <typeparam name="TEntity">The entity type.</typeparam>
    public interface IRepositoryStringId<TEntity> : IRepositoryWithTypedId<TEntity, string>
        where TEntity : EntityWithTypedId<string>, new()
    {

    }
}