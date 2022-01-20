using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using course_tracker.Helpers;
using course_tracker.Repositories;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace course_tracker.Controllers
{
    [Route("api")]
    public class ImageController : Controller
    {

        private static IWebHostEnvironment _environment;
        private readonly IUserRepository _repository;
        private readonly JwtService _jwtService;

        public ImageController(IWebHostEnvironment environment, IUserRepository repository, JwtService jwtService)
        {
            _environment = environment;
            _repository = repository;
            _jwtService = jwtService;
        }

        [HttpPost("user/upload")]
        public async Task<IActionResult> SaveImage([FromForm] IFormFile image)
        {
            if (image == null)
            {
                return BadRequest(new { message = "You must provide an image" });
            }

            string imageExtension = Path.GetExtension(image.FileName);

            if (imageExtension != ".jpg" && imageExtension != ".png")
            {
                return BadRequest(new { message = "You must provide an image with .jpg or .png extension" });
            }

            if (image.Length > 1048576)
            {
                return BadRequest(new { message = "You must provide an image with size smaller or equal to 1 MB" });
            }

            try
            {
                var token = _jwtService.Verify(Request.Cookies["jwt"]);

                var user = _repository.GetById(Int32.Parse(token.Issuer));

                if (user == null)
                {
                    return BadRequest(new { message = "User doesn't exist" });
                }

                string imageName = new String(Path.GetFileNameWithoutExtension(image.FileName).Take(10).ToArray()).Replace(' ', '-');
                imageName = imageName + DateTime.Now.ToString("yymmssfff") + imageExtension;
                var imagePath = Path.Combine(_environment.WebRootPath, "img", imageName);

                try
                {
                    using (var fileStream = new FileStream(imagePath, FileMode.Create))
                    {
                        await image.CopyToAsync(fileStream);

                        var updatedUser = _repository.UpdateAvatar(user.Id, $"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}/img/" + imageName);

                        return Ok(updatedUser);
                    }
                }
                catch (Exception ex)
                {
                    return BadRequest(new { message = ex.Message });
                }
            }
            catch (Exception e)
            {
                return Unauthorized(new { message = e.Message });
            }
        }
    }
}
