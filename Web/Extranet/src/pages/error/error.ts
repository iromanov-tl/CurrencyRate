/// <reference path="../../../typings/tsd.d.ts" />

module WebAppTemplate.Controllers {
    interface IErrorPageScope extends ng.IScope {
        errorCode: number;
        /* tslint:disable:no-any */
        host: any;
    }

    class ErrorPageController {
        public static $inject: string[] = ['$scope', '$routeParams', '$location', 'tlApplication'];
        private _$scope: IErrorPageScope;

        constructor($scope: IErrorPageScope, $routeParams: any, $location: any, tlApplication: any ) {
            /* tslint:enable:no-any */
            this._$scope = $scope;
            this._$scope.errorCode = $routeParams.errorCode;

            let allowedErrorCodes: number[] = [403, 404, 500];

            this._$scope.errorCode = parseInt($routeParams.errorCode, 0);

            if (_.contains(allowedErrorCodes, $scope.errorCode)) {
                tlApplication.hideContentPreloader();
                $scope.host.ribbonBackButtonClick = null;
                $scope.host.ribbonSaveButtonClick = null;
                $scope.host.ribbonCancelButtonClick = null;
            } else {
                $scope.errorCode = 404;
            }
        }
    }

    angular.module('tlApp').controller('ErrorPageController', ErrorPageController);
}