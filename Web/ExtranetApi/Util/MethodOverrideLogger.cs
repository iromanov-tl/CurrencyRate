using System;
using System.Reflection;
using Common.Logging;
using TLUILib.Handlers;

namespace TravelLine.CurrencyRate.ExtranetApi.Util
{
    public class MethodOverrideLogger : IMethodOverrideLogger
    {
        private readonly ILog _log = LogManager.GetLogger( MethodBase.GetCurrentMethod().DeclaringType );

        public void LogException( Exception ex )
        {
            _log.Error( ex.Message, ex );
        }
    }
}