using Microsoft.EntityFrameworkCore;
using course_tracker.Models;

namespace course_tracker.Data
{
    public class CourseTrackerContext : DbContext
    {
        public CourseTrackerContext(DbContextOptions<CourseTrackerContext> options) : base(options) { }

        public DbSet<User> Users { set; get; }
        public DbSet<Course> Courses { set; get; }
        public DbSet<Category> Categories { set; get; }
        public DbSet<Section> Sections { set; get; }
        public DbSet<Lection> Lections { set; get; }
        public DbSet<Role> Roles { set; get; }
        public DbSet<Review> Reviews { set; get; }
        public DbSet<PurchaseRecord> PurchaseRecords { set; get; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>(entity => { entity.HasIndex(e => e.Email).IsUnique(); });
            modelBuilder.Entity<Course>(entity => { entity.HasIndex(e => e.Name).IsUnique(); });
        }
    }
}