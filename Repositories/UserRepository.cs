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

    }
}