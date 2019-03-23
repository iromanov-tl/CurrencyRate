/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../../app/services/ProviderService.ts" />

/* tslint:disable:no-any */
module WebAppTemplate.Application.Controllers {
    import IProviderService = Services.IProviderService;
    import ProvidersContainerDto = Dto.ProvidersContainerDto;
    import Provider = Dto.Provider;

    export interface IProviderScope extends ng.IScope {
        host: any;
        extranetService: any;
        providers: Provider[];
        deactivate: (provider: Provider) => void;
        reactivate: (provider: Provider) => void;
        getSrcImagesUrl: (providerId: number) => string;
        getItems: (from: number, to: number) => ng.IPromise<any>;
    }

    class ProviderController {
        public static $inject: string[] = ['$scope', '$resource', '$q', 'providerService'];

        private _localScope: IProviderScope;
        private _providerService: IProviderService;

        constructor(
            $scope: IProviderScope,
            $resource: ng.resource.IResourceService,
            $q: ng.IQService,
            providerService: IProviderService
        ) {
            this._localScope = $scope;
            this._providerService = providerService;
            $scope.deactivate = (provider: Provider) => { this.deactivate(provider); };
            $scope.reactivate = (provider: Provider) => { this.reactivate(provider); };
            $scope.getItems = (from: number, to: number) => { return this.getItems($q, from, to); };

            $scope.providers = [];
            $scope.host.pageTitle = 'T:provider.title';
            $scope.host.getMainMenu().activateMenuItem( MenuItems.providerSettings );
        }

        public getItems($q: any, from: number, to: number): ng.IPromise<any> {
            return $q((resolve: any) => {
                let providerPromise: ng.IPromise<ProvidersContainerDto> = this._providerService.getProviders();
                providerPromise.then((providerContainer: ProvidersContainerDto) => {
                    resolve(providerContainer);
                });
            });
        }

        public deactivate(provider: Provider): void {
            this._localScope.extranetService.loadData(
                () => this._providerService.disableProvider(provider.id),
                () => { provider.isEnabled = false; }
            );
        }

        public reactivate(provider: Provider): void {
            this._localScope.extranetService.loadData(
                () => this._providerService.enableProvider(provider.id),
                () => { provider.isEnabled = true; }
            );
        }
    }

    angular.module('tlApp').controller('ProviderController', ProviderController);
}