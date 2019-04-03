namespace CurrencyRate.Core.Models.Rate
{
    public class Rate
    {
        public int Id { get; set; }
        public int ServiceId { get; set; }
        public string Code { get; set; }
        public double Value { get; set; }
        public string Date { get; set; }
    }
}
