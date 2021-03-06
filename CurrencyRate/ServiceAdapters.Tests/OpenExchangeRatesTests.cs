using CurrencyRate.ServiceAdapters;
using Microsoft.Extensions.Configuration;
using CurrencyRate.ServiceAdapters.OpenExchangeRates;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Xunit;

namespace CurrencyRate.Tests
{
    public class OpenExchangeRatesTest : IClassFixture<IConfigurationFixture>
    {
        private readonly IServiceCreator _creator;
        private const string ValidFilePath = "..\\..\\..\\ResponseExamples\\Openexchangerates\\Valid.json";
        private const string InvalidFilePath = "..\\..\\..\\ResponseExamples\\Openexchangerates\\Invalid.json";
        private string _validContent;
        private string _invalidContent;

        public OpenExchangeRatesTest(IConfigurationFixture fixture)    
        {
            IConfiguration configuration = fixture.Configuration;
            _creator = new OpenExchangeRatesServiceCreator(configuration);
            string ValidFileAbsolutePath = Path.GetFullPath(ValidFilePath, Directory.GetCurrentDirectory());
            string InvalidFileAbsolutePath = Path.GetFullPath(InvalidFilePath, Directory.GetCurrentDirectory());
            if (!File.Exists(ValidFileAbsolutePath) || !File.Exists(InvalidFileAbsolutePath))
            {
                throw new FileNotFoundException("Can not find valid or invalid file path.\n" +
                    "Expected valid file path: " + ValidFileAbsolutePath + "\n" +
                    "Expected invalid file path: " + InvalidFileAbsolutePath + "\n");
            }
            _validContent = File.ReadAllText(ValidFileAbsolutePath);
            _invalidContent = File.ReadAllText(InvalidFileAbsolutePath);
        } 

        [Fact]
        public void OpenExchangeRatesDataAdapter_GetRates_CorrectDate_NoExceptions()
        {
            Exception expectedException = null;
            IServiceDataAdapter adapter = _creator.CreateService();
            try
            {
                adapter.GetRates(_validContent);
            }
            catch (Exception ex)
            {
                expectedException = ex;
            }
            Assert.Null(expectedException);
        }

        [Fact]
        public void OpenExchangeRatesDataAdapter_GetRates_IncorrectDate_Exception()
        {
            IServiceDataAdapter adapter = _creator.CreateService();
            Exception expectedException = Assert.Throws<Exception>(() => adapter.GetRates(_invalidContent));
            Assert.Equal("Service returns message :" +
                " Historical rates for the requested date are not available" +
                " - please try a different date, or contact support@openexchangerates.org.", expectedException.Message);
        }

        private double GetRateValue(List<ServiceRate> rates, string code)
        {
            return rates.Single(item => item.Code == code).Value;
        }

        [Fact]
        public void OpenExchangeRatesDataAdapter_GetRates_CorrectDate_Success()
        {
            IServiceDataAdapter adapter = _creator.CreateService();
            List<ServiceRate> rates = adapter.GetRates(_validContent);
            Assert.Equal(1, (int)GetRateValue(rates, "RUB"));
            Assert.Equal(64, (int)GetRateValue(rates, "USD"));
            Assert.Equal(2, (int)GetRateValue(rates, "UAH"));
        }
    }
}
