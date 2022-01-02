using System.Collections.Generic;
using course_tracker.Models;

namespace course_tracker.Repositories
{
    public interface IPurchaseRecordRepository
    {
        PurchaseRecord Create(PurchaseRecord purchaseRecord);
        PurchaseRecord GetById(int id);
        List<PurchaseRecord> GetByUserId(int id);
        List<PurchaseRecord> GetByCourseId(int id);
    }
}