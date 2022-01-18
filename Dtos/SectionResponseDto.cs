using System.Collections.Generic;
using course_tracker.Models;

namespace course_tracker.Dtos
{
    public class SectionResponseDto
    {
        public SectionDto SectionDto { get; set; }
        public List<Lection> Lections { get; set; }
    }
}