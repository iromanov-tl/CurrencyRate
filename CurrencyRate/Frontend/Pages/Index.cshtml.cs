using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Configuration;
using CurrencyRate.Core.RatesManager;
using CurrencyRate.Core.Models.Service;
using CurrencyRate.Core.Models.Rate;

namespace CurrencyRate.Pages
{
    public class IndexModel : PageModel
    {
        private readonly RatesManager _ratesManager;
        private readonly IServiceRepository _serviceRepository;
        private readonly ILogger<IndexModel> _logger;
        private readonly IConfiguration _configuration;
        public string date = "";
        public string currency = "";
        public string message = "";
        public List<string> currencies = new List<string>();
        public List<ReportingRate> rates = new List<ReportingRate>();

        public IndexModel(RatesManager ratesManager, IServiceRepository serviceRepository, ILogger<IndexModel> logger, IConfiguration configuration)
        {
            _ratesManager = ratesManager;
            _serviceRepository = serviceRepository;
            _logger = logger;
            _configuration = configuration;
            currencies = configuration.GetSection("CurrenciesSettings:CurrenciesToChange").Get<List<string>>();

        }
        public void OnGet(string date, string currency)
        {
            if (!String.IsNullOrEmpty(date) && !String.IsNullOrEmpty(currency))
            {
                this.date = date;
                this.currency = currency;
                DateTime dateTime;
                try
                {
                    dateTime = DateTime.Parse(date);
                }
                catch(Exception exception)
                {
                    _logger.LogWarning(exception.Message);
                    return;
                }
                this.rates = _ratesManager.GetRates(dateTime.Date, currency);
            }
        }
    }
}
