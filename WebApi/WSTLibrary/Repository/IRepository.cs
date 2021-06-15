using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace WSTLibrary.Repository
{
    public interface IRepository<TEntity> where TEntity : class
    {
        void Delete(TEntity entity);
        void Delete(int id);
        IEnumerable<TEntity> Get(Expression<Func<TEntity, bool>> filter = null);
        IQueryable<TEntity> Include(params Expression<Func<TEntity, object>>[] includeExpressions);
        TEntity GetById(int id);
        void Create(TEntity entity);
        void Update(TEntity entity);
    }
}
