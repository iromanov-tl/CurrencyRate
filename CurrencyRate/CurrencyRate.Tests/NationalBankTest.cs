using CurrencyRate.ServiceDataProvider.Adapters;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
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
        public void hasNoExceptions()
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
        public void hasExceptionInFarDate()
        {
            Exception expectedException = null;
            BankGovUaDataAdapter adapter = new BankGovUaDataAdapter(_configuration);
            try
            {
                adapter.GetRates(DateTime.Now.AddYears(1));
            }
            catch (Exception ex)
            {
                expectedException = ex;
            }
            Assert.NotNull(expectedException);
        }

        [Fact]
        public void hasExceptionInIncorrectData()
        {
            Exception expectedException = null;
            BankGovUaDataAdapter adapter = new BankGovUaDataAdapter(_configuration);
            try
            {
                adapter.GetRates(DateTime.Parse("abcdef"));
            }
            catch (Exception ex)
            {
                expectedException = ex;
            }
            Assert.NotNull(expectedException);
        }
    }
}
