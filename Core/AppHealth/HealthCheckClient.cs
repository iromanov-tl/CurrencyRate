using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using TravelLine.AppHealth;
using TravelLine.TLTransit.Common;
using TravelLine.CurrencyRate.Core.Configuration;
using TravelLine.CurrencyRate.Core.Infrastructure;

namespace TravelLine.CurrencyRate.Core.AppHealth
{
    public class HealthCheckClient : IAppHealthStateResolver
    {
        private readonly HealthCheckParams _healthCheckParams;
        private readonly Action _additionalCheck;

        public HealthCheckClient( HealthCheckParams healthCheckParams, Action additionalCheck = null )
        {
            _healthCheckParams = healthCheckParams;
            _additionalCheck = additionalCheck;
        }

        public HealthStateResult CheckAppHealth( AppHealthRequestClientInfo clientInfo )
        {
            var errorMessages = new List<string>();
            try
            {
                if ( _healthCheckParams.TestDatabaseConnection )
                {
                    TestSqlConnection( Config.DbConnectionString );
                }
            }
            catch ( Exception )
            {
                errorMessages.Add( "TestSqlConnection faile" );
            }

            try
            {
                if ( _healthCheckParams.TestBusQueueConnection )
                {
                    TestQueueBusConnection();
                }
            }
            catch ( Exception )
            {
                errorMessages.Add( "TestQueueBusConnection failed" );
            }

            try
            {
                if ( _additionalCheck != null )
                {
                    _additionalCheck();
                }
            }
            catch ( Exception ex)
            {
                errorMessages.Add( ex.Message );
            }

            return errorMessages.Any()
                ? HealthStateResult.Critical( string.Join( ",", errorMessages ) )
                : HealthStateResult.Ok();
        }

        public void TestSqlConnection( string connectionString )
        {
            using ( var connection = new SqlConnection( connectionString ) )
            {
                connection.Open();
            }
        }

        public void TestQueueBusConnection()
        {
            using ( var scope = ServiceScope.Create() )
            {
                var connector = scope.Get<ITLTransitConnector>();
                connector.Publish( new object() );
            }
        }
    }
}
