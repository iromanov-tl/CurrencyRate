using System.Configuration;

namespace TravelLine.CurrencyRate.Core.Configuration.MailDispatchPoint
{
    class MailDispatchPointsSection : ConfigurationSection
    {
        [ConfigurationProperty( "", IsRequired = true, IsDefaultCollection = true )]
        MailDispatchPointCollection Instances
        {
            get { return (MailDispatchPointCollection)this[ "" ]; }
            set { this[ "" ] = value; }
        }

        public static readonly MailDispatchPointCollection MailDispatchPoints;

        static MailDispatchPointsSection()
        {
            MailDispatchPointsSection mailDispatchPointsSection = ConfigurationManager.GetSection( "mailDispatchPoints" ) as MailDispatchPointsSection;
            if ( mailDispatchPointsSection != null )
                MailDispatchPoints = mailDispatchPointsSection.Instances;
        }
    }
}