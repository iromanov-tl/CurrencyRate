/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../../app/Constants.ts" />
/// <reference path="../../dto/Dto.inc.ts" />
/* tslint:disable:no-any */
module WebAppTemplate.Application.Services {

    import ProvidersContainerDto = Dto.ProvidersContainerDto;

    export interface IProviderService {
        getProviders(): ng.IPromise<ProvidersContainerDto>;
        disableProvider(providerSourceId: number): void;
        enableProvider(providerSourceId: number): void;
    }

    export class ProviderService implements IProviderService {

        private _api: any;
        private _$resource: ng.resource.IResourceService;

        constructor($resource: ng.resource.IResourceService) {
            this._$resource = $resource;
            this._api = this._$resource(
                Constants.baseServiceUrl + 'provider/get-all', {}, {
                    'getProviders': {
                        'method': 'GET',
                        'url': Constants.baseServiceUrl + 'provider/get-all'
                    },
                    'setProviderStatus': {
                        'method': 'GET',
                        'url': Constants.baseServiceUrl + 'provider/:providerId/status/:status'
                    }
                }
            );
        }

        public getProviders(): ng.IPromise<ProvidersContainerDto> {
            return this._api.getProviders().$promise;
        }

        public disableProvider(providerId: number): void {
            return this.setProviderStatus(providerId, false);
        }

        public enableProvider(providerId: number): void {
            return this.setProviderStatus(providerId, true);
        }

        private setProviderStatus(providerId: number, status: boolean): void {
            return this._api.setProviderStatus({ providerId: providerId, status: status });
        }
    }

    angular.module('tlApp').service('providerService', ProviderService);
}