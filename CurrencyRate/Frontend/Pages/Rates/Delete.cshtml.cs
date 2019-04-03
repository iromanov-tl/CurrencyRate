using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CurrencyRate.Core.Models;
using CurrencyRate.Core.Models.Rate;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;

namespace CurrencyRate.Pages.Rates
{
    public class DeleteModel : PageModel
    {
        private readonly CurrencyRateContext _context;

        public DeleteModel(CurrencyRateContext context)
        {
            _context = context;
        }

        [BindProperty]
        public Rate Rate { get; set; }

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            Rate = await _context.Rate.FirstOrDefaultAsync(m => m.Id == id);

            if (Rate == null)
            {
                return NotFound();
            }
            return Page();
        }

        public async Task<IActionResult> OnPostAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            Rate = await _context.Rate.FindAsync(id);

            if (Rate != null)
            {
                _context.Rate.Remove(Rate);
                await _context.SaveChangesAsync();
            }

            return RedirectToPage("./Index");
        }
    }
}
