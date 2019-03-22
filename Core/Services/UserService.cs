using System;
using System.Collections.Generic;
using System.Linq;
using TravelLine.Database.DataAccess;
using TravelLine.CurrencyRate.Core.Domain.Security;

namespace TravelLine.CurrencyRate.Core.Services
{
    public class UserService : IUserService
    {
        private readonly Data.Repository.IRepository<ProviderUserContext> _userContextRepository;
        private readonly Data.Repository.IRepository<UserGroup> _userGroupRepository;
        private readonly Data.Repository.IRepository<UserRole> _userRoleRepository;
        private readonly Data.Repository.IRepository<GroupRole> _groupRoleRepository;
        private readonly IRepositoryWithTypedId<Group,string> _groupRepository;
        private readonly IRepositoryWithTypedId<Role,string> _roleRepository;

        public UserService( 
            Data.Repository.IRepository<ProviderUserContext> userContextRepository, 
            Data.Repository.IRepository<UserGroup> userGroupRepository, 
            Data.Repository.IRepository<UserRole> userRoleRepository, 
            Data.Repository.IRepository<GroupRole> groupRoleRepository, 
            IRepositoryWithTypedId<Group, string> groupRepository, 
            IRepositoryWithTypedId<Role, string> roleRepository
            )
        {
            _userContextRepository = userContextRepository;
            _userGroupRepository = userGroupRepository;
            _userRoleRepository = userRoleRepository;
            _groupRoleRepository = groupRoleRepository;
            _groupRepository = groupRepository;
            _roleRepository = roleRepository;
        }

        #region IUserService Members

        public string[] GetRolesForUser( string username )
        {
            var result = _userRoleRepository.Table.Where( ur => ur.Username == username ).Select( x => x.RoleId )
                .Union(
                    from ug in _userGroupRepository.Table
                    join gr in _groupRoleRepository.Table on ug.GroupId equals gr.GroupId
                    where ug.Username == username
                    select gr.RoleId
                );
            return result.ToArray();
        }

        public string[] GetRolesFromGroups( IEnumerable<string> groups )
        {
            return _groupRepository.Table
                .Where( g => groups.Contains( g.Id ) )
                .SelectMany( g => g.Roles.Select( r => r.Id ) ).ToArray();
        }

        public bool UserContextExists( ProviderUserContext userContext )
        {
            return _userContextRepository.Table.Any( x => x.ProviderId == userContext.ProviderId && x.Username == userContext.Username );
        }

        public List<ProviderUserContext> GetUserContexts( string username )
        {
            return _userContextRepository.Table.Where( x => x.Username == username ).ToList();
        }

        public List<ProviderUserContext> GetUserContexts( int providerId )
        {
            return _userContextRepository.Table.Where( x => x.ProviderId == providerId ).ToList();
        }

        public bool IsUserInGroup( string username, string groupName )
        {
            return _userGroupRepository.Table.Any( x => x.Username == username && x.GroupId == groupName );
        }

        public bool IsUserInRole( string username, string roleName )
        {
            string[] roles = GetRolesForUser( username );
            return roles.Contains( roleName );
        }

        public bool IsUserInAnyRoles( string username, List<string> roleName )
        {
            var userRoles = GetRolesForUser( username );
            return userRoles.Any( roleName.Contains );
        }


        public List<ProviderUserContext> GetAllUserContexts()
        {
            return _userContextRepository.Table.ToList();
        }

        public void Save( ProviderUserContext userContext )
        {
            if ( userContext == null )
                throw new ArgumentNullException( nameof( userContext ) );

            if ( userContext.Id == 0 && UserContextExists( userContext ) )
            {
                return;
            }
            _userContextRepository.Save( userContext );
        }

        public void DeleteProviderUserContexts( int userContextId )
        {
            if ( userContextId <= 0 )
                throw new InvalidOperationException( "userContextId must be > 0" );

            var providerUserContext = _userContextRepository.Get( userContextId );
            _userContextRepository.Delete( providerUserContext );
        }

        public List<UserGroup> GetAllUserGroups()
        {
            return _userGroupRepository.Table.ToList();
        }

        public List<UserGroup> GetUserGroupsForUser( string username )
        {
            return _userGroupRepository.Table.Where( x => x.Username == username ).ToList();
        }

        public void IncludeUserInGroup( string username, string groupName )
        {
            var userGroup = _userGroupRepository.Table.FirstOrDefault( x => x.Username == username && x.GroupId == groupName );
            if ( userGroup == null )
            {
                _userGroupRepository.Save( new UserGroup
                {
                    Username = username,
                    GroupId = groupName
                } );
            }
        }

        public void ExcludeUserFromGroup( string username, string groupName )
        {
            var userGroup = _userGroupRepository.Table.FirstOrDefault( x => x.Username == username && x.GroupId == groupName );
            if ( userGroup != null )
            {
                _userGroupRepository.Delete( userGroup );
            }
        }

        public List<string> GetAllGroupNames( bool? isPublic = null )
        {
            return _groupRepository.Table.Where( item => isPublic == null || item.IsPublic == isPublic ).Select( item => item.Id ).ToList();
        }

        public List<string> GetAllRoleNames()
        {
            return _roleRepository.Table.Select( r => r.Id ).ToList();
        }

        public List<UserRole> GetUserRolesForUser( string username )
        {
            return _userRoleRepository.Table.Where( x => x.Username == username ).ToList();
        }

        public void AddUserRole( string username, string roleName )
        {
            var userRole = _userRoleRepository.Table.FirstOrDefault( x => x.Username == username && x.RoleId == roleName );
            if ( userRole == null )
            {
                _userRoleRepository.Save( new UserRole
                {
                    Username = username,
                    RoleId = roleName
                } );
            }
        }

        public void RemoveUserRole( string username, string roleName )
        {
            var userRole = _userRoleRepository.Table.FirstOrDefault( x => x.Username == username && x.RoleId == roleName );
            if ( userRole != null )
            {
                _userRoleRepository.Delete( userRole );
            }
        }

        public List<UserGlobalRole> GetAllGlobalRoles()
        {
            return new List<UserGlobalRole>
            {
                new UserGlobalRole
                {
                    GlobalRoleId = "administrator",
                    MappedGroups = new List<string> { GroupName.Users }
                }
            };
        }

        #endregion
    }
}
