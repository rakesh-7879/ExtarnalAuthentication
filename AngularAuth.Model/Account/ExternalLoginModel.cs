using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace AngularAuth.Model.Account
{
    public class ExternalLoginModel
    {
        [Required]
        public string Provider { get; set; }
        [Required]
        public string ProviderKey { get; set; }
        [EmailAddress]
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string DiaplyName { get; set; }
        public string UserName { get; set; }
        public string Image { get; set; }
        public string Token { get; set; }
    }
}
