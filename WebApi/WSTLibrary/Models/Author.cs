using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WSTLibrary.Models
{
    public class Author
    {
        [Key]
        public int authorId { get; set; }
        public string authorName { get; set; }
        public string authorSurname { get; set; }


    }
}