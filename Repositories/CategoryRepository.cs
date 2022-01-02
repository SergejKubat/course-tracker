using System.Linq;
using course_tracker.Data;
using course_tracker.Models;

namespace course_tracker.Repositories
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly CourseTrackerContext _context;

        public CategoryRepository(CourseTrackerContext context)
        {
            _context = context;
        }

        public Category GetById(int id)
        {
            return _context.Categories.FirstOrDefault(c => c.Id == id);
        }
    }
}