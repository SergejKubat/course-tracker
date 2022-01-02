using System.Collections.Generic;
using course_tracker.Models;

namespace course_tracker.Repositories
{
    public interface ILectionRepository
    {
        Lection Create(Lection lection);
        Lection GetById(int id);
        void Delete(int id);
        List<Lection> GetBySectionId(int id);
    }
}