/* Type definitions for TLUI */

/// <reference path="../angularjs/angular.d.ts" />
/// <reference path="instance_api.d.ts" />

// Support AMD require
declare module 'tlui' {
    export = tlui;
}

declare namespace tlui {

    ////////////////////////////
    // Providers and services //
    ////////////////////////////

    /**
     * httpErrorInfo object for IHttpErrorHandlerFn
     */
    interface IHttpErrorInfo {
        description: string;
    }

    /**
     * httpErrorHandler function for tlApplicationProvider
     */
    interface IHttpErrorHandlerFn {
        (httpStatusCode: number, callbackArg: ng.IHttpPromiseCallbackArg<any>): ng.IPromise<IHttpErrorInfo>;
    }

    /**
     * Item for 'control-tabs' control
    */
    interface ITabItem {
        name: string;
        link: string;
        active: boolean;
        badge?: {
            text: string,
            color?: number,
            isFilled?: boolean
        }
    }

    /**
     * tlApplicationProvider
     */
    interface ITLApplicationProvider {
        setTopPanelEnable(isEnable: boolean): void;
        setNotificationsEnable(isEnable: boolean): void;
        setHttpErrorHandler(httpErrorHandlerFn: IHttpErrorHandlerFn): void;
        setBaseApiUrl(apiUrl: string): void;
        setBaseHostApiUrl(apiUrl: string): void;
        setDataUrl(dataUrl: string): void;
    }

    /**
     * tlApplication
     */
    interface ITLApplicationService {
        getHttpErrorHandler(): IHttpErrorHandlerFn;
        getTopPanelEnable(): boolean;
        getNotificationsEnable(): boolean;
        getHaveUnsavedChanges(): boolean;
        setHaveUnsavedChanges(haveUnsavedChanges: boolean): void;
        showManagementModalOverlay(): void;
        hideManagementModalOverlay(): void;
        startDataProcessing(): void;
        stopDataProcessing(withoutScrolling?: boolean): void;
        showModalOverlay(): void;
        hideModalOverlay(): void;
        showContentPreloader(): void;
        hideContentPreloader(): void;
    }

    /**
     * tlAutoTranslation
     */
    interface ITLAutoTranslationService {
        yandexTranslate(text: string, isHtml: boolean, targetLang: string, sourceLang: string): ng.IHttpPromise<{}>;
        canYandexTranslate(sourceLang: string, targetLang: string): boolean;
    }

    /**
     * tlLocalizationProvider (Only from .config() sections)
     */
    interface ITLLocalizationProvider {
        setLanguage(language: string): void;
        setApplicationStrings(localizationData: { [messageId: string]: string }): void;
    }

    /**
     * tlLocalization
     */
    interface ITLLocalizationService {
        getLanguage(): string;
        getLocalizedMessage(messageId: string): string;
        getLocalizedPageMessage(pageId: string, pageStringId: string): string;
        localizeArray(stringsToLocalize: string[]): void; // Change given stringsToLocalize array
        localize(messageId: string, parameters?: {}): string;
        getPluralCategory(text: string | string[], quantity: number): string;
    }

    /**
     * tlNotification
     */
    interface ITLNotificationService {
        confirmPageLeave(showSaveButton: boolean): ng.IPromise<{}>;
        confirmDelete(/* AutoLocalize */message: string): ng.IPromise<{}>;
        customConfirm(confirmType: string, /* AutoLocalize */title: string, /* AutoLocalize */message: string, /* AutoLocalize */okText?: string, /* AutoLocalize */cancelText?: string, /* AutoLocalize */commands?: string, isInversedButtons?: boolean, icon?: string): ng.IPromise<{}>;
        customAlert(alertType: string, /* AutoLocalize */title: string, /* AutoLocalize */message: string, /* AutoLocalize */okText?: string, /* AutoLocalize */commands?: string): ng.IPromise<{}>;
        customError(/* AutoLocalize */title: string, /* AutoLocalize */message: string, /* AutoLocalize */okText?: string, /* AutoLocalize */commands?: string): ng.IPromise<{}>; // !!! WARNING: DEPRECATED

