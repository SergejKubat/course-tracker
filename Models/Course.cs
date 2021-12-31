using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace course_tracker.Models
{
    public class Course
    {
        public int Id { get; set; }
        [Required]
        [MaxLength(200)]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        [MaxLength(50)]
        public string Language { get; set; }
        public DateTime LastUpdated { get; set; }
        [Required]
        public double price { get; set; }
        [Required]
        [MaxLength(200)]
        public string Image { get; set; }
        [Required]
        [MaxLength(200)]
        public string Video { get; set; }
        [Required]
        public bool Public { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }

        public int CategoryId { get; set; }
        public Category Category { get; set; }

        public List<Section> Sections { get; set; } = new List<Section>();

        public List<Review> Reviews { get; set; } = new List<Review>();

        public List<PurchaseRecord> PurchaseRecords { get; set; } = new List<PurchaseRecord>();
    }
}