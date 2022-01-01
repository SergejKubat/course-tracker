using System.Linq;
using course_tracker.Data;
using course_tracker.Models;

namespace course_tracker.Repositories
{
    public class UserRepository : IUserRepository
    {

        private readonly CourseTrackerContext _context;

        public UserRepository(CourseTrackerContext context)
        {
            _context = context;
        }

        public User Create(User user)
        {
            _context.Users.Add(user);
            user.Id = _context.SaveChanges();

            return user;
        }

        public User GetByEmail(string email)
        {
            return _context.Users.FirstOrDefault(u => u.Email == email);
        }

        public User GetById(int id)
        {
            return _context.Users.FirstOrDefault(u => u.Id == id);
        }

    }
}