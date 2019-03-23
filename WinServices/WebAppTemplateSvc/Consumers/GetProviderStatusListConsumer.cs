using System.Collections.Generic;
using System.Linq;
using TravelLine.MessageContracts.IntranetIntegration;
using TravelLine.TLTransit.Common.Consumers;
using TravelLine.WebAppTemplate.Core.Domain;
using TravelLine.WebAppTemplate.Core.Infrastructure;
using TravelLine.WebAppTemplate.Core.Services;

namespace TravelLine.WebAppTemplate.Services.WebAppTemplateSvc.Consumers
{
    public class GetProviderStatusListConsumer : BaseConsumerWithContext<GetProviderStatusListNotification>
    {
        protected override void Process( IConsumerContext<GetProviderStatusListNotification> context )
        {
            var msg = context.Message;

            if ( msg.Application == "WebAppTemplate" ) //TODO:необходимо сменить на Application.WebAppTemplate
            {
                using ( var serviceScope = ServiceScope.Create() )
                {
                    IProviderService providerService = serviceScope.Get<IProviderService>();
                    IEnumerable<Provider> providers;
                    if ( msg.Mode == ProviderStatusListMode.All )
                    {
                        providers = providerService.GetAllProviders();
                    }
                    else
                    {
                        if ( msg.MasterProviderIds == null || !msg.MasterProviderIds.Any() )
                            return;

                        providers = providerService.GetAllProviders().Where( p => msg.MasterProviderIds.Contains( p.Id ) );
                    }

                    ProviderStatusListNotification providerStatusList = new ProviderStatusListNotification
                    {
                        ProviderStatuses = providers.Select( Convert )
                    };

                    context.Publish( providerStatusList );
                }
            }
        }

        protected ProviderStatus Convert( Provider provider )
        {
            return new ProviderStatus
            {
                Application = "WebAppTemplate", //TODO:необходимо сменить на Application.WebAppTemplate
                MasterProviderId = provider.Id,
                Mode = Mapper.OperationModeMapper.MapToIntranetIntegrationOperationMode(provider.Mode)
            };
        }
    }
}