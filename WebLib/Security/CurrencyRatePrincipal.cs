using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Security.Principal;
using TravelLine.AccountsLib;
using TravelLine.AccountsLib.Claims;
using TravelLine.CurrencyRate.Core.Domain.Security;
using TravelLine.CurrencyRate.Core.Services;

namespace TravelLine.CurrencyRate.WebLib.Security
{
    public class CurrencyRatePrincipal : GenericPrincipal
    {
        public CurrencyRatePrincipal( IIdentity identity, string[] roles )
            : base( identity, roles )
        { }

        static IEnumerable<Claim> GetClaims( TLAccountsUser user )
        {
            UserClaim[] claims = !String.IsNullOrEmpty( user.ImpersonationUsername )
                ? user.ImpersonationClaims
                : user.Claims;

            return claims.Select( c => new Claim( c.Type, c.Value ) );
        }

        public override IEnumerable<Claim> Claims => ( (CurrencyRateIdentity) Identity ).Claims;

        public static CurrencyRatePrincipal Create( IUserService userService, TLAccountsUser accountsUser )
        {
            if ( accountsUser == null ) return Create();

            List<string> roles = userService.GetRolesForUser( accountsUser.ImpersonationUsername ?? accountsUser.Username ).ToList();
            IEnumerable<Claim> claims = GetClaims( accountsUser );

            if ( claims != null )
            {
                IEnumerable<string> roleClaims = claims
                    .Where( c => c.Type == System.Security.Claims.ClaimTypes.Role )
                    .Select( c => c.Value );

                List<UserGlobalRole> globalRoles = userService.GetAllGlobalRoles();

                IEnumerable<string> groups = globalRoles
                    .Where( gr => roleClaims.Contains( gr.GlobalRoleId ) )
                    .SelectMany( gr => gr.MappedGroups )
                    .Distinct();

                if ( groups.Any() )
                {
                    roles.AddRange( userService.GetRolesFromGroups( groups ) );
                }
            }

            return new CurrencyRatePrincipal( new CurrencyRateIdentity( accountsUser, claims ), roles.Distinct().ToArray() );
        }

        public static CurrencyRatePrincipal Create()
        {
            return new CurrencyRatePrincipal( new CurrencyRateIdentity( null, new Claim[] {} ), new string[ 0 ] );
        }
    }
}