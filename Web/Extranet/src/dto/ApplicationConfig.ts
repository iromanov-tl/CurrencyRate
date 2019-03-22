module CurrencyRate.Dto {

    export class ApplicationConfig {
        private _appEnabled: boolean;

        constructor(userLanguage: string, appEnabled: boolean ) {
            this._appEnabled = appEnabled;
        }

        public get appEnabled(): boolean {
            return this._appEnabled;
        }
    }
}