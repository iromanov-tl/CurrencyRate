using CurrencyRate.ServiceDataLoader.Adapters;
using Microsoft.Extensions.Configuration;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System;
using System.Net.Sockets;

namespace CurrencyRate.Tests
{
    [TestClass]
    public class BankGovUaServiceTest
    {
        public BankGovUaServiceTest(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        private readonly IConfiguration _configuration;
        [TestMethod]
        public void TestServiceAvailability()
        {

            Exception expectedException = null;
            var mockConfiguration = new Mock<IConfiguration>();
            BankGovUaDataAdapter adapter = new BankGovUaDataAdapter(mockConfiguration.Object);
            try
            {
                adapter.GetRates(DateTime.Now);
            }
            catch (Exception exception)
            {
                expectedException = exception;
            }
            Assert.IsNull(expectedException);
        }

    }
}