using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace course_tracker.Models
{
    public class User
    {
        public int Id { get; set; }
        [Required]
        [MaxLength(50)]
        public string FirstName { get; set; }
        [Required]
        [MaxLength(50)]
        public string LastName { get; set; }
        [Required]
        [MaxLength(100)]
        public string Email { get; set; }
        [Required]
        [MaxLength(200)]
        public string Avatar { get; set; }
        [MaxLength(100)]
        public string Profession { get; set; }
        public string Description { get; set; }
        public DateTime DateCreated { get; set; }
        [Required]
        [MaxLength(200)]
        [JsonIgnore]
        public string Password { get; set; }
        [Required]
        public bool Enabled { get; set; }

        public int RoleId { get; set; }
        [JsonIgnore]
        public Role Role { get; set; }

        public List<Course> Courses { get; set; } = new List<Course>();
        [JsonIgnore]
        public List<Review> Reviews { get; set; } = new List<Review>();

        public List<PurchaseRecord> PurchaseRecords { get; set; } = new List<PurchaseRecord>();
    }
}