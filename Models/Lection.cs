using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace course_tracker.Models
{
    public class Lection
    {
        public int Id { get; set; }
        [Required]
        [MaxLength(100)]
        public string Name { get; set; }
        [Required]
        [MaxLength(250)]
        public string Description { get; set; }
        [Required]
        [MaxLength(200)]
        public string Video { get; set; }

        public int SectionId { get; set; }
        [JsonIgnore]
        public Section Section { get; set; }
    }
}