using System;
using System.Collections.Generic;

namespace course_tracker.Models
{
    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Avatar { get; set; }
        public string Description { get; set; }
        public DateTime DateCreated { get; set; }
        public string Password { get; set; }
        public bool Enabled { get; set; }

        public int RoleId { get; set; }
        public Role Role { get; set; }

        public List<Course> Courses;

        public List<Review> Reviews;

        public List<PurchaseRecord> PurchaseRecords;
    }
}