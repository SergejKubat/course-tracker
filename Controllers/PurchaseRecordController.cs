using System;
using course_tracker.Helpers;
using course_tracker.Models;
using course_tracker.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace course_tracker.Controllers
{
    [Route("api")]
    [ApiController]
    public class PurchaseRecordController : Controller
    {

        private readonly IPurchaseRecordRepository _repository;
        private readonly IUserRepository _userRepository;
        private readonly ICourseRepository _courseRepository;
        private readonly JwtService _jwtService;

        public PurchaseRecordController(IPurchaseRecordRepository repository, IUserRepository userRepository, ICourseRepository courseRepository, JwtService jwtService)
        {
            _repository = repository;
            _userRepository = userRepository;
            _courseRepository = courseRepository;
            _jwtService = jwtService;
        }

        [HttpPost("courses/{courseId?}/records")]
        public IActionResult CreateRecord(int courseId)
        {

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

                if (_repository.GetByUserAndCourseId(user.Id, courseId) != null)
                {
                    return BadRequest(new { message = "You already bought this course" });
                }

                var record = new PurchaseRecord
                {
                    DateCreated = DateTime.Now,
                    UserId = user.Id,
                    CourseId = courseId
                };

                return Created("Success", _repository.Create(record));
            }
            catch (Exception e)
            {
                return Unauthorized(new { message = e.Message });
            }
        }

        [HttpGet("users/{userId?}/records")]
        public IActionResult GetAllByUserId(int userId)
        {

            if (_userRepository.GetById(userId) == null)
            {
                return BadRequest(new { message = "User doesn't exists" });
            }

            return Ok(_repository.GetByUserId(userId));
        }

        [HttpGet("courses/{courseId?}/records")]
        public IActionResult GetAllByCourseId(int courseId)
        {

            if (_courseRepository.GetById(courseId) == null)
            {
                return BadRequest(new { message = "Course doesn't exists" });
            }

            return Ok(_repository.GetByCourseId(courseId));
        }
    }
}