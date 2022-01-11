using System;
using course_tracker.Dtos;
using course_tracker.Helpers;
using course_tracker.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace course_tracker.Controllers
{
    [Route("api/users")]
    [ApiController]
    public class UserController : Controller
    {

        private readonly IUserRepository _repository;
        private readonly JwtService _jwtService;

        public UserController(IUserRepository repository, JwtService jwtService)
        {
            _repository = repository;
            _jwtService = jwtService;
        }

        [HttpGet("{id?}")]
        public IActionResult UserInfo(int id)
        {
            var user = _repository.GetById(id);

            if (user == null)
            {
                return NotFound(new { message = "User with specified id doesn't exist" });
            }

            return Ok(user);
        }

        [HttpPut("{id?}")]
        public IActionResult UpdateUser(int id, UserDto dto)
        {
            var existingUser = _repository.GetById(id);

            if (existingUser == null)
            {
                return BadRequest(new { message = "User doesn't exists" });
            }

            try
            {
                var token = _jwtService.Verify(Request.Cookies["jwt"]);

                if (Int32.Parse(token.Issuer) != existingUser.Id)
                {
                    return BadRequest(new { message = "You cannot update this user" });
                }

                return Ok(_repository.Update(existingUser.Id, dto));
            }
            catch (Exception e)
            {
                return Unauthorized(new { message = e.Message });
            }
        }

        [HttpDelete("{id?}")]
        public IActionResult DeleteUser(int id)
        {
            var existingUser = _repository.GetById(id);

            if (existingUser == null)
            {
                return BadRequest(new { message = "User doesn't exists" });
            }

            try
            {
                var token = _jwtService.Verify(Request.Cookies["jwt"]);

                if (Int32.Parse(token.Issuer) != existingUser.Id)
                {
                    return BadRequest(new { message = "You cannot delete this user" });
                }

                _repository.Delete(existingUser.Id);
                
                return Ok(new { message = "User deleted successfully" });
            }
            catch (Exception e)
            {
                return Unauthorized(new { message = e.Message });
            }
        }
    }
}