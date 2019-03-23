using System;
using System.Collections.Generic;
using System.Configuration;

namespace TravelLine.WebAppTemplate.Core.Configuration.MailDispatchPoint
{
    public class MailDispatchPoint : ConfigurationElement
    {
        Dictionary<string, string> _domains;

        protected Dictionary<string, string> Domains
        {
            get
            {
                if ( _domains == null )
                {
                    _domains = new Dictionary<string, string>();
                    if ( !String.IsNullOrEmpty( RecipientDomains ) )
                    {
                        foreach ( string item in RecipientDomains.Split( ',' ) )
                        {
                            string domain = item.Trim();
                            _domains.Add( domain, domain );
                        }
                    }
                }
                return _domains;
            }
        }

        [ConfigurationProperty( "id", IsRequired = true )]
        public string Id => this[ "id" ] as string;

        [ConfigurationProperty( "group", IsRequired = false, DefaultValue = "" )]
        public string Group => this[ "group" ] as string;

        [ConfigurationProperty( "server", IsRequired = true )]
        public string Server => this[ "server" ] as string;

        [ConfigurationProperty( "username", IsRequired = false, DefaultValue = "" )]
        public string Username => this[ "username" ] as string;

        [ConfigurationProperty( "password", IsRequired = false, DefaultValue = "" )]
        public string Password => this[ "password" ] as string;

        [ConfigurationProperty( "recipientDomains", IsRequired = false )]
        public string RecipientDomains => this[ "recipientDomains" ] as string;

        public bool AssignedToRecipientDomain( string domain )
        {
            return Domains.ContainsKey( domain.Trim() );
        }
    }
}