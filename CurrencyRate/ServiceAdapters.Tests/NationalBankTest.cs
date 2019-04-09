using CurrencyRate.ServiceAdapters;
using CurrencyRate.ServiceAdapters.Adapters;
using Microsoft.Extensions.Configuration;
using ServiceAdapters;
using ServiceAdapters.NationalBank;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using Xunit;

namespace CurrencyRate.Tests
{
    public class NationalBankServiceTest : IClassFixture<IConfigurationFixture>
    {   
        private readonly IServiceCreator _creator;
        private const string ValidFilePath = "..\\..\\..\\ResponseExamples\\NationalBank\\Valid.xml";
        private const string InvalidFilePath = "..\\..\\..\\ResponseExamples\\NationalBank\\Invalid.xml";
        private string _validContent;
        private string _invalidContent;


        public NationalBankServiceTest(IConfigurationFixture fixture)    
        {
            IConfiguration configuration = fixture.Configuration;
            _creator = new NationalBankServiceCreator(configuration);
            string ValidFileAbsolutePath = Path.GetFullPath(ValidFilePath, Directory.GetCurrentDirectory());
            string InvalidFileAbsolutePath = Path.GetFullPath(InvalidFilePath, Directory.GetCurrentDirectory());
            if (!File.Exists(ValidFileAbsolutePath) && !File.Exists(InvalidFileAbsolutePath))
            {
                throw new FileNotFoundException("Can not find valid or invalid file path.\n" +
                    "Expected valid file path: " + ValidFileAbsolutePath + "\n" +
                    "Expected invalid file path: " + InvalidFileAbsolutePath + "\n");
            }
            _validContent = File.ReadAllText(ValidFileAbsolutePath);
            _invalidContent = File.ReadAllText(InvalidFileAbsolutePath);
        } 

        [Fact]
        public void NationalBankDataAdapter_GetRates_CorrectDate_NoExceptions()
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
        public void NationalBankDataAdapter_GetRates_IncorrectDate_Exception()
        {
            Exception expectedException = null;
            IServiceDataAdapter adapter = _creator.CreateService();
            try
            {
                adapter.GetRates(_invalidContent);
            }
            catch (Exception ex)
            {
                expectedException = ex;
            }
            Assert.NotNull(expectedException);
            Assert.Equal("Service did not return data", expectedException.Message);
        }

        private double GetRateValue(List<ServiceRate> rates, string code)
        {
            return rates.Single(item => item.Code == "RUB").Value;
        }

        [Fact]
        public void NationalBankDataAdapter_GetRates_CorrectDate_Success()
        {
            IServiceDataAdapter adapter = _creator.CreateService();
            List<ServiceRate> rates = adapter.GetRates(_validContent);
            Assert.Equal(1, GetRateValue(rates, "RUB"));
            Assert.Equal(64, GetRateValue(rates, "USD"));
            Assert.Equal(2, GetRateValue(rates, "UAH"));
        }
    }
}
