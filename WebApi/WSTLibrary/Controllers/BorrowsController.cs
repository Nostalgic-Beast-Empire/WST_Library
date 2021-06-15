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
using WSTLibrary.Repository;

namespace WSTLibrary.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class BorrowsController : ApiController
    {
        private readonly IRepository<Borrow> _borrowRepository;
        

        public BorrowsController(IRepository<Borrow> borrowRepository)
        {
            _borrowRepository = borrowRepository;


        }

        //CREATE


        [System.Web.Http.HttpPost]
        public IHttpActionResult Create(Borrow Borrow)
        {
            if (ModelState.IsValid)
            {

                var borrow = new Borrow
                {
                    customer=Borrow.customer,
                    book=Borrow.book,
                    borrowId = Borrow.borrowId,
                    customerId=Borrow.customerId,
                    bookId=Borrow.bookId,
                    takenDate=Borrow.takenDate,
                    broughtDate=Borrow.broughtDate

                };

                _borrowRepository.Create(borrow);
                return Ok(borrow);
            }
            return BadRequest();
        }



        //READ
        [System.Web.Http.HttpGet]
        public IHttpActionResult Get(int id)
        {

            var borrow = _borrowRepository.GetById(id);

            if (borrow == null)
            {
                return NotFound();
            }

            return Ok(borrow);
        }

        [System.Web.Http.HttpGet]
        public IHttpActionResult GetAll()
        {

            var borrow = _borrowRepository.Include(c => c.book).Include(c => c.customer);

            if (borrow == null)
            {
                return NotFound();
            }

            return Ok(borrow);
        }



        //UPDATE
        [System.Web.Http.HttpPut]

        public IHttpActionResult Edit(int id, Borrow Borrow)
        {
            if (ModelState.IsValid)
            {
                var borrow = _borrowRepository.GetById(id);

                //  borrow.borrowId = Borrow.borrowId;
                borrow.customer = Borrow.customer;
                borrow.book = Borrow.book;
                borrow.customerId = Borrow.customerId;
                borrow.bookId = Borrow.bookId;
                borrow.takenDate = Borrow.takenDate;
                borrow.broughtDate = Borrow.broughtDate;

                _borrowRepository.Update(borrow);
                return Ok(borrow);
            }

            return BadRequest();
        }



        //DELETE
        [System.Web.Http.HttpDelete]
        public IHttpActionResult Delete(int id)
        {
            var borrow = _borrowRepository.GetById(id);
            _borrowRepository.Delete(borrow);

            return Ok();
        }
    }
}