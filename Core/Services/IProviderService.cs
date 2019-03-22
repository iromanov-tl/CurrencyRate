using System.Collections.Generic;
using TravelLine.CurrencyRate.Core.Domain;

namespace TravelLine.CurrencyRate.Core.Services
{
    public interface IProviderService
    {
        Provider Get( int providerId );
        void Save(Provider provider);
        List<Provider> GetAllProviders();
        Provider Create();
    }
}