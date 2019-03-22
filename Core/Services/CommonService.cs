using System.Collections.Generic;
using System.Linq;
using TravelLine.Database.DataAccess;

namespace TravelLine.CurrencyRate.Core.Services
{
    public abstract class CommonService<TEntity> : DalServiceWithTypedId<TEntity, int> where TEntity : EntityWithTypedId<int>, new()
    {
        protected CommonService( Data.Repository.IRepository<TEntity> repo )
        {
            Repository = repo;
        }

        public IEnumerable<TEntity> GetByIds( IEnumerable<int> ids )
        {
            return Repository.Table.Where( x => ids.Contains( x.Id ) ).ToList();
        }
    }

}
