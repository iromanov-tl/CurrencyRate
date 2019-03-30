using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using CurrencyRate.RatesManager;
using CurrencyRate.Models;
using CurrencyRate.Models.Rate;
using CurrencyRate.Models.Service;
using Microsoft.Extensions.Logging;

namespace CurrencyRate.Pages
{
    public class IndexModel : PageModel
    {
        private readonly RatesManager.RatesManager _ratesManager;
        private readonly IServiceRepository _serviceRepository;
        private readonly ILogger<IndexModel> _logger;
        public string date = "";
        public string currency = "";
        public string message = "";



        public List<RateRecord> rates = new List<RateRecord>();
        public IndexModel(RatesManager.RatesManager ratesManager, IServiceRepository serviceRepository, ILogger<IndexModel> logger)
        {
            _ratesManager = ratesManager;
            _serviceRepository = serviceRepository;
            _logger = logger;
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
                this.rates.Sort((a, b) =>
                    a.Value.CompareTo(b.Value)
                );
            }
        }
    }
}
