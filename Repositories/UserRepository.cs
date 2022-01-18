using System.Collections.Generic;
using System.Linq;
using course_tracker.Data;
using course_tracker.Dtos;
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

        public List<User> GetByRoleId(int id)
        {
            return _context.Users.Where(u => u.RoleId == id).ToList();
        }

        public User Update(int id, UserDto dto)
        {
            var newUser = this.GetById(id);

            newUser.FirstName = dto.FirstName;
            newUser.LastName = dto.LastName;
            newUser.Avatar = dto.Avatar;
            newUser.Profession = dto.Proffesion;
            newUser.Description = dto.Description;

            _context.SaveChanges();

            return newUser;
        }

        public void Delete(int id)
        {
            var user = this.GetById(id);

            _context.Users.Remove(user);
            _context.SaveChanges();
        }

    }
}