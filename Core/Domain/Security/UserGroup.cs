﻿using TravelLine.CurrencyRate.Core.Data.Repository;

namespace TravelLine.CurrencyRate.Core.Domain.Security
{
    public class UserGroup : Entity
    {
        public virtual string Username { get; set; }
        public virtual string GroupId { get; set; }
    }
}