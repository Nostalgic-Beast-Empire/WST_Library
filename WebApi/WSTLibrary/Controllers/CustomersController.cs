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
    public class CustomersController : ApiController
    {
        private readonly IRepository<Customer> _customerRepository;
       

        public CustomersController(IRepository<Customer> customerRepository)
        {
            _customerRepository = customerRepository;


        }
        //CREATE


        [System.Web.Http.HttpPost]
        public IHttpActionResult Create(Customer Customer)
        {
            if (ModelState.IsValid)
            {

                var customer = new Customer
                {
                    customerId = Customer.customerId,
                    customerName=Customer.customerName,
                    customerSurname=Customer.customerSurname,
                    customerBirthdate=Customer.customerBirthdate

                };

                _customerRepository.Create(customer);
                return Ok(customer);
            }
            return BadRequest();
        }



        //READ
        [System.Web.Http.HttpGet]
        public IHttpActionResult Get(int id)
        {

            var customer = _customerRepository.GetById(id);

            if (customer == null)
            {
                return NotFound();
            }

            return Ok(customer);
        }
        [System.Web.Http.HttpGet]
        public IHttpActionResult GetAll()
        {

            var customer = _customerRepository.Get();

            if (customer == null)
            {
                return NotFound();
            }

            return Ok(customer);
        }



        //UPDATE
        [System.Web.Http.HttpPut]

        public IHttpActionResult Edit(int id, Customer Customer)
        {
            if (ModelState.IsValid)
            {
                var customer = _customerRepository.GetById(id);

                //customer.customerId = Customer.customerId;
                customer.customerName = Customer.customerName;
                customer.customerSurname = Customer.customerSurname;
                customer.customerBirthdate = Customer.customerBirthdate;

                _customerRepository.Update(customer);
                return Ok(customer);
            }

            return BadRequest();
        }



        //DELETE
        [System.Web.Http.HttpDelete]
        public IHttpActionResult Delete(int id)
        {
            var customer = _customerRepository.GetById(id);
            _customerRepository.Delete(customer);

            return Ok();
        }
    }
}