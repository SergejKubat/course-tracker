using course_tracker.Models;

namespace course_tracker.Repositories
{
    public interface IUserRepository
    {
        User Create(User user);
    }
}