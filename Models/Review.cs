using System;
using System.ComponentModel.DataAnnotations;

namespace course_tracker.Models
{
    public class Review
    {
        public int Id { get; set; }
        [Required]
        [MaxLength(250)]
        public string Comment { get; set; }
        [Required]
        public int Rating { get; set; }
        public DateTime DateCreated { get; set; }

        public int UserId { get; set; }
        public User user { get; set; }

        public int CourseId { get; set; }
        public Course Course { get; set; }
    }
}