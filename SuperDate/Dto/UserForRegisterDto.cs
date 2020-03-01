using System;
using System.ComponentModel.DataAnnotations;

namespace SuperDate.Dto
{
    public class UserForRegisterDto
    {
        public UserForRegisterDto()
        {
            Created = DateTime.Now;
            LastActive = DateTime.Now;
        }

        [Required]
        public string Name { get; set; }
        [StringLength(10, MinimumLength = 5, ErrorMessage = "Password can't be lover then 5 charecter or higher then 10 charecters")]
        public string Password { get; set; }
        public string Gender { get; set; }
        public string KnownAs { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }







    }
}