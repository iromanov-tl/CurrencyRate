/* Type definitions for common classes and objects in Travelline */

/// <reference path="../tlui/tlui.d.ts" />

// Support AMD require
declare module 'tl' {
    export = tl;
}

declare namespace tl {

    /////////////////////////////////
    // DTOs, Scopes, Api responses //
    /////////////////////////////////

    /**
     * Sub menu item object
     */
    interface IMainMenuSubItem {
        id: string;
        text: string;
        href: string;
        icon: string,
        isNew: boolean;
        isAdmin: boolean;
    }

    /**
     * Main menu item object
     */
    interface IMainMenuItem {
        id: string;
        text: string;
        href: string;
        icon: string;
        isNew: boolean;
        isAdmin: boolean;
        items: IMainMenuSubItem[];
    }

    /**
     * Main menu items container
     */
    interface IMainMenuContainer {
        items: IMainMenuItem[];
    }

    /**
     * Application configuration object
     */
    interface IConfiguration {
        isDev: boolean;
        isProd: boolean;
        loginUrl: string;
        applicationDomain: string;
        defaultPage: string;
        isOtherAppDefaultPage: boolean;
        isNewDefaultPage: boolean;
        baseUrl: string;
        baseTluiUrl: string;
        baseServiceUrl: string;
        basePagesUrl: string;
        baseManagementControlsUrl: string;
        yandexApiKey: string;
        locale: string;
        isRateShopperEnabled: boolean;
        isPmsIntegrated: boolean;
        googleAnalyticsAccount: boolean;
        version: string;
        supportEmail: string;
        supportPhone: string;
        docsBaseUrl: string;
    }

    /**
     * Profile plan object
     */
    interface IProfilePlan {
        code: string;
        enable: boolean;
    }

    /**
     * Provider info object
     */
    interface IProviderInfo {
        providerLogoLetter: string;
        providerName: string;
        providerId: number;
        providerCity: string;
        profilePlan: IProfilePlan[];
        isUsa: boolean;
        useImpericSystem: boolean;
        providerCountryId: string;
    }

    /**
     * Titled phone object
     */
    interface ITitledPhone {
        title: string;
        phone: string;
    }

    /**
     * Support manager info container
     */
    interface ISupportManagerInfo {
        fullName: string;
        phones: ITitledPhone[];
        email: string;
        photoUrl: string;
        is_personal: boolean;
    }

    /**
     * Response object with provider info from: /secure/extranet/service/application/extranet-host-data
     */
    interface IExtranetHostData {
        menu: IMainMenuContainer;
        configuration: IConfiguration;
        providerInfo: IProviderInfo;
        supportManagerInfo: ISupportManagerInfo;
    }

    /**
     * Help object for configuring tl-extranet-host directive
     */
    interface IExtranetHostArguments extends tlui.IExtranetHost {
        mainMenuItems: IMainMenuItem[];

        providerInfoLogo: string;
        providerInfoProviderId: number;
        providerInfoName: string;
        providerInfoCity: string;

        businessCardName: string;
        businessCardPosition: string;
        businessCardEmail: string;
        businessCardPhones: ITitledPhone[];
        businessCardPhotoUrl: string;

        // Layout customization
        hideUserInterface: boolean;
        hideFooter: boolean;
    }
}