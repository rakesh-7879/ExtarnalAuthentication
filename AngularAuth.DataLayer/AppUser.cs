using Microsoft.AspNetCore.Identity;
using System;

namespace AngularAuth.DataLayer
{
    public class AppUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime? LastLogOn { get; set; }
        public DateTime CreatedOn { get; set; }
        public string Role { get; set; }
    }
}