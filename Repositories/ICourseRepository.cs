using System;
using System.Collections.Generic;
using course_tracker.Models;

namespace course_tracker.Repositories
{
    public interface ICourseRepository
    {
        Course Create(Course course);
        Course GetById(int id);
        List<Course> GetAllByUserId(int id);
        List<Course> GetAllByCategoryId(int id);
        List<Course> GetAllByName(String name);
    }
}