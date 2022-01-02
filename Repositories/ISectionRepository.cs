using System.Collections.Generic;
using course_tracker.Models;

namespace course_tracker.Repositories
{
    public interface ISectionRepository
    {
        Section Create(Section section);
        Section GetById(int id);
        void Delete(int id);
        List<Section> GetByCourseId(int id);
    }
}