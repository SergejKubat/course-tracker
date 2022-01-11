using System.Collections.Generic;
using System.Linq;
using course_tracker.Data;
using course_tracker.Dtos;
using course_tracker.Models;

namespace course_tracker.Repositories
{
    public class SectionRepository : ISectionRepository
    {

        private readonly CourseTrackerContext _context;

        public SectionRepository(CourseTrackerContext context)
        {
            _context = context;
        }

        public Section Create(Section section)
        {
            _context.Sections.Add(section);
            section.Id = _context.SaveChanges();

            return section;
        }

        public Section GetById(int id)
        {
            return _context.Sections.FirstOrDefault(s => s.Id == id);
        }

        public Section Update(int id, SectionDto dto)
        {
            var newSection = this.GetById(id);

            newSection.Name = dto.Name;

            _context.SaveChanges();

            return newSection;
        }

        public void Delete(int id)
        {
            var section = this.GetById(id);

            _context.Sections.Remove(section);
            _context.SaveChanges();
        }

        public List<Section> GetByCourseId(int id)
        {
            return _context.Sections.Where(s => s.CourseId == id).ToList();
        }
    }
}