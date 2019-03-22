using System;
using System.Reflection;
using Common.Logging;
using TravelLine.MessageContracts.IntranetIntegration;
using TravelLine.TLTransit.Common.Consumers;
using TravelLine.CurrencyRate.Core.Domain;
using TravelLine.CurrencyRate.Core.Infrastructure;
using TravelLine.CurrencyRate.Core.Services;
using TravelLine.CurrencyRate.Core.Services.Travelline;
using IntranetIntegrationOperationMode = TravelLine.MessageContracts.IntranetIntegration.OperationMode;

namespace TravelLine.CurrencyRate.Services.CurrencyRateSvc.Consumers
{
    public class IntranetOperationModeNotificationConsumer : BaseConsumerWithContext<SetOperationModeNotification>
    {
        private static readonly ILog _log = LogManager.GetLogger( MethodBase.GetCurrentMethod().DeclaringType );

        protected override void Process( IConsumerContext<SetOperationModeNotification> context )
        {
            _log.Info( "SetOperationModeNotification has been recieved." );

            var msg = context.Message;
            if ( msg.Application != "CurrencyRate" ) //TODO: необходимо сменить на Application.CurrencyRate 
                return;

            using ( var serviceScope = ServiceScope.Create() )
            {
                IProviderService providerService = serviceScope.Get<IProviderService>();
                Provider provider = providerService.Get( msg.MasterProviderId );
                if ( provider == null )
                {
                    provider = providerService.Create();
                    provider.Id = msg.MasterProviderId;
                }
                if ( msg.Mode == IntranetIntegrationOperationMode.Demo || msg.Mode == IntranetIntegrationOperationMode.Full )
                {
                    provider.IsEnabled = true;
                }
                else
                {
                    provider.IsEnabled = false;
                }
                provider.Mode = Mapper.OperationModeMapper.MapToOperationMode( msg.Mode );

                ITravellineProviderService tlProviderService = serviceScope.Get<ITravellineProviderService>();
                var result = tlProviderService.GetProviderTranslatedInfo( msg.MasterProviderId.ToString() );

                if ( result == null )
                {
                    throw new Exception( "Travelline Api return null provider info" );
                }

                provider.Name = result.Name;
                provider.Language = result.Language;
                providerService.Save( provider );

                //ITLTransitConnector connector = serviceScope.Get<ITLTransitConnector>();
                //TODO: необходимо реализовать CurrencyRateStatusChangeNotification в TravelLine.MessageContracts.TLCore
                //connector.Publish(new CurrencyRateStatusChangeNotification
                //{
                //    ProviderId = provider.Id,
                //    IsEnabled = provider.IsEnabled
                //});
                throw new NotImplementedException( "CurrencyRateStatusChangeNotification not implemented" );
            }
        }
    }
}