using System.Collections.Generic;
using System.Linq;
using course_tracker.Data;
using course_tracker.Models;
using Microsoft.EntityFrameworkCore;

namespace course_tracker.Repositories
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly CourseTrackerContext _context;

        public CategoryRepository(CourseTrackerContext context)
        {
            _context = context;
        }

        public Category Create(Category category)
        {
            _context.Categories.Add(category);
            category.Id = _context.SaveChanges();

            return category;
        }

        public Category GetById(int id)
        {
            return _context.Categories.Include(c => c.Courses).AsSplitQuery().FirstOrDefault(c => c.Id == id);
        }

        public List<Category> GetAll()
        {
            return _context.Categories.ToList();
        }
    }
}