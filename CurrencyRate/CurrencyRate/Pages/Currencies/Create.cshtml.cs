using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using CurrencyRate.Models;
using CurrencyRate.Models.Currency;

namespace CurrencyRate.Pages.Currencies
{
    public class CreateModel : PageModel
    {
        private readonly CurrencyRate.Models.CurrencyRateContext _context;

        public CreateModel(CurrencyRate.Models.CurrencyRateContext context)
        {
            _context = context;
        }

        public IActionResult OnGet()
        {
            return Page();
        }

        [BindProperty]
        public Currency Currency { get; set; }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            _context.Currency.Add(Currency);
            await _context.SaveChangesAsync();

            return RedirectToPage("./Index");
        }
    }
}