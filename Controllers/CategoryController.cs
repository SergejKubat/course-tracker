using course_tracker.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace course_tracker.Controllers
{
    [Route("api/categories")]
    [ApiController]
    public class CategoryController : Controller
    {

        private readonly ICategoryRepository _repository;

        public CategoryController(ICategoryRepository repository)
        {
            _repository = repository;
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