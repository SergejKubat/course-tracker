using System.Collections.Generic;
using course_tracker.Dtos;
using course_tracker.Models;

namespace course_tracker.Repositories
{
    public interface ILectionRepository
    {
        Lection Create(Lection lection);
        Lection GetById(int id);
        Lection Update(int id, LectionDto dto);
        void Delete(int id);
        List<Lection> GetBySectionId(int id);
    }
}