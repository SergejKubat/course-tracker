using System;
using System.Collections.Generic;
using System.Linq;
using course_tracker.Data;
using course_tracker.Models;

namespace course_tracker.Repositories
{
    public class CourseRepository : ICourseRepository
    {

        private readonly CourseTrackerContext _context;

        public CourseRepository(CourseTrackerContext context)
        {
            _context = context;
        }

        public Course Create(Course course)
        {
            _context.Courses.Add(course);
            course.Id = _context.SaveChanges();

            return course;
        }

        public Course GetById(int id)
        {
            return _context.Courses.FirstOrDefault(c => c.Id == id);
        }

        public Course GetByName(string name)
        {
            return _context.Courses.FirstOrDefault(c => c.Name == name);
        }

        public List<Course> GetAllByUserId(int id)
        {
            return _context.Courses.Where(c => c.UserId == id).ToList();
        }

        public List<Course> GetAllByCategoryId(int id)
        {
            return _context.Courses.Where(c => c.CategoryId == id).ToList();
        }

        public List<Course> GetAllByName(string name)
        {
            return _context.Courses.Where(c => c.Name.StartsWith(name)).ToList();
        }

    }
}