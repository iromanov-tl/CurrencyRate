using System.Collections.Generic;
using TravelLine.Database.DataAccess;
using TravelLine.CurrencyRate.Core.Domain.Security;

namespace Core.Tests.Services.Data
{
    public class UserServiceSeed
    {
        private readonly IRepositoryWithTypedId<Group, string> _groupRepository;
        private readonly IRepositoryWithTypedId<Role, string> _roleRepository;

        public UserServiceSeed( 
            IRepositoryWithTypedId<Group, string> groupRepository,
            IRepositoryWithTypedId<Role, string> roleRepository )
        {
            _groupRepository = groupRepository;
            _roleRepository = roleRepository;
        }

        public void Seed()
        {
            List<Group> groups = new List<Group>
            {
                new Group {Id = GroupName.Support},
                new Group {Id = GroupName.Support},
                new Group {Id = GroupName.Administrators},
                new Group {Id = GroupName.Users}
            };
            _groupRepository.Delete( _groupRepository.Table );
            _groupRepository.Save( groups );

            List<Role> roles = new List<Role>
            {
                new Role {Id = RoleName.AccessProviderSettings},
                new Role {Id = RoleName.AccessSystemSettings}
            };
            _roleRepository.Delete( _roleRepository.Table );
            _roleRepository.Save( roles );
        }
    }

}
