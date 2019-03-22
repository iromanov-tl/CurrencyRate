using System.Linq;
using TravelLine.TLTransit.Common.Consumers;
using TravelLine.CurrencyRate.Core.Infrastructure;
using TravelLine.CurrencyRate.Core.Services;
using TravelLine.MessageContracts.IntranetIntegration.ObjectGroups;

namespace TravelLine.CurrencyRate.Services.CurrencyRateSvc.Consumers
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