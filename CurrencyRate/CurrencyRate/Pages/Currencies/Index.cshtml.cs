using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using CurrencyRate.Models;
using CurrencyRate.Models.Currency;

namespace CurrencyRate.Pages.Currencies
{
    public class IndexModel : PageModel
    {
        private readonly CurrencyRate.Models.CurrencyRateContext _context;

        public IndexModel(CurrencyRate.Models.CurrencyRateContext context)
        {
            _context = context;
        }

        public IList<Currency> Currency { get;set; }

        public async Task OnGetAsync()
        {
            Currency = await _context.Currency.ToListAsync();
        }
    }
}
