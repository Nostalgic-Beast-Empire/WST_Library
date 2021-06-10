using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WSTLibrary.Models
{
    public class Book
    {
        [Key]
        public int bookId { get; set; }
        public int authorId { get; set; }

        [Required]
        [MaxLength(20)]
        public string bookName { get; set; }
        public int? pagecount { get; set; }

    public Author author { get; set; }

    }
}
