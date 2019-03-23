using System;
using IntranetIntegrationOperationMode = TravelLine.MessageContracts.IntranetIntegration.OperationMode;
using OperationMode = TravelLine.WebAppTemplate.Core.Domain.OperationMode;


namespace TravelLine.WebAppTemplate.Services.WebAppTemplateSvc.Mapper
{
    public static class OperationModeMapper
    {
        public static OperationMode MapToOperationMode( this IntranetIntegrationOperationMode operationMode )
        {
            switch ( operationMode )
            {
                case IntranetIntegrationOperationMode.Demo:
                    return OperationMode.Demo;
                case IntranetIntegrationOperationMode.Full:
                    return OperationMode.Full;
                case IntranetIntegrationOperationMode.Restricted:
                    return OperationMode.Restricted;
                case IntranetIntegrationOperationMode.Disabled:
                    return OperationMode.Disabled;
                default:
                    throw new Exception( "Unknown OperationMode" );
            }
        }

        public static IntranetIntegrationOperationMode MapToIntranetIntegrationOperationMode( this OperationMode intranetIntegrationOperationMode )
        {
            switch ( intranetIntegrationOperationMode )
            {
                case OperationMode.Demo:
                    return IntranetIntegrationOperationMode.Demo;
                case OperationMode.Full:
                    return IntranetIntegrationOperationMode.Full;
                case OperationMode.Restricted:
                    return IntranetIntegrationOperationMode.Restricted;
                case OperationMode.Disabled:
                    return IntranetIntegrationOperationMode.Disabled;
                default:
                    throw new Exception( "Unknown IntranetIntegrationOperationMode" );
            }
        }
    }
}