using System.Configuration;

namespace TravelLine.WebAppTemplate.Core.Configuration.MailDispatchPoint
{
    public class MailDispatchPointCollection : ConfigurationElementCollection
    {
        public new MailDispatchPoint this[ string id ]
        {
            get { return BaseGet( id ) as MailDispatchPoint; }
            set
            {
                if ( BaseGet( id ) != null )
                {
                    BaseRemove( id );
                }
                BaseAdd( value );
            }
        }

        protected override ConfigurationElement CreateNewElement()
        {
            return new MailDispatchPoint();
        }

        protected override object GetElementKey( ConfigurationElement element )
        {
            return ( (MailDispatchPoint)element ).Id;
        }
    }
}