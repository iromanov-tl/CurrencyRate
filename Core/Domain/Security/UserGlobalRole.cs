using System.Collections.Generic;

namespace TravelLine.WebAppTemplate.Core.Domain.Security
{
    /// <summary>
    /// Сущность, представляющая глобальную пользовательскую роль.
    /// Глобальная в том смысле, что владеет ей некое внешнее приложение, а текущее приложение только использует ее.
    /// </summary>
    public class UserGlobalRole
    {
        public string GlobalRoleId { get; set; }
        public List<string> MappedGroups { get; set; }
    }
}
