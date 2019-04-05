using System;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Xml;

namespace CurrencyRate.ServiceAdapters
{
    public class AdapterHelper
    {

        public static string ConvertXmlToJSON(string xmlContent)
        {
            XmlDocument doc = new XmlDocument();
            doc.LoadXml(xmlContent);
            return JsonConvert.SerializeXmlNode(doc);
        }

        public static Dictionary<string, double> ConvertRatesToSource(Dictionary<string, double> rates, double sourceCourse)
        {
            Dictionary<string, double> newRates = new Dictionary<string, double>();
            foreach (var rate in rates)
            {
                newRates.Add(rate.Key, rate.Value / sourceCourse);
            }
            return newRates;
        }
    }
}
