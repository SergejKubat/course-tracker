namespace course_tracker.Models
{
    public class Lection
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Video { get; set; }

        public int SectionId { get; set; }
        public Section Section { get; set; }
    }
}