using course_tracker.Dtos;
using course_tracker.Models;

namespace course_tracker.Repositories
{
    public interface IUserRepository
    {
        User Create(User user);
        User GetByEmail(string email);
        User GetById(int id);
        User Update(int id, UserDto dto);
        void Delete(int id);
    }
}