using System.Linq;
using course_tracker.Data;
using course_tracker.Models;

namespace course_tracker.Repositories
{
    public class RoleRepository : IRoleRepository
    {
        private readonly CourseTrackerContext _context;

        public RoleRepository(CourseTrackerContext context)
        {
            _context = context;
        }

        public Role GetById(int id)
        {
            return _context.Roles.FirstOrDefault(r => r.Id == id);
        }
    }
}