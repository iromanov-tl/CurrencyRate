﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using CurrencyRate.Core.Models.Rate;
using CurrencyRate.Core.Models;

namespace CurrencyRate.Pages.Rates
{
    public class DetailsModel : PageModel
    {
        private readonly CurrencyRateContext _context;

        public DetailsModel(CurrencyRateContext context)
        {
            _context = context;
        }

        private Rate rate;

        public Rate GetRate()
        {
            return rate;
        }

        public void SetRate(Rate value)
        {
            rate = value;
        }

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            SetRate(await _context.Rate.FirstOrDefaultAsync(m => m.Id == id));

            if (GetRate() == null)
            {
                return NotFound();
            }
            return Page();
        }
    }
}
