using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Web;
using WSTLibrary.Models;

namespace WSTLibrary.Repository
{
  
        public class Repository<TEntity> : IRepository<TEntity> where TEntity : class
        {
            private LibraryContext _context;
            private DbSet<TEntity> _dbSet;

            public Repository(LibraryContext context)
            {
                _context = context;
                _dbSet = _context.Set<TEntity>();
            }

            public void Create(TEntity entity)
            {
                _dbSet.Add(entity);
                _context.SaveChanges();
            }

            public void Delete(TEntity entity)
            {
                _dbSet.Remove(entity);
                _context.SaveChanges();
            }

            public void Delete(int id)
            {
                var entityToDelete = _dbSet.Find(id);
                Delete(entityToDelete);
            }

            public IEnumerable<TEntity> Get(Expression<Func<TEntity, bool>> filter = null)
            {
                IQueryable<TEntity> query = _dbSet;

                if (filter != null)
                {
                    query = query.Where(filter);
                }

                return query.ToList();
            }

            public TEntity GetById(int id)
            {
                return _dbSet.Find(id);
            }

            public void Update(TEntity entity)
            {
                _dbSet.Attach(entity);
                _context.Entry(entity).State = EntityState.Modified;
                _context.SaveChanges();
            }
        public IQueryable<TEntity> Include(params Expression<Func<TEntity, object>>[] includeExpressions)
        {
            IDbSet<TEntity> dbSet = _context.Set<TEntity>();

            IQueryable<TEntity> query = null;
            foreach (var includeExpression in includeExpressions)
            {
                query = dbSet.Include(includeExpression);
            }

            return query ?? dbSet;
        }

    }

    
}