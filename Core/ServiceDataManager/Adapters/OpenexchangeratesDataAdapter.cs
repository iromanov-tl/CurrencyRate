﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TravelLine.CurrencyRate.Core.ServiceDataManager.Adapters
{
    class OpenexchangeratesDataAdapter : IServiceDataAdapter
    {
        public string connectionUrl;
        private void SetConnectionUrl(DateTime date)
        {
            connectionUrl = "https://openexchangerates.org/api/historical/" + date.ToString("yyyy-MM-dd") + ".json?app_id=d164219ce3aa4403adc977f9ee09b996";
        }
        public ServiceData GetData()
        {
            ServiceData serviceData = new ServiceData();
            return serviceData;
        }
    }
}
