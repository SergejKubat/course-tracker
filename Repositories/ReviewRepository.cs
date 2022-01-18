using System;
using System.Collections.Generic;
using System.Linq;
using course_tracker.Data;
using course_tracker.Dtos;
using course_tracker.Models;
using Microsoft.EntityFrameworkCore;

namespace course_tracker.Repositories
{
    public class ReviewRepository : IReviewRepository
    {
        private readonly CourseTrackerContext _context;

        public ReviewRepository(CourseTrackerContext context)
        {
            _context = context;
        }

        public Review Create(Review review)
        {
            _context.Reviews.Add(review);
            review.Id = _context.SaveChanges();

            return review;
        }

        public Review GetById(int id)
        {
            return _context.Reviews.FirstOrDefault(r => r.Id == id);
        }

        public Review Update(int id, ReviewDto dto)
        {
            var newReview = this.GetById(id);

            newReview.Comment = dto.Comment;
            newReview.Rating = dto.Rating;
            newReview.DateCreated = DateTime.Now;

            _context.SaveChanges();

            return newReview;
        }

        public void Delete(int id)
        {
            var review = this.GetById(id);

            _context.Reviews.Remove(review);
            _context.SaveChanges();
        }

        public List<Review> GetByUserId(int id)
        {
            return _context.Reviews.Where(r => r.UserId == id).ToList();
        }

        public List<Review> GetByCourseId(int id)
        {
            return _context.Reviews.Where(r => r.CourseId == id).ToList();
        }

        public Review GetByUserAndCourseId(int userId, int courseId)
        {
            return _context.Reviews.FirstOrDefault(r => r.UserId == userId && r.CourseId == courseId);
        }
    }
}