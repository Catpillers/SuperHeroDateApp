using Microsoft.EntityFrameworkCore.Migrations;

namespace SuperDate.Migrations
{
    public partial class MessageEntityChangedDate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "DateRed",
                table: "Messages",
                newName: "DateRead");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "DateRead",
                table: "Messages",
                newName: "DateRed");
        }
    }
}
