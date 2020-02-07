using System.Linq;
using AutoMapper;
using SuperDate.Dto;
using SuperDate.Models;

namespace SuperDate.Helper
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForListDto>()
             .ForMember(d => d.PhotoUrl, opt =>
             opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url))
             .ForMember(u => u.Age, opt => 
             opt.MapFrom(src => src.DateOfBirth.CalculateAge()));
            
            CreateMap<User, UserForDetaildDto>()
            .ForMember(d => d.PhotoUrl, opt =>
             opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url))
             .ForMember(u => u.Age, opt => 
             opt.MapFrom(src => src.DateOfBirth.CalculateAge()));
            
            CreateMap<Photo, PhotosForDetaildDto>();
            
            CreateMap<UserForUpdateDto, User>();

            CreateMap<Photo, PhotoForReturnDto>();

            CreateMap<PhotoForCreationDto, Photo>();
        }
    }
}