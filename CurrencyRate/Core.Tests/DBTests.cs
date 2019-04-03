using CurrencyRate.Core.Data.EFRepository;
using CurrencyRate.Core.Models;
using CurrencyRate.Core.Models.Rate;
using CurrencyRate.Core.Models.Service;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using Xunit;

namespace CurrencyRate.Tests
{
    public class DBTests
    {
        private readonly RateRepository _rateRepository;
        private readonly ServiceRepository _serviceRepository;

        private readonly CurrencyRateContext _context;

        private const string TestDate = "02.04.2019 0:00:00";

        public DBTests()
        {
            var options = new DbContextOptionsBuilder<CurrencyRateContext>()
                .UseInMemoryDatabase(databaseName: "DBTest")
                .Options;
            _context = new CurrencyRateContext(options);
            _rateRepository = new RateRepository(_context);
            _serviceRepository = new ServiceRepository(_context);
            AddServicesData();
        }

        private void AddServicesData()
        {
            List<Service> services = new List<Service> {
                new Service {
                    Url = "service1.com"
                },
                new Service {
                    Url = "service2.com"
                },
                new Service {
                    Url = "service3.com"
                }
            };
            _context.Service.AddRange(services);
            _context.SaveChanges();
        }

        private List<Rate> GetRatesTestData()
        {
            return new List<Rate> {
                new Rate {
                    ServiceId = 1,
                    Code = "USD",
                    Value = 65.5,
                    Date = TestDate
                },
                new Rate {
                    ServiceId = 1,
                    Code = "EUR",
                    Value = 70.5,
                    Date = TestDate
                },
                new Rate {
                    ServiceId = 1,
                    Code = "RUB",
                    Value = 1,
                    Date = TestDate
                },
                new Rate {
                    ServiceId = 2,
                    Code = "USD",
                    Value = 65.7,
                    Date = TestDate
                },
                new Rate {
                    ServiceId = 2,
                    Code = "EUR",
                    Value = 70.7,
                    Date = TestDate
                },
                new Rate {
                    ServiceId = 2,
                    Code = "RUB",
                    Value = 1,
                    Date = TestDate
                },
                new Rate {
                    ServiceId = 2,
                    Code = "UAH",
                    Value = 2.2,
                    Date = TestDate
                }
            };
        }


        [Fact]
        public void CanSaveRate()
        {
            Exception expectedException = null;
            List<Rate> testData = GetRatesTestData();
            try {
                _rateRepository.Save(testData);
            }
            catch(Exception exception)
            {
                expectedException = exception;
            }
            Assert.Null(expectedException);
        }

        [Fact]
        public void CanGetValidItem()
        {
            List<ReportingRate> rates = _rateRepository.GetItems(DateTime.Parse(TestDate).Date, "UAH");
            Assert.Equal(1, rates.Count());
            Assert.Equal("UAH", rates.Single().Code);
            Assert.Equal("service2.com", rates.Single().ServiceUrl);
            Assert.Equal(2.2, rates.Single().Value);
        }

        [Fact]
        public void CanGetServices()
        {
            List<Service> services = _serviceRepository.GetServices();
            Assert.Equal(3, services.Count);
        }

    }
}
