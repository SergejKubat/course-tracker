using System.Collections.Generic;

namespace course_tracker.Models
{
    public class Section
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public int CourseId { get; set; }
        public Course Course { get; set; }

        public List<Lection> Lections { get; set; }
    }
}