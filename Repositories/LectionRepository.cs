using System.Collections.Generic;
using System.Linq;
using course_tracker.Data;
using course_tracker.Dtos;
using course_tracker.Models;

namespace course_tracker.Repositories
{
    public class LectionRepository : ILectionRepository
    {

        private readonly CourseTrackerContext _context;

        public LectionRepository(CourseTrackerContext context)
        {
            _context = context;
        }

        public Lection Create(Lection lection)
        {
            _context.Lections.Add(lection);
            lection.Id = _context.SaveChanges();

            return lection;
        }

        public Lection GetById(int id)
        {
            return _context.Lections.FirstOrDefault(l => l.Id == id);
        }

        public Lection Update(int id, LectionDto dto)
        {
            var newLection = this.GetById(id);

            newLection.Name = dto.Name;
            newLection.Description = dto.Description;
            newLection.Video = dto.Video;

            _context.SaveChanges();

            return newLection;
        }

        public void Delete(int id)
        {
            var lection = this.GetById(id);

            _context.Lections.Remove(lection);
            _context.SaveChanges();
        }

        public List<Lection> GetBySectionId(int id)
        {
            return _context.Lections.Where(l => l.SectionId == id).ToList();
        }
    }
}