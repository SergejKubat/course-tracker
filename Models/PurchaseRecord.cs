using System;

namespace course_tracker.Models
{
    public class PurchaseRecord
    {
        public int Id { get; set; }
        public DateTime DateCreated { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }

        public int CourseId { get; set; }
        public Course Course { get; set; }
    }
}