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
    public class DetailsModel : PageModel
    {
        private readonly CurrencyRate.Models.CurrencyRateContext _context;

        public DetailsModel(CurrencyRate.Models.CurrencyRateContext context)
        {
            _context = context;
        }

        public Currency Currency { get; set; }

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            Currency = await _context.Currency.FirstOrDefaultAsync(m => m.CurrencyId == id);

            if (Currency == null)
            {
                return NotFound();
            }
            return Page();
        }
    }
}
