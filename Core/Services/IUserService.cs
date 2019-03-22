using System.Collections.Generic;
using TravelLine.CurrencyRate.Core.Domain.Security;

namespace TravelLine.CurrencyRate.Core.Services
{
    public interface IUserService
    {
        string[] GetRolesForUser( string username );
        string[] GetRolesFromGroups( IEnumerable<string> groups );
        bool UserContextExists( ProviderUserContext userContext );

        List<string> GetAllGroupNames( bool? isPublic = null );
        List<string> GetAllRoleNames();
        List<UserGlobalRole> GetAllGlobalRoles();

        List<ProviderUserContext> GetUserContexts(string username);
        List<ProviderUserContext> GetUserContexts(int providerId);
        List<ProviderUserContext> GetAllUserContexts();
        void Save( ProviderUserContext userContext );
        void DeleteProviderUserContexts( int userContextId );

        List<UserGroup> GetAllUserGroups();
        List<UserGroup> GetUserGroupsForUser( string username );
        void IncludeUserInGroup( string username, string groupName );
        void ExcludeUserFromGroup( string username, string groupName );

        List<UserRole> GetUserRolesForUser( string username );
        void AddUserRole( string username, string roleName );
        void RemoveUserRole( string username, string roleName );

        bool IsUserInGroup( string username, string groupName );
        bool IsUserInRole( string username, string roleName );
        bool IsUserInAnyRoles(string username, List<string> roleName);

    }
}