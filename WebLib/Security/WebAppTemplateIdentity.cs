using System;
using System.Collections.Generic;
using System.Security.Claims;
using TravelLine.AccountsLib;

namespace TravelLine.WebAppTemplate.WebLib.Security
{
    public class WebAppTemplateIdentity : ClaimsIdentity
    {
        readonly TLAccountsUser _user;

        public WebAppTemplateIdentity( TLAccountsUser tlUser, IEnumerable<Claim> claims ) : base( claims )
        {
            _user = tlUser;
        }

        public string Email
        {
            get
            {
                string email = String.Empty;
                if ( _user != null )
                {
                    email = IsImpersonation ? _user.ImpersonationEmail : _user.Email;
                }
                return email;
            }
        }

        public bool IsImpersonation => _user?.ImpersonationUsername != null;

        public string Language => String.IsNullOrEmpty( _user?.Language ) ? "ru" : _user.Language;

        /// <summary>
        /// real (not impersonated) username
        /// </summary>
        public string OriginalName => _user != null ? _user.Username : String.Empty;

        #region IIdentity Members

        public override string AuthenticationType => "Forms";

        public override bool IsAuthenticated => _user != null;

        public override string Name
        {
            get
            {
                string username = String.Empty;
                if ( _user != null )
                {
                    username = _user.ImpersonationUsername ?? _user.Username;
                }
                return username;
            }
        }

        #endregion
    }
}