using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace course_tracker.Models
{
    public class Section
    {
        public int Id { get; set; }
        [Required]
        [MaxLength(100)]
        public string Name { get; set; }

        public int CourseId { get; set; }
        [JsonIgnore]
        public Course Course { get; set; }

        public List<Lection> Lections { get; set; } = new List<Lection>();
    }
}