declare namespace tlui {
    interface IControlTabApi {
        getActiveItem(): ITabItem;
        makeSingleItemActive(item: ITabItem): void;
    }
}