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
        [Required]
        [MaxLength(50)]
        public string customerName { get; set; }
        [Required]
        [MaxLength(50)]
        public string customerSurname { get; set; }
        public string customerBirthdate { get; set; }
    }
}