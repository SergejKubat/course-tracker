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
    public class LectionController : Controller
    {

        private ILectionRepository _repository;
        private ISectionRepository _sectionRepository;
        private readonly ICourseRepository _courseRepository;
        private readonly IUserRepository _userRepository;
        private readonly JwtService _jwtService;

        public LectionController(ILectionRepository repository, ISectionRepository sectionRepository, ICourseRepository courseRepository, IUserRepository userRepository,
            JwtService jwtService)
        {
            _repository = repository;
            _sectionRepository = sectionRepository;
            _courseRepository = courseRepository;
            _userRepository = userRepository;
            _jwtService = jwtService;
        }

        [HttpPost("sections/{sectionId?}/lections")]
        public IActionResult CreateLection(int sectionId, LectionDto dto)
        {
            var section = _sectionRepository.GetById(sectionId);

            if (section == null)
            {
                return BadRequest(new { message = "Section with specified id doesn't exists" });
            }

            var course = _courseRepository.GetById(section.CourseId);

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
                    return BadRequest(new { message = "You don't have permission to add lection to this course" });
                }

                var lection = new Lection
                {
                    Name = dto.Name,
                    Description = dto.Description,
                    Video = dto.Video,
                    Public = dto.Public,
                    SectionId = section.Id
                };

                return Created("Success", _repository.Create(lection));
            }
            catch (Exception e)
            {
                return Unauthorized(new { message = e.Message });
            }
        }

        [HttpGet("sections/{sectionId?}/lections")]
        public IActionResult GetLectionsBySectionId(int sectionId)
        {
            if (_sectionRepository.GetById(sectionId) == null)
            {
                return BadRequest(new { message = "Section doesn't exists" });
            }

            return Ok(_repository.GetBySectionId(sectionId));
        }

        [HttpPut("sections/{sectionId?}/lections/{lectionId?}")]
        public IActionResult UpdateLection(int sectionId, int lectionId, LectionDto dto)
        {
            var existingLection = _repository.GetById(lectionId);

            if (existingLection == null)
            {
                return BadRequest(new { message = "Lection doesn't exists" });
            }

            var section = _sectionRepository.GetById(sectionId);

            if (section == null)
            {
                return BadRequest(new { message = "Section doesn't exists" });
            }

            var course = _courseRepository.GetById(section.CourseId);

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
                    return BadRequest(new { message = "You don't have permission to update this lection" });
                }

                return Ok(_repository.Update(lectionId, dto));
            }
            catch (Exception e)
            {
                return Unauthorized(new { message = e.Message });
            }
        }

        [HttpDelete("sections/{sectionId?}/lections/{lectionId?}")]
        public IActionResult DeleteLection(int sectionId, int lectionId)
        {
            var existingLection = _repository.GetById(lectionId);

            if (existingLection == null)
            {
                return BadRequest(new { message = "Lection doesn't exists" });
            }

            var section = _sectionRepository.GetById(sectionId);

            if (section == null)
            {
                return BadRequest(new { message = "Section doesn't exists" });
            }

            var course = _courseRepository.GetById(section.CourseId);

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
                    return BadRequest(new { message = "You don't have permission to update this lection" });
                }

                _repository.Delete(lectionId);

                return Ok(new { message = "Lection deleted successfully" });
            }
            catch (Exception e)
            {
                return Unauthorized(new { message = e.Message });
            }
        }
    }
}