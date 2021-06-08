using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using WSTLibrary.Models;

namespace WSTLibrary.Controllers
{
  [EnableCors(origins: "*", headers: "*", methods: "*")]
  public class BorrowsController : ApiController
    {
        private LibraryContext db = new LibraryContext();

        // GET: api/Borrows
        public IQueryable<Borrow> GetBorrow()
        {
           // return db.Borrow;
      return db.Borrow.Include(c => c.book).Include(c => c.customer);
    }

        // GET: api/Borrows/5
        [ResponseType(typeof(Borrow))]
        public IHttpActionResult GetBorrow(int id)
        {
            Borrow borrow = db.Borrow.Find(id);
            if (borrow == null)
            {
                return NotFound();
            }

            return Ok(borrow);
        }

        // PUT: api/Borrows/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutBorrow(int id, Borrow borrow)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != borrow.borrowId)
            {
                return BadRequest();
            }

            db.Entry(borrow).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BorrowExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Borrows
        [ResponseType(typeof(Borrow))]
        public IHttpActionResult PostBorrow(Borrow borrow)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Borrow.Add(borrow);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = borrow.borrowId }, borrow);
        }

        // DELETE: api/Borrows/5
        [ResponseType(typeof(Borrow))]
        public IHttpActionResult DeleteBorrow(int id)
        {
            Borrow borrow = db.Borrow.Find(id);
            if (borrow == null)
            {
                return NotFound();
            }

            db.Borrow.Remove(borrow);
            db.SaveChanges();

            return Ok(borrow);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool BorrowExists(int id)
        {
            return db.Borrow.Count(e => e.borrowId == id) > 0;
        }
    }
}
