using CurrencyRate.Models;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;
using Xunit;

namespace CurrencyRate.Tests
{
    public class DBTests : IClassFixture<DBFixture>
    {
        private ServiceProvider _serviceProvider;

        public DBTests(DBFixture fixture)
        {
            _serviceProvider = fixture.ServiceProvider;
        }

        [Fact]
        public void Test1()
        {
            using (var context = _serviceProvider.GetService<CurrencyRateContext>())
            {
                Type type = context.Rate.GetType();
            }
        }

    }
}
