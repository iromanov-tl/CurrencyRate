using TravelLine.WebAppTemplate.Core.Domain;
using TravelLine.WebAppTemplate.ExtranetApi.Models;

namespace TravelLine.WebAppTemplate.ExtranetApi.Mapper
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