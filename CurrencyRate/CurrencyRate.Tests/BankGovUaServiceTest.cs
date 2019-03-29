using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace CurrencyRate.Tests
{
    [TestClass]
    public class BankGovUaServiceTest
    {
        [TestMethod]
        public void TestServiceAvailability()
        {

            Exception expectedException = null;
            BankGovUaDataAdapter adapter = new BankGovUaDataAdapter();
            try {
                adapter.GetRates(DateTime.Now);
            }
            catch(Exception exception) {
                expectedException = exception;
            }
            Assert.IsNull(expectedException);
        }

    }
}
