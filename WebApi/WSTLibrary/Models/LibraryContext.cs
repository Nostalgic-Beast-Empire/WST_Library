using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace WSTLibrary.Models
{
    public class LibraryContext : DbContext
    {
        public LibraryContext() : base("name=Library")
        {

        }

        public DbSet<Author> Author { get; set; }
        public DbSet<Book> Book { get; set; }
        public DbSet<Borrow> Borrow { get; set; }
        public DbSet<Customer> Customer { get; set; }
    }

}