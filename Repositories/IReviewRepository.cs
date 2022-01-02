using System.Collections.Generic;
using course_tracker.Models;

namespace course_tracker.Repositories
{
    public interface IReviewRepository
    {
        Review Create(Review review);
        Review GetById(int id);
        Review Update(int id, Review review);
        void Delete(int id);
        List<Review> GetByUserId(int id);
        List<Review> GetByCourseId(int id);
    }
}