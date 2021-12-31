using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace course_tracker.Models
{
    public class Role
    {
        public int Id { get; set; }
        [Required]
        [MaxLength(10)]
        public string Name { get; set; }

        public List<User> Users { get; set; } = new List<User>();
    }
}