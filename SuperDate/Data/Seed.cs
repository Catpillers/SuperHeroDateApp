using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json;
using SuperDate.Models;

namespace SuperDate.Data
{
    public class Seed
    {
        public static void SeedUsers(DataContext context)
        {
           if(!context.Users.Any()){
               var userData  = System.IO.File.ReadAllText("Data/UserSeedData.json");
               var users = JsonConvert.DeserializeObject<List<User>>(userData);
               foreach(var u in users ){
                  byte[] passwordHash, passwordSalt;
                  CreatePasswordHash("password", out passwordHash, out passwordSalt);
                 
                 u.PasswordHash = passwordHash;
                 u.PasswordSalt = passwordSalt;
                 u.Name = u.Name.ToLower(); 
                 context.Users.Add(u);
                 
               }
           }
           context.SaveChanges();
        }
        
        private static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
           using(var hmac = new System.Security.Cryptography.HMACSHA512())
           {
               passwordSalt = hmac.Key;
               passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));   
           }
           
        }

    }
}