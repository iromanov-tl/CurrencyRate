using System;
using Ninject.Activation;
using TravelLine.Database.DataAccess.Initializers;

namespace TravelLine.WebAppTemplate.Core.DependencyManagement
{
    /// <summary>
    /// Dependency container manager.
    /// </summary>
    public interface IDependencyContainerManager
    {
        /// <summary>
        /// Dependency injection container.
        /// </summary>
        object Container { get; }

        /// <summary>
        /// Устанавливает функцию получения области видимости "Scope" для регистратора по умолчанию. Если не задана и нет текущей области видимости, то объекты будут создаваться на каждый вызов новые.
        /// </summary>
        /// <param name="defaultScopeFunc">Функция получения области видимости "Scope" для регистратора</param>
        void SetDefaultScope( Func<object> defaultScopeFunc );

        /// <summary>
        /// Получить объект по типу и названию связи.
        /// </summary>
        /// <typeparam name="T">Тип объекта</typeparam>
        /// <param name="name">Название связи (для именованных связей)</param>
        T Resolve<T>( string name = null ) where T : class;

        /// <summary>
        /// Получить объект по типу
        /// </summary>
        /// <param name="type"></param>
        /// <returns></returns>
        object Resolve( Type type );

        /// <summary>
        /// Попытаться получить объект по типу
        /// </summary>
        /// <returns>Вернет объект, если он свзяан с реализацией, иначе null</returns>
        object TryToResolve( Type type );

        /// <summary>
        /// Деактивирует и уничтожает все объекты в кэше, принадлежащие указанной области видимости.
        /// </summary>
        /// <param name="scope">Область видимости</param>
        void ClearScopeCache( object scope );

        /// <summary>
        /// Связывает объект и его реализацию как Singletone.
        /// </summary>
        /// <typeparam name="TService">Тип объекта</typeparam>
        /// <typeparam name="TImplementation">Тип реализации</typeparam>
        void BindAsSingleton<TService, TImplementation>() where TImplementation : TService;

        /// <summary>
        /// Связывает объект и его реализацию в текущей области видимости (threadlocal)
        /// </summary>
        /// <typeparam name="TService">Тип объекта</typeparam>
        /// <typeparam name="TImplementation">Тип реализации</typeparam>
        void Bind<TService, TImplementation>() where TImplementation : TService;

        void BindDbContextFactory<TService, TImplementation>( DatabaseInitializerType databaseInitializerType, string connectionString, string readOnlyConnectionString ) where TImplementation : TService;

        /// <summary>
        /// Связывает объект и его реализацию в текущей области видимости (threadlocal)
        /// </summary>
        /// <param name="service">Тип объекта</param>
        /// <param name="implementation">Реализация</param>
        void Bind( Type service, Type implementation );

        /// <summary>
        /// Связывает объект и метод для его создания
        /// </summary>
        void BindToMethod<TService>( Func<IContext, TService> method );

        void BindToMethodAsSingleton<TService>( Func<IContext, TService> method );
        void RebindToConstant<TService>( TService obj );

        void LoadModule( object module );
    }
}
