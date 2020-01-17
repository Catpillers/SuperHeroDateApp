using System.ComponentModel.DataAnnotations;

namespace SuperDate.Dto
{
    public class UserForRegisterDto
    {   
        [Required]
        public string Name { get; set; }
        
        [Required]
        [StringLength(10, MinimumLength = 5, ErrorMessage = "Password can't be lover then 5 charecter or higher then 10 charecters")]
        public string Password { get; set; }




    }
}