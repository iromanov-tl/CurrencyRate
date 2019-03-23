/// <reference path="../../../typings/tsd.d.ts" />

/* tslint:disable:no-any */
module WebAppTemplate.Application.Services {
    export interface ITLExtranetService {
        setFormUnsaved(isUnsaved: boolean): void;
        showPreloader(visible: boolean): void;
        validateForm(form: ng.IFormController, dontSetDirty?: boolean): boolean;
        loadData(loadFn: Function, successFn: Function, failFn?: Function): void;
        saveData(saveFn: Function, successFn: Function, failFn?: Function): void;
    }

    export class TLExtranetService implements ITLExtranetService {

        private _tlApplication: any;
        private _tlDataTransferUtilsService: any;

        constructor(
            tlApplication: any,
            tlDataTransferUtilsService: any
        ) {
            this._tlApplication = tlApplication;
            this._tlDataTransferUtilsService = tlDataTransferUtilsService;
        }

        public setFormUnsaved(isUnsaved: boolean): void {
            this._tlDataTransferUtilsService.setFormUnsaved(isUnsaved);
        }

        public showPreloader(visible: boolean): void {
            if (visible) {
                this._tlApplication.showContentPreloader();
            } else {
                this._tlApplication.hideContentPreloader();
            }
        }

        public validateForm(form: any, dontSetDirty?: boolean): boolean {
            return this._tlDataTransferUtilsService.validateForm(form, dontSetDirty);
        }

        public loadData(loadFn: any, successFn: any, failFn?: any): void {
            this._tlDataTransferUtilsService.loadData(loadFn, successFn, failFn);
        }

        public saveData(saveFn: any, successFn: any, failFn?: any): void {
            this._tlDataTransferUtilsService.saveData(saveFn, successFn, failFn);
        }
    }
}
/* tslint:enable:no-any */