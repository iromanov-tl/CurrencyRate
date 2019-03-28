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

namespace CurrencyRate.Pages
{
    public class IndexModel : PageModel
    {
        private readonly RatesManager.RatesManager _ratesManager;
        private readonly IServiceRepository _serviceRepository;
        public string date;
        public string currency;



        public List<RateRecord> rates = new List<RateRecord>();
        public IndexModel(RatesManager.RatesManager ratesManager, IServiceRepository serviceRepository)
        {
            _ratesManager = ratesManager;
            _serviceRepository = serviceRepository;
        }
        public void OnGet(string date, string currency)
        {
            if (date != null && currency != null && date != "" && currency != "")
            {
                this.date = date;
                this.currency = currency;
                this.rates = _ratesManager.GetRates(DateTime.Parse(date).Date, currency);
            }
        }

        public void OnPost()
        {
            string date = Request.Form["date"];
            string currency = Request.Form["currency"];
            RedirectToPage("/Index?date=" + date + "&currency=" + currency);
            //TODO: redirect to results page
        }
    }
}
