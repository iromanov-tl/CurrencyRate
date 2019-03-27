﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using CurrencyRate.Models;
using CurrencyRate.Models.Rate;

namespace CurrencyRate.Pages.Rates
{
    public class IndexModel : PageModel
    {
        private readonly CurrencyRate.Models.CurrencyRateContext _context;

        public IndexModel(CurrencyRate.Models.CurrencyRateContext context)
        {
            _context = context;
        }

        public IList<Rate> Rate { get;set; }

        public async Task OnGetAsync()
        {
            Rate = await _context.Rate.ToListAsync();
        }
    }
}