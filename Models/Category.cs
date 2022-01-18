using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace course_tracker.Models
{
    public class Category
    {
        public int Id { get; set; }
        [Required]
        [MaxLength(50)]
        public string Name { get; set; }

        public List<Course> Courses { get; set; } = new List<Course>();
    }
}