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
        [Required]
        [MaxLength(20)]
        public string authorName { get; set; }
        [Required]
        [MaxLength(20)]
        public string authorSurname { get; set; }


    }
}
