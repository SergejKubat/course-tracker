using System.Collections.Generic;
using System.Linq;
using course_tracker.Data;
using course_tracker.Models;

namespace course_tracker.Repositories
{
    public class PurchaseRecordRepository : IPurchaseRecordRepository
    {

        private readonly CourseTrackerContext _context;

        public PurchaseRecordRepository(CourseTrackerContext context)
        {
            _context = context;
        }

        public PurchaseRecord Create(PurchaseRecord purchaseRecord)
        {
            _context.PurchaseRecords.Add(purchaseRecord);
            purchaseRecord.Id = _context.SaveChanges();

            return purchaseRecord;
        }

        public PurchaseRecord GetById(int id)
        {
            return _context.PurchaseRecords.FirstOrDefault(u => u.Id == id);
        }

        public List<PurchaseRecord> GetByUserId(int id)
        {
            return _context.PurchaseRecords.Where(pr => pr.UserId == id).ToList();
        }

        public List<PurchaseRecord> GetByCourseId(int id)
        {
            return _context.PurchaseRecords.Where(pr => pr.CourseId == id).ToList();
        }

        public PurchaseRecord GetByUserAndCourseId(int userId, int courseId)
        {
            return _context.PurchaseRecords.FirstOrDefault(pr => pr.UserId == userId && pr.CourseId == courseId);
        }

    }
}