        notifyOperation(promise: ng.IPromise<{}>): void;
        notifySuccess(/* AutoLocalize */html?: string): void;
        notifyError(/* AutoLocalize */html?: string): void;
        notifyDataSaveSuccess(/* AutoLocalize */html?: string): void;
        notifyDataSaveError(/* AutoLocalize */html?: string): void;
        notifyReorderingSuccess(/* AutoLocalize */html?: string): void;
        notifyReorderingError(/* AutoLocalize */html?: string): void;
        notifyDeletingSuccess(/* AutoLocalize */html?: string): void;
        notifyDeletingError(/* AutoLocalize */html?: string): void;
    }

    /**
     * tlMetricsProvider
     */
    interface ITLMetricsProvider {
        enable(repositoryUrl: string): void;
        enableRepository(repository: any): void;
        addIntegerValue(name: string, value: number): void;
        addBooleanValue(name: string, value: boolean): void;
        addFloatValue(name: string, value: number): void;
        addStringValue(name: string, value: string): void;
    }

    /**
     * tlMetrics
     */
    interface ITLMetricsService {
        sendMetric: (startTime: number, name: string, isFirst?: boolean) => void;
    }

    /**
     * IDataTransferOptions - type for arguments of methods "saveData" and "loadData" from tl.ITLDataTransferUtilsService
     */
    interface IDataTransferOptions {
        scrollPageToTop: boolean;
        silent?: boolean;
        notification?: {
            successText?: string,
            failText?: string;
        };
    }

    /**
     * tlDataTransferUtilsService
     */
    interface ITLDataTransferUtilsService {
        setFormUnsaved(isUnsaved: boolean): void;
        validateForm(form: ng.IFormController, dontSetDirty?: boolean): boolean;
        loadData(loadFn: Function, successFn?: Function, failFn?: Function, options?: IDataTransferOptions): void;
        saveData(saveFn: Function, successFn?: Function, failFn?: Function, options?: IDataTransferOptions): void;
    }

    /**
     * Interface for TLExtranetService
     */
    interface ITLExtranetService {
        setFormUnsaved(isUnsaved: boolean): void;
        showPreloader(visible: boolean): void;
        validateForm(form: ng.IFormController, dontSetDirty?: boolean): boolean;
        loadData(loadFn: Function, successFn?: Function, failFn?: Function, options?: IDataTransferOptions): void;
        saveData(saveFn: Function, successFn?: Function, failFn?: Function, options?: IDataTransferOptions): void;
    }

    /**
     * $rootScope service with extended tlui fields
     */
    interface IRootScopeService extends ng.IRootScopeService {
        extranetService: ITLExtranetService;
        host: IExtranetHost;
    }

    const enum ViewCacheEvents {
        BeforeAttach = '$cacheBeforeAttach',
        AfterAttach = '$cacheAfterAttach',
        AfterDetach = '$cacheAfterDetach'
    }

    /**
     * Interface for tlViewCacheProvider
     */
    interface ITLViewCacheProvider {
        addUrlKey(urlKey: string): void;
    }

    /**
     * Interface for tlViewCache
     */
    interface ITLViewCacheService {
        invalidate(urlKey: string): void;
    }

    /////////////
    // Filters //
    /////////////

    /**
     * tlLocalizeFilter
     */
    interface ITLLocalizeFilter {
        (messageId: string, parameters?: {}): string;
    }

    /////////////////////////////////
    // DTOs, Scopes, Api responses //
    /////////////////////////////////

    /**
     * Price object
     */
    interface IPrice {
        value: number;
        currency?: string;
    }

    /**
     * Date period object
     */
    interface IDatePeriod {
        start: Date;
        end: Date;
        minDate?: Date;
        maxDate?: Date;
    }

    /**
     * Extended "Window" object for changeAngularLocale() function
     */
    interface IWindow extends Window {
        changeAngularLocale(locale: string): void;
    }

    /**
     * Badge object
     */
    interface IBadge {
        text: string;
        color: number;
        isFilled: boolean;
    }

    /**
     * Business card phone object for tl.IExtranetHost
     */
    interface IBusinessCardPhone {
        title: string;
        phone: string;
    }

    /**
     * Ribbon Navigation Item object for tl.IRibbonNavigationData
     */
    interface IRibbonNavigationItem {
        id: string | number;
        text: string;
    }

    /**
     * Ribbon Navigation Data object for tl.IExtranetHost object
     */
    interface IRibbonNavigationData {
        items: IRibbonNavigationItem[];
        selectedItemId: string | number;
    }

    /**
     * TL Main menu scope for activation menu items from controllers
     */
    interface ITLMainMenuScope extends ng.IScope {
        activateMenuItem(menuItemId: string): void;
    }

