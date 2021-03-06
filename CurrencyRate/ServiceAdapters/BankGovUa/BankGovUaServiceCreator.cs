﻿using CurrencyRate.ServiceAdapters.Adapters;
using Microsoft.Extensions.Configuration;

namespace CurrencyRate.ServiceAdapters.BankGovUa
{
    public class BankGovUaServiceCreator : IServiceCreator
    {
        private readonly IConfiguration _configuration;
        public BankGovUaServiceCreator(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public IServiceDataAdapter CreateService()
        {
            return new BankGovUaDataAdapter(_configuration);
        }
    }
}
