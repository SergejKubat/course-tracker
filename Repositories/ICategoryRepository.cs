using System.Collections.Generic;
using course_tracker.Models;

namespace course_tracker.Repositories
{
    public interface ICategoryRepository
    {
        Category GetById(int id);

        List<Category> GetAll();
    }
}