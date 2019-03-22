module CurrencyRate.Dto {

    export class Provider {
        private _id: number;
        private _name: string;
        private _address: string;
        private _language: string;
        private _url: string;
        private _isEnabled: boolean;

        constructor( id: number, name: string, address: string, language: string, url: string, isEnabled: boolean ) {
            this._id = id;
            this._name = name;
            this._address = address;
            this._language = language;
            this._url = url;
            this._isEnabled = isEnabled;
        }

        public get id(): number {
            return this._id;
        }

        public get name(): string {
            return this._name;
        }

        public get address(): string {
            return this._address;
        }

        public get language(): string {
            return this._language;
        }

        public get url(): string {
            return this._url;
        }

        public get isEnabled(): boolean {
            return this._isEnabled;
        }

        public set isEnabled(isEnbaled: boolean) {
            this._isEnabled = isEnbaled;
        }
    }
}