using Microsoft.EntityFrameworkCore.Migrations;

namespace SuperDate.Migrations
{
    public partial class MessageEntityChanged : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "MessageSent",
                table: "Messages",
                newName: "MessageSend");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "MessageSend",
                table: "Messages",
                newName: "MessageSent");
        }
    }
}
