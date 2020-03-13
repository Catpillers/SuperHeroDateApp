using System;

namespace SuperDate.Dto
{
    public class MessageForCreationDto
    {
        public int SenderId { get; set; }
        public int RecipientID { get; set; }
        public DateTime MessageSend { get; set; }
        public string Content { get; set; }

        public MessageForCreationDto()
        {
            MessageSend = DateTime.Now;
        }

    }
}