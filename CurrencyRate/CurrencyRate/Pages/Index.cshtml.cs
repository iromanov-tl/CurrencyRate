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
using CurrencyRate.Models.Currency;

namespace CurrencyRate.Pages
{
    public class IndexModel : PageModel
    {
        private readonly RatesManager.RatesManager _ratesManager;
        private readonly IServiceRepository _serviceRepository;
        private readonly ICurrencyRepository _currencyRepository;
        private readonly ILogger<IndexModel> _logger;
        public List<Currency> currencies;
        public string date = "";
        public int currencyId;
        public string message = "";



        public List<RateRecord> rates = new List<RateRecord>();
        public IndexModel(RatesManager.RatesManager ratesManager, IServiceRepository serviceRepository, ICurrencyRepository currencyRepository, ILogger<IndexModel> logger)
        {
            _ratesManager = ratesManager;
            _serviceRepository = serviceRepository;
            _currencyRepository = currencyRepository;
            _logger = logger;
            currencies = _currencyRepository.GetCurrencies();
        }
        public void OnGet(string date, int ?currencyId)
        {
            if (!String.IsNullOrEmpty(date) && currencyId != null)
            {
                this.date = date;
                this.currencyId = currencyId.GetValueOrDefault();
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
                this.rates = _ratesManager.GetRates(dateTime.Date, this.currencyId);
                this.rates.Sort((a, b) =>
                    a.Value.CompareTo(b.Value)
                );
            }
        }
    }
}
