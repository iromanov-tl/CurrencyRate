using Core.Tests.Services.Data;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using TravelLine.CurrencyRate.Core.Domain.Security;
using TravelLine.CurrencyRate.Core.Services;

namespace Core.Tests.Services
{
    [TestClass]
    public class UserServiceTest: PersistenseTest
    {
        #region IntegrationTest common
        [ClassInitialize]
        public static void ClassInitialize( TestContext testContext )
        {
            InitDependencyContainer();
        }

        [TestInitialize]
        public void TestInitialize()
        {
            CreateScope();
            InitializeTest();
        }

        [TestCleanup]
        public void TestCleanup()
        {
            DisposeScope();
        }
        #endregion

        private IUserService _userService;
        private void InitializeTest()
        {
            Scope.Get<UserServiceSeed>().Seed();
            _userService = Scope.Get<IUserService>();
        }

        [TestMethod]
        public void UserService_CheckBasicRoles_Success()
        {
            var roles = _userService.GetAllRoleNames();

            Assert.IsTrue( roles.Count > 0 );
            Assert.IsTrue( roles.Contains( RoleName.AccessSystemSettings ) );
            Assert.IsTrue( roles.Contains( RoleName.AccessProviderSettings ) );
        }

        [TestMethod]
        public void UserService_CheckBasicGroups_Success()
        {
            var groups = _userService.GetAllGroupNames();

            Assert.IsTrue( groups.Count > 0 );
            Assert.IsTrue( groups.Contains( GroupName.Administrators ) );
            Assert.IsTrue( groups.Contains( GroupName.Support ) );
            Assert.IsTrue( groups.Contains( GroupName.SupportLocal ) );
            Assert.IsTrue( groups.Contains( GroupName.Users ) );
        }
    }

}