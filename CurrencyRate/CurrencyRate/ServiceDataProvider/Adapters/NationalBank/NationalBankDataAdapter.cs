using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using CurrencyRate.Models.Rate;
using CurrencyRate.Tools;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace CurrencyRate.ServiceDataProvider.Adapters
{
    public class NationalBankDataAdapter : IServiceDataAdapter
    {
        /* service return only xml format */
        private readonly IConfiguration _configuration;
        private string _defaultCurrencyCode;
        private string _serviceCurrencyCode;
        private int _serviceId;

        public NationalBankDataAdapter(IConfiguration configuration)
        {
            _configuration = configuration;
            const string SectionName = "NationalBank";
            _serviceCurrencyCode = _configuration.GetValue<string>("ServicesSettings:"+ SectionName + ":ServiceCurrencyCode");
            _serviceId = _configuration.GetValue<int>("ServicesSettings:"+ SectionName + ":ServiceId");
            _defaultCurrencyCode = _configuration.GetValue<string>("CurrenciesSettings:DefaultCurrencyCode");
        }

        public int GetId()
        {
            return _serviceId;
        }

        private string ConvertXmlToJSON(string xmlContent)
        {
            XmlDocument doc = new XmlDocument();
            doc.LoadXml(xmlContent);
            return JsonConvert.SerializeXmlNode(doc);
        }

        private Dictionary<string, double> ConvertRatesToSource(Dictionary<string, double> rates, double sourceCourse)
        {
            Dictionary<string, double> newRates = new Dictionary<string, double>();
            foreach (var rate in rates)
            {
                newRates.Add(rate.Key, rate.Value / sourceCourse);
            }
            return newRates;
        }

        private List<NationalBankRateObject> GetDataFromJson(string json)
        {
            NationalBankDataObject dataObject;
            List<NationalBankRateObject> rates = new List<NationalBankRateObject>();
            try
            {
                dataObject = JsonConvert.DeserializeObject<NationalBankDataObject>(json);
                rates = dataObject.rates.item;
            }
            catch (Exception exception)
            {
                throw new Exception("Can not parse response from service. Exception text : " + exception.Message);
            }
            if (rates == null || rates.Count == 0)
                throw new Exception("Service did not return data");
            return rates;
        }

        public Dictionary<string, double> GetRates(DateTime date)
        {
            string connectionUrl = "http://www.nationalbank.kz/rss/get_rates.cfm?fdate=" + date.ToString("dd.MM.yyyy");
            double sourceCourse = 0;

            string responseXML = HttpClient.GetDataFromUrl(connectionUrl);
            string responseJson = ConvertXmlToJSON(responseXML);
            List<NationalBankRateObject> rateObjects = GetDataFromJson(responseJson);
            //ValidateResponse(ratesProperty);
            Dictionary<string, double> rates = new Dictionary<string, double>();

            foreach (NationalBankRateObject item in rateObjects)
            {
                if (item.title == _defaultCurrencyCode)
                {
                    sourceCourse = item.description;
                }
                rates.Add(item.title, item.description);
            }
            rates.Add(_serviceCurrencyCode, 1);

            if (sourceCourse == 0)
                throw new Exception("Can't compute currency with code:" + _defaultCurrencyCode);
            
            return ConvertRatesToSource(rates, sourceCourse);
        }
    }
}
