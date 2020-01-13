using Microsoft.EntityFrameworkCore;
using SuperDate.Models;


namespace SuperDate.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) {}
        public DbSet<Value> Values { get; set; }
             

    }
}