    /**
     * Scope object for configure current page
     */
    interface IExtranetHost {
        providerInfoProviderId: number;

        ribbonNavigationData: IRibbonNavigationData;
        ribbonBackButtonClick: () => void;
        ribbonSaveButtonClick: () => boolean;
        ribbonSaveAndStayButtonClick: () => void;
        ribbonButtonsDisabled: boolean;
        ribbonOldPageLink: string;
        ribbonNewPageLink: string;

        // User page settings
        pageTitle: string;
        pageSubtitle: string;
        pageSubtitleBadge: IBadge;

        // Properties of help documentation button
        helpTitle: string;
        helpContent: string;
        helpLink: string;

        // Help functions and variables
        theme: string;
        minified: boolean;
        haveUnsavedChanges: boolean;

        getMainMenu(): ITLMainMenuScope;
        leavePage(navigateFunction: () => void): void;
        haveDirtyForms(): boolean;
        setFormsDirty(formCtrl?: ng.IFormController): void;
        resetDirtyForms(): void;
    }

    /**
     * Type for getItems() function and <list> control resolve
     */
    interface IListDataContainer<T> {
        totalCount: number;
        filteredCount: number;
        items: T[];
    }

    /**
     * Type for 'list' control instance
     */
    interface IListInstance {
        getCurrentItems: () => any[];
        isFieldVisible: (fieldId: string) => boolean;
        reloadItems: (page?: number) => void;
        updateSummary: () => void;
        getCurrentPage: () => number;
    }

    /**
     * Type for the <list-fields-visibility> `config` attribute value.
     */
    interface IListFieldsVisibilityConfig {
        /**
         * Array of field identifiers that can be hidden by user.
         */
        fields: string[];

        /**
         * Defines the current fields visibility. A string consisting of '0' and '1' and corresponding to the fields
         * listed in the `fields` property.
         */
        value: string;

        /**
         * Defines the fields visibility to which the "Reset" button is reset. A string consisting of '0' and '1'
         * and corresponding to the fields listed in the `fields` property.
         */
        defaultValue: string;
    }

    /**
     * Type for the <list-fields-visibility> `save` attribute function.
     */
    interface IListFieldsVisibilitySavePromiseGetter {
        (value: string): ng.IPromise<void>;
    }

    /**
     * Type for filters config
     */
    type IFiltersConfig = (IFiltersSelectItem | IFiltersMultiSelectItem | IFiltersDateItem | IFiltersDatePeriodItem)[];

    /**
     * Types for filters item
     */

    interface IFiltersItem<TModel = {}> {
        isDisabled?: boolean;
        model: TModel;
        title: string;
        type: 'select' | 'multiselect' | 'date' | 'datePeriod';
    }

    interface IFiltersSelectItem extends IFiltersItem<string> {
        defaultValue?: string;
        filterFn?: (option: IFiltersItemOption) => boolean;
        options: IFiltersItemOption[];
        type: 'select';
    }

    interface IFiltersMultiSelectItem extends IFiltersItem<string[]> {
        filterFn?: (option: IFiltersItemOption) => boolean;
        options: IFiltersItemOption[];
        type: 'multiselect';
    }

    interface IFiltersDateItem extends IFiltersItem<Date> {
        defaultValue?: Date;
        maxDate?: Date;
        minDate?: Date;
        type: 'date';
    }

    interface IFiltersDatePeriodItem extends IFiltersItem<IDatePeriod> {
        defaultValue?: IDatePeriod;
        maxDate?: Date;
        minDate?: Date;
        type: 'datePeriod';
    }

    /**
     * Type for 'select' and 'multiselect' filters item option
     */
    interface IFiltersItemOption {
        value: string;
        text: string;
    }

    /**
     * Type for 'DimensionTable' control instance
     */
    interface IDimensionTableInstance {
        load(
            path: string,
            newDate: Date,
            oldDate?: Date
        ): ng.IPromise<void>;
        needSave(): boolean;
        onNeedSaveChanged(action: () => void): void;
        reload(): ng.IPromise<void>;
        save(path?: string): ng.IPromise<void>;
    }

    /**
     * Properties for config of control GridSelectOption
     */
    interface IGridSelectOptionConfig {
        icon: string;
        iconColor: number;
        iconBackgroundColor: number;
        title: string;
        text?: string;
        hint?: string;
    }
}