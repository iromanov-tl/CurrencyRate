/* Type definitions for TLUI internal use */

/* 
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! WARNING !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
These classes and functions only for internal use in TLUI.
If you use them, then you are prepared for their sudden change or removal.
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
*/

/// <reference path="../angularjs/angular.d.ts" />

// Support AMD require
declare module 'tlui_internal' {
    export = tlui_internal;
}

declare namespace tlui_internal {

    ////////////////////////////
    // Providers and services //
    ////////////////////////////

    interface ITypePropertyInfo {
        name: string;
        description?: string;
        binding: string;
        type: string;
        values?: string[];
        defaultValue?: string | ((scope: ng.IScope) => string);
    }

    interface ITypeInfo {
        isContainer: boolean;
        properties: { [propertyName: string]: ITypePropertyInfo };
    }

    interface IOption {
        selectValue: string;
        viewValue: string;
        label: string;
        group: string;
    }

    interface IOptionContainer {
        items: IOption[];
        selectValueMap: { [selectValue: string]: IOption };
        getOptionFromViewValue(value: string): IOption;
    }

    interface IOptionsParseResult {
        getWatchables(): string[];
        getOptions(): IOptionContainer;
    }

    interface IScopeDeclaration { [variableName: string]: string }

    /**
     * tlAngularUtils
     */
    interface ITLAngularUtilsService {
        repeatRegexp: string;
        getScopeDeclaration(typeInfo: ITypeInfo): IScopeDeclaration;
        registerDirectiveInstance(scope: ng.IScope, elem: ng.IAugmentedJQuery, attrs: ng.IAttributes, instanceScope: ng.IScope, typeInfo: ITypeInfo, instance: any): void;
        bindAttributeToScope(scope: ng.IScope, attrs: { [attributeName: string]: any }, attributeName: string, scopeName: string): void;
        traverseScopeRecursively(scope: ng.IScope, scopeCallback: (scope: ng.IScope) => void): void;
        renderArrayAsync(array: Array<{}>, targetScopeArray: Array<{}>, itemsPerCycle: number, showPreloader: boolean): ng.IPromise<void>;
        stopWatching(scope: ng.IScope): void;
        restartWatching(scope: ng.IScope): void;
        hashKey(obj: {}, nextUidFn?: Function): string;
        parseOptionsExpression(optionsExp: string, scope: ng.IScope): IOptionsParseResult;
        parse(expression: string): {};
        interpolate(expression: string): {};
        eval(value: string, scope: ng.IScope, variables: Array<{}>, isIsolated: boolean, isInterpolate: boolean): {};
    }

    interface IState {
        linkers?: { [tplUrl: string]: ng.ITemplateLinkingFunction };
        currLinker?: ng.ITemplateLinkingFunction;
        currTplUrl?: string;
        prevTplUrl?: string;
        transclusionContents?: ng.IAugmentedJQuery;
    }

    /**
     * tlCompilation
     */
    interface ITLCompilationService {
        compile(template: string): ng.ITemplateLinkingFunction;
        getTemplateFromTemplateCache(templateUrl: string, replacements: { [key: string]: string }): string;
        compileByTemplateUrl(templateUrl: string, replacements: { [key: string]: string }): ng.ITemplateLinkingFunction;
        linkIntoElement(linker: ng.ITemplateLinkingFunction, scope: ng.IScope, element: Element | JQuery): void;
        compileAndLinkTemplate(template: string, scope: ng.IScope): ng.IAugmentedJQuery;
        compileAndLinkTemplateIntoElement(template: string, scope: ng.IScope, element: Element | JQuery): void;
        compileAndLinkByTemplateUrl(templateUrl: string, scope: ng.IScope, replacements: { [key: string]: string }): ng.IAugmentedJQuery;
        compileAndLinkIntoElementByTemplateUrl(templateUrl: string, scope: ng.IScope, element: Element | JQuery, replacements: { [key: string]: string }): void;
        getTemplateAndSaveTransclusionContents(templateUrl: string): (tElem: ng.IAugmentedJQuery) => string | boolean;
        compileTransclusionContents(scope: ng.IScope, tElem: ng.IAugmentedJQuery): ng.IAugmentedJQuery;
        transclude(scope: ng.IScope, targetElem: ng.IAugmentedJQuery, tElem: ng.IAugmentedJQuery): void;
        appendTransclusionContents(targetElem: ng.IAugmentedJQuery, contents: ng.IAugmentedJQuery): void;
        conditionalCompile(state: IState, conditions: {[templateUrl: string]: (() => boolean) }, linkScope: ng.IScope, transclusionScope: ng.IScope, elem: ng.IAugmentedJQuery, tElem: ng.IAugmentedJQuery, replacements: { [key: string]: string }): void;
    }

}