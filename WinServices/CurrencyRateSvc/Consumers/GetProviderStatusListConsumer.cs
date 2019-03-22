using System.Collections.Generic;
using System.Linq;
using TravelLine.MessageContracts.IntranetIntegration;
using TravelLine.TLTransit.Common.Consumers;
using TravelLine.CurrencyRate.Core.Domain;
using TravelLine.CurrencyRate.Core.Infrastructure;
using TravelLine.CurrencyRate.Core.Services;

namespace TravelLine.CurrencyRate.Services.CurrencyRateSvc.Consumers
{
    public class GetProviderStatusListConsumer : BaseConsumerWithContext<GetProviderStatusListNotification>
    {
        protected override void Process( IConsumerContext<GetProviderStatusListNotification> context )
        {
            var msg = context.Message;

            if ( msg.Application == "CurrencyRate" ) //TODO:необходимо сменить на Application.CurrencyRate
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
                Application = "CurrencyRate", //TODO:необходимо сменить на Application.CurrencyRate
                MasterProviderId = provider.Id,
                Mode = Mapper.OperationModeMapper.MapToIntranetIntegrationOperationMode(provider.Mode)
            };
        }
    }
}