﻿using System;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Reflection;

namespace TravelLine.CurrencyRate.Core.Data
{
    public class CurrencyRateDbContext : TravelLine.Database.DataAccess.DbContext
    {
        public CurrencyRateDbContext( string nameOrConnectionString ) : base( nameOrConnectionString )
        {
        }

        protected override void OnModelCreating( DbModelBuilder modelBuilder )
        {
            var typesToRegister = Assembly.GetExecutingAssembly().GetTypes()
                .Where( type => !string.IsNullOrEmpty( type.Namespace ) )
                .Where(
                    type =>
                        type.BaseType != null && type.BaseType.IsGenericType &&
                        type.BaseType.GetGenericTypeDefinition() == typeof( EntityTypeConfiguration<> ) );
            foreach ( var type in typesToRegister )
            {
                dynamic configurationInstance = Activator.CreateInstance( type );
                modelBuilder.Configurations.Add( configurationInstance );
            }
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
            base.OnModelCreating( modelBuilder );
        }

    }
}
