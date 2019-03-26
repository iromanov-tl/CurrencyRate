using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using CurrencyRate.Models.Rate;

namespace CurrencyRate.Pages.Rates
{
    public class EditModel : PageModel
    {
        private readonly CurrencyRate.Models.CurrencyRateContext _context;

        public EditModel(CurrencyRate.Models.CurrencyRateContext context)
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

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            _context.Attach(Rate).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RateExists(Rate.Id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return RedirectToPage("./Index");
        }

        private bool RateExists(int id)
        {
            return _context.Rate.Any(e => e.Id == id);
        }
    }
}
