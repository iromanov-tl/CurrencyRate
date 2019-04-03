using System.Threading.Tasks;
using CurrencyRate.Core.Models;
using CurrencyRate.Core.Models.Rate;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace CurrencyRate.Pages.Rates
{
    public class CreateModel : PageModel
    {
        private readonly CurrencyRateContext _context;

        public CreateModel(CurrencyRateContext context)
        {
            _context = context;
        }

        public IActionResult OnGet()
        {
            return Page();
        }

        [BindProperty]
        public Rate Rate { get; set; }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            _context.Rate.Add(Rate);
            await _context.SaveChangesAsync();

            return RedirectToPage("./Index");
        }
    }
}