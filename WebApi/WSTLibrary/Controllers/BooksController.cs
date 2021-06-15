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
using System.Web.Mvc;
using WSTLibrary.Models;
using WSTLibrary.Repository;

namespace WSTLibrary.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class BooksController : ApiController
    {
        private readonly IRepository<Book> _bookRepository;

        public BooksController(IRepository<Book> bookRepository)
        {
            _bookRepository = bookRepository;

        }

        //CREATE


        [System.Web.Http.HttpPost]
        public IHttpActionResult Create(Book Book)
        {
            if (ModelState.IsValid)
            {

                var book = new Book
                {
                    author=Book.author,
                    bookId = Book.bookId,
                    authorId = Book.authorId,
                    bookName = Book.bookName,
                    pagecount = Book.pagecount

                };

                _bookRepository.Create(book);
                return Ok(book);
            }
            return BadRequest();
        }



        //READ
        [System.Web.Http.HttpGet]
        public IHttpActionResult Get(int id)
        {

            var book = _bookRepository.GetById(id);

            if (book == null)
            {
                return NotFound();
            }

            return Ok(book);
        }

        [System.Web.Http.HttpGet]
        public IHttpActionResult GetAll()
        {

            var book = _bookRepository.Include(c => c.author);

          

            if (book == null)
            {
                return NotFound();
            }

            return Ok(book);
        }



        //UPDATE
        [System.Web.Http.HttpPut]

        public IHttpActionResult Edit(int id,Book Book)
        {
            if (ModelState.IsValid)
            {
                var book = _bookRepository.GetById(id);

                book.author = Book.author;
                //book.bookId = Book.bookId;
                book.authorId = Book.authorId;
                book.bookName = Book.bookName;
                book.pagecount = Book.pagecount;

                _bookRepository.Update(book);
                return Ok(book);
            }

            return BadRequest();
        }



        //DELETE
        [System.Web.Http.HttpDelete]
        public IHttpActionResult Delete(int id)
        {
            var book = _bookRepository.GetById(id);
            _bookRepository.Delete(book);

            return Ok();
        }

    }
}