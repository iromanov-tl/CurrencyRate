using TravelLine.CurrencyRate.Core.Domain;
using TravelLine.CurrencyRate.ExtranetApi.Models;

namespace TravelLine.CurrencyRate.ExtranetApi.Mapper
{
    public static class ExpressMapperConfiguration
    {
        public static void Configure()
        {
            ExpressMapper.Mapper.Reset();

            ExpressMapper.Mapper.Register<Provider, ProviderDto>();

            //Mapper.Register<SourceKind, SourceDto>()
            //     .Function( dest => dest.Id, src => (long)src )
            //     .Function( dest => dest.Code, SourceCodeKind.GetBySource )
            //     .Function( dest => dest.Name, SourceNameKind.GetBySource );

        }
    }
}