namespace course_tracker.Dtos
{
    public class LectionDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Video { get; set; }
        public bool Public { get; set; }
    }
}