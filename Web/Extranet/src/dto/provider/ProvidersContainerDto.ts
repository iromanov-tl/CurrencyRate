module WebAppTemplate.Dto {

    export class ProvidersContainerDto {
        private _totalCount: number;
        private _filteredCount: number;
        private _items: Dto.Provider[];

        constructor( totalCount: number, filteredCount: number, items: Dto.Provider[] ) {
            this._totalCount = totalCount;
            this._filteredCount = filteredCount;
            this._items = items;
        }

        public get totalCount(): number {
            return this._totalCount;
        }

        public get filteredCount(): number {
            return this._filteredCount;
        }

        public get items(): Dto.Provider[] {
            return this._items;
        }
    }
}