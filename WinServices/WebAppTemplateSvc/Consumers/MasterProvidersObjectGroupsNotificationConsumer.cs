using System.Linq;
using TravelLine.TLTransit.Common.Consumers;
using TravelLine.WebAppTemplate.Core.Infrastructure;
using TravelLine.WebAppTemplate.Core.Services;
using TravelLine.MessageContracts.IntranetIntegration.ObjectGroups;

namespace TravelLine.WebAppTemplate.Services.WebAppTemplateSvc.Consumers
{
    public class MasterProvidersObjectGroupsNotificationConsumer : BaseConsumerWithContext<MasterProvidersObjectGroupsNotification>
    {
        protected override void Process( IConsumerContext<MasterProvidersObjectGroupsNotification> context )
        {
            using ( var serviceScope = ServiceScope.Create() )
            {
                var providerObjectGroupService = serviceScope.Get<IProviderObjectGroupService>();
                var mappings = context.Message.MasterProvidersObjectGroups
                    .Where( data => data.TLProviderId > 0 )
                    .ToDictionary( data => data.TLProviderId, data => data.ObjectGroups.ToList() );

                providerObjectGroupService.SaveProvidersObjectGroups( mappings );
            }
        }
    }
}