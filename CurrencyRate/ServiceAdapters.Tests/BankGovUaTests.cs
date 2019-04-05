using CurrencyRate.ServiceAdapters.Adapters;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Net.Http;
using Xunit;

namespace CurrencyRate.Tests
{
    public class BankGovUaServiceTest : IClassFixture<IConfigurationFixture>
    {
        private readonly IConfiguration _configuration;
        private const string ValidFilePath = "..\\..\\..\\ResponseExamples\\BankGovUa\\Valid.json";
        private const string InvalidFilePath = "..\\..\\..\\ResponseExamples\\BankGovUa\\Invalid.json";
        private string _validContent;
        private string _invalidContent;

        public BankGovUaServiceTest(IConfigurationFixture fixture)    
        {
            _configuration = fixture.Configuration;
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
        public void HasNoExceptions()
        {
            Exception expectedException = null;
            BankGovUaDataAdapter adapter = new BankGovUaDataAdapter(_configuration);
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
        public void HasExceptionInFarDate()
        {
            Exception expectedException = null;
            BankGovUaDataAdapter adapter = new BankGovUaDataAdapter(_configuration);
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

        [Fact]
        public void HasCorrectData()
        {
            BankGovUaDataAdapter adapter = new BankGovUaDataAdapter(_configuration);
            Dictionary<string, double> rates = adapter.GetRates(_validContent);
            Assert.Equal(1, rates["RUB"]);
            Assert.Equal(63, (int)rates["USD"]);
            Assert.Equal(2, (int)rates["UAH"]);
        }
    }
}
