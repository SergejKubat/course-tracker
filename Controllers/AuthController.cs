using System;
using course_tracker.Dtos;
using course_tracker.Models;
using course_tracker.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace course_tracker.Controllers
{
    [Route("api")]
    [ApiController]
    public class AuthController : Controller
    {

        private readonly IUserRepository _repository;

        public AuthController(IUserRepository repository)
        {
            _repository = repository;
        }

        [HttpPost("register")]
        public IActionResult Register(RegisterDto dto)
        {
            var user = new User
            {
                FirstName = dto.FirstName,
                LastName = dto.LastName,
                Email = dto.Email,
                Avatar = "avatar.jpg",
                DateCreated = DateTime.Now,
                Password = BCrypt.Net.BCrypt.HashPassword(dto.Password),
                Enabled = true,
                RoleId = 1
            };

            return Created("Success", _repository.Create(user));
        }

    }
}