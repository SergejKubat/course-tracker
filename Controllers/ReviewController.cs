using System;
using course_tracker.Dtos;
using course_tracker.Helpers;
using course_tracker.Models;
using course_tracker.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace course_tracker.Controllers
{
    [Route("api")]
    [ApiController]
    public class ReviewController : Controller
    {

        private readonly IReviewRepository _repository;
        private readonly ICourseRepository _courseRepository;
        private readonly IUserRepository _userRepository;
        private readonly IPurchaseRecordRepository _purchaseRecordRepository;
        private readonly JwtService _jwtService;

        public ReviewController(IReviewRepository repository, ICourseRepository courseRepository, IUserRepository userRepository, IPurchaseRecordRepository purchaseRecordRepository,
            JwtService jwtService)
        {
            _repository = repository;
            _courseRepository = courseRepository;
            _userRepository = userRepository;
            _purchaseRecordRepository = purchaseRecordRepository;
            _jwtService = jwtService;
        }

        [HttpPost("courses/{courseId?}/reviews")]
        public IActionResult CreateReview(int courseId, ReviewDto dto)
        {
            if (dto.Rating < 1 || dto.Rating > 5)
            {
                return BadRequest(new { message = "Rating value must be between 1 and 5" });
            }

            if (_courseRepository.GetById(courseId) == null)
            {
                return BadRequest(new { message = "Course with specified id doesn't exists" });
            }

            try
            {
                var token = _jwtService.Verify(Request.Cookies["jwt"]);

                var user = _userRepository.GetById(int.Parse(token.Issuer));

                if (user == null)
                {
                    return BadRequest(new { message = "User doesn't exists" });
                }

                if (_purchaseRecordRepository.GetByUserAndCourseId(user.Id, courseId) == null)
                {
                    return BadRequest(new { message = "You must purchase this course before sending review" });
                }

                if (_repository.GetByUserAndCourseId(user.Id, courseId) != null)
                {
                    return BadRequest(new { message = "You have already reviewed this course" });
                }

                var review = new Review
                {
                    Comment = dto.Comment,
                    Rating = dto.Rating,
                    DateCreated = DateTime.Now,
                    UserId = user.Id,
                    CourseId = courseId
                };

                return Created("Success", _repository.Create(review));
            }
            catch (Exception e)
            {
                return Unauthorized(new { message = e.Message });
            }
        }

        [HttpGet("users/{userId?}/reviews")]
        public IActionResult GetReviewsByUserId(int userId)
        {

            if (_userRepository.GetById(userId) == null)
            {
                return BadRequest(new { message = "User doesn't exists" });
            }

            return Ok(_repository.GetByUserId(userId));
        }

        [HttpGet("courses/{courseId?}/reviews")]
        public IActionResult GetReviewsByCourseId(int courseId)
        {

            if (_courseRepository.GetById(courseId) == null)
            {
                return BadRequest(new { message = "Course doesn't exists" });
            }

            return Ok(_repository.GetByCourseId(courseId));
        }

        [HttpPut("reviews/{id?}")]
        public IActionResult UpdateReview(int id, ReviewDto dto)
        {
            var existingReview = _repository.GetById(id);

            if (existingReview == null)
            {
                return BadRequest(new { message = "Review doesn't exists" });
            }

            try
            {
                var token = _jwtService.Verify(Request.Cookies["jwt"]);

                var user = _userRepository.GetById(int.Parse(token.Issuer));

                if (existingReview.UserId != user.Id)
                {
                    return BadRequest(new { message = "You don't have permission to change review" });
                }

                return Ok(_repository.Update(id, dto));
            }
            catch (Exception e)
            {
                return Unauthorized(new { message = e.Message });
            }
        }

        [HttpDelete("reviews/{id?}")]
        public IActionResult DeleteReview(int id)
        {
            var existingReview = _repository.GetById(id);

            if (existingReview == null)
            {
                return BadRequest(new { message = "Review doesn't exists" });
            }

            try
            {
                var token = _jwtService.Verify(Request.Cookies["jwt"]);

                var user = _userRepository.GetById(int.Parse(token.Issuer));

                if (existingReview.UserId != user.Id)
                {
                    return BadRequest(new { message = "You don't have permission to delete review" });
                }

                _repository.Delete(id);

                return Ok(new { message = "Review deleted successfully" });
            }
            catch (Exception e)
            {
                return Unauthorized(new { message = e.Message });
            }
        }
    }
}