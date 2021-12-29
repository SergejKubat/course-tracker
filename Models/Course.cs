using System;
using System.Collections.Generic;

namespace course_tracker.Models
{
    public class Course
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Language { get; set; }
        public DateTime LastUpdated { get; set; }
        public double price { get; set; }
        public string Image { get; set; }
        public string Video { get; set; }
        public bool Public { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }

        public int CategoryId { get; set; }
        public Category Category { get; set; }

        public List<Section> Sections { get; set; }

        public List<Review> Reviews { get; set; }

        public List<PurchaseRecord> PurchaseRecords { get; set; }
    }
}