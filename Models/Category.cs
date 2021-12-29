using System.Collections.Generic;

namespace course_tracker.Models
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public List<Course> Courses { get; set; }
    }
}