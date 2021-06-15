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
    public class AuthorsController : ApiController
    {
        private readonly IRepository<Author> _authorRepository;
        

        public AuthorsController(IRepository<Author> authorRepository)
        {
            _authorRepository = authorRepository;


        }

        //CREATE


        [System.Web.Http.HttpPost]
        public IHttpActionResult Create(Author Author)
        {
            if (ModelState.IsValid)
            {

                var author = new Author
                {
                    authorId = Author.authorId,
                    authorName = Author.authorName,
                    authorSurname= Author.authorSurname

                };

                _authorRepository.Create(author);
                return Ok(author);
            }
            return BadRequest();
        }



        //READ
        [System.Web.Http.HttpGet]
        public IHttpActionResult Get(int id)
        {

            var author = _authorRepository.GetById(id);

            if (author == null)
            {
                return NotFound();
            }

            return Ok(author);
        }
        [System.Web.Http.HttpGet]
        public IHttpActionResult GetAll()
        {

            var author = _authorRepository.Get();

            if (author == null)
            {
                return NotFound();
            }

            return Ok(author);
        }



        //UPDATE
        [System.Web.Http.HttpPut]

        public IHttpActionResult Edit(int id,Author Author)
        {
            if (ModelState.IsValid)
            {
                var author = _authorRepository.GetById(id);

               // author.authorId = Author.authorId;
                author.authorName = Author.authorName;
                author.authorSurname = Author.authorSurname;


                _authorRepository.Update(author);
                return Ok(author);
            }

            return BadRequest();
        }



        //DELETE
        [System.Web.Http.HttpDelete]
        public IHttpActionResult Delete(int id)
        {
            var author = _authorRepository.GetById(id);
            _authorRepository.Delete(author);

            return Ok();
        }

    }
}