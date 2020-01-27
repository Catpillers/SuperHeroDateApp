using System;

namespace SuperDate.Dto
{
    public class PhotosForDetaildDto
    {
      public int Id { get; set; }
      public string Url { get; set; }
      public string Description { get; set; }
      public DateTime DateAdded { get; set; }
      public bool IsMain { get; set; }
      
    }
}