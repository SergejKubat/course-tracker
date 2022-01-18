using System.Collections.Generic;

namespace course_tracker.Dtos
{
    public class AuthorDto
    {
        public UserDto UserDto { get; set; }
        public List<CourseDto> Courses { get; set; }
        public int NumberOfStudents { get; set; }
        public int NumberOfReviews { get; set; }
    }
}