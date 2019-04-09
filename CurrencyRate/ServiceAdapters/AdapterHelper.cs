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

        public static List<ServiceRate> ConvertRatesToSource(List<ServiceRate> rates, double sourceCourse)
        {
            rates.ForEach(rate => rate.Value /= sourceCourse);
            return rates;
        }
    }
}
