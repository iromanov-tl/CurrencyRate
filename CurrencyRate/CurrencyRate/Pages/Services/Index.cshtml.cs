using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using CurrencyRate.Models;
using CurrencyRate.Models.Service;

namespace CurrencyRate.Pages.Services
{
    public class IndexModel : PageModel
    {
        private readonly CurrencyRate.Models.CurrencyRateContext _context;

        public IndexModel(CurrencyRate.Models.CurrencyRateContext context)
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
