using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using CurrencyRate.RatesManager;
using CurrencyRate.Models;

namespace CurrencyRate.Pages
{
    public class IndexModel : PageModel
    {
        private readonly RatesManager.RatesManager _ratesManager;
        public IndexModel(RatesManager.RatesManager ratesManager)
        {
            _ratesManager = ratesManager;
        }
        public void OnGet()
        {

        }

        public void OnPost()
        {
            string date = Request.Form["date"];
            string currency = Request.Form["currency"];
            _ratesManager.GetRates(DateTime.Parse(date), currency);
            //TODO: redirect to results page
        }
    }
}
