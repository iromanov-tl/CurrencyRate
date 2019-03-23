using System;

namespace TravelLine.WebAppTemplate.Core.Util
{
    public static class DateTimeUtil
    {
        public static DateTime ToLogSystemTime( DateTime arg )
        {
            return AsLocal( arg.ToUniversalTime() + TravellineDefaultTimezoneOffset );
        }

        private static TimeSpan TravellineDefaultTimezoneOffset
        {
            get
            {
                return TimeZoneInfo.Local.BaseUtcOffset;
            }
        }

        private static DateTime AsLocal( DateTime arg )
        {
            return arg.Kind == DateTimeKind.Local ? arg : new DateTime( arg.Ticks, DateTimeKind.Local );
        }
    }
}
