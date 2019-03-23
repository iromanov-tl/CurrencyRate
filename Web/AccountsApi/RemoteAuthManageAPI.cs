using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Web;
using System.Web.Caching;
using TravelLine.AccountsLib.Claims.Services;
using TravelLine.AccountsManagementLib;
using TravelLine.WebAppTemplate.Core.Domain;
using TravelLine.WebAppTemplate.Core.Domain.Security;
using TravelLine.WebAppTemplate.Core.Services;

namespace TravelLine.WebAppTemplate.AccountsApi
{
    public class RemoteAuthManageAPI : IRemoteAuthManageAPI
    {
        private const string AllRolesCacheKey = "AuthAllRoles";

        private static readonly List<string> AdminRoles = new List<string> { RoleName.AccessSystemSettings };
        readonly Lazy<List<string>> _allGroupNames;
        readonly Lazy<List<string>> _allRoleNames;

        readonly IUserService _userService;
        readonly IProviderService _providerService;
        private readonly IClaimsAuthService _claimsAuthService;
        private readonly IProviderObjectGroupService _providerObjectGroupService;
        readonly HttpContextBase _httpContext;

        public RemoteAuthManageAPI(
            IUserService userService,
            IProviderService providerService,
            HttpContextBase httpContext,
            IClaimsAuthService claimsAuthService,
            IProviderObjectGroupService providerObjectGroupService
        )
        {
            _userService = userService;
            _providerService = providerService;
            _httpContext = httpContext;
            _claimsAuthService = claimsAuthService;
            _providerObjectGroupService = providerObjectGroupService;
            _allGroupNames = new Lazy<List<string>>( () => _userService.GetAllGroupNames() );
            _allRoleNames = new Lazy<List<string>>( () => _userService.GetAllRoleNames() );
        }

        Cache Cache => _httpContext.Cache;

        private class ProviderObject : ApplicationObject
        {
            public ProviderObject( Provider provider )
                : base( $"{provider.Name} ({provider.Id})", provider.Id.ToString( CultureInfo.InvariantCulture ) )
            {
            }
        }

        /// <summary>
        /// Отдает только существующие группы
        /// </summary>
        /// <param name="groups"></param>
        /// <returns></returns>
        IEnumerable<string> FilterGroups( IEnumerable<string> groups )
        {
            return groups.Intersect( _allGroupNames.Value ).ToList();
        }

        /// <summary>
        /// Отдает только существующие роли
        /// </summary>
        /// <param name="roles"></param>
        /// <returns></returns>
        IEnumerable<string> FilterRoles( IEnumerable<string> roles )
        {
            return roles.Intersect( _allRoleNames.Value ).ToList();
        }

        #region IRemoteAPI Members

        #region Objects API

        public List<ApplicationObject> GetAvailableObjects( RemoteIdentity remoteIdentity )
        {
            return GetObjects( remoteIdentity, GetProviders() );
        }

        public List<ApplicationObject> GetObjectsByIds( RemoteIdentity remoteIdentity, IEnumerable<string> ids )
        {
            long[] providerIds = ids.Select( idStr => Convert.ToInt64( idStr ) ).ToArray();
            return GetObjects( remoteIdentity, GetProviders( providerIds ) );
        }

        public void BindUsersToObjects( RemoteIdentity remoteIdentity, IEnumerable<string> usernames, IEnumerable<string> objectIds )
        {
            var contextsToBind = from username in usernames
                                 from objectId in objectIds
                                 select new ProviderUserContext
                                 {
                                     ProviderId = Int32.Parse( objectId ),
                                     Username = username
                                 };
            foreach ( var providerUserContext in contextsToBind )
            {
                _userService.Save( providerUserContext );
            }
        }

        public void UnbindUsersFromObjects( RemoteIdentity remoteIdentity, IEnumerable<string> usernames, IEnumerable<string> objectIds )
        {
            var usernameList = usernames as IList<string> ?? usernames.ToList();
            var contextsToUnbind = from username in usernameList
                                   from objectId in objectIds
                                   select new ProviderUserContext
                                   {
                                       ProviderId = Int32.Parse( objectId ),
                                       Username = username
                                   };
            var existingProviderUserContexts = usernameList.ToDictionary(
                username => username,
                username => _userService.GetUserContexts( username )
                );

            foreach ( var providerUserContext in contextsToUnbind )
            {
                var providerUserContextToDelete = existingProviderUserContexts.ContainsKey( providerUserContext.Username )
                    ? existingProviderUserContexts[ providerUserContext.Username ].Find( puc => puc.ProviderId == providerUserContext.ProviderId )
                    : null;

                if ( providerUserContextToDelete != null )
                    _userService.DeleteProviderUserContexts( providerUserContextToDelete.Id );
            }
        }

        public Dictionary<string, List<ApplicationObject>> GetUsersObjects( RemoteIdentity remoteIdentity, List<string> usernames )
        {
            return usernames.ToDictionary(
                username => username,
                username => _userService.GetUserContexts( username ).ConvertAll<ApplicationObject>(
                    c => new ProviderObject( _providerService.Get( c.ProviderId ) )
                    )
                );
        }

