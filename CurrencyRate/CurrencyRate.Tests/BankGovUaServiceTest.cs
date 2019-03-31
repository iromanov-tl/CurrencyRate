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
            mockConfiguration.SetupGet(x => x["ServicesSettings:BankGovUa:ServiceId"]).Returns("1");
            mockConfiguration.SetupGet(x => x["ServicesSettings:BankGovUa:ServiceCurrencyCode"]).Returns("UAH");
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