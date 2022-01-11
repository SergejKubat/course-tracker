using System;
using course_tracker.Dtos;
using course_tracker.Helpers;
using course_tracker.Models;
using course_tracker.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace course_tracker.Controllers
{
    [Route("api/categories")]
    [ApiController]
    public class CategoryController : Controller
    {

        private readonly ICategoryRepository _repository;
        private readonly IUserRepository _userRepository;
        private readonly JwtService _jwtService;

        public CategoryController(ICategoryRepository repository, IUserRepository userRepository, JwtService jwtService)
        {
            _repository = repository;
            _userRepository = userRepository;
            _jwtService = jwtService;
        }

        [HttpPost]
        public IActionResult CreateCategory(CategoryDto dto)
        {
            try
            {
                var token = _jwtService.Verify(Request.Cookies["jwt"]);

                var user = _userRepository.GetById(int.Parse(token.Issuer));

                if (user == null)
                {
                    return BadRequest(new { message = "User doesn't exists" });
                }

                if (user.RoleId != 3)
                {
                    return BadRequest(new { message = "You don't have permission to add new category" });
                }

                var category = new Category
                {
                    Name = dto.Name
                };

                return Created("Success", _repository.Create(category));
            }
            catch (Exception e)
            {
                return Unauthorized(new { message = e.Message });
            }
        }

        [HttpGet]
        public IActionResult GetCategories()
        {
            return Ok(_repository.GetAll());
        }

        [HttpGet("{id?}")]
        public IActionResult GetCategory(int id)
        {
            var category = _repository.GetById(id);

            if (category == null)
            {
                return NotFound(new { message = "Category with specified id doesn't exist" });
            }

            return Ok(category);
        }
    }
}