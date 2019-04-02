using CurrencyRate.Data.EFRepository;
using CurrencyRate.Models;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;
using Xunit;

namespace CurrencyRate.Tests
{
    public class DBTests : IClassFixture<DBFixture>
    {
        private ServiceProvider _serviceProvider;
        private readonly RateRepository _rateRepository;
        private readonly ServiceRepository _serviceRepository;

        public DBTests(DBFixture fixture)
        {
            _serviceProvider = fixture.ServiceProvider;
            _rateRepository = new RateRepository(_serviceProvider.GetService<CurrencyRateContext>());
            _serviceRepository = new ServiceRepository(_serviceProvider.GetService<CurrencyRateContext>());
        }

        [Fact]
        public void CanSaveRate()
        {
            _rateRepository.
        }

        [Fact]
        public void CanGetValidItems()
        {
            _rateRepository.
        }

        [Fact]
        public void CanGetServices()
        {
            _serviceRepository.
        }

    }
}
