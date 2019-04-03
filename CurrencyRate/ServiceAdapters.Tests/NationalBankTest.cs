using CurrencyRate.ServiceAdapters.Adapters;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using Xunit;

namespace CurrencyRate.Tests
{
    public class NationalBankServiceTest : IClassFixture<IConfigurationFixture>
    {
        private readonly IConfiguration _configuration;   

        public NationalBankServiceTest(IConfigurationFixture fixture)    
        {
            _configuration = fixture.Configuration;
        } 

        [Fact]
        public void HasNoExceptions()
        {
            Exception expectedException = null;
            NationalBankDataAdapter adapter = new NationalBankDataAdapter(_configuration);
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
            NationalBankDataAdapter adapter = new NationalBankDataAdapter(_configuration);
            try
            {
                adapter.GetRates(DateTime.Now.AddYears(1));
            }
            catch (Exception ex)
            {
                expectedException = ex;
            }
            Assert.NotNull(expectedException);
            Assert.Equal("Service did not return data", expectedException.Message);
        }

        [Fact]
        public void HasCorrectData()
        {
            NationalBankDataAdapter adapter = new NationalBankDataAdapter(_configuration);
            Dictionary<string, double> rates = adapter.GetRates(DateTime.Parse("2013-02-22"));
            Assert.Equal(1, rates["RUB"]);
            Assert.Equal(30, (int)rates["USD"]);
            Assert.Equal(3, (int)rates["UAH"]);
        }
    }
}
