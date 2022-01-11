using System.Collections.Generic;
using course_tracker.Dtos;
using course_tracker.Models;

namespace course_tracker.Repositories
{
    public interface ISectionRepository
    {
        Section Create(Section section);
        Section GetById(int id);
        Section Update(int id, SectionDto dto);
        void Delete(int id);
        List<Section> GetByCourseId(int id);
    }
}