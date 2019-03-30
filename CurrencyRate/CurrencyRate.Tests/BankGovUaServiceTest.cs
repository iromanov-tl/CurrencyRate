using CurrencyRate.ServiceDataProvider.Adapters;
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