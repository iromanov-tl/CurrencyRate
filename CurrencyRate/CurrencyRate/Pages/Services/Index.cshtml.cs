using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using CurrencyRate.Core.Models;
using CurrencyRate.Core.Models.Service;

namespace CurrencyRate.Pages.Services
{
    public class IndexModel : PageModel
    {
        private readonly CurrencyRateContext _context;

        public IndexModel(CurrencyRateContext context)
        {
            _context = context;
        }

        public IList<Service> Service { get;set; }

        public async Task OnGetAsync()
        {
            Service = await _context.Service.ToListAsync();
        }
    }
}