        public Dictionary<string, List<string>> GetObjectsUsers( RemoteIdentity remoteIdentity, List<string> objectIds )
        {
            return objectIds.ToDictionary(
                objectId => objectId,
                objectId => _userService.GetUserContexts( Int32.Parse( objectId ) ).Select( c => c.Username ).ToList()
            );
        }

        public Dictionary<string, ApplicationObject> GetDefaultUsersObject( RemoteIdentity remoteIdentity, List<string> usernames )
        {
            return usernames.ToDictionary(
                username => username,
                username => (ApplicationObject) null );
        }

        public void SetDefaultUsersObject( RemoteIdentity remoteIdentity, Dictionary<string, string> defaultObjects )
        {
            throw new NotImplementedException();
        }

        #endregion

        #region Groups API

        public List<string> GetAllGroups( RemoteIdentity remoteIdentity )
        {
            return IsAdmin( remoteIdentity )
                ? _userService.GetAllGroupNames()
                : _userService.GetAllGroupNames( true );
        }

        public Dictionary<string, List<string>> GetUsersGroups( RemoteIdentity remoteIdentity, List<string> usernames )
        {
            return usernames.ToDictionary(
                username => username,
                username => _userService.GetUserGroupsForUser( username ).Select( g => g.GroupId ).ToList()
            );
        }

        public void IncludeUsersInGroups( RemoteIdentity remoteIdentity, IDictionary<string, IEnumerable<string>> userGroups )
        {
            foreach ( var entry in userGroups )
            {
                var username = entry.Key;
                var groups = FilterGroups( entry.Value );
                foreach ( var group in groups )
                {
                    _userService.IncludeUserInGroup( username, group );
                }
            }
        }

        public void ExcludeUsersFromGroups( RemoteIdentity remoteIdentity, IDictionary<string, IEnumerable<string>> userGroups )
        {
            foreach ( var entry in userGroups )
            {
                var username = entry.Key;
                var groups = FilterGroups( entry.Value );
                foreach ( var group in groups )
                {
                    _userService.ExcludeUserFromGroup( username, group );
                }
            }
        }

        #endregion

        #region Roles API

        public List<string> GetAllRoles( RemoteIdentity remoteIdentity )
        {
            List<string> allRoles = (List<string>)Cache.Get( AllRolesCacheKey );
            if ( allRoles == null )
            {
                allRoles = _userService.GetAllRoleNames();
                Cache.Insert( AllRolesCacheKey, allRoles, null, DateTime.Now.AddHours( 1 ), Cache.NoSlidingExpiration );
            }
            return allRoles;
        }

        public Dictionary<string, List<string>> GetUsersRoles( RemoteIdentity remoteIdentity, List<string> usernames )
        {
            return usernames.ToDictionary(
                username => username,
                username => _userService.GetRolesForUser( username ).ToList()
            );
        }

        public void IncludeUsersInRoles( RemoteIdentity remoteIdentity, IDictionary<string, IEnumerable<string>> userRoles )
        {
            foreach ( var entry in userRoles )
            {
                var username = entry.Key;
                var roles = FilterRoles( entry.Value );
                foreach ( var role in roles )
                {
                    _userService.AddUserRole( username, role );
                }
            }
        }

        public void ExcludeUsersFromRoles( RemoteIdentity remoteIdentity, IDictionary<string, IEnumerable<string>> userRoles )
        {
            foreach ( var entry in userRoles )
            {
                var username = entry.Key;
                var roles = FilterRoles( entry.Value );
                foreach ( var role in roles )
                {
                    _userService.RemoveUserRole( username, role );
                }
            }
        }

        #endregion

        #endregion

        private bool IsAdmin( RemoteIdentity remoteIdentity )
        {
            return remoteIdentity != null && _userService.IsUserInAnyRoles( remoteIdentity.Username, AdminRoles );
        }

        private List<ApplicationObject> GetObjects( RemoteIdentity remoteIdentity,
            IEnumerable<Provider> preselectedProviders )
        {
            if ( remoteIdentity?.Claims == null )
            {
                return new List<ApplicationObject>();
            }

            var providers = preselectedProviders.ToArray();
            IDictionary<int, List<string>> providersObjectGroups =
                _providerObjectGroupService.GetProvidersObjectGroups( providers.Select( p => p.Id ) );

            return providers
                .Where( p => providersObjectGroups.ContainsKey( p.Id ) && _claimsAuthService.IsAccessAllowed( remoteIdentity.Claims, providersObjectGroups[ p.Id ] ) )
                .Select( p => (ApplicationObject) new ProviderObject( p ) )
                .ToList();
        }

        private IEnumerable<Provider> GetProviders( long[] providerIds = null )
        {
            return providerIds == null
                ? _providerService.GetAllProviders()
                : _providerService.GetAllProviders().Where( provider => providerIds.Contains( provider.Id ) );
        }

        public Dictionary<string, string[]> GetClaimsToGroupsMappings( RemoteIdentity remoteIdentity )
        {
            return _userService.GetAllGlobalRoles().ToDictionary( gr => gr.GlobalRoleId, gr => gr.MappedGroups.ToArray() );
        }
    }
}