using System.Collections.Generic;
using System.Threading.Tasks;
using SuperDate.Models;

namespace SuperDate.Data
{
    public interface IDatingRepository
    {
        void Add<T>(T entity) where T: class;
        void Delete<T>(T entity) where T:class;
        Task<bool> SaveAll();
        Task<IEnumerable<User>> GeTUsers();
        Task<User> GetUser(int id);
        Task<Photo> GetPhoto(int id);
        Task<Photo> GetMainPhoto(int userId);
    }
}