namespace course_tracker.Dtos
{
    public class CourseDto
    {
        public string Name { set; get; }
        public string Description { set; get; }
        public string Language { set; get; }
        public double Price { set; get; }
        public string Image { set; get; }
        public string Video { set; get; }
        public bool Public { set; get; }
        public int CategoryId { set; get; }
    }
}