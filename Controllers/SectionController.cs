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
    public class SectionController : Controller
    {

        private ISectionRepository _repository;
        private readonly ICourseRepository _courseRepository;
        private readonly IUserRepository _userRepository;
        private readonly JwtService _jwtService;

        public SectionController(ISectionRepository repository, ICourseRepository courseRepository, IUserRepository userRepository, JwtService jwtService)
        {
            _repository = repository;
            _courseRepository = courseRepository;
            _userRepository = userRepository;
            _jwtService = jwtService;
        }

        [HttpPost("courses/{courseId?}/sections")]
        public IActionResult CreateSection(int courseId, SectionDto dto)
        {
            var course = _courseRepository.GetById(courseId);

            if (course == null)
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

                if (user.Id != course.UserId)
                {
                    return BadRequest(new { message = "You don't have permission to add section to this course" });
                }

                var section = new Section
                {
                    Name = dto.Name,
                    CourseId = course.Id
                };

                return Created("Success", _repository.Create(section));
            }
            catch (Exception e)
            {
                return Unauthorized(new { message = e.Message });
            }
        }

        [HttpGet("courses/{courseId?}/sections")]
        public IActionResult GetSectionsByCourseId(int courseId)
        {
            if (_courseRepository.GetById(courseId) == null)
            {
                return BadRequest(new { message = "Course doesn't exists" });
            }

            return Ok(_repository.GetByCourseId(courseId));
        }

        [HttpPut("courses/{courseId?}/sections/{sectionId?}")]
        public IActionResult UpdateSection(int courseId, int sectionId, SectionDto dto)
        {
            var existingSection = _repository.GetById(sectionId);

            if (existingSection == null)
            {
                return BadRequest(new { message = "Section doesn't exists" });
            }

            var course = _courseRepository.GetById(courseId);

            if (course == null)
            {
                return BadRequest(new { message = "Course doesn't exists" });
            }

            try
            {
                var token = _jwtService.Verify(Request.Cookies["jwt"]);

                var user = _userRepository.GetById(int.Parse(token.Issuer));

                if (user == null)
                {
                    return BadRequest(new { message = "User doesn't exists" });
                }

                if (user.Id != course.UserId)
                {
                    return BadRequest(new { message = "You don't have permission to update this section" });
                }

                return Ok(_repository.Update(sectionId, dto));
            }
            catch (Exception e)
            {
                return Unauthorized(new { message = e.Message });
            }
        }

        [HttpDelete("courses/{courseId?}/sections/{sectionId?}")]
        public IActionResult DeleteSection(int courseId, int sectionId)
        {
            var existingSection = _repository.GetById(sectionId);

            if (existingSection == null)
            {
                return BadRequest(new { message = "Section doesn't exists" });
            }

            var course = _courseRepository.GetById(courseId);

            if (course == null)
            {
                return BadRequest(new { message = "Course doesn't exists" });
            }

            try
            {
                var token = _jwtService.Verify(Request.Cookies["jwt"]);

                var user = _userRepository.GetById(int.Parse(token.Issuer));

                if (user == null)
                {
                    return BadRequest(new { message = "User doesn't exists" });
                }

                if (user.Id != course.UserId)
                {
                    return BadRequest(new { message = "You don't have permission to delete this section" });
                }

                _repository.Delete(sectionId);

                return Ok(new { message = "Section deleted successfully" });
            }
            catch (Exception e)
            {
                return Unauthorized(new { message = e.Message });
            }
        }
    }
}