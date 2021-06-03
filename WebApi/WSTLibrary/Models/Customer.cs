using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WSTLibrary.Models
{
    public class Customer
    {
        [Key]
        public int customerId { get; set; }
        public string customerName { get; set; }
        public string customerSurname { get; set; }
        public DateTime customerBirthdate { get; set; }
    }
}