using course_tracker.Models;

namespace course_tracker.Repositories
{
    public interface IRoleRepository
    {
        Role GetById(int id);
    }
}