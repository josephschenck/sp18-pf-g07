using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace SP18.PF.Web.Migrations
{
    public partial class Pic : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Pic",
                table: "Venue",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Pic",
                table: "Tour",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Pic",
                table: "Venue");

            migrationBuilder.DropColumn(
                name: "Pic",
                table: "Tour");
        }
    }
}
