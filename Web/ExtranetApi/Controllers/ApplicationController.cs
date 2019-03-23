using System.Web;
using System.Web.Http;
using TravelLine.WebAppTemplate.Core.Domain;
using TravelLine.WebAppTemplate.Core.Services;
using TravelLine.WebAppTemplate.ExtranetApi.Models;

namespace TravelLine.WebAppTemplate.ExtranetApi.Controllers
{
    [AllowAnonymous, RoutePrefix( "application" )]
    public class ApplicationController : BaseApiController
    {

        private readonly IUserService _userService;
        private readonly IResourceService _resourceService;

        public ApplicationController( IUserService userService, IResourceService resourceService )
        {
            _userService = userService;
            _resourceService = resourceService;
        }

        [Route( "config" )]
        public ApplicationConfigDto GetConfiguration()
        {
            ApplicationConfigDto result = new ApplicationConfigDto
            {
                AppEnabled = Provider != null && Provider.Mode != OperationMode.Disabled,
                ProviderName = Provider?.Name
            };

            if ( HttpContext.Current.User.Identity.IsAuthenticated )
            {
                result.UserAuthenticated = true;
                result.UserRoles = _userService.GetRolesForUser( HttpContext.Current.User.Identity.Name );
            }
            
            return result;
        }
    }
}