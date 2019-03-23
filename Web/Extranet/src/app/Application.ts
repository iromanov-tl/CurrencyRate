/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../app/Constants.ts" />
/// <reference path="../app/MenuItems.ts" />
/// <reference path="../app/services/TLExtranetService.ts" />
/// <reference path="../dto/Dto.inc.ts" />
/* tslint:disable:no-any */

module WebAppTemplate.Application {

    import TLExtranetService = Services.TLExtranetService;

    declare var MENU_LOCALIZATION: any;

    module MainModule {
        let application: any;
        export function Application(): any {
            application = angular.module('tlApp', ['tlui', 'ngRoute', 'ngSanitize', 'ngResource']);

            $.when(
                $.getJSON(Constants.appConfigUrl),
                $.getJSON(Constants.extranetHostDataUrl)
                .fail(
                    (response: any) => {
                        if (response.status === 403) {
                            location.href = Constants.loginUrl;
                        }
                    }
                )
            ).done(
                (config: Dto.ApplicationConfig, extranetHostData: any) => {
                    if (!config[0].appEnabled) {
                        // здесь должен быть редирект на промо-страницу
                        location.href = Constants.baseAppUrl + '/Error/404';
                    }
                    application.constant('appConfig', config[0]);
                    application.constant('extranetHostData', extranetHostData[0]);
                    (<any>window).changeAngularLocale(extranetHostData[0].configuration.locale);
                    angular.bootstrap($('body'), ['tlApp']);
                }
            );

            application
                .config([
                    '$httpProvider', ($httpProvider: any) => {
                        $httpProvider.interceptors.push('tlXmlTransformer');
                    }
                ])
                .config([
                    '$routeProvider', ($routeProvider: any) => {
                        let templateBaseUrl: string = Constants.templateBaseUrl;
                        let defaultRedirectPage: string = '/provider';
                        $routeProvider
                            .when('/', {
                                redirectTo: defaultRedirectPage
                            })
                            .when('/Provider', {
                                templateUrl: templateBaseUrl + 'provider/provider.tlui.xml',
                                caseInsensitiveMatch: true
                            })
                            .when('/Error/:errorCode*', {
                                templateUrl: templateBaseUrl + 'error/error.tlui.xml',
                                caseInsensitiveMatch: true
                            })
                            .otherwise({
                                redirectTo: '/error/404'
                            });
                    }
                ])
                .config([
                    'tlLocalizationProvider', 'tlApplicationLocalizationData', 'tlApplicationProvider', 'appConfig', 'extranetHostData',
                    (tlLocalizationProvider: any, tlApplicationLocalizationData: any, tlApplicationProvider: any, appConfig: any, extranetHostData: any) => {
                        let localizationData: any = $.extend({}, tlApplicationLocalizationData, MENU_LOCALIZATION);
                        tlLocalizationProvider.setApplicationStrings(localizationData);
                        tlLocalizationProvider.setLanguage(extranetHostData.configuration.locale);

                        function httpErrorHandlerFn(): ng.IPromise<any> {
                            let $q: any = angular.injector(['ng']).get('$q');
                            let deferred: any = $q.defer();
                            let httpErrorInfo: any = {};

                            deferred.resolve(httpErrorInfo);
                            return deferred.promise;
                        }
                        tlApplicationProvider.setHttpErrorHandler(httpErrorHandlerFn);
                    }
                ])
                .run([
                    '$rootScope', 'tlApplication', 'tlDataTransferUtilsService', ($rootScope: any, tlApplication: any, tlDataTransferUtilsService: any) => {
                        $rootScope.extranetService = new TLExtranetService(tlApplication, tlDataTransferUtilsService);
                    }
                ]);
            return application;
        }
    }

    export interface ILayoutScope extends ng.IScope {
        host: any;
        mainMenuItems: any[];
        ribbonNavigationData: any;
        ribbonBackButtonClick: any;
        ribbonSaveButtonClick: any;
        ribbonSaveAndStayButtonClick: any;
        ribbonButtonsDisabled: any;

        ribbonOldPageLink: string;
        ribbonNewPageLink: string;

        businessCardName: string;
        businessCardPosition: string;
        businessCardEmail: string;
        businessCardPhones: string;
        businessCardPhotoUrl: string;

        providerInfoLogo: string;
        providerInfoProviderId: number;
        providerInfoName: string;
        providerInfoCity: string;
    }

    class LayoutController {
        public static $inject: any[] = ['$scope', '$resource', '$q', '$rootScope', 'appConfig', 'extranetHostData'];
        constructor(
            $scope: ILayoutScope,
            $resource: ng.resource.IResourceService,
            $q: ng.IQService,
            $rootScope: any,
            appConfig: any,
            extranetHostData: any
        ) {
            $scope.mainMenuItems = [];
            $scope.ribbonNavigationData = null;
            $scope.ribbonBackButtonClick = null;
            $scope.ribbonOldPageLink = null;
            $scope.ribbonNewPageLink = null;
            $scope.ribbonSaveButtonClick = null;
            $scope.ribbonSaveAndStayButtonClick = null;
            $scope.ribbonButtonsDisabled = null;

            $scope.mainMenuItems = extranetHostData.menu.items.concat($scope.mainMenuItems);
            for (let i: number = 0; i < $scope.mainMenuItems.length; i++) {
                if ($scope.mainMenuItems[i].id === 'WebAppTemplate') {
                    $scope.mainMenuItems[i].items = [
                        {
                            id: MenuItems.providerSettings,
                            text: 'T:navigation_menu.provider_settings',
                            href: '/secure/webAppTemplate/extranet/#/provider'
                        }
                    ];
                    break;
                }
            }

            let providerInfo: any = extranetHostData.providerInfo;

            if (providerInfo) {
                $scope.providerInfoLogo = providerInfo.providerLogoLetter;
                $scope.providerInfoProviderId = providerInfo.providerId;
                $scope.providerInfoName = providerInfo.providerName;
                $scope.providerInfoCity = providerInfo.providerCity;
            }

            if (extranetHostData.supportManagerInfo) {
                $scope.businessCardName = extranetHostData.supportManagerInfo.fullName;
                $scope.businessCardEmail = extranetHostData.supportManagerInfo.email;
                $scope.businessCardPhones = extranetHostData.supportManagerInfo.phones;
                $scope.businessCardPhotoUrl = extranetHostData.supportManagerInfo.photoUrl;

                if (extranetHostData.supportManagerInfo.is_personal) {
                    $scope.businessCardPosition = 'T:application_menu.account_manager';
                }
            }

            $rootScope.$on('$locationChangeSuccess', () => {
                $scope.host.ribbonNavigationData = null;
                $scope.host.ribbonBackButtonClick = null;
                $scope.host.ribbonOldPageLink = null;
                $scope.host.ribbonNewPageLink = null;
                $scope.host.ribbonSaveButtonClick = null;
                $scope.ribbonSaveAndStayButtonClick = null;
                $scope.host.ribbonHelpButtonUrl = null;

                $scope.host.pageTitle = '';
                $scope.host.pageSubtitle = '';
                $scope.host.helpTitle = '';
                $scope.host.helpLink = '';
                $scope.host.helpContent = '';
            });
        }
    }

    let application: any = MainModule.Application();
    application.controller('LayoutController', LayoutController);
}