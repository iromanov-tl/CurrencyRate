using System;
using System.Collections.Concurrent;
using System.Linq;
using System.Reflection;

namespace TravelLine.CurrencyRate.Core.Data
{
    [AttributeUsage(AttributeTargets.Property)]
    public class DateTimeKindAttribute : Attribute
    {
        private static readonly ConcurrentDictionary<Type, PropertyInfo[]> DateTimeProperties = new ConcurrentDictionary<Type, PropertyInfo[]>();

        private readonly DateTimeKind _kind;

        public DateTimeKindAttribute(DateTimeKind kind)
        {
            _kind = kind;
        }

        public DateTimeKind Kind
        {
            get { return _kind; }
        }

        public static void Apply(object entity)
        {
            if (entity == null)
                return;

            var entityType = entity.GetType();
            if (!DateTimeProperties.ContainsKey(entityType))
            {
                var properties = entity.GetType().GetProperties().Where(x => x.PropertyType == typeof(DateTime) || x.PropertyType == typeof(DateTime?)).ToArray();
                DateTimeProperties[entityType] = properties;
            }

            foreach ( var property in DateTimeProperties[entityType])
            {
                var attr = property.GetCustomAttribute<DateTimeKindAttribute>();
                if (attr == null)
                    continue;

                var dt = property.PropertyType == typeof(DateTime?)
                    ? (DateTime?)property.GetValue(entity)
                    : (DateTime)property.GetValue(entity);

                if (dt == null)
                    continue;

                property.SetValue(entity, DateTime.SpecifyKind(dt.Value, attr.Kind));
            }
        }
    }
}
