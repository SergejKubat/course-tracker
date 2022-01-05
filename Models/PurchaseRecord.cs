using System;
using System.Text.Json.Serialization;

namespace course_tracker.Models
{
    public class PurchaseRecord
    {
        public int Id { get; set; }
        public DateTime DateCreated { get; set; }

        public int UserId { get; set; }
        [JsonIgnore]
        public User User { get; set; }

        public int CourseId { get; set; }
        [JsonIgnore]
        public Course Course { get; set; }
    }
}