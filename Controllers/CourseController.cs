using System;
using course_tracker.Dtos;
using course_tracker.Helpers;
using course_tracker.Models;
using course_tracker.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace course_tracker.Controllers
{
    [Route("api/courses")]
    [ApiController]
    public class CourseController : Controller
    {

        private readonly ICourseRepository _repository;
        private readonly IUserRepository _userRepository;
        private readonly ICategoryRepository _categoryRepository;
        private readonly JwtService _jwtService;

        public CourseController(ICourseRepository repository, IUserRepository userRepository, ICategoryRepository categoryRepository, JwtService jwtService)
        {
            _repository = repository;
            _userRepository = userRepository;
            _categoryRepository = categoryRepository;
            _jwtService = jwtService;
        }

        [HttpPost]
        public IActionResult Create(CourseDto dto)
        {
            var courseExists = _repository.GetByName(dto.Name);

            if (courseExists != null)
            {
                return BadRequest(new { message = "Course with specified name already exists" });
            }

            var category = _categoryRepository.GetById(dto.CategoryId);

            if (category == null)
            {
                return BadRequest(new { message = "Category doesn't exists" });
            }

            try
            {
                var token = _jwtService.Verify(Request.Cookies["jwt"]);

                var user = _userRepository.GetById(int.Parse(token.Issuer));

                if (user == null)
                {
                    return BadRequest(new { message = "User doesn't exists" });
                }

                if (user.RoleId != 2)
                {
                    return BadRequest(new { message = "User doesn't have permission to create course" });
                }

                var course = new Course
                {
                    Name = dto.Name,
                    Description = dto.Description,
                    Language = dto.Language,
                    LastUpdated = DateTime.Now,
                    price = dto.Price,
                    Image = dto.Image,
                    Video = dto.Video,
                    Public = dto.Public,
                    UserId = user.Id,
                    CategoryId = dto.CategoryId
                };

                return Created("Success", _repository.Create(course));
            }
            catch (Exception e)
            {
                return Unauthorized(new { message = e.Message });
            }
        }

        [HttpGet("{id?}")]
        public IActionResult CourseInfo(int id)
        {
            var course = _repository.GetById(id);

            if (course == null)
            {
                return NotFound(new { message = "Course with specified id doesn't exist" });
            }

            return Ok(course);
        }

        [HttpGet]
        public IActionResult GetCourses([FromQuery(Name = "userId")] string userId, [FromQuery(Name = "categoryId")] string categoryId)
        {
            if (userId != null)
            {
                return Ok(_repository.GetAllByUserId(int.Parse(userId)));
            }

            if (categoryId != null)
            {
                return Ok(_repository.GetAllByCategoryId(int.Parse(categoryId)));
            }

            return Ok(new { message = "user id: " + userId + ", category id: " + categoryId });
        }
    }
}