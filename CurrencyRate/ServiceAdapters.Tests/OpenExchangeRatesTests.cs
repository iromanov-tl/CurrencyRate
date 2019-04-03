using CurrencyRate.ServiceDataProvider.Adapters;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using Xunit;

namespace CurrencyRate.Tests
{
    public class OpenExchangeRatesTest : IClassFixture<IConfigurationFixture>
    {
        private readonly IConfiguration _configuration;   

        public OpenExchangeRatesTest(IConfigurationFixture fixture)    
        {
            _configuration = fixture.Configuration;
        } 

        [Fact]
        public void HasNoExceptions()
        {
            Exception expectedException = null;
            OpenExchangeRatesDataAdapter adapter = new OpenExchangeRatesDataAdapter(_configuration);
            try
            {
                adapter.GetRates(DateTime.Now);
            }
            catch (Exception ex)
            {
                expectedException = ex;
            }
            Assert.Null(expectedException);
        }

        [Fact]
        public void HasExceptionInFarDate()
        {
            Exception expectedException = null;
            OpenExchangeRatesDataAdapter adapter = new OpenExchangeRatesDataAdapter(_configuration);
            try
            {
                adapter.GetRates(DateTime.Now.AddYears(1));
            }
            catch (Exception ex)
            {
                expectedException = ex;
            }
            Assert.NotNull(expectedException);
            Assert.Equal("Service returns message :" +
                " Historical rates for the requested date are not available" +
                " - please try a different date, or contact support@openexchangerates.org.", expectedException.Message);
        }

        [Fact]
        public void HasCorrectData()
        {
            OpenExchangeRatesDataAdapter adapter = new OpenExchangeRatesDataAdapter(_configuration);
            Dictionary<string, double> rates = adapter.GetRates(DateTime.Parse("2013-02-22"));
            Assert.Equal(1, rates["RUB"]);
            Assert.Equal(30, (int)rates["USD"]);
            Assert.Equal(3, (int)rates["UAH"]);
        }
    }
}
