using CurrencyRate.ServiceAdapters.Adapters;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using Xunit;

namespace CurrencyRate.Tests
{
    public class BankGovUaServiceTest : IClassFixture<IConfigurationFixture>
    {
        private readonly IConfiguration _configuration;   

        public BankGovUaServiceTest(IConfigurationFixture fixture)    
        {
            _configuration = fixture.Configuration;
        } 

        [Fact]
        public void HasNoExceptions()
        {
            Exception expectedException = null;
            BankGovUaDataAdapter adapter = new BankGovUaDataAdapter(_configuration);
            try
            {
                adapter.GetRates(DateTime.Now);
            }
            catch (WebException httpException)
            {
                Console.WriteLine("Service not responding. Message : " + httpException.Message);
                return;
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
            BankGovUaDataAdapter adapter = new BankGovUaDataAdapter(_configuration);
            try
            {
                adapter.GetRates(DateTime.Now.AddYears(1));
            }
            catch (WebException httpException)
            {
                Console.WriteLine("Service not responding. Message : " + httpException.Message);
                return;
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
            BankGovUaDataAdapter adapter = new BankGovUaDataAdapter(_configuration);
            try
            {
                Dictionary<string, double> rates = adapter.GetRates(DateTime.Parse("2013-02-22"));
                Assert.Equal(1, rates["RUB"]);
                Assert.Equal(30, (int)rates["USD"]);
                Assert.Equal(3, (int)rates["UAH"]);
            }
            catch (WebException httpException)
            {
                Console.WriteLine("Service not responding. Message : " + httpException.Message);
            }         
        }
    }
}
