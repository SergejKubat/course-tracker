using System.Collections.Generic;

namespace course_tracker.Dtos
{
    public class CourseResponseDto
    {
        public CourseDto CourseDto { get; set; }
        public UserDto Author { get; set; }
        public CategoryDto Category { get; set; }
        public List<SectionDto> Sections { get; set; }
        public List<ReviewDto> Reviews { get; set; }
        public double AverageRating { get; set; }
        public int NumberOfStudents { get; set; }
    }
}