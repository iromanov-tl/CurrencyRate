declare module "lib/angular-entities" {
    export const paths: string[];
    export const nonModulePaths: string[];
}
declare module "lib/root/Core/Delegates" {
    export interface IFunc<TResult> {
        (): TResult;
    }
    export interface IFunc1<T1, TResult> {
        (arg1: T1): TResult;
    }
    export interface IFunc2<T1, T2, TResult> {
        (arg1: T1, arg2: T2): TResult;
    }
    export interface IFunc3<T1, T2, T3, TResult> {
        (value1: T1, value2: T2, value3: T3): TResult;
    }
    export interface IFunc4<T1, T2, T3, T4, TResult> {
        (value1: T1, value2: T2, value3: T3, value4: T4): TResult;
    }
    export interface IFunc5<T1, T2, T3, T4, T5, TResult> {
        (value1: T1, value2: T2, value3: T3, value4: T4, value5: T5): TResult;
    }
    export interface IAction {
        (): void;
    }
    export interface IAction1<T1> {
        (arg1: T1): void;
    }
    export interface IAction2<T1, T2> {
        (arg1: T1, arg2: T2): void;
    }
    export interface IAction3<T1, T2, T3> {
        (arg1: T1, arg2: T2, arg3: T3): void;
    }
    export interface IMap<T1, T2> extends IFunc1<T1, T2> {
    }
    export interface IPredicate extends IFunc<boolean> {
    }
    export interface IPredicate1<T1> extends IFunc1<T1, boolean> {
    }
    export interface IPredicate2<T1, T2> extends IFunc2<T1, T2, boolean> {
    }
    export interface IFunction extends Function {
    }
}
declare module "lib/root/Core/Graphics/IVector2d" {
    export interface IVector2d {
        u: number;
        v: number;
        x: number;
        y: number;
        at: number;
        my: number;
        width: number;
        height: number;
        min: number;
        max: number;
        quotient: number;
        modulo: number;
        readonly size: number;
        readonly magnitude: number;
        abs(): IVector2d;
        add(value: IVector2d): IVector2d;
        assign(value: IVector2d): void;
        clamp(minU: number, maxU: number, minV: number, maxV: number): void;
        clampBy(min: IVector2d, max: IVector2d): IVector2d;
        clone(): IVector2d;
        divide(value: IVector2d): IVector2d;
        equals(value: IVector2d): boolean;
        flip(): IVector2d;
        half(): IVector2d;
        intersection(value: IVector2d): IVector2d;
        inverseLerp(value: number): number;
        lerp(value: number): number;
        multiply(value: IVector2d): IVector2d;
        negate(): IVector2d;
        sort(): IVector2d;
        subtract(value: IVector2d): IVector2d;
        union(value: IVector2d): IVector2d;
        valueInRange(count: number, index: number): number;
    }
}
declare module "lib/root/Core/RuntimeError" {
    export class RuntimeError {
        static throw(message: string): void;
    }
}
declare module "lib/root/Core/Graphics/Vector2d" {
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    export class Vector2d implements IVector2d {
        private _u;
        private _v;
        private _isReadOnly;
        constructor(u: number, v: number, isReadOnly?: boolean);
        u: number;
        v: number;
        width: number;
        height: number;
        x: number;
        y: number;
        at: number;
        my: number;
        min: number;
        max: number;
        quotient: number;
        modulo: number;
        readonly size: number;
        readonly magnitude: number;
        abs(): IVector2d;
        add(value: IVector2d): IVector2d;
        assign(value: IVector2d): void;
        clamp(minU: number, maxU: number, minV: number, maxV: number): void;
        clampBy(min: IVector2d, max: IVector2d): IVector2d;
        clone(): IVector2d;
        divide(value: IVector2d): IVector2d;
        equals(value: IVector2d): boolean;
        flip(): IVector2d;
        half(): IVector2d;
        intersection(value: IVector2d): IVector2d;
        inverseLerp(value: number): number;
        lerp(value: number): number;
        multiply(value: IVector2d): IVector2d;
        negate(): IVector2d;
        rangeContains(value: number): boolean;
        sort(): IVector2d;
        subtract(value: IVector2d): IVector2d;
        union(value: IVector2d): IVector2d;
        valueInRange(count: number, index: number): number;
        static empty(): IVector2d;
        static readonly infinity: Readonly<IVector2d>;
        static readonly maxValue: Readonly<IVector2d>;
        static readonly minusOne: Readonly<IVector2d>;
        static readonly one: Readonly<IVector2d>;
        static readonly two: Readonly<IVector2d>;
        static readonly zero: Readonly<IVector2d>;
        static quotientAndModulo(dividend: number, divisor: number): IVector2d;
        private checkReadOnly();
        private setU(value);
        private setV(value);
    }
}
declare module "lib/root/Core/StringHelper" {
    export class StringHelper {
        static createPadding(textLength: number, length: number, char: string): string;
        static padLeft(text: string, length: number, char: string): string;
        static padRight(text: string, length: number, char: string): string;
        static startsWith(text: string, searchString: string): boolean;
        static toUpperCase(value: string): string;
    }
}
declare module "lib/root/Core/MathHelper" {
    export class MathHelper {
        static readonly maxByte: number;
        private static readonly _decimalRadix;
        private static readonly _hexadecimalRadix;
        static abs(value: number): number;
        static ceil(value: number): number;
        static inverseLerp(min: number, max: number, value: number): number;
        static isEven(value: number): boolean;
        static isNumber(value: number): boolean;
        static isOdd(value: number): boolean;
        static clamp(value: number, min: number, max: number): number;
        static floor(value: number): number;
        static formatDecimalInteger(value: number, padLength?: number): string;
        static formatHexadecimalInteger(value: number, useUpperCase?: boolean, padLength?: number): string;
        static fraction(value: number): number;
        static getDecimalPart(number: number, fractionSize?: number): string;
        static lerp(min: number, max: number, value: number): number;
        static makeValidNumber(value: number, min: number, max: number, defaultValue: number): number;
        static max(value1: number, value2: number): number;
        static min(value1: number, value2: number): number;
        static parseDecimalInteger(value: string, defaultValue?: number): number;
        static parseFloat(value: string): number;
        static parseHexadecimalInteger(value: string, defaultValue?: number): number;
        static pow(x: number, y: number): number;
        static random(minValue: number, maxValue: number): number;
        static round(value: number, fractionSize?: number): number;
        static sqrt(value: number): number;
        private static formatInteger(value, radix, padLength?);
        private static parseInteger(value, radix, defaultValue?);
    }
}
declare module "lib/root/Core/Collections/IReadOnlyCollection" {
    import { IAction1, IAction2, IFunc1, IFunc2, IFunc3, IPredicate1, IPredicate2 } from "lib/root/Core/Delegates";
    export interface IComparer<TElement> extends IFunc2<TElement, TElement, number> {
    }
    export interface IReadOnlyCollection<TCollectionElement> {
        aggregate<TResult>(iterator: IFunc3<TResult, TCollectionElement, number, TResult>, initialValue: TResult): TResult;
        any(predicate: IPredicate1<TCollectionElement>): boolean;
        at(index: number): TCollectionElement;
        average(selector: IFunc1<TCollectionElement, number>): number;
        cartesianPower(value: number): IReadOnlyCollection<IReadOnlyCollection<TCollectionElement>>;
        clone(): IReadOnlyCollection<TCollectionElement>;
        contains(element: TCollectionElement): boolean;
        countBy(predicate: IPredicate1<TCollectionElement>): number;
        defined(): IReadOnlyCollection<TCollectionElement>;
        every(predicate: IPredicate2<TCollectionElement, number>): boolean;
        except(collection: IReadOnlyCollection<TCollectionElement>): IReadOnlyCollection<TCollectionElement>;
        filter(predicate: IPredicate1<TCollectionElement>): IReadOnlyCollection<TCollectionElement>;
        find(predicate: IPredicate1<TCollectionElement>): TCollectionElement;
        findIndex(predicate: IPredicate1<TCollectionElement>): number;
        findLast(predicate: IPredicate1<TCollectionElement>): TCollectionElement;
        first(): TCollectionElement;
        forEach(iterator: (value: TCollectionElement, index: number) => void): void;
        forEachReverse(iterator: (value: TCollectionElement, index: number) => void): void;
        indexOf(element: TCollectionElement): number;
        intersection(collection: IReadOnlyCollection<TCollectionElement>): IReadOnlyCollection<TCollectionElement>;
        iterate(iterator: IAction2<TCollectionElement, number>, startIndex: number, increment: number, stopCondition: IFunc2<number, number, boolean>): void;
        last(): TCollectionElement;
        map<TResult>(iterator: IFunc2<TCollectionElement, number, TResult>): IReadOnlyCollection<TResult>;
        max(selector: IFunc1<TCollectionElement, number>): number;
        min(selector: IFunc1<TCollectionElement, number>): number;
        random(): TCollectionElement;
        reverse(): IReadOnlyCollection<TCollectionElement>;
        slice(start?: number, end?: number): IReadOnlyCollection<TCollectionElement>;
        sort(comparer: IComparer<TCollectionElement>): IReadOnlyCollection<TCollectionElement>;
        sortBy(predicate: IAction1<TCollectionElement>): IReadOnlyCollection<TCollectionElement>;
        sum(selector: IFunc1<TCollectionElement, number>): number;
        toArray(): TCollectionElement[];
        unique<TValue>(selector: IFunc1<TCollectionElement, TValue>): IReadOnlyCollection<TCollectionElement>;
        count: number;
        lastElementIndex: number;
        isEmpty: boolean;
        isNotEmpty: boolean;
    }
}
declare module "lib/root/Core/Collections/ICollection" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    export interface ICollection<TElement> extends IReadOnlyCollection<TElement> {
        add(element: TElement): void;
        addRange(collection: IReadOnlyCollection<TElement>): void;
        clear(): void;
        insert(index: number, element: TElement): void;
        remove(element: TElement): void;
        setAt(index: number, element: TElement): void;
        splice(startIndex: number, count: number, items?: IReadOnlyCollection<TElement>): IReadOnlyCollection<TElement>;
    }
}
declare module "lib/root/Core/Collections/List" {
    import { IAction1, IAction2, IFunc1, IFunc2, IFunc3, IPredicate1, IPredicate2 } from "lib/root/Core/Delegates";
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    import { ICollection } from "lib/root/Core/Collections/ICollection";
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    export class List<TElement> implements ICollection<TElement>, IReadOnlyCollection<TElement> {
        protected _elements: TElement[];
        constructor(elements?: TElement[]);
        splice(startIndex: number, count: number, items?: IReadOnlyCollection<TElement>): IReadOnlyCollection<TElement>;
        toArray(): TElement[];
        slice(start?: number, end?: number): List<TElement>;
        sort(comparer: (element1: TElement, element2: TElement) => number): List<TElement>;
        sortBy(predicate: IAction1<TElement>): List<TElement>;
        at(index: number): TElement;
        random(): TElement;
        cartesianPower(value: number): IReadOnlyCollection<IReadOnlyCollection<TElement>>;
        contains(element: TElement): boolean;
        indexOf(element: TElement): number;
        iterate(iterator: IAction2<TElement, number>, startIndex: number, increment: number, stopCondition: IFunc2<number, number, boolean>): void;
        forEach(iterator: IAction2<TElement, number>): void;
        forEachReverse(iterator: IAction2<TElement, number>): void;
        map<TResult>(iterator: IFunc2<TElement, number, TResult>): List<TResult>;
        find(predicate: IPredicate1<TElement>): TElement;
        findIndex(predicate: IPredicate1<TElement>): number;
        filter(predicate: IPredicate1<TElement>): List<TElement>;
        every(predicate: IPredicate2<TElement, number>): boolean;
        any(predicate: IPredicate1<TElement>): boolean;
        countBy(predicate: IPredicate1<TElement>): number;
        add(element: TElement): void;
        addRange(collection: IReadOnlyCollection<TElement>): void;
        insert(index: number, element: TElement): void;
        remove(element: TElement): void;
        setAt(index: number, value: TElement): void;
        clear(): void;
        clone(): List<TElement>;
        except(collection: IReadOnlyCollection<TElement>): IReadOnlyCollection<TElement>;
        intersection(collection: IReadOnlyCollection<TElement>): IReadOnlyCollection<TElement>;
        last(): TElement;
        first(): TElement;
        findLast(predicate: IPredicate1<TElement>): TElement;
        aggregate<TResult>(iterator: IFunc3<TResult, TElement, number, TResult>, initialValue: TResult): TResult;
        unique<TValue>(selector: IFunc1<TElement, TValue>): List<TElement>;
        defined(): List<TElement>;
        min(selector: IFunc1<TElement, number>): number;
        max(selector: IFunc1<TElement, number>): number;
        sum(selector: IFunc1<TElement, number>): number;
        average(selector: IFunc1<TElement, number>): number;
        reverse(): List<TElement>;
        readonly count: number;
        readonly isEmpty: boolean;
        readonly isNotEmpty: boolean;
        readonly lastElementIndex: number;
        static cartesianProductOf<TValue>(lists: IReadOnlyCollection<IReadOnlyCollection<TValue>>): IReadOnlyCollection<IReadOnlyCollection<TValue>>;
        static ensureIsList<TListElement>(arrayOrList: IReadOnlyCollection<TListElement>): IReadOnlyCollection<TListElement>;
        static equals<TListElement>(list1: IReadOnlyCollection<TListElement>, list2: IReadOnlyCollection<TListElement>): boolean;
        static generate<TListElement>(count: number, createElementFn: (index: number) => TListElement): List<TListElement>;
        static generateDiscreteRange(range: IVector2d, count: number): List<number>;
    }
}
declare module "lib/root/Core/Collections/IEnumerator" {
    export interface IEnumerator<TElement> {
        current: TElement;
        moveNext(): boolean;
        reset(): void;
    }
}
declare module "lib/root/Core/Collections/IEnumerable" {
    import { IEnumerator } from "lib/root/Core/Collections/IEnumerator";
    export interface IEnumerable<TElement> {
        getEnumerator(): IEnumerator<TElement>;
    }
}
declare module "lib/root/Core/Collections/Enumerable" {
    import { IAction2 } from "lib/root/Core/Delegates";
    import { IEnumerable } from "lib/root/Core/Collections/IEnumerable";
    import { List } from "lib/root/Core/Collections/List";
    export class Enumerable {
        static forEach<TElement>(source: IEnumerable<TElement>, iterator: IAction2<TElement, number>): void;
        static toList<TElement>(source: IEnumerable<TElement>): List<TElement>;
        static max<TElement>(source: IEnumerable<TElement>, findMax: (item: TElement) => number): number;
        static first<TElement>(source: IEnumerable<TElement>): TElement;
    }
}
declare module "lib/root/Core/Collections/Collections" {
    export { List } from "lib/root/Core/Collections/List";
    export { Enumerable } from "lib/root/Core/Collections/Enumerable";
    export { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    export { ICollection } from "lib/root/Core/Collections/ICollection";
    export { IEnumerable } from "lib/root/Core/Collections/IEnumerable";
    export { IEnumerator } from "lib/root/Core/Collections/IEnumerator";
}
declare module "lib/root/Core/Collections/Stack" {
    import { IPredicate1 } from "lib/root/Core/Delegates";
    import { IReadOnlyCollection, List } from "lib/root/Core/Collections/Collections";
    export class Stack<TElement> extends List<TElement> {
        /**
         * Returns the element at the top of the stack without removing it.
         * @returns Element or undefined if stack is empty.
         */
        peek(): TElement;
        /**
         * Removes and returns the element at the top of the stack.
         * @returns Element or undefined if stack is empty.
         */
        pop(): TElement;
        /**
         * Removes and returns the slice of stack with elements taken from the beginning. Elements are taken until predicate
         * returns false.
         * @param predicate The predicate is invoked with one argument: (element: TElement).
         * @returns         Collection with removed elements.
         */
        popWhile(predicate: IPredicate1<TElement>): IReadOnlyCollection<TElement>;
        /**
         * Inserts an element at the top of the stack.
         * @param element The element to push onto the stack.
         */
        push(element: TElement): void;
    }
}
declare module "lib/root/Core/Collections/TreeNode" {
    import { IReadOnlyCollection, ITreeNodeReadOnlyCollection } from "lib/root/Core/Collections/index";
    import { IFunc1 } from "lib/root/Core/Delegates";
    export class TreeNode<TData> {
        constructor(data?: TData);
        private _data;
        data: TData;
        private _parent;
        readonly parent: TreeNode<TData>;
        private _childNodes;
        childNodes: ITreeNodeReadOnlyCollection<TData>;
        getDataUpwards(): IReadOnlyCollection<TData>;
        static getLeafNodeIndices<T>(nodes: ITreeNodeReadOnlyCollection<T>): IReadOnlyCollection<number>;
        static getLeafNodes<T>(nodes: ITreeNodeReadOnlyCollection<T>): ITreeNodeReadOnlyCollection<T>;
        /**
         * Returns maximum depth for given tree node collection.
         *
         * **Important notice**: zero is used to indicate that node has no children.
         * @param nodes Tree node collection.
         * @returns Maximum tree depth.
         */
        static getMaxDepth<T>(nodes: ITreeNodeReadOnlyCollection<T>): number;
        static transform<TInput, TOutput>(input: ITreeNodeReadOnlyCollection<TInput>, transformFn: IFunc1<TInput, TOutput>): ITreeNodeReadOnlyCollection<TOutput>;
        private static updateParent<T>(nodes, parent);
    }
}
declare module "lib/root/Core/Collections/TreeNodeList" {
    import { List, TreeNode } from "lib/root/Core/Collections/index";
    export class TreeNodeList<TData> extends List<TreeNode<TData>> {
    }
}
declare module "lib/root/Core/Collections/ITreeNodeReadOnlyCollection" {
    import { IReadOnlyCollection, TreeNode } from "lib/root/Core/Collections/index";
    export interface ITreeNodeReadOnlyCollection<TData> extends IReadOnlyCollection<TreeNode<TData>> {
    }
}
declare module "lib/root/Core/Collections/IKeyValuePair" {
    export interface IKeyValuePair<TKey, TValue> {
        readonly key: Readonly<TKey>;
        value: TValue;
    }
}
declare module "lib/root/Core/Collections/IReadOnlyDictionary" {
    import { IAction2 } from "lib/root/Core/Delegates";
    import { IReadOnlyCollection } from "lib/root/Core/Collections/Collections";
    import { IKeyValuePair } from "lib/root/Core/Collections/IKeyValuePair";
    export interface IReadOnlyDictionary<TKey, TValue> {
        clone(): IReadOnlyDictionary<TKey, TValue>;
        forEach(callback: IAction2<TKey, TValue>): void;
        get(key: Readonly<TKey>): TValue;
        getKeys(): IReadOnlyCollection<TKey>;
        getValues(): IReadOnlyCollection<TValue>;
        has(key: TKey): boolean;
        readonly pairs: IReadOnlyCollection<IKeyValuePair<TKey, TValue>>;
        count: number;
    }
}
declare module "lib/root/Core/Collections/IDictionary" {
    import { IKeyValuePair } from "lib/root/Core/Collections/IKeyValuePair";
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { IReadOnlyDictionary } from "lib/root/Core/Collections/IReadOnlyDictionary";
    export interface IDictionary<TKey, TValue> extends IReadOnlyDictionary<TKey, TValue> {
        clear(): void;
        clone(): IDictionary<TKey, TValue>;
        extend(dictionary: IReadOnlyDictionary<TKey, TValue>): void;
        remove(key: TKey): void;
        set(key: TKey, value: TValue): void;
        pairs: IReadOnlyCollection<IKeyValuePair<TKey, TValue>>;
    }
}
declare module "lib/root/Core/Collections/KeyValuePair" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/index";
    import { IKeyValuePair } from "lib/root/Core/Collections/IKeyValuePair";
    export class KeyValuePair<TKey, TValue> implements IKeyValuePair<TKey, TValue> {
        constructor(key: TKey, value: TValue);
        private _key;
        readonly key: TKey;
        private _value;
        value: TValue;
        static createCollection<TKeyType, TValueType>(pairs: [TKeyType, TValueType][]): IReadOnlyCollection<IKeyValuePair<TKeyType, TValueType>>;
    }
}
declare module "lib/root/Core/Collections/Dictionary" {
    import { IAction2 } from "lib/root/Core/Delegates";
    import { IReadOnlyCollection } from "lib/root/Core/Collections/Collections";
    import { IDictionary } from "lib/root/Core/Collections/IDictionary";
    import { IKeyValuePair } from "lib/root/Core/Collections/IKeyValuePair";
    import { IReadOnlyDictionary } from "lib/root/Core/Collections/IReadOnlyDictionary";
    export class Dictionary<TKey, TValue> implements IDictionary<TKey, TValue> {
        private _pairs;
        constructor(pairs?: [TKey, TValue][]);
        clear(): void;
        clone(): Dictionary<TKey, TValue>;
        extend(dictionary: IReadOnlyDictionary<TKey, TValue>): void;
        forEach(callback: IAction2<TKey, TValue>): void;
        get(key: TKey): TValue;
        getKeys(): IReadOnlyCollection<TKey>;
        getValues(): IReadOnlyCollection<TValue>;
        has(key: TKey): boolean;
        remove(key: TKey): void;
        set(key: Readonly<TKey>, value: TValue): void;
        readonly count: number;
        pairs: IReadOnlyCollection<IKeyValuePair<TKey, TValue>>;
    }
}
declare module "lib/root/Core/Collections/index" {
    export * from "lib/root/Core/Collections/List";
    export * from "lib/root/Core/Collections/Enumerable";
    export * from "lib/root/Core/Collections/IReadOnlyCollection";
    export * from "lib/root/Core/Collections/ICollection";
    export * from "lib/root/Core/Collections/IEnumerable";
    export * from "lib/root/Core/Collections/IEnumerator";
    export * from "lib/root/Core/Collections/Stack";
    export * from "lib/root/Core/Collections/TreeNode";
    export * from "lib/root/Core/Collections/TreeNodeList";
    export * from "lib/root/Core/Collections/ITreeNodeReadOnlyCollection";
    export * from "lib/root/Core/Collections/IDictionary";
    export * from "lib/root/Core/Collections/IReadOnlyDictionary";
    export * from "lib/root/Core/Collections/Dictionary";
}
declare module "lib/root/Core/Function" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/index";
    import { IAction, IFunc, IFunc1, IFunc2, IPredicate } from "lib/root/Core/Delegates";
    export class Function {
        static alwaysTrue(): IPredicate;
        /**
         * Simply throws an error if value is undefined
         * @param value Value to check
         */
        static ensureIsDefined<T>(value: T): void;
        static getArgumentNames(fn: any): IReadOnlyCollection<string>;
        static getName(fn: Object): string;
        static identity<TValue>(): IFunc1<TValue, TValue>;
        static isNull<TValue>(value: TValue): boolean;
        static equality<TValue>(): IFunc2<TValue, TValue, boolean>;
        static isTrueOrUndefined(value: boolean): boolean;
        static isNullOrUndefined<TValue>(value: TValue): boolean;
        static noop(): IAction;
        static constant<TValue>(result: TValue): IFunc<TValue>;
        private static _errorValueIsUndefined;
    }
}
declare module "lib/directives/__controls/binding-info/binding-info" {
}
declare module "lib/root/Core/Browser/IBrowser" {
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    export interface IBrowser {
        isDesktop: boolean;
        startAnimationFrame(): void;
        finishAnimationFrame(): void;
        computeCanvasTextYOffset(textHeight: number): number;
        computeCanvasTextDecorationYOffset(textHeight: number): number;
        correctSvgXmlForCanvasRendering(svgXml: string): string;
        fixMeasuredTextHeight(height: number): number;
        hasDropShadowFilterBugWhenOverflowIsHidden(): boolean;
        hasZIndexUsedWithTransformBug(): boolean;
        getAbsolutePosition(element: Element): IVector2d;
        fixEvents(element: Element): void;
        fixZIndex(htmlElement: HTMLElement): void;
        makeImageCrossOrigin(imageElement: HTMLImageElement): void;
        removeHtmlElement(htmlElement: HTMLElement): void;
        createMouseMoveEvent(): MouseEvent;
        setTextContent(htmlElement: HTMLElement, textContent: string): void;
        appendChild(parentElement: Element, childElement: Element): void;
    }
}
declare module "lib/root/Core/Browser/DefaultBrowser" {
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    import { IBrowser } from "lib/root/Core/Browser/IBrowser";
    export class DefaultBrowser implements IBrowser {
        private _info;
        constructor(info: any);
        readonly isDesktop: boolean;
        startAnimationFrame(): void;
        finishAnimationFrame(): void;
        computeCanvasTextYOffset(textHeight: number): number;
        computeCanvasTextDecorationYOffset(textHeight: number): number;
        correctSvgXmlForCanvasRendering(svgXml: string): string;
        fixMeasuredTextHeight(height: number): number;
        hasDropShadowFilterBugWhenOverflowIsHidden(): boolean;
        hasZIndexUsedWithTransformBug(): boolean;
        getAbsolutePosition(element: Element): IVector2d;
        fixEvents(element: Element): void;
        fixZIndex(htmlElement: HTMLElement): void;
        makeImageCrossOrigin(imageElement: HTMLImageElement): void;
        removeHtmlElement(htmlElement: HTMLElement): void;
        createMouseMoveEvent(): MouseEvent;
        setTextContent(htmlElement: HTMLElement, textContent: string): void;
        appendChild(parentElement: Element, childElement: Element): void;
    }
}
declare module "lib/root/Core/Browser/ChromeBrowser" {
    import { DefaultBrowser } from "lib/root/Core/Browser/DefaultBrowser";
    export class ChromeBrowser extends DefaultBrowser {
    }
}
declare module "lib/root/Core/Browser/InternetExplorerBrowser" {
    import { DefaultBrowser } from "lib/root/Core/Browser/DefaultBrowser";
    export class InternetExplorerBrowser extends DefaultBrowser {
        private _appendChildCalled;
        startAnimationFrame(): void;
        finishAnimationFrame(): void;
        removeHtmlElement(htmlElement: HTMLElement): void;
        createMouseMoveEvent(): MouseEvent;
        setTextContent(htmlElement: HTMLElement, textContent: string): void;
        appendChild(parentElement: Element, childElement: Element): void;
        private fixSvgIcons();
    }
}
declare module "lib/root/Core/Browser/EdgeBrowser" {
    import { DefaultBrowser } from "lib/root/Core/Browser/DefaultBrowser";
    export class EdgeBrowser extends DefaultBrowser {
        private _internetExplorerBrowser;
        constructor(info: any);
        startAnimationFrame(): void;
        finishAnimationFrame(): void;
        computeCanvasTextYOffset(textHeight: number): number;
        computeCanvasTextDecorationYOffset(textHeight: number): number;
        correctSvgXmlForCanvasRendering(svgXml: string): string;
        setTextContent(htmlElement: HTMLElement, textContent: string): void;
        appendChild(parentElement: Element, childElement: Element): void;
    }
}
declare module "lib/root/Core/Browser/FirefoxBrowser" {
    import { DefaultBrowser } from "lib/root/Core/Browser/DefaultBrowser";
    export class FirefoxBrowser extends DefaultBrowser {
        computeCanvasTextYOffset(textHeight: number): number;
        correctSvgXmlForCanvasRendering(svgXml: string): string;
        fixMeasuredTextHeight(height: number): number;
    }
}
declare module "lib/root/Core/Browser/WebKitBrowser" {
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    import { DefaultBrowser } from "lib/root/Core/Browser/DefaultBrowser";
    export class WebKitBrowser extends DefaultBrowser {
        hasDropShadowFilterBugWhenOverflowIsHidden(): boolean;
        hasZIndexUsedWithTransformBug(): boolean;
        getAbsolutePosition(element: Element): IVector2d;
        fixEvents(element: Element): void;
        fixZIndex(htmlElement: HTMLElement): void;
        makeImageCrossOrigin(imageElement: HTMLImageElement): void;
        setTextContent(htmlElement: HTMLElement, textContent: string): void;
    }
}
declare module "lib/root/Core/BrowserInfo" {
    import { IBrowser } from "lib/root/Core/Browser/IBrowser";
    export class BrowserInfo {
        private static _instance;
        private _browser;
        private _info;
        private constructor();
        static readonly instance: BrowserInfo;
        readonly browser: IBrowser;
        readonly info: any;
        private static createBrowser(info);
        static detectFromUserAgent(ua: string): any;
        private static getFirstMatch(ua, regex);
        private static getSecondMatch(ua, regex);
    }
}
declare module "lib/root/Core/Graphics/IVector3d" {
    export interface IVector3d {
        x: number;
        y: number;
        z: number;
        r: number;
        g: number;
        b: number;
        hue: number;
        saturation: number;
        value: number;
        lightness: number;
        clamp(minValue: number, maxValue: number): IVector3d;
    }
}
declare module "lib/root/Core/Graphics/Vector3d" {
    import { IVector3d } from "lib/root/Core/Graphics/IVector3d";
    export class Vector3d implements IVector3d {
        constructor(x?: number, y?: number, z?: number);
        private _x;
        x: number;
        private _y;
        y: number;
        private _z;
        z: number;
        r: number;
        g: number;
        b: number;
        hue: number;
        saturation: number;
        value: number;
        lightness: number;
        clamp(minValue: number, maxValue: number): IVector3d;
    }
}
declare module "lib/root/Core/IColor" {
    import { IVector3d } from "lib/root/Core/Graphics/IVector3d";
    export interface IColor {
        rgb: number;
        red: number;
        green: number;
        blue: number;
        normalizedRgb(): IVector3d;
        toString(): string;
    }
}
declare module "lib/root/Core/Color" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/Collections";
    import { IVector3d } from "lib/root/Core/Graphics/IVector3d";
    import { IColor } from "lib/root/Core/IColor";
    export class Color implements IColor {
        constructor(argb: number, alpha?: number);
        readonly rgb: number;
        private _red;
        red: number;
        private _green;
        green: number;
        private _blue;
        blue: number;
        private _alpha;
        alpha: number;
        normalizedRgb(): IVector3d;
        toString(): string;
        static readonly white: number;
        static readonly black: number;
        static readonly red: number;
        static readonly yellow: number;
        static readonly green: number;
        static readonly cyan: number;
        static readonly blue: number;
        static readonly magenta: number;
        static huePalette: IReadOnlyCollection<IColor>;
        static darken(color: IColor, amount: number): IColor;
        /**
         * Formats color object to RGB string prefixed with '#' symbol
         * @param color Color object to format
         * @param useUpperCase If true, all A-F hexadecimal digits converted to uppercase letters
         * @returns RGB color string like '#RRGGBB' or '#rrggbb'
         */
        static format(color: IColor, useUpperCase?: boolean): string;
        static fromHsl(h: number, s: number, l: number): IColor;
        static fromHsv(h: number, s: number, v: number): IColor;
        static generatePalette(startColor: IColor, count: number): IReadOnlyCollection<IColor>;
        static getLuminance(color: IColor): number;
        static getPaletteColors(paletteSize: number, paletteIndex: number): [IColor, IColor];
        static hslToRgb(h: number, s: number, l: number): number;
        static hsvToRgb(h: number, s: number, v: number): number;
        static lighten(color: IColor, amount: number): IColor;
        static mostReadable(backgroundColor: IColor, colors: IReadOnlyCollection<IColor>): IColor;
        /**
         * Parses color from RGB string. Valid RGB strings are '#RRGGBB', 'RRGGBB', '#RGB', 'RGB'
         * @param colorString RGB color string
         * @returns Recognized color object or undefined if color has not been recognized
         */
        static parse(colorString: string): IColor;
        static readability(color1: IColor, color2: IColor): number;
        static rgbToHex(r: number, g: number, b: number): number;
        static rgbToHsl(value: number): IVector3d;
        static rgbToHsv(value: number): IVector3d;
        private static getByte(value, index);
        private static getComponentLuminance(value);
        private static hue2rgb(p, q, t);
        private static getHue(r, g, b, d, max);
        private static transformHsl(color, action);
        private static transformHsv(color, action);
    }
}
declare module "lib/root/Core/Events/Event" {
    export class Event {
        private _target;
        constructor(target: any);
        readonly target: any;
    }
}
declare module "lib/root/Core/Events/IEventListener" {
    export interface IEventListener<TEvent> {
        (event: TEvent): void;
    }
}
declare module "lib/root/Core/Events/IEventHandler" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { IAction } from "lib/root/Core/Delegates";
    import { IEventListener } from "lib/root/Core/Events/IEventListener";
    export interface IEventHandler<TEvent> {
        addListener(listener: IEventListener<TEvent>): IAction;
        addListenerOnce(listener: IEventListener<TEvent>): void;
        removeListener(listener: IEventListener<TEvent>): void;
        clearListeners(): void;
        notify(event?: TEvent): void;
        isEnabled: boolean;
        listeners: IReadOnlyCollection<IEventListener<TEvent>>;
        listenerAdded: IEventHandler<IEventListener<TEvent>>;
        listenerRemoved: IEventHandler<IEventListener<TEvent>>;
    }
}
declare module "lib/root/Core/Events/GenericEventHandler" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { IAction } from "lib/root/Core/Delegates";
    import { IEventHandler } from "lib/root/Core/Events/IEventHandler";
    import { IEventListener } from "lib/root/Core/Events/IEventListener";
    export class GenericEventHandler<TEvent> implements IEventHandler<TEvent> {
        private _listeners;
        constructor(createAddRemoveHandlers?: boolean);
        private _isEnabled;
        isEnabled: boolean;
        addListener(listener: IEventListener<TEvent>): IAction;
        addListenerOnce(listener: IEventListener<TEvent>): void;
        removeListener(listener: IEventListener<TEvent>): void;
        clearListeners(): void;
        notify(event?: TEvent, ignoredListener?: IEventListener<TEvent>): void;
        readonly listeners: IReadOnlyCollection<IEventListener<TEvent>>;
        listenerAdded: IEventHandler<IEventListener<TEvent>>;
        listenerRemoved: IEventHandler<IEventListener<TEvent>>;
    }
}
declare module "lib/root/Core/Events/EventHandler" {
    import { Event } from "lib/root/Core/Events/Event";
    import { GenericEventHandler } from "lib/root/Core/Events/GenericEventHandler";
    export class EventHandler extends GenericEventHandler<Event> {
    }
}
declare module "lib/root/Core/Graphics/HorizontalAlignment" {
    export enum HorizontalAlignment {
        Stretch = 1,
        Center = 2,
        Left = 3,
        Right = 4,
    }
}
declare module "lib/root/Core/Graphics/IThickness" {
    export interface IThickness {
        top: number;
        left: number;
        bottom: number;
        right: number;
        vertical: number;
        horizontal: number;
        clone(): IThickness;
    }
}
declare module "lib/root/Core/Graphics/TextDecoration" {
    export enum TextDecoration {
        Underline = 1,
        LineThrough = 2,
    }
}
declare module "lib/root/Core/FontWeight" {
    export enum FontWeight {
        normal = 1,
        bold = 2,
    }
}
declare module "lib/root/Core/IFont" {
    import { FontWeight } from "lib/root/Core/FontWeight";
    export interface IFont {
        fontFamily: string;
        fontSize: number;
        fontWeight: FontWeight;
        toString(): string;
        isItalic: boolean;
    }
}
declare module "lib/root/Core/TextEditorType" {
    export enum TextEditorType {
        Text = 0,
        Number = 1,
        Phone = 2,
        Password = 3,
    }
}
declare module "lib/root/Render/Cursor" {
    export enum Cursor {
        Default = "default",
        Pointer = "pointer",
        Text = "text",
        Help = "help",
        NotAllowed = "not-allowed",
        EwResize = "ew-resize",
    }
}
declare module "lib/root/Render/Filters/IFilterCollection" {
    export interface IFilterCollection {
        toString(): string;
        getBoxShadowString(): string;
    }
}
declare module "lib/root/Render/IGradientStop" {
    import { IColor } from "lib/root/Core/IColor";
    export interface IGradientStop {
        offset: number;
        color: IColor;
    }
}
declare module "lib/root/Render/ILinearGradient" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    import { IGradientStop } from "lib/root/Render/IGradientStop";
    export interface ILinearGradient {
        colorStops: IReadOnlyCollection<IGradientStop>;
        angle: number;
        width: number;
        height: number;
        repeat: boolean;
        startPoint: IVector2d;
        endPoint: IVector2d;
    }
}
declare module "lib/root/Render/IFillStyle" {
    import { IColor } from "lib/root/Core/IColor";
    import { ILinearGradient } from "lib/root/Render/ILinearGradient";
    export interface IFillStyle {
        color: IColor;
        linearGradient: ILinearGradient;
        clear(): void;
    }
}
declare module "lib/root/Core/Graphics/ILine" {
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    export interface ILine {
        startPoint: IVector2d;
        endPoint: IVector2d;
    }
}
declare module "lib/root/Core/Graphics/IRect" {
    import { ILine } from "lib/root/Core/Graphics/ILine";
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    export interface IRect {
        position: IVector2d;
        size: IVector2d;
        x: number;
        y: number;
        width: number;
        height: number;
        readonly area: number;
        readonly isEmpty: boolean;
        readonly positiveWidth: number;
        readonly positiveHeight: number;
        left: number;
        leftLine: ILine;
        right: number;
        rightLine: ILine;
        top: number;
        topLine: ILine;
        bottom: number;
        bottomLine: ILine;
        topLeft: IVector2d;
        topRight: IVector2d;
        bottomLeft: IVector2d;
        bottomRight: IVector2d;
        assign(rect: IRect): void;
        equals(rect: IRect): boolean;
        hasX(x: number): boolean;
        hasY(y: number): boolean;
        increase(rect: IRect): void;
        intersection(rect: IRect): void;
        intersectsWith(rect: IRect): boolean;
        setValues(x: number, y: number, width: number, height: number): void;
        union(rect: IRect): void;
    }
}
declare module "lib/root/Core/Graphics/StrokeStyle" {
    export enum StrokeStyle {
        Solid = 1,
        Dotted = 2,
        Dashed = 3,
    }
}
declare module "lib/root/Render/IStroke" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/Collections";
    import { StrokeStyle } from "lib/root/Core/Graphics/StrokeStyle";
    import { IColor } from "lib/root/Core/IColor";
    export interface IStroke {
        style: StrokeStyle;
        color: IColor;
        width: number;
        readonly lineDash: IReadOnlyCollection<number>;
        readonly isEmpty: boolean;
    }
}
declare module "lib/root/Render/IRectangleBorder" {
    import { IRect } from "lib/root/Core/Graphics/IRect";
    import { IStroke } from "lib/root/Render/IStroke";
    export interface IRectangleBorder {
        left: IStroke;
        top: IStroke;
        right: IStroke;
        bottom: IStroke;
        all: IStroke;
        readonly width: number;
        readonly height: number;
        calculateOffset(): IRect;
        hasSideBorder: boolean;
    }
}
declare module "lib/root/Render/IFlatStyle" {
    import { HorizontalAlignment } from "lib/root/Core/Graphics/HorizontalAlignment";
    import { IThickness } from "lib/root/Core/Graphics/IThickness";
    import { TextDecoration } from "lib/root/Core/Graphics/TextDecoration";
    import { IColor } from "lib/root/Core/IColor";
    import { IFont } from "lib/root/Core/IFont";
    import { TextEditorType } from "lib/root/Core/TextEditorType";
    import { Cursor } from "lib/root/Render/Cursor";
    import { IFilterCollection } from "lib/root/Render/Filters/IFilterCollection";
    import { IFillStyle } from "lib/root/Render/IFillStyle";
    import { IRectangleBorder } from "lib/root/Render/IRectangleBorder";
    import { IStroke } from "lib/root/Render/IStroke";
    export interface IFlatStyle {
        cssClassNames: string;
        x: number;
        y: number;
        width: number;
        height: number;
        visible: boolean;
        clipToBounds: boolean;
        zIndex: number;
        opacity: number;
        cache: boolean;
        borderRadius: number;
        border: IRectangleBorder;
        color: IColor;
        fill: IFillStyle;
        filters: IFilterCollection;
        text: string;
        textEditorType: TextEditorType;
        textEditorAlign: HorizontalAlignment;
        textEditorPadding: IThickness;
        font: IFont;
        textDecoration: TextDecoration;
        textDecorationStyle: IStroke;
        isTextSelectable: boolean;
        noPointerEvents: boolean;
        iconName: string;
        imageSource: string;
        cursor: Cursor;
        hasChanges: boolean;
        commitChanges(): void;
        invalidate(): void;
    }
}
declare module "lib/root/Render/IGraphics" {
    import { INode } from "lib/root/Core/INode";
    export interface IGraphics {
        htmlElement: HTMLElement;
        append(): IGraphics;
        appendChild(graphics: IGraphics): void;
        empty(): void;
        updateFromNode(node: INode): void;
    }
}
declare module "lib/root/Core/Events/IMouseEventHandler" {
    import { IEventHandler } from "lib/root/Core/Events/IEventHandler";
    import { IMouseEvent } from "lib/root/Core/Events/IMouseEvent";
    export interface IMouseEventHandler extends IEventHandler<IMouseEvent> {
    }
}
declare module "lib/root/Core/Events/IWheelEventHandler" {
    import { IMouseEventHandler } from "lib/root/Core/Events/IMouseEventHandler";
    export interface IWheelEventHandler extends IMouseEventHandler {
    }
}
declare module "lib/root/Render/INodeEvents" {
    import { IMouseEventHandler } from "lib/root/Core/Events/IMouseEventHandler";
    import { IWheelEventHandler } from "lib/root/Core/Events/IWheelEventHandler";
    export interface INodeEvents {
        attach(htmlElement: HTMLElement): void;
        detach(): void;
        readonly currentCursor: string;
        readonly click: IMouseEventHandler;
        readonly dblclick: IMouseEventHandler;
        readonly mouseenter: IMouseEventHandler;
        readonly mouseleave: IMouseEventHandler;
        readonly mouseover: IMouseEventHandler;
        readonly mouseout: IMouseEventHandler;
        readonly mousemove: IMouseEventHandler;
        readonly mousedown: IMouseEventHandler;
        readonly mouseup: IMouseEventHandler;
        readonly contextmenu: IMouseEventHandler;
        readonly wheel: IWheelEventHandler;
    }
}
declare module "lib/root/Core/Events/IChangeEvent" {
    export interface IChangeEvent<TValue> {
        readonly old: TValue;
        readonly new: TValue;
    }
}
declare module "lib/root/Core/Events/ChangeEventHandler" {
    import { GenericEventHandler } from "lib/root/Core/Events/GenericEventHandler";
    import { IChangeEvent } from "lib/root/Core/Events/IChangeEvent";
    export class ChangeEventHandler<TValue> extends GenericEventHandler<IChangeEvent<TValue>> {
    }
}
declare module "lib/root/Render/ITextEditor" {
    import { ChangeEventHandler } from "lib/root/Core/Events/ChangeEventHandler";
    export interface ITextEditor {
        text: string;
        readonly textChange: ChangeEventHandler<string>;
        readonly isActive: boolean;
        readonly isActiveChange: ChangeEventHandler<boolean>;
        selectionStart: number;
        selectionEnd: number;
        activate(): void;
        deactivate(): void;
    }
}
declare module "lib/root/Core/INode" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { IFlatStyle } from "lib/root/Render/IFlatStyle";
    import { IGraphics } from "lib/root/Render/IGraphics";
    import { INodeEvents } from "lib/root/Render/INodeEvents";
    import { ITextEditor } from "lib/root/Render/ITextEditor";
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    export interface INode {
        label: string;
        metadata: string;
        graphics: IGraphics;
        href: string;
        hrefTarget: string;
        children: IReadOnlyCollection<INode>;
        parent: INode;
        style: IFlatStyle;
        events: INodeEvents;
        readonly htmlElement: HTMLElement;
        readonly textEditor: ITextEditor;
        readonly globalX: number;
        readonly globalY: number;
        addChild(node: INode): void;
        containsPoint(point: IVector2d): boolean;
        empty(): INode;
        getNodesAtPoint(point: IVector2d): IReadOnlyCollection<INode>;
        globalToLocal(point: IVector2d): IVector2d;
        localToGlobal(point: IVector2d): IVector2d;
        update(): void;
        invalidate(): void;
        cleanup(): void;
    }
}
declare module "lib/root/Core/Events/IEvent" {
    export interface IEvent {
    }
}
declare module "lib/root/Core/Events/IMouseEvent" {
    import { INode } from "lib/root/Core/INode";
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    import { IEvent } from "lib/root/Core/Events/IEvent";
    export interface IMouseEvent extends IEvent {
        readonly point: Readonly<IVector2d>;
        readonly target: INode;
    }
}
declare module "lib/root/Core/Events/MouseEventHandler" {
    import { GenericEventHandler } from "lib/root/Core/Events/GenericEventHandler";
    import { IMouseEvent } from "lib/root/Core/Events/IMouseEvent";
    export class MouseEventHandler extends GenericEventHandler<IMouseEvent> {
    }
}
declare module "lib/root/Core/DayOfWeek" {
    export enum DayOfWeek {
        Sunday = 0,
        Monday = 1,
        Tuesday = 2,
        Wednesday = 3,
        Thursday = 4,
        Friday = 5,
        Saturday = 6,
    }
}
declare module "lib/root/Core/IComparable" {
    import { IPredicate1 } from "lib/root/Core/Delegates";
    export interface IComparable<T> {
        equals: IPredicate1<T>;
    }
}
declare module "lib/root/Render/ITextMetrics" {
    export interface ITextMetrics {
        width: number;
        height: number;
    }
}
declare module "lib/root/Render/ITextMeasurer" {
    import { IFont } from "lib/root/Core/IFont";
    import { ITextMetrics } from "lib/root/Render/ITextMetrics";
    export interface ITextMeasurer {
        fontScaleRate: number;
        measureFont(font: IFont): number;
        measureText(text: string, font: IFont): ITextMetrics;
    }
}
declare module "lib/root/Core/Cache/Cache" {
    import { IFunc1 } from "lib/root/Core/Delegates";
    export class Cache<TKey, TValue> {
        private _createValue;
        private _values;
        constructor(createValue?: IFunc1<TKey, TValue>);
        get(key: TKey): TValue;
    }
}
declare module "lib/root/Core/Cache/Memoize" {
    import { IFunc } from "lib/root/Core/Delegates";
    /**
     * Applies to static methods with single argument. Creates a cache that memoizes the method return value based on its
     * argument. Cache instance is static and shared between all class instances.
     */
    export const memoize: IFunc<MethodDecorator>;
}
declare module "lib/root/Core/Cache/index" {
    export * from "lib/root/Core/Cache/Memoize";
    export * from "lib/root/Core/Cache/Cache";
}
declare module "lib/root/Core/ITextLine" {
    export interface ITextLine {
        text: string;
        readonly width: number;
        readonly height: number;
    }
}
declare module "lib/root/Core/Lazy" {
    import { IFunc } from "lib/root/Core/Delegates";
    export interface IParameterLessConstructor<TValue> {
        new (): TValue;
    }
    export class Lazy<TValue> {
        private _create;
        constructor(create: IFunc<TValue>);
        private _value;
        readonly value: TValue;
        readonly isValueCreated: boolean;
        static createFromConstructor<T>(valueConstructor: IParameterLessConstructor<T>): Lazy<T>;
    }
}
declare module "lib/root/Core/TextBreaker/ILineBreakStrategy" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/Collections";
    export interface ILineBreakStrategy {
        breakLine(text: string): IReadOnlyCollection<string>;
    }
}
declare module "lib/root/Browser/HelperElement" {
    export class HelperElement {
        static createTextMeasurementHelper(additionalCssText?: string): HTMLSpanElement;
    }
}
declare module "lib/root/Browser/BrowserLineBreakStrategy" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/index";
    import { ILineBreakStrategy } from "lib/root/Core/TextBreaker/ILineBreakStrategy";
    export class BrowserLineBreakStrategy implements ILineBreakStrategy {
        private static readonly _helperElement;
        breakLine(line: string): IReadOnlyCollection<string>;
        private static addCharacterAndCheckBreaking(char);
    }
}
declare module "lib/root/Core/TextBreaker/SimpleLineBreakStrategy" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/index";
    import { ILineBreakStrategy } from "lib/root/Core/TextBreaker/ILineBreakStrategy";
    export class SimpleLineBreakStrategy implements ILineBreakStrategy {
        breakLine(line: string): IReadOnlyCollection<string>;
    }
}
declare module "lib/root/Core/TextBreaker/TextBreaker" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/index";
    export class TextBreaker {
        private static readonly _browserStrategy;
        private static readonly _simpleStrategy;
        private static readonly _ordinaryCharacterRanges;
        static break(text: string): IReadOnlyCollection<string>;
        static splitBySpaces(line: string): IReadOnlyCollection<string>;
        private static breakLine(line);
        private static isOrdinaryString(text);
    }
}
declare module "lib/root/Core/TextBreaker/index" {
    export * from "lib/root/Core/TextBreaker/TextBreaker";
}
declare module "lib/root/Core/TextLine" {
    import { ITextMeasurer } from "lib/root/Render/ITextMeasurer";
    import { IFont } from "lib/root/Core/IFont";
    import { ITextLine } from "lib/root/Core/ITextLine";
    export class TextLine implements ITextLine {
        private _textMeasurer;
        private _font;
        private _textMetrics;
        constructor(textMeasurer: ITextMeasurer, font: IFont, text?: string);
        private _text;
        text: string;
        readonly width: number;
        readonly height: number;
    }
}
declare module "lib/root/Core/UnicodeChars" {
    export class UnicodeChars {
        static enDash: string;
        static emDash: string;
        static bullet: string;
        static horizontalEllipsis: string;
    }
}
declare module "lib/root/Core/Text" {
    import { ITextMeasurer } from "lib/root/Render/ITextMeasurer";
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { List } from "lib/root/Core/Collections/List";
    import { IFont } from "lib/root/Core/IFont";
    import { ITextLine } from "lib/root/Core/ITextLine";
    export class Text {
        private static _htmlBrTagSeparator;
        private static _lineBreak;
        private static _lineBreakSeparator;
        static camelToKebabCase(value: string): string;
        static capitalize(value: string): string;
        static cutText(lines: IReadOnlyCollection<string>, maxCharacters: number): IReadOnlyCollection<string>;
        static cutTextLines(textLines: IReadOnlyCollection<ITextLine>, textMeasurer: ITextMeasurer, maxCharacters: number, font: IFont): IReadOnlyCollection<ITextLine>;
        static getBulletList(texts: IReadOnlyCollection<string>): string;
        static getCharacters(text: string): IReadOnlyCollection<string>;
        static getCharactersCount(lines: IReadOnlyCollection<string>): number;
        static getLengthByWidth(text: string, font: IFont, width: number, textMeasurer: ITextMeasurer): number;
        static getLines(text: string, excludeEmpty?: boolean): IReadOnlyCollection<string>;
        static getTexts(textLines: IReadOnlyCollection<ITextLine>): IReadOnlyCollection<string>;
        static join(texts: IReadOnlyCollection<string>, separator: string): string;
        static joinLines(texts: IReadOnlyCollection<string>): string;
        static replaceAll(value: string, search: string, replacement: string): string;
        static replaceWhiteSpaces(value: string, removeLineBreaks: boolean): string;
        static split(text: string, separator: RegExp): IReadOnlyCollection<string>;
        static toLowerCase(value: string): string;
        static truncate(value: string, length: number): string;
        static wrapText(text: string, font: IFont, width: number, textMeasurer: ITextMeasurer, isHtml: boolean): IReadOnlyCollection<ITextLine>;
        static wrapTextByWidth(text: string, font: IFont, width: number, textMeasurer: ITextMeasurer): List<ITextLine>;
    }
}
declare module "lib/root/Core/DateTime" {
    import { IReadOnlyCollection, List } from "lib/root/Core/Collections/Collections";
    import { DayOfWeek } from "lib/root/Core/DayOfWeek";
    import { IMap } from "lib/root/Core/Delegates";
    import { IComparable } from "lib/root/Core/IComparable";
    export class DateTime implements IComparable<DateTime> {
        static millisecondsInSecond: number;
        static secondsInMinute: number;
        static minutesInHour: number;
        static hoursInDay: number;
        static noon: number;
        static daysInWeek: number;
        static monthsInYear: number;
        static secondsInHour: number;
        static secondsInDay: number;
        static millisecondsInMinute: number;
        static millisecondsInHour: number;
        static millisecondsInDay: number;
        static anteMeridiem: string;
        static postMeridiem: string;
        static getTimestampDays: IMap<DateTime, number>;
        static getValue: IMap<DateTime, number>;
        constructor(date?: DateTime | Date | string | number | number[]);
        static readonly now: DateTime;
        static readonly today: DateTime;
        static daysInMonth(year: number, month: number): number;
        static daysCount(date1: DateTime, date2: DateTime): number;
        static nightsCount(date1: DateTime, date2: DateTime): number;
        static fromTimestampDays(timestampDays: number): DateTime;
        static getWeekdayName(index: number): string;
        static format(date: Date | DateTime, format: string): string;
        static formatWeekdayRange(start: DayOfWeek, end: DayOfWeek): string;
        static formatSeason(startDay: number, startMonth: number, endDay: number, endMonth: number): string;
        static formatMonthDay(day: number, month: number): string;
        static parse(dateString: string, format: string): DateTime;
        static parseTime(timeString: string, format: string): number;
        static getTime(date: Date | DateTime): number;
        static formatTime(time: number, format: string): string;
        static applyTimezoneOffset(date: Date, offset: number): Date;
        static createDates(value: DateTime, count: number): IReadOnlyCollection<DateTime>;
        static getWeekdayNames(dates: IReadOnlyCollection<DateTime>): List<string>;
        atTimezone(offset: number): DateTime;
        private _date;
        private _timezoneOffset;
        millisecond: number;
        second: number;
        minute: number;
        hour: number;
        day: number;
        month: number;
        year: number;
        readonly dayOfWeek: number;
        readonly dayOfYear: number;
        value: number;
        readonly isPast: boolean;
        readonly isPastDate: boolean;
        readonly date: DateTime;
        readonly time: DateTime;
        readonly timestampDays: number;
        readonly dayPassedRatio: number;
        readonly isWeekend: boolean;
        timezoneOffset: number;
        removeTimezoneOffset(): void;
        format(format?: string): string;
        formatAsUtc(format?: string): string;
        assignTime(value: DateTime): void;
        valueOf(): number;
        toString(): string;
        toDate(): Date;
        clone(): DateTime;
        equals(value: DateTime): boolean;
        equalMonth(value: DateTime): boolean;
        equalDay(value: DateTime): boolean;
        isOlderMonth(value: DateTime): boolean;
        firstMonthDate(): DateTime;
        private createMoment();
        private createUtcMoment();
    }
}
declare module "lib/root/Core/Easing/IEasingFunction" {
    export interface IEasingFunction {
        ease(normalizedTime: number): number;
    }
}
declare module "lib/root/Core/Graphics/IAnimation" {
    import { IEasingFunction } from "lib/root/Core/Easing/IEasingFunction";
    export interface IAnimationProgressCallback {
        (progress: number): void;
    }
    export interface IAnimation {
        animate(easingFunction: IEasingFunction, durationMilliseconds: number, progressCallback: IAnimationProgressCallback): void;
    }
}
declare module "lib/root/Core/Graphics/Animation" {
    import { IEasingFunction } from "lib/root/Core/Easing/IEasingFunction";
    import { IAnimation, IAnimationProgressCallback } from "lib/root/Core/Graphics/IAnimation";
    export class Animation implements IAnimation {
        private _callbackFn;
        private _durationMilliseconds;
        private _easingFunction;
        private readonly _enableFrameDrops;
        private readonly _frameDurationMilliseconds;
        private _lastStepTime;
        private _progress;
        constructor(enableFrameDrops?: boolean);
        animate(easingFunction: IEasingFunction, durationMilliseconds: number, callbackFn: IAnimationProgressCallback): void;
        processAnimationFrame(): void;
        readonly isRunning: boolean;
    }
}
declare module "lib/root/Core/Graphics/IRelativeAlignment" {
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    export interface IRelativeAlignment {
        equals(value: IRelativeAlignment): boolean;
        evaluate(atSize: IVector2d, mySize: IVector2d): IVector2d;
        flip(range: IVector2d, x: boolean, y: boolean): IRelativeAlignment;
        readonly my: IVector2d;
        readonly at: IVector2d;
        readonly hasIntersections: boolean;
    }
}
declare module "lib/root/Core/Graphics/Line" {
    import { ILine } from "lib/root/Core/Graphics/ILine";
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    export class Line implements ILine {
        private _startPoint;
        private _endPoint;
        constructor(startPoint: IVector2d, endPoint: IVector2d);
        readonly startPoint: IVector2d;
        readonly endPoint: IVector2d;
    }
}
declare module "lib/root/Core/Graphics/Rect" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { ILine } from "lib/root/Core/Graphics/ILine";
    import { IRect } from "lib/root/Core/Graphics/IRect";
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    export class Rect implements IRect {
        constructor(x: number, y: number, width: number, height: number);
        private _position;
        position: IVector2d;
        private _size;
        size: IVector2d;
        x: number;
        y: number;
        width: number;
        height: number;
        readonly area: number;
        readonly isEmpty: boolean;
        readonly positiveWidth: number;
        readonly positiveHeight: number;
        readonly left: number;
        readonly leftLine: ILine;
        readonly right: number;
        readonly rightLine: ILine;
        readonly top: number;
        readonly topLine: ILine;
        readonly bottom: number;
        readonly bottomLine: ILine;
        readonly topLeft: IVector2d;
        readonly topRight: IVector2d;
        readonly bottomLeft: IVector2d;
        readonly bottomRight: IVector2d;
        assign(rect: IRect): void;
        equals(rect: IRect): boolean;
        hasX(x: number): boolean;
        hasY(y: number): boolean;
        increase(rect: IRect): void;
        intersection(rect: IRect): void;
        intersectsWith(rect: IRect): boolean;
        setValues(x: number, y: number, width: number, height: number): void;
        union(rect: IRect): void;
        static createOffsetRect(point1: IVector2d, point2: IVector2d): IRect;
        static empty(): IRect;
        static getBounds(rectangles: IReadOnlyCollection<IRect>): IRect;
        static intersection(a: IRect, b: IRect): IRect;
        static union(a: IRect, b: IRect): IRect;
    }
}
declare module "lib/root/Core/Graphics/VerticalAlignment" {
    export enum VerticalAlignment {
        Stretch = 1,
        Center = 2,
        Top = 3,
        Bottom = 4,
    }
}
declare module "lib/root/Core/Graphics/Visibility" {
    export enum Visibility {
        Visible = 0,
        Hidden = 1,
        Collapsed = 2,
    }
}
declare module "lib/root/Core/ResizeObserver" {
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    export class ResizeObserver {
        private _element;
        constructor(element: HTMLElement);
        private _size;
        readonly size: IVector2d;
        isElementReady(): boolean;
    }
}
declare module "lib/root/Core/Graphics/Dock" {
    export enum Dock {
        Left = 1,
        Top = 2,
        Right = 3,
        Bottom = 4,
    }
}
declare module "lib/root/Layout/ILayoutConstraints" {
    import { Dock } from "lib/root/Core/Graphics/Dock";
    import { HorizontalAlignment } from "lib/root/Core/Graphics/HorizontalAlignment";
    import { IRect } from "lib/root/Core/Graphics/IRect";
    import { IThickness } from "lib/root/Core/Graphics/IThickness";
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    import { VerticalAlignment } from "lib/root/Core/Graphics/VerticalAlignment";
    import { Visibility } from "lib/root/Core/Graphics/Visibility";
    export interface ILayoutConstraints {
        margin: IThickness;
        padding: IThickness;
        verticalAlignment: VerticalAlignment;
        horizontalAlignment: HorizontalAlignment;
        x: number;
        y: number;
        width: number;
        height: number;
        getPosition(): IVector2d;
        getSize(): IVector2d;
        setBounds(rect: IRect): void;
        setPosition(value: IVector2d): void;
        setSize(value: IVector2d): void;
        visibility: Visibility;
        stretchOnOverflow: boolean;
        minWidth: number;
        minHeight: number;
        maxWidth: number;
        maxHeight: number;
        dock: Dock;
    }
}
declare module "lib/root/Layout/ILayout" {
    import { IEnumerable } from "lib/root/Core/Collections/Collections";
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    import { IRect } from "lib/root/Core/Graphics/IRect";
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    import { IRectangleBorder } from "lib/root/Render/IRectangleBorder";
    import { ILayoutConstraints } from "lib/root/Layout/ILayoutConstraints";
    export interface ILayout extends ILayoutConstraints {
        isMultilineLayout: boolean;
        getActualSize(): IVector2d;
        performLayout(availableSize: IVector2d): void;
        readonly border: IRectangleBorder;
        children: IEnumerable<ILayout>;
        readonly desiredSize: IVector2d;
        readonly actualWidth: number;
        readonly actualHeight: number;
        readonly actualX: number;
        readonly actualY: number;
        parent: ILayout;
        spacing: IVector2d;
        colSpan: number;
        rowSpan: number;
        isCollapsed(): boolean;
        isHorizontalStretchable(): boolean;
        isVerticalStretchable(): boolean;
        measure(availableSize: IVector2d, force?: boolean): void;
        arrange(finalRect: IRect, force?: boolean): void;
        invalidateMeasure(): void;
        invalidateArrange(): void;
        isArrangeValid: boolean;
        isMeasureValid: boolean;
        neverMeasured: boolean;
        actualSizeChanged: EventHandler;
        actualPositionChanged: EventHandler;
    }
}
declare module "lib/root/Layout/ILayoutTarget" {
    import { IRectangleBorder } from "lib/root/Render/IRectangleBorder";
    export interface ILayoutTarget {
        x: number;
        y: number;
        width: number;
        height: number;
        visible: boolean;
        border: IRectangleBorder;
    }
}
declare module "lib/root/Layout/ILayoutHelper" {
    import { IRect } from "lib/root/Core/Graphics/IRect";
    import { IThickness } from "lib/root/Core/Graphics/IThickness";
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    import { ILayout } from "lib/root/Layout/ILayout";
    import { ILayoutTarget } from "lib/root/Layout/ILayoutTarget";
    export interface ILayoutHelper {
        getBorderSize(layout: ILayout): number;
        getMarginAndPadding(layout: ILayout): number;
        getMaxSize(layout: ILayout): number;
        getMinSize(layout: ILayout): number;
        getPosition(layout: ILayout | IRect): number;
        getSize(layout: ILayout | IRect | IVector2d | ILayoutTarget): number;
        getThickness(thickness: IThickness): number;
        isStretchable(layout: ILayout): boolean;
        setPosition(layout: ILayout | IRect, value: number): void;
        setSize(layout: ILayout | IRect | IVector2d, value: number): void;
    }
}
declare module "lib/root/Layout/HorizontalLayoutHelper" {
    import { IRect } from "lib/root/Core/Graphics/IRect";
    import { IThickness } from "lib/root/Core/Graphics/IThickness";
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    import { ILayout } from "lib/root/Layout/ILayout";
    import { ILayoutHelper } from "lib/root/Layout/ILayoutHelper";
    import { ILayoutTarget } from "lib/root/Layout/ILayoutTarget";
    import { Layout } from "lib/root/Layout/Layout";
    export class HorizontalLayoutHelper implements ILayoutHelper {
        static instance: HorizontalLayoutHelper;
        getPosition(layout: ILayout | IRect): number;
        setPosition(layout: ILayout | IRect, value: number): void;
        getSize(layout: ILayout | IRect | IVector2d | ILayoutTarget): number;
        setSize(layout: ILayout | IRect | IVector2d, value: number): void;
        getMinSize(layout: ILayout): number;
        getMaxSize(layout: ILayout): number;
        getBorderSize(layout: Layout): number;
        getThickness(thickness: IThickness): number;
        getMarginAndPadding(layout: ILayout): number;
        isStretchable(layout: ILayout): boolean;
    }
}
declare module "lib/root/Layout/LayoutUtils" {
    import { ILayout } from "lib/root/Layout/ILayout";
    export class LayoutUtils {
        private static _ignoreFunc;
        private static _isValidMeasureFunc;
        private static _isValidArrangeFunc;
        private static _invalidateArrangeAction;
        private static _invalidateMeasureArrangeAction;
        static invalidateMeasureArrangeUpwards(layout: ILayout): void;
        static invalidateParentMeasure(layout: ILayout): void;
        static invalidateChildrenMeasure(layout: ILayout, force?: boolean): void;
        static invalidateParentArrange(layout: ILayout): void;
        static invalidateChildrenArrange(layout: ILayout): void;
        private static traverseParent(layout, action, condition);
        private static traverseChildren(layout, action, condition);
    }
}
declare module "lib/root/Layout/VerticalLayoutHelper" {
    import { IRect } from "lib/root/Core/Graphics/IRect";
    import { IThickness } from "lib/root/Core/Graphics/IThickness";
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    import { ILayout } from "lib/root/Layout/ILayout";
    import { ILayoutHelper } from "lib/root/Layout/ILayoutHelper";
    import { ILayoutTarget } from "lib/root/Layout/ILayoutTarget";
    import { Layout } from "lib/root/Layout/Layout";
    export class VerticalLayoutHelper implements ILayoutHelper {
        static instance: VerticalLayoutHelper;
        getPosition(layout: ILayout | IRect): number;
        setPosition(layout: ILayout | IRect, value: number): void;
        getSize(layout: ILayout | IRect | IVector2d | ILayoutTarget): number;
        setSize(layout: ILayout | IRect | IVector2d, value: number): void;
        getMinSize(layout: ILayout): number;
        getMaxSize(layout: ILayout): number;
        getBorderSize(layout: Layout): number;
        getThickness(thickness: IThickness): number;
        getMarginAndPadding(layout: ILayout): number;
        isStretchable(layout: ILayout): boolean;
    }
}
declare module "lib/root/Layout/Layout" {
    import { IEnumerable } from "lib/root/Core/Collections/Collections";
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    import { Dock } from "lib/root/Core/Graphics/Dock";
    import { HorizontalAlignment } from "lib/root/Core/Graphics/HorizontalAlignment";
    import { IRect } from "lib/root/Core/Graphics/IRect";
    import { IThickness } from "lib/root/Core/Graphics/IThickness";
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    import { VerticalAlignment } from "lib/root/Core/Graphics/VerticalAlignment";
    import { Visibility } from "lib/root/Core/Graphics/Visibility";
    import { IRectangleBorder } from "lib/root/Render/IRectangleBorder";
    import { ILayout } from "lib/root/Layout/ILayout";
    import { ILayoutHelper } from "lib/root/Layout/ILayoutHelper";
    import { ILayoutTarget } from "lib/root/Layout/ILayoutTarget";
    export class Layout implements ILayout {
        private _target;
        private _finalRect;
        protected _lastAvailableSize: IVector2d;
        protected _horizontalLayoutHelper: ILayoutHelper;
        protected _verticalLayoutHelper: ILayoutHelper;
        protected _neverArranged: boolean;
        private static _horizontalAlignmentMap;
        private static _verticalAlignmentMap;
        private _arrangeSizePlaceHolder;
        constructor(target?: ILayoutTarget);
        getActualSize(): IVector2d;
        performLayout(containerSize: IVector2d): void;
        readonly isMultilineLayout: boolean;
        private _neverMeasured;
        neverMeasured: boolean;
        private _actualSizeChanged;
        actualSizeChanged: EventHandler;
        private _actualPositionChanged;
        actualPositionChanged: EventHandler;
        private _children;
        children: IEnumerable<ILayout>;
        private _parent;
        parent: ILayout;
        private _spacing;
        spacing: IVector2d;
        isCollapsed(): boolean;
        private _margin;
        margin: IThickness;
        private _padding;
        padding: IThickness;
        private _verticalAlignment;
        verticalAlignment: VerticalAlignment;
        private _horizontalAlignment;
        horizontalAlignment: HorizontalAlignment;
        private _stretchOnOverflow;
        stretchOnOverflow: boolean;
        private _x;
        x: number;
        private _y;
        y: number;
        private _width;
        width: number;
        private _height;
        height: number;
        readonly actualWidth: number;
        readonly actualHeight: number;
        readonly actualX: number;
        readonly actualY: number;
        getPosition(): IVector2d;
        setPosition(value: IVector2d): void;
        getSize(): IVector2d;
        setSize(value: IVector2d): void;
        setBounds(rect: IRect): void;
        private _visibility;
        visibility: Visibility;
        readonly border: IRectangleBorder;
        private _minWidth;
        minWidth: number;
        private _minHeight;
        minHeight: number;
        private _maxWidth;
        maxWidth: number;
        private _maxHeight;
        maxHeight: number;
        private _desiredSize;
        readonly desiredSize: IVector2d;
        private _isMeasureValid;
        isMeasureValid: boolean;
        private _isArrangeValid;
        isArrangeValid: boolean;
        private _dock;
        dock: Dock;
        private _colSpan;
        colSpan: number;
        private _rowSpan;
        rowSpan: number;
        measure(availableSize: IVector2d, force?: boolean): void;
        arrange(finalRect: IRect, force?: boolean): void;
        invalidateMeasure(): void;
        invalidateArrange(): void;
        isHorizontalStretchable(): boolean;
        isVerticalStretchable(): boolean;
        protected invalidateAbsoluteMeasure(): void;
        protected getNonCollapsedChildren(): IReadOnlyCollection<ILayout>;
        protected needStretchToAvailableSize(availableSize: IVector2d, layoutHelper: ILayoutHelper): boolean;
        protected measureOverride(availableSize: IVector2d): IVector2d;
        protected arrangeOverride(finalSize: IVector2d): IVector2d;
        protected borderOffset(layoutHelper: ILayoutHelper, rect: IVector2d, multiplier?: number): void;
        protected isVisibleAndHasBorder(child: ILayout): boolean;
        private getThisWidth(defaultWidth);
        private getThisHeight(defaultHeight);
        private ensureClip(layoutSlotSize);
        private getVerticalAlignment(child, x, y, finalSize);
        private getHorizontalAlignment(child, x, y, finalSize);
        private getAlignment(alignment, desiredSize, point, finalSize, canStretch);
        private needStretch(availableSize);
        private needStretchToLastAvailableSize(availableSize, layoutHelper);
        private getNormalizedAvailableSize(availableSize);
        private getNormalizedSize(availableSize, size, minSize, maxSize, layoutHelper, alignment);
        private notifyIfChanged(handler, newU, newV, oldU, oldV);
    }
}
declare module "lib/root/Core/Graphics/Orientation" {
    export enum Orientation {
        Horizontal = 1,
        Vertical = 2,
        HorizontalVertical = 3,
    }
}
declare module "lib/root/Layout/Layout2" {
    import { IEnumerable, IReadOnlyCollection } from "lib/root/Core/Collections/Collections";
    import { IRect } from "lib/root/Core/Graphics/IRect";
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    import { ILayout, Layout } from "lib/root/Layout/All";
    export abstract class Layout2 extends Layout {
        private _forceArrangeChildren;
        protected forceArrangeChildren(): void;
        protected measureOverride(availableSize: IVector2d): IVector2d;
        protected arrangeOverride(finalSize: IVector2d): IVector2d;
        protected abstract measureChildren(availableSize: IVector2d): void;
        protected abstract computeArrangeRectangles(layouts: IEnumerable<ILayout>, availableSize: IVector2d, isArrange: boolean): IReadOnlyCollection<IRect>;
    }
}
declare module "lib/root/Layout/StackLayout" {
    import { IEnumerable, IReadOnlyCollection } from "lib/root/Core/Collections/Collections";
    import { IRect } from "lib/root/Core/Graphics/IRect";
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    import { Orientation } from "lib/root/Core/Graphics/Orientation";
    import { ILayout } from "lib/root/Layout/All";
    import { ILayoutTarget } from "lib/root/Layout/ILayoutTarget";
    import { Layout2 } from "lib/root/Layout/Layout2";
    export class StackLayout extends Layout2 {
        constructor(target?: ILayoutTarget);
        private _orientation;
        orientation: Orientation;
        isHorizontal: boolean;
        protected measureChildren(availableSize: IVector2d): void;
        protected computeArrangeRectangles(layouts: IEnumerable<ILayout>, availableSize: IVector2d, isArrange: boolean): IReadOnlyCollection<IRect>;
    }
}
declare module "lib/root/Layout/WrapChildrenLayout" {
    import { IEnumerable, IReadOnlyCollection } from "lib/root/Core/Collections/Collections";
    import { IRect } from "lib/root/Core/Graphics/IRect";
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    import { ILayout } from "lib/root/Layout/All";
    import { Layout2 } from "lib/root/Layout/Layout2";
    export class WrapChildrenLayout extends Layout2 {
        protected measureChildren(availableSize: IVector2d): void;
        protected computeArrangeRectangles(layouts: IEnumerable<ILayout>, availableSize: IVector2d, isArrange: boolean): IReadOnlyCollection<IRect>;
    }
}
declare module "lib/root/Layout/All" {
    export { ILayout } from "lib/root/Layout/ILayout";
    export { ILayoutConstraints } from "lib/root/Layout/ILayoutConstraints";
    export { ILayoutTarget } from "lib/root/Layout/ILayoutTarget";
    export { Layout } from "lib/root/Layout/Layout";
    export { StackLayout } from "lib/root/Layout/StackLayout";
    export { WrapChildrenLayout } from "lib/root/Layout/WrapChildrenLayout";
}
declare module "lib/root/Localization/ILocalizationParameters" {
    export interface ILocalizationParameters {
        [key: string]: string;
    }
}
declare module "lib/root/Controls/IControlSkin" {
    import { IControl } from "lib/root/Controls/IControl";
    export interface IControlSkin {
        attach(control: IControl): void;
        detach(): void;
    }
}
declare module "lib/root/Controls/IControl" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { IAction1, IPredicate1 } from "lib/root/Core/Delegates";
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    import { IMouseEventHandler } from "lib/root/Core/Events/IMouseEventHandler";
    import { IWheelEventHandler } from "lib/root/Core/Events/IWheelEventHandler";
    import { IRelativeAlignment } from "lib/root/Core/Graphics/IRelativeAlignment";
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    import { Lazy } from "lib/root/Core/Lazy";
    import { ILayout } from "lib/root/Layout/All";
    import { Cursor } from "lib/root/Render/Cursor";
    import { IControlSkin } from "lib/root/Controls/IControlSkin";
    export interface IControl {
        isVisible: boolean;
        globalX: number;
        globalY: number;
        actualX: number;
        actualY: number;
        actualWidth: number;
        actualHeight: number;
        skin: IControlSkin;
        layout: ILayout;
        parent: IControl;
        topLevelParent: IControl;
        children: IReadOnlyCollection<IControl>;
        childrenUpdated: EventHandler;
        applyBySelector(selectPredicate: IPredicate1<IControl>, action: IAction1<IControl>): void;
        attachedNode: HTMLElement;
        alignment: IRelativeAlignment;
        cache: boolean;
        cursor: Cursor;
        href: string;
        click: IMouseEventHandler;
        dblclick: IMouseEventHandler;
        mouseenter: IMouseEventHandler;
        mouseleave: IMouseEventHandler;
        mouseover: IMouseEventHandler;
        mouseout: IMouseEventHandler;
        mousemove: IMouseEventHandler;
        mousedown: IMouseEventHandler;
        mouseup: IMouseEventHandler;
        contextmenu: IMouseEventHandler;
        wheel: IWheelEventHandler;
        skinChange: EventHandler;
        tooltipText: string;
        tooltipControl: Lazy<IControl>;
        htmlElement: HTMLElement;
        applySkin(): void;
        cleanup(): void;
        detach(): void;
        getScreenCoordinates(): IVector2d;
        globalToLocal(point: IVector2d): IVector2d;
        hidePopup(): void;
        hideTooltip(): void;
        runLocalization(): void;
        showPopup(atControl?: IControl): void;
        showTooltip(atControl?: IControl): void;
        traverse(action: IAction1<IControl>): void;
    }
}
declare module "lib/root/Core/Events/MouseEvent" {
    import { INode } from "lib/root/Core/INode";
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    import { IMouseEvent } from "lib/root/Core/Events/IMouseEvent";
    export class MouseEvent implements IMouseEvent {
        private _target;
        private _point;
        private _relatedTarget;
        constructor(target: INode, x: number, y: number, relatedTarget?: INode);
        readonly target: INode;
        readonly point: IVector2d;
        readonly relatedTarget: INode;
    }
}
declare module "lib/root/Render/ButtonState" {
    export enum ButtonState {
        Released = 0,
        Pressed = 1,
    }
}
declare module "lib/root/Render/MouseState" {
    import { ButtonState } from "lib/root/Render/ButtonState";
    export class MouseState {
        private static _leftButtonNumber;
        private static _rightButtonNumber;
        private _leftButton;
        private _rightButton;
        readonly rightButton: ButtonState;
        readonly leftButton: ButtonState;
        processEvent(event: MouseEvent): void;
        private getButtonState(event, currentButtonState);
    }
}
declare module "lib/root/Render/BrowserEventDispatcher" {
    import { IControl } from "lib/root/Controls/IControl";
    import { IAction, IAction1, IFunc } from "lib/root/Core/Delegates";
    import { IEventHandler } from "lib/root/Core/Events/IEventHandler";
    import { MouseEventHandler } from "lib/root/Core/Events/MouseEventHandler";
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    import { INode } from "lib/root/Core/INode";
    import { MouseState } from "lib/root/Render/MouseState";
    export class BrowserEventDispatcher {
        private _waitingDomEvents;
        private _waitingEvents;
        private _globalMouseEventData;
        private constructor();
        static instance: BrowserEventDispatcher;
        readonly mouseState: MouseState;
        readonly dragend: IEventHandler<MouseEvent>;
        readonly click: IEventHandler<MouseEvent>;
        readonly mousemove: IEventHandler<MouseEvent>;
        readonly mousedown: IEventHandler<MouseEvent>;
        readonly mouseup: IEventHandler<MouseEvent>;
        readonly dblclick: IEventHandler<MouseEvent>;
        readonly contextmenu: IEventHandler<MouseEvent>;
        readonly wheel: IEventHandler<MouseEvent>;
        private _isBrowserContextMenuEnabled;
        isBrowserContextMenuEnabled: boolean;
        addDebouncedDomListener<TEvent extends Event>(eventTarget: EventTarget, eventType: string, action: IAction1<TEvent>): IAction;
        detachGlobalEvents(control: IControl): void;
        dispatchWaitingEvents(): void;
        globalToLocal(event: MouseEvent, point: IVector2d): IVector2d;
        initGlobalMouseEvent(control: IControl, getMouseEvent: IFunc<MouseEventHandler>, setMouseEvent: IAction1<MouseEventHandler>, handler: IEventHandler<MouseEvent>, getGlobalCoordinates: IFunc<IVector2d>, getNode: IFunc<INode>): void;
        notifyGlobalMouseLeaveOnEvent(element: Element, eventType: string): void;
        private addEventListenerOnce(element, eventType, callback);
        private getLocalMouseEvent(event, getGlobalCoordinates, getNode);
        private notifyGlobalMouseLeave();
    }
}
declare module "lib/root/Render/GradientStop" {
    import { IColor } from "lib/root/Core/IColor";
    import { IGradientStop } from "lib/root/Render/IGradientStop";
    export class GradientStop implements IGradientStop {
        constructor(color: IColor, offset: number);
        private _offset;
        offset: number;
        private _color;
        color: IColor;
    }
}
declare module "lib/root/Render/LinearGradient" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/Collections";
    import { List } from "lib/root/Core/Collections/List";
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    import { IColor } from "lib/root/Core/IColor";
    import { IGradientStop } from "lib/root/Render/IGradientStop";
    import { ILinearGradient } from "lib/root/Render/ILinearGradient";
    export class LinearGradient implements ILinearGradient {
        private _colorStops;
        private _angle;
        private _width;
        private _height;
        private _repeat;
        private _startPoint;
        private _endPoint;
        constructor();
        colorStops: List<IGradientStop>;
        angle: number;
        readonly startPoint: IVector2d;
        readonly endPoint: IVector2d;
        width: number;
        height: number;
        repeat: boolean;
        static create(angle: number, startColor: IColor, endColor: IColor): LinearGradient;
        static createFromColors(angle: number, colors: IReadOnlyCollection<IColor>): LinearGradient;
        private updatePoints(height, width, angle);
    }
}
declare module "lib/root/Render/FillStyle" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/index";
    import { IColor } from "lib/root/Core/IColor";
    import { IFillStyle } from "lib/root/Render/IFillStyle";
    import { ILinearGradient } from "lib/root/Render/ILinearGradient";
    export class FillStyle implements IFillStyle {
        private _color;
        private _linearGradient;
        color: IColor;
        linearGradient: ILinearGradient;
        clear(): void;
        static linearGradient(angle: number, colors: IReadOnlyCollection<IColor>): IFillStyle;
        static simpleLinearGradient(angle: number, color1: IColor, color2: IColor): IFillStyle;
    }
}
declare module "lib/root/Core/Factory/IFactoryObjectInfo" {
    import { IFactoryObjectInstance } from "lib/root/Core/Factory/IFactoryObjectInstance";
    export interface IFactoryObjectInfo<TFactoryObject> {
        create(): IFactoryObjectInstance<TFactoryObject>;
        id: string;
        name: string;
        description: string;
    }
}
declare module "lib/root/Core/Factory/IFactoryObjectInstance" {
    import { IFactoryObjectInfo } from "lib/root/Core/Factory/IFactoryObjectInfo";
    export interface IFactoryObjectInstance<TFactoryObject> {
        info: IFactoryObjectInfo<TFactoryObject>;
        object: TFactoryObject;
    }
}
declare module "lib/root/Render/IRender" {
    import { IGraphics } from "lib/root/Render/IGraphics";
    export interface IRender {
        root: IGraphics;
        element: HTMLElement;
        init(fontScaleRate: number): void;
        processAnimationFrame(width: number, height: number, cursor: string, performanceLabel?: string): void;
        takeScreenShot(contentType: string, x: number, y: number, width: number, height: number): string;
    }
}
declare module "lib/root/Render/IRenderInstance" {
    import { IFactoryObjectInstance } from "lib/root/Core/Factory/IFactoryObjectInstance";
    import { IRender } from "lib/root/Render/IRender";
    export interface IRenderInstance extends IFactoryObjectInstance<IRender> {
    }
}
declare module "lib/root/Render/FlatStyle" {
    import { IAction } from "lib/root/Core/Delegates";
    import { HorizontalAlignment } from "lib/root/Core/Graphics/HorizontalAlignment";
    import { IThickness } from "lib/root/Core/Graphics/IThickness";
    import { TextDecoration } from "lib/root/Core/Graphics/TextDecoration";
    import { IColor } from "lib/root/Core/IColor";
    import { IFont } from "lib/root/Core/IFont";
    import { TextEditorType } from "lib/root/Core/TextEditorType";
    import { Cursor } from "lib/root/Render/Cursor";
    import { IFilterCollection } from "lib/root/Render/Filters/IFilterCollection";
    import { IFillStyle } from "lib/root/Render/IFillStyle";
    import { IFlatStyle } from "lib/root/Render/IFlatStyle";
    import { IRectangleBorder } from "lib/root/Render/IRectangleBorder";
    import { IStroke } from "lib/root/Render/IStroke";
    export class FlatStyle implements IFlatStyle {
        private _invalidateAction;
        constructor(invalidateAction: IAction);
        private _hasChanges;
        readonly hasChanges: boolean;
        invalidate(): void;
        commitChanges(): void;
        private _cssClassNames;
        cssClassNames: string;
        private _x;
        x: number;
        private _y;
        y: number;
        private _width;
        width: number;
        private _height;
        height: number;
        private _visible;
        visible: boolean;
        private _clipToBounds;
        clipToBounds: boolean;
        private _zIndex;
        zIndex: number;
        private _opacity;
        opacity: number;
        private _cache;
        cache: boolean;
        private _fill;
        fill: IFillStyle;
        private _filters;
        filters: IFilterCollection;
        private _border;
        border: IRectangleBorder;
        private _borderRadius;
        borderRadius: number;
        private _borderColor;
        borderColor: IColor;
        private _borderWidth;
        borderWidth: number;
        private _color;
        color: IColor;
        private _text;
        text: string;
        private _textEditorType;
        textEditorType: TextEditorType;
        private _textEditorAlign;
        textEditorAlign: HorizontalAlignment;
        private _textEditorPadding;
        textEditorPadding: IThickness;
        private _textDecoration;
        textDecoration: TextDecoration;
        private _textDecorationStyle;
        textDecorationStyle: IStroke;
        private _isTextSelectable;
        isTextSelectable: boolean;
        private _noPointerEvents;
        noPointerEvents: boolean;
        private _font;
        font: IFont;
        private _iconName;
        iconName: string;
        private _imageSource;
        imageSource: string;
        private _cursor;
        cursor: Cursor;
    }
}
declare module "lib/root/Core/Events/ChangeEvent" {
    import { IChangeEvent } from "lib/root/Core/Events/IChangeEvent";
    export class ChangeEvent<TValue> implements IChangeEvent<TValue> {
        constructor(oldValue: TValue, newValue: TValue);
        readonly old: TValue;
        readonly new: TValue;
    }
}
declare module "lib/root/Render/IUpdateTarget" {
    export interface IUpdateTarget {
        update(): void;
    }
}
declare module "lib/root/Render/IUpdateQueue" {
    import { IUpdateTarget } from "lib/root/Render/IUpdateTarget";
    export interface IUpdateQueue {
        scheduleUpdate(target: IUpdateTarget): void;
    }
}
declare module "lib/root/Render/Pixels" {
    export class Pixels {
        static convertToString(value: number): string;
    }
}
declare module "lib/root/Render/Html/HtmlConstants" {
    export class HtmlConstants {
        static readonly attributeNameClass: string;
        static readonly attributeNameStyle: string;
        static readonly nodeDefaultClassName: string;
    }
}
declare module "lib/root/Render/Html/HTMLElementExtensions" {
    export class HTMLElementExtensions {
        static setAttribute(element: Element, name: string, value: string): void;
    }
}
declare module "lib/root/Render/Html/HtmlElementFactory" {
    export class HtmlElementFactory {
        private static readonly _elementNameDiv;
        private static readonly _prefix;
        private readonly _tagPrototypes;
        private readonly _stylizedPrototypes;
        createElement(label: string, cssText: string): HTMLElement;
        private cloneElement(tagName, cssText);
        private getTagName(label);
        private makeElement(tagName, cssText);
    }
}
declare module "lib/root/Render/Html/HtmlRenderCssClassNames" {
    export class HtmlRenderCssClassNames {
        static spin: string;
        static tooltip: string;
        static popup: string;
    }
}
declare module "lib/root/Render/Html/HtmlGraphics" {
    import { IFlatStyle } from "lib/root/Render/IFlatStyle";
    import { IGraphics } from "lib/root/Render/IGraphics";
    import { IUpdateQueue } from "lib/root/Render/IUpdateQueue";
    import { IUpdateTarget } from "lib/root/Render/IUpdateTarget";
    import { Node } from "lib/root/Render/Node";
    export class HtmlGraphics implements IGraphics, IUpdateTarget {
        private _container;
        private _children;
        private _icon;
        private _iconUse;
        private _updateQueue;
        private _isValid;
        private _fontScaleRate;
        private _textContent;
        private static _browser;
        private static _strokeStyles;
        private static _namespaceSvg;
        private static _namespaceXlink;
        private static _elementNameSvg;
        private static _elementNameUse;
        private static _attributeNameMetadata;
        private static _attributeNameHref;
        private static _nodeImageClassName;
        private static _nodeTextClassName;
        private static _nodeIconClassName;
        private static _iconUseElementPrototypeCache;
        private static _iconElementPrototypeCache;
        private static readonly _htmlElementFactory;
        constructor(updateQueue: IUpdateQueue, fontScaleRate: number);
        readonly htmlElement: HTMLElement;
        append(): IGraphics;
        appendChild(graphics: IGraphics): void;
        empty(): void;
        update(): void;
        updateFromNode(node: Node): void;
        static getCssText(style: IFlatStyle, fontScaleRate: number): string;
        private invalidate();
        private updateText();
        private static createIconElementPrototype();
        private static getBorderCss(propertyName, border);
        private static getFillCss(fill);
        private static getFontCss(font, fontScaleRate);
        private static getSizeCss(style);
        private static _iconElementPrototype;
    }
}
declare module "lib/root/Render/Html/HtmlTextEditor" {
    import { ChangeEventHandler } from "lib/root/Core/Events/ChangeEventHandler";
    import { ITextEditor } from "lib/root/Render/ITextEditor";
    import { Node } from "lib/root/Render/Node";
    export class HtmlTextEditor implements ITextEditor {
        private _inputElement;
        private _oldText;
        private _needFocusAfterBlur;
        constructor();
        readonly textChange: ChangeEventHandler<string>;
        readonly isActiveChange: ChangeEventHandler<boolean>;
        readonly inputElement: HTMLInputElement;
        readonly isActive: boolean;
        activate(): void;
        deactivate(): void;
        text: string;
        selectionStart: number;
        selectionEnd: number;
        update(node: Node, fontScaleRate: number): void;
        private handleBlurEvent();
        private handleFocusEvent();
        private handleInputEvent();
        private static getInputType(type);
        private static getPaddingString(padding);
    }
}
declare module "lib/root/Core/BrowserDom" {
    export class BrowserDom {
        static clearSelection(): void;
        static clearStyle(domNode: HTMLElement): void;
        static findFirstVisibleChildOrSelf(element: JQuery, selector: string): JQuery;
        static findVisibleChildren(element: JQuery, selector: string): JQuery;
        static hasParent(element: Node, parent: Node): boolean;
        static hasTluiClass(element: Element): boolean;
        static isVisible(element: HTMLElement): boolean;
        static setDisplayToBlock(element: HTMLElement): void;
        static setDisplayToNone(element: HTMLElement): void;
        private static findVisibleChildrenLoDash(element, selector);
    }
}
declare module "lib/root/Core/Events/WheelEventHandler" {
    import { MouseEventHandler } from "lib/root/Core/Events/MouseEventHandler";
    export class WheelEventHandler extends MouseEventHandler {
    }
}
declare module "lib/root/Render/IRenderOverlay" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/Collections";
    import { INode } from "lib/root/Core/INode";
    export interface IRenderOverlay {
        activate(enterNodes: IReadOnlyCollection<INode>, leaveNodes: IReadOnlyCollection<INode>, hoverNodes: IReadOnlyCollection<INode>): void;
        attach(containerHtmlElement: HTMLElement): void;
    }
}
declare module "lib/root/Render/NodeOverlays/LinkOverlay" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { INode } from "lib/root/Core/INode";
    import { IRenderOverlay } from "lib/root/Render/IRenderOverlay";
    export class LinkOverlay implements IRenderOverlay {
        private readonly _linkElement;
        private readonly _mouseState;
        private _isActive;
        activate(enterNodes: IReadOnlyCollection<INode>, leaveNodes: IReadOnlyCollection<INode>, hoverNodes: IReadOnlyCollection<INode>): void;
        attach(containerHtmlElement: HTMLElement): void;
    }
}
declare module "lib/root/Render/NodeOverlays/index" {
    export { LinkOverlay } from "lib/root/Render/NodeOverlays/LinkOverlay";
}
declare module "lib/root/Render/NodeEvents" {
    import { IMouseEventHandler } from "lib/root/Core/Events/IMouseEventHandler";
    import { INode } from "lib/root/Core/INode";
    import { INodeEvents } from "lib/root/Render/INodeEvents";
    export class NodeEvents implements INodeEvents {
        private static _click;
        private static _mouseup;
        private static _mousedown;
        private static _dblclick;
        private static _contextmenu;
        private static _wheel;
        private static _mouseenter;
        private static _mouseleave;
        private static _mouseout;
        private static _mouseover;
        private static _mousemove;
        private _node;
        private _previousNodes;
        private _mousedownNodes;
        private _overNode;
        private _htmlElement;
        private _browserEventDispatcher;
        private _detachListeners;
        private _overlays;
        constructor(node: INode);
        attach(htmlElement: HTMLElement): void;
        detach(): void;
        private _currentCursor;
        readonly currentCursor: string;
        private _click;
        readonly click: IMouseEventHandler;
        private _mouseenter;
        readonly mouseenter: IMouseEventHandler;
        private _mouseleave;
        readonly mouseleave: IMouseEventHandler;
        private _mousemove;
        readonly mousemove: IMouseEventHandler;
        private _mousedown;
        readonly mousedown: IMouseEventHandler;
        private _mouseup;
        readonly mouseup: IMouseEventHandler;
        private _dblclick;
        readonly dblclick: IMouseEventHandler;
        private _mouseover;
        readonly mouseover: IMouseEventHandler;
        private _mouseout;
        readonly mouseout: IMouseEventHandler;
        private _contextmenu;
        readonly contextmenu: IMouseEventHandler;
        private _wheel;
        readonly wheel: IMouseEventHandler;
        private initMouseEvent(element, sourceHandler, handler);
        private initMouseClickEvents(element);
        private initMouseMoveEvents(element, getMouseEnterHandlerFn, getMouseLeaveHandlerFn);
        private notify(node, mousePoint, handler, relatedNode?, eventNode?);
        private notifyNodes(nodes, mousePoint, getHandlerFunc, relatedNode?);
        private notifyWithBubbling(node, mousePoint, handler, relatedNode, eventNode);
        private _lastEventIsInside;
        private initMouseEventBase(element, sourceHandler, handler);
        private getMouseEventHandler(handler, handlerSetterFn);
        private updateCursor();
        private getTopMostCursor(nodes);
    }
}
declare module "lib/root/Render/Node" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/Collections";
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    import { INode } from "lib/root/Core/INode";
    import { Lazy } from "lib/root/Core/Lazy";
    import { HtmlTextEditor } from "lib/root/Render/Html/HtmlTextEditor";
    import { IFlatStyle } from "lib/root/Render/IFlatStyle";
    import { IGraphics } from "lib/root/Render/IGraphics";
    import { INodeEvents } from "lib/root/Render/INodeEvents";
    import { ITextEditor } from "lib/root/Render/ITextEditor";
    import { IUpdateQueue } from "lib/root/Render/IUpdateQueue";
    import { IUpdateTarget } from "lib/root/Render/IUpdateTarget";
    export class Node implements INode, IUpdateTarget {
        private _updateQueue;
        constructor(updateQueue: IUpdateQueue, label?: string);
        private _parent;
        parent: INode;
        private _children;
        readonly children: IReadOnlyCollection<INode>;
        readonly label: string;
        private _metadata;
        metadata: string;
        containsPoint(point: IVector2d): boolean;
        getNodesAtPoint(point: IVector2d): IReadOnlyCollection<INode>;
        readonly htmlElement: HTMLElement;
        private _htmlTextEditor;
        readonly htmlTextEditor: Lazy<HtmlTextEditor>;
        readonly textEditor: ITextEditor;
        private _href;
        href: string;
        private _hrefTarget;
        hrefTarget: string;
        globalToLocal(point: IVector2d): IVector2d;
        localToGlobal(point: IVector2d): IVector2d;
        readonly globalX: number;
        readonly globalY: number;
        addChild(childNode: INode): void;
        private _graphics;
        graphics: IGraphics;
        private _events;
        readonly events: INodeEvents;
        private _style;
        readonly style: IFlatStyle;
        empty(): INode;
        update(): void;
        invalidate(): void;
        cleanup(): void;
        static alignWithElement(node: INode, htmlElement: HTMLElement): void;
        private pointAtAbsolutePosition(point, transformFn);
        private updateGraphics();
        private static computeGlobalPosition(node, getter);
        private static getLeftBorder(style);
        private static getTopBorder(style);
    }
}
declare module "lib/root/Render/RectangleBorder" {
    import { IRect } from "lib/root/Core/Graphics/IRect";
    import { IRectangleBorder } from "lib/root/Render/IRectangleBorder";
    import { IStroke } from "lib/root/Render/IStroke";
    export class RectangleBorder implements IRectangleBorder {
        private _all;
        private _left;
        private _top;
        private _right;
        private _bottom;
        all: IStroke;
        left: IStroke;
        top: IStroke;
        right: IStroke;
        bottom: IStroke;
        readonly width: number;
        readonly height: number;
        readonly hasSideBorder: boolean;
        calculateOffset(): IRect;
        private calculateBorderOffset(border);
    }
}
declare module "lib/root/Render/Stroke" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/Collections";
    import { StrokeStyle } from "lib/root/Core/Graphics/StrokeStyle";
    import { IColor } from "lib/root/Core/IColor";
    import { IStroke } from "lib/root/Render/IStroke";
    export class Stroke implements IStroke {
        private _style;
        private _color;
        private _width;
        private _lineDash;
        constructor(color: IColor, width?: number, style?: StrokeStyle);
        private updateLineDash();
        style: StrokeStyle;
        color: IColor;
        width: number;
        readonly lineDash: IReadOnlyCollection<number>;
        readonly isEmpty: boolean;
    }
}
declare module "lib/root/Core/Graphics/Alignment" {
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    export class Alignment {
        static end: number;
        static middle: number;
        static start: number;
        static centerBottom(): IVector2d;
        static centerCenter(): IVector2d;
        static centerTop(): IVector2d;
        static leftBottom(): IVector2d;
        static leftCenter(): IVector2d;
        static leftTop(): IVector2d;
        static rightBottom(): IVector2d;
        static rightCenter(): IVector2d;
        static rightTop(): IVector2d;
    }
}
declare module "lib/root/Core/Graphics/IRelativeAlignmentAdvisor" {
    import { IRect } from "lib/root/Core/Graphics/IRect";
    import { IRelativeAlignment } from "lib/root/Core/Graphics/IRelativeAlignment";
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    export interface IRelativeAlignmentAdvisor {
        suggest(withinBounds: IRect, atBounds: IRect, mySize: IVector2d, alignment: IRelativeAlignment): IRelativeAlignment;
    }
}
declare module "lib/root/Core/Graphics/RelativeAlignment" {
    import { IRelativeAlignment } from "lib/root/Core/Graphics/IRelativeAlignment";
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    export class RelativeAlignment implements IRelativeAlignment {
        constructor(at: IVector2d, my: IVector2d);
        private _at;
        readonly at: IVector2d;
        private _my;
        readonly my: IVector2d;
        readonly hasIntersections: boolean;
        equals(value: IRelativeAlignment): boolean;
        evaluate(atSize: IVector2d, mySize: IVector2d): IVector2d;
        flip(range: IVector2d, x: boolean, y: boolean): IRelativeAlignment;
    }
}
declare module "lib/root/Core/Graphics/DefaultRelativeAlignmentAdvisor" {
    import { IRect } from "lib/root/Core/Graphics/IRect";
    import { IRelativeAlignment } from "lib/root/Core/Graphics/IRelativeAlignment";
    import { IRelativeAlignmentAdvisor } from "lib/root/Core/Graphics/IRelativeAlignmentAdvisor";
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    export class DefaultRelativeAlignmentAdvisor implements IRelativeAlignmentAdvisor {
        private readonly _alignmentCount;
        private readonly _alignmentRange;
        private readonly _allAlignmentCombinations;
        constructor();
        suggest(withinBounds: IRect, atBounds: IRect, mySize: IVector2d, alignment: IRelativeAlignment): IRelativeAlignment;
        private static getAlignmentCombinations(range, count);
        private static isRangeCorner(vector, range);
    }
}
declare module "lib/root/Controls/AlignmentCalculator" {
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    import { IControl } from "lib/root/Controls/IControl";
    export class AlignmentCalculator {
        private _atControl;
        private _myControl;
        private _isValid;
        private _atBounds;
        private _mySize;
        private _withinBounds;
        private _calculatedMyPosition;
        private _suggestedAlignment;
        constructor(atControl: IControl, myControl: IControl);
        calculateMyPosition(): IVector2d;
        invalidate(): void;
        private getWithinBounds();
        private static isOnTooltipOverlay(control);
    }
}
declare module "lib/root/Controls/ControlMouseState" {
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    import { Control } from "lib/root/Controls/Control";
    export class ControlMouseState {
        private _lastMousePosition;
        constructor(control: Control);
        private _isMouseSelectionEnabled;
        isMouseSelectionEnabled: boolean;
        private _isHover;
        readonly isHover: boolean;
        readonly isPressed: boolean;
        private _dragDelta;
        readonly dragDelta: IVector2d;
        private _dragPoint;
        readonly dragPoint: IVector2d;
        private _pressPoint;
        readonly pressPoint: IVector2d;
        readonly drag: EventHandler;
    }
}
declare module "lib/root/Controls/IApplicationOverlay" {
    import { Control } from "lib/root/Controls/Control";
    export interface IApplicationOverlay {
        readonly tooltipRoot: Control;
        readonly popupRoot: Control;
        cleanup(): void;
        hidePopup(): void;
        hideTooltip(): void;
        showPopup(control: Control): void;
        showTooltip(control: Control): void;
    }
}
declare module "lib/root/Controls/Button/ButtonSize" {
    export enum ButtonSize {
        Default = 0,
        Small = 1,
    }
}
declare module "lib/root/Controls/Button/ButtonType" {
    export enum ButtonType {
        Default = 0,
        Badge = 1,
        Primary = 2,
        Tab = 3,
        Switch = 4,
        Link = 5,
        CheckBox = 6,
        RadioButton = 7,
        ScrollBarButton = 8,
        EventCalendarButton = 9,
        IconInnerButton = 10,
        SwitchInnerButton = 11,
    }
}
declare module "lib/root/Core/Primitives/IChangeable" {
    import { IAction } from "lib/root/Core/Delegates";
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    export interface IChangeable {
        readonly change: EventHandler;
        onChange?(action: IAction, runAction?: boolean): IAction;
    }
}
declare module "lib/root/Core/Primitives/IObject" {
    import { IAction, IAction1, IMap } from "lib/root/Core/Delegates";
    import { IChangeable } from "lib/root/Core/Primitives/IChangeable";
    export interface IObject<TValue> extends IChangeable {
        value: TValue;
        bind(object: IObject<TValue>, map: IMap<TValue, TValue>): IAction;
        bindTo(target: IAction1<TValue>): IAction;
        /**
         * Sets value ignoring specified change listener.
         */
        setValue(value: TValue, listener: IAction): void;
    }
}
declare module "lib/root/Core/Primitives/IBoolean" {
    import { IObject } from "lib/root/Core/Primitives/IObject";
    export interface IBoolean extends IObject<boolean> {
    }
}
declare module "lib/root/Core/Primitives/INumber" {
    import { IObject } from "lib/root/Core/Primitives/IObject";
    export interface INumber extends IObject<number> {
    }
}
declare module "lib/root/Core/Primitives/IString" {
    import { IObject } from "lib/root/Core/Primitives/IObject";
    export interface IString extends IObject<string> {
    }
}
declare module "lib/root/Core/Primitives/IModel" {
    import { IChangeable } from "lib/root/Core/Primitives/IChangeable";
    export interface IModel<T> extends IChangeable {
        updateFrom(model: IModel<T>): void;
    }
}
declare module "lib/root/Core/Primitives/IColorModel" {
    import { IAction1 } from "lib/root/Core/Delegates";
    import { IColor } from "lib/root/Core/IColor";
    import { IModel } from "lib/root/Core/Primitives/IModel";
    import { INumber } from "lib/root/Core/Primitives/INumber";
    export interface IColorModel extends IModel<IColorModel> {
        rgb: INumber;
        red: INumber;
        green: INumber;
        blue: INumber;
        hue: INumber;
        saturation: INumber;
        value: INumber;
        bindTo(output: IAction1<IColor>): void;
        updateFrom(model: IColorModel): void;
    }
}
declare module "lib/root/Core/Primitives/IDateModel" {
    import { DateTime } from "lib/root/Core/DateTime";
    import { IAction1 } from "lib/root/Core/Delegates";
    import { IModel } from "lib/root/Core/Primitives/IModel";
    import { INumber } from "lib/root/Core/Primitives/INumber";
    export interface IDateModel extends IModel<IDateModel> {
        day: INumber;
        month: INumber;
        year: INumber;
        value: INumber;
        valueSecond: INumber;
        min: INumber;
        max: INumber;
        bindTo(output: IAction1<DateTime>): void;
        createDateTime(): DateTime;
    }
}
declare module "lib/root/Core/Primitives/ITimeModel" {
    import { INumber } from "lib/root/Core/Primitives/index";
    import { IAction1 } from "lib/root/Core/Delegates";
    import { IVector3d } from "lib/root/Core/Graphics/IVector3d";
    import { IModel } from "lib/root/Core/Primitives/IModel";
    export interface ITimeModel extends IModel<ITimeModel> {
        hour: INumber;
        minute: INumber;
        seconds: INumber;
        value: INumber;
        bindTo(output: IAction1<IVector3d>): void;
        createTime(): IVector3d;
        updateFrom(model: ITimeModel): void;
        updateFromTime(time: IVector3d): void;
    }
}
declare module "lib/root/Core/Primitives/IVectorModel" {
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    import { IChangeable } from "lib/root/Core/Primitives/IChangeable";
    import { INumber } from "lib/root/Core/Primitives/INumber";
    export interface IVectorModel extends IChangeable {
        getValue(): IVector2d;
        x: INumber;
        y: INumber;
    }
}
declare module "lib/root/Core/Primitives/XObject" {
    import { IAction, IAction1, IMap, IPredicate2 } from "lib/root/Core/Delegates";
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    import { IChangeable } from "lib/root/Core/Primitives/IChangeable";
    import { IObject } from "lib/root/Core/Primitives/IObject";
    export class XObject<TValue> implements IChangeable, IObject<TValue> {
        private _equals;
        constructor(value?: TValue, equality?: IPredicate2<TValue, TValue>);
        private _value;
        value: TValue;
        bind(object: IObject<TValue>, map: IMap<TValue, TValue>): IAction;
        bindTo(target: IAction1<TValue>): IAction;
        onChange(action: IAction, runAction?: boolean): IAction;
        setValue(value: TValue, listener: IAction): void;
        private readonly _change;
        readonly change: EventHandler;
    }
}
declare module "lib/root/Core/Primitives/XBoolean" {
    import { XObject } from "lib/root/Core/Primitives/XObject";
    export class XBoolean extends XObject<boolean> {
    }
}
declare module "lib/root/Core/Primitives/XNumber" {
    import { XObject } from "lib/root/Core/Primitives/XObject";
    export class XNumber extends XObject<number> {
    }
}
declare module "lib/root/Core/Primitives/XString" {
    import { XObject } from "lib/root/Core/Primitives/XObject";
    export class XString extends XObject<string> {
    }
}
declare module "lib/root/Core/Primitives/XEvaluatingObject" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/Collections";
    import { IFunc } from "lib/root/Core/Delegates";
    import { IChangeable } from "lib/root/Core/Primitives/IChangeable";
    import { XObject } from "lib/root/Core/Primitives/XObject";
    export class XEvaluatingObject<TValue> extends XObject<TValue> {
        private _data;
        private _evaluate;
        constructor(evaluate: IFunc<TValue>, data?: IReadOnlyCollection<IChangeable>);
        readonly evaluate: IFunc<TValue>;
    }
}
declare module "lib/root/Core/Primitives/Property" {
    import { IObject } from "lib/root/Core/Primitives/index";
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    export class Property<TValue> {
        private _change;
        private _detachAction;
        constructor(value: TValue, change: EventHandler);
        private _value;
        value: IObject<TValue>;
        private notifyChange();
        readonly change: EventHandler;
    }
}
declare module "lib/root/Core/Primitives/NumberProperty" {
    import { Property } from "lib/root/Core/Primitives/Property";
    export class NumberProperty extends Property<number> {
    }
}
declare module "lib/root/Core/Primitives/ColorModel" {
    import { IAction1 } from "lib/root/Core/Delegates";
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    import { IColor } from "lib/root/Core/IColor";
    import { IColorModel } from "lib/root/Core/Primitives/IColorModel";
    import { INumber } from "lib/root/Core/Primitives/INumber";
    export class ColorModel implements IColorModel {
        private _isChanging;
        constructor();
        bindTo(output: IAction1<IColor>): void;
        updateFrom(model: IColorModel): void;
        private createColor();
        private createHsv();
        private handleHsvModification(changeable, action);
        private handleRgbModification(changeable, action);
        private updateHsv(hsv);
        private updateOnChange(changeable, action);
        private updateRgb(color);
        readonly change: EventHandler;
        private readonly _rgb;
        rgb: INumber;
        private readonly _red;
        red: INumber;
        private readonly _green;
        green: INumber;
        private readonly _blue;
        blue: INumber;
        private readonly _hue;
        hue: INumber;
        private readonly _saturation;
        saturation: INumber;
        private readonly _value;
        value: INumber;
    }
}
declare module "lib/root/Core/Primitives/DateModel" {
    import { DateTime } from "lib/root/Core/DateTime";
    import { IAction1 } from "lib/root/Core/Delegates";
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    import { IDateModel } from "lib/root/Core/Primitives/IDateModel";
    import { INumber } from "lib/root/Core/Primitives/INumber";
    export class DateModel implements IDateModel {
        private readonly _maxDaysInMonth;
        private _isChanging;
        constructor(value?: number);
        bindTo(output: IAction1<DateTime>): void;
        createDateTime(): DateTime;
        updateFrom(model: IDateModel): void;
        private handleDateTimeModification(changeable, action);
        private updateDateTime(dateTime);
        private updateOnChange(changeable, action);
        readonly change: EventHandler;
        private readonly _day;
        day: INumber;
        private readonly _month;
        month: INumber;
        private readonly _year;
        year: INumber;
        private readonly _value;
        value: INumber;
        private readonly _valueSecond;
        valueSecond: INumber;
        private readonly _min;
        min: INumber;
        private readonly _max;
        max: INumber;
    }
}
declare module "lib/root/Core/Primitives/TimeModel" {
    import { INumber, ITimeModel } from "lib/root/Core/Primitives/index";
    import { IAction1 } from "lib/root/Core/Delegates";
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    import { IVector3d } from "lib/root/Core/Graphics/IVector3d";
    export class TimeModel implements ITimeModel {
        private _isChanging;
        constructor();
        bindTo(output: IAction1<IVector3d>): void;
        createTime(): IVector3d;
        updateFrom(model: ITimeModel): void;
        updateFromTime(time: IVector3d): void;
        private handleTimeModification(changeable, action);
        private updateOnChange(changeable, action);
        private updateTime(time);
        readonly change: EventHandler;
        private readonly _hour;
        hour: INumber;
        private readonly _minute;
        minute: INumber;
        private readonly _seconds;
        seconds: INumber;
        private readonly _value;
        value: INumber;
    }
}
declare module "lib/root/Core/Primitives/VectorModel" {
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    import { INumber } from "lib/root/Core/Primitives/INumber";
    import { IVectorModel } from "lib/root/Core/Primitives/IVectorModel";
    export class VectorModel implements IVectorModel {
        constructor();
        readonly change: EventHandler;
        getValue(): IVector2d;
        private readonly _x;
        x: INumber;
        private readonly _y;
        y: INumber;
    }
}
declare module "lib/root/Core/Primitives/index" {
    export * from "lib/root/Core/Primitives/IBoolean";
    export * from "lib/root/Core/Primitives/INumber";
    export * from "lib/root/Core/Primitives/IString";
    export * from "lib/root/Core/Primitives/IObject";
    export * from "lib/root/Core/Primitives/IColorModel";
    export * from "lib/root/Core/Primitives/IDateModel";
    export * from "lib/root/Core/Primitives/ITimeModel";
    export * from "lib/root/Core/Primitives/IVectorModel";
    export * from "lib/root/Core/Primitives/XBoolean";
    export * from "lib/root/Core/Primitives/XNumber";
    export * from "lib/root/Core/Primitives/XString";
    export * from "lib/root/Core/Primitives/XObject";
    export * from "lib/root/Core/Primitives/XEvaluatingObject";
    export * from "lib/root/Core/Primitives/ColorModel";
    export * from "lib/root/Core/Primitives/DateModel";
    export * from "lib/root/Core/Primitives/TimeModel";
    export * from "lib/root/Core/Primitives/VectorModel";
}
declare module "lib/root/Controls/ISelectOption" {
    import { IBoolean } from "lib/root/Core/Primitives/index";
    import { IControl } from "lib/root/Controls/IControl";
    export interface ISelectOption extends IControl {
        isEnabled: IBoolean;
        isChecked: IBoolean;
        containsText(text: string): boolean;
        getText(): string;
    }
}
declare module "lib/root/Controls/Rectangle" {
    import { IColor } from "lib/root/Core/IColor";
    import { IFillStyle } from "lib/root/Render/IFillStyle";
    import { IStroke } from "lib/root/Render/IStroke";
    import { Control } from "lib/root/Controls/Control";
    export class Rectangle extends Control {
        constructor();
        borderRadius: number;
        backgroundColor: IColor;
        fill: IFillStyle;
        border: IStroke;
        leftBorder: IStroke;
        topBorder: IStroke;
        rightBorder: IStroke;
        bottomBorder: IStroke;
        noPointerEvents: boolean;
    }
}
declare module "lib/root/Controls/Button/ButtonLayout" {
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    import { ILayoutTarget } from "lib/root/Layout/All";
    import { WrapChildrenLayout } from "lib/root/Layout/WrapChildrenLayout";
    import { Button } from "lib/root/Controls/Button/Button";
    export class ButtonLayout extends WrapChildrenLayout {
        private _button;
        constructor(target: ILayoutTarget, button: Button);
        protected arrangeOverride(finalSize: IVector2d): IVector2d;
        protected measureOverride(availableSize: IVector2d): IVector2d;
        private arrangeResponsive(finalSize);
        private getResponsiveIconPosition(buttonSize, iconSize);
        private getResponsiveIconSize(buttonSize);
        private isResponsive();
        private measureResponsive(availableSize);
    }
}
declare module "lib/root/Controls/Button/Button" {
    import { Control, Icon, Text } from "lib/root/Controls/index";
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    import { IBoolean } from "lib/root/Core/Primitives/index";
    import { IControl } from "lib/root/Controls/IControl";
    import { ISelectOption } from "lib/root/Controls/ISelectOption";
    import { Rectangle } from "lib/root/Controls/Rectangle";
    import { ButtonSize } from "lib/root/Controls/Button/ButtonSize";
    import { ButtonType } from "lib/root/Controls/Button/ButtonType";
    export class Button extends Rectangle implements ISelectOption {
        constructor(buttonType?: ButtonType);
        private _leftPanel;
        leftPanel: Control;
        private _content;
        content: Control;
        private _innerContent;
        readonly innerContent: IControl;
        private _size;
        size: ButtonSize;
        private _isToggle;
        isToggle: boolean;
        private _type;
        type: ButtonType;
        private _text;
        readonly text: Text;
        readonly hasText: boolean;
        private _icon;
        readonly icon: Icon;
        readonly hasIcon: boolean;
        readonly isEnabled: IBoolean;
        readonly isChecked: IBoolean;
        bindIsChecked(value: IBoolean): void;
        containsText(text: string): boolean;
        getText(): string;
        static create(text: string, type?: ButtonType): Button;
        private getDefaultContent();
        private setButtonChild();
        readonly toggle: EventHandler;
        readonly typeChange: EventHandler;
    }
}
declare module "lib/root/Controls/Button/index" {
    export { ButtonSize } from "lib/root/Controls/Button/ButtonSize";
    export { ButtonType } from "lib/root/Controls/Button/ButtonType";
    export { Button } from "lib/root/Controls/Button/Button";
}
declare module "lib/root/Core/HtmlTextSecurity" {
    import { IDictionary } from "lib/root/Core/Collections/IDictionary";
    export class HtmlTextSecurity {
        private static _utilityTextAreaElement;
        private static _escapes;
        static escapeEntities(value: string, additionalReplacements?: IDictionary<string, string>): string;
        static unescapeEntities(value: string): string;
    }
}
declare module "lib/root/Layout/IMultilineLayoutSource" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/Collections";
    import { ILayoutTarget } from "lib/root/Layout/ILayoutTarget";
    export interface IMultilineLayoutSource {
        getLayoutTargets(width: number): IReadOnlyCollection<ILayoutTarget>;
    }
}
declare module "lib/root/Layout/MultilineLayout" {
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    import { ILayoutTarget } from "lib/root/Layout/ILayoutTarget";
    import { Layout } from "lib/root/Layout/Layout";
    import { IMultilineLayoutSource } from "lib/root/Layout/IMultilineLayoutSource";
    export class MultilineLayout extends Layout {
        private _source;
        constructor(target: ILayoutTarget, source: IMultilineLayoutSource);
        private _hasInlineCut;
        hasInlineCut: boolean;
        readonly isMultilineLayout: boolean;
        protected measureOverride(availableSize: IVector2d): IVector2d;
        private calculateAlignmentPosition(layoutTarget, availableSize);
    }
}
declare module "lib/root/Controls/Text" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    import { StrokeStyle } from "lib/root/Core/Graphics/StrokeStyle";
    import { TextDecoration } from "lib/root/Core/Graphics/TextDecoration";
    import { IColor } from "lib/root/Core/IColor";
    import { IFont } from "lib/root/Core/IFont";
    import { ILayoutTarget } from "lib/root/Layout/ILayoutTarget";
    import { IMultilineLayoutSource } from "lib/root/Layout/IMultilineLayoutSource";
    import { ILocalizationParameters } from "lib/root/Localization/ILocalizationParameters";
    import { Rectangle } from "lib/root/Controls/Rectangle";
    export class Text extends Rectangle implements IMultilineLayoutSource {
        readonly textChanged: EventHandler;
        private _truncatedLocalizedText;
        private _toggleCutNode;
        private _multilineLayout;
        constructor();
        private _isWrapEnabled;
        isWrapEnabled: boolean;
        private _text;
        text: string;
        private _isHtml;
        isHtml: boolean;
        color: IColor;
        font: IFont;
        private _maxCharacters;
        maxCharacters: number;
        private _maxWidth;
        maxWidth: number;
        private _localizationParameters;
        localizationParameters: ILocalizationParameters;
        private _isCapitalized;
        isCapitalized: boolean;
        decoration: TextDecoration;
        decorationStyle: StrokeStyle;
        decorationColor: IColor;
        isTextSelectable: boolean;
        private _isInlineCut;
        isInlineCut: boolean;
        getLayoutTargets(width: number): IReadOnlyCollection<ILayoutTarget>;
        static create(textText: string): Text;
        private _isTextCutted;
        private isTextCutted;
        private calcToggleCutNode();
        private createToggleCutNode();
        private updateNodes(setter);
        private updateText();
    }
}
declare module "lib/root/Controls/Link" {
    import { IBoolean } from "lib/root/Core/Primitives/IBoolean";
    import { Rectangle } from "lib/root/Controls/Rectangle";
    import { Text } from "lib/root/Controls/Text";
    export class Link extends Rectangle {
        constructor();
        private _text;
        text: Text;
        private _isDisabled;
        readonly isDisabled: IBoolean;
        private _isSmall;
        readonly isSmall: IBoolean;
    }
}
declare module "lib/root/Controls/Icon" {
    import { Control } from "lib/root/Controls/Control";
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    import { IColor } from "lib/root/Core/IColor";
    export class Icon extends Control {
        constructor();
        nameChanged: EventHandler;
        name: string;
        size: number;
        color: IColor;
        spin: boolean;
    }
}
declare module "lib/root/Core/TextReplacement" {
    export class TextReplacement {
        private constructor();
        readonly position: number;
        readonly deletion: string;
        readonly insertion: string;
        do(text: string): string;
        undo(text: string): string;
        static create(oldText: string, newText: string, cursorPosition: number): TextReplacement;
        private static replace(text, position, deletion, insertion);
    }
}
declare module "lib/root/Controls/Container" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/Collections";
    import { IControl } from "lib/root/Controls/IControl";
    import { Rectangle } from "lib/root/Controls/Rectangle";
    export abstract class Container extends Rectangle {
        protected constructor();
        children: IReadOnlyCollection<IControl>;
        addChild(child: IControl): void;
        protected static create(controls: IReadOnlyCollection<IControl>, createFn: () => Container): IControl;
    }
}
declare module "lib/root/Controls/Panel" {
    import { Container } from "lib/root/Controls/Container";
    export class Panel extends Container {
        constructor();
    }
}
declare module "lib/root/Controls/TextEditor" {
    import { ChangeEventHandler } from "lib/root/Core/Events/ChangeEventHandler";
    import { HorizontalAlignment } from "lib/root/Core/Graphics/HorizontalAlignment";
    import { IThickness } from "lib/root/Core/Graphics/IThickness";
    import { IColor } from "lib/root/Core/IColor";
    import { IFont } from "lib/root/Core/IFont";
    import { TextEditorType } from "lib/root/Core/TextEditorType";
    import { Rectangle } from "lib/root/Controls/Rectangle";
    export class TextEditor extends Rectangle {
        private _textEditorLayout;
        constructor();
        type: TextEditorType;
        text: string;
        selectionStart: number;
        selectionEnd: number;
        readonly textChange: ChangeEventHandler<string>;
        readonly isActiveChange: ChangeEventHandler<boolean>;
        color: IColor;
        font: IFont;
        padding: IThickness;
        textEditorAlign: HorizontalAlignment;
        readonly isActive: boolean;
        activate(): void;
        deactivate(): void;
        updateText(text: string, selectionStart?: number, selectionEnd?: number): void;
    }
}
declare module "lib/root/Controls/Input/Input" {
    import { Control, Icon, Rectangle, Text } from "lib/root/Controls/index";
    import { IMap } from "lib/root/Core/Delegates";
    import { Panel } from "lib/root/Controls/Panel";
    import { TextEditor } from "lib/root/Controls/TextEditor";
    export class Input extends Rectangle {
        constructor();
        readonly icon: Icon;
        readonly editor: TextEditor;
        readonly title: Text;
        readonly innerContent: Panel;
        private _maxLength;
        maxLength: number;
        private _pattern;
        pattern: string;
        private _postTransform;
        postTransform: IMap<string, string>;
        private _preTransform;
        preTransform: IMap<string, string>;
        private _content;
        content: Control;
        private updateChildren();
        private validateAndTransform(oldText, newText);
    }
}
declare module "lib/root/Controls/Input/EmailInput" {
    import { Input } from "lib/root/Controls/Input/Input";
    export class EmailInput extends Input {
    }
}
declare module "lib/root/Controls/Input/FaxInput" {
    import { Input } from "lib/root/Controls/Input/Input";
    export class FaxInput extends Input {
    }
}
declare module "lib/root/Controls/IUserInputControl" {
    import { IAction1 } from "lib/root/Core/Delegates";
    import { IControl } from "lib/root/Controls/IControl";
    export interface IUserInputControl<TModel> extends IControl {
        model: TModel;
        reset?(): void;
        setApplyAction?(action: IAction1<boolean>): void;
    }
}
declare module "lib/root/Controls/Input/HexInput" {
    import { INumber } from "lib/root/Core/Primitives/INumber";
    import { IUserInputControl } from "lib/root/Controls/IUserInputControl";
    import { Input } from "lib/root/Controls/Input/Input";
    export class HexInput extends Input implements IUserInputControl<INumber> {
        constructor();
        private _model;
        model: INumber;
        private formatModel();
        private parseModel();
        private updateFromModel();
        private updateToModel();
    }
}
declare module "lib/root/Controls/Input/NumberInput" {
    import { INumber } from "lib/root/Core/Primitives/INumber";
    import { IUserInputControl } from "lib/root/Controls/IUserInputControl";
    import { Input } from "lib/root/Controls/Input/Input";
    export class NumberInput extends Input implements IUserInputControl<INumber> {
        constructor();
        private _minValue;
        minValue: number;
        private _maxValue;
        maxValue: number;
        private _model;
        model: INumber;
        private formatModel();
        private parseModel();
        private updateFromModel();
        private updateToModel();
    }
}
declare module "lib/root/Controls/Input/PhoneInput" {
    import { Input } from "lib/root/Controls/Input/Input";
    export class PhoneInput extends Input {
    }
}
declare module "lib/root/Controls/Input/PasswordInput" {
    import { Input } from "lib/root/Controls/Input/Input";
    export class PasswordInput extends Input {
    }
}
declare module "lib/root/Controls/Input/TextInput" {
    import { Input } from "lib/root/Controls/Input/Input";
    export class TextInput extends Input {
    }
}
declare module "lib/root/Controls/Input/MobileInput" {
    import { Input } from "lib/root/Controls/Input/Input";
    export class MobileInput extends Input {
    }
}
declare module "lib/root/Controls/Input/index" {
    export { EmailInput } from "lib/root/Controls/Input/EmailInput";
    export { FaxInput } from "lib/root/Controls/Input/FaxInput";
    export { HexInput } from "lib/root/Controls/Input/HexInput";
    export { NumberInput } from "lib/root/Controls/Input/NumberInput";
    export { PhoneInput } from "lib/root/Controls/Input/PhoneInput";
    export { PasswordInput } from "lib/root/Controls/Input/PasswordInput";
    export { TextInput } from "lib/root/Controls/Input/TextInput";
    export { MobileInput } from "lib/root/Controls/Input/MobileInput";
    export { Input } from "lib/root/Controls/Input/Input";
}
declare module "lib/root/Entity/BadgeType" {
    export enum BadgeType {
        Default = 0,
        Empty = 1,
        Active = 2,
        Inactive = 3,
        InProgress = 4,
        Wait = 5,
    }
}
declare module "lib/root/Controls/Badge" {
    import { Text } from "lib/root/Controls/index";
    import { IColor } from "lib/root/Core/IColor";
    import { BadgeType } from "lib/root/Entity/BadgeType";
    import { Rectangle } from "lib/root/Controls/Rectangle";
    export interface IColorPalette {
        (index: number): IColor;
    }
    export class Badge extends Rectangle {
        private _text;
        private _secondColor;
        private _whiteColor;
        constructor();
        static create(text: string, type?: BadgeType): Badge;
        readonly textControl: Text;
        private _type;
        type: BadgeType;
        private _colorIndex;
        colorIndex: number;
        private _color;
        color: IColor;
        private _isFilled;
        isFilled: boolean;
        text: string;
        private _colorPalette;
        colorPalette: IColorPalette;
        private getComputedFilled();
        private getComputedColor();
        private updateColor();
        private static _typeMap;
        secondColor: IColor;
        static getColorByType(type: BadgeType): IColor;
    }
}
declare module "lib/root/Core/IFileData" {
    export interface IFileData {
        name: string;
        size: number;
        type: string;
        readAsText(): Promise<string>;
        readAsDataUrl(): Promise<string>;
        reedAsBinary(): Promise<ArrayBuffer>;
    }
}
declare module "lib/root/Core/FilePicker" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/Collections";
    import { IFileData } from "lib/root/Core/IFileData";
    export class FileData implements IFileData {
        private _file;
        constructor(file: File);
        readonly name: string;
        readonly size: number;
        readonly type: string;
        readAsText(): Promise<string>;
        readAsDataUrl(): Promise<string>;
        reedAsBinary(): Promise<ArrayBuffer>;
        private read<TData>(readAction);
    }
    export interface IFileDataReadOnlyCollection extends IReadOnlyCollection<FileData> {
    }
    export class FilePicker {
        static acceptAudio: string;
        static acceptVideo: string;
        static acceptImage: string;
        static selectSingleFile(accept?: string): Promise<IFileData>;
        static selectMultipleFiles(accept?: string): Promise<IFileDataReadOnlyCollection>;
        static selectFiles(multiple: boolean, accept?: string): Promise<IFileDataReadOnlyCollection>;
        static readMultipleTextFiles(accept?: string): Promise<IReadOnlyCollection<string>>;
        static downloadContent(href: string, fileName: string): void;
        static downloadTextFile(text: string, fileName: string): void;
        private static constructFileDataCollection(fileList);
    }
}
declare module "lib/root/Controls/Image" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/Collections";
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    import { Icon } from "lib/root/Controls/Icon";
    import { Rectangle } from "lib/root/Controls/Rectangle";
    export class Image extends Rectangle {
        url: string;
        private _noImageIcon;
        readonly noImageIcon: Icon;
        private _changed;
        readonly changed: EventHandler;
        static pickSingleFile(): Promise<Image>;
        static pickMultipleFiles(): Promise<IReadOnlyCollection<Image>>;
        static pickFiles(multiple: boolean): Promise<IReadOnlyCollection<Image>>;
        private update();
    }
}
declare module "lib/root/Controls/Switch" {
    import { Button } from "lib/root/Controls/Button/index";
    export class Switch extends Button {
        constructor();
    }
}
declare module "lib/root/Controls/RadioButton" {
    import { Button } from "lib/root/Controls/Button/index";
    export class RadioButton extends Button {
        constructor();
    }
}
declare module "lib/root/Controls/CheckBox" {
    import { Button } from "lib/root/Controls/Button/index";
    export class CheckBox extends Button {
        constructor();
    }
}
declare module "lib/root/Controls/PopupControlBase" {
    import { IControl } from "lib/root/Controls/IControl";
    import { Rectangle } from "lib/root/Controls/Rectangle";
    export abstract class PopupControlBase extends Rectangle {
        private _content;
        protected constructor();
        content: IControl;
    }
}
declare module "lib/root/Controls/Popup" {
    import { PopupControlBase } from "lib/root/Controls/PopupControlBase";
    export class Popup extends PopupControlBase {
        constructor();
    }
}
declare module "lib/root/Controls/Tooltip" {
    import { PopupControlBase } from "lib/root/Controls/PopupControlBase";
    export class Tooltip extends PopupControlBase {
        constructor();
    }
}
declare module "lib/root/Layout/AbsoluteLayout" {
    import { WrapChildrenLayout } from "lib/root/Layout/WrapChildrenLayout";
    export class AbsoluteLayout extends WrapChildrenLayout {
        protected invalidateAbsoluteMeasure(): void;
    }
}
declare module "lib/root/Controls/Scrollable" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    import { Control } from "lib/root/Controls/Control";
    import { IControl } from "lib/root/Controls/IControl";
    export class Scrollable extends Control {
        private _content;
        private _offset;
        private _childControls;
        constructor();
        childControls: IReadOnlyCollection<IControl>;
        content: IControl;
        offset: IVector2d;
        readonly contentWidth: number;
        readonly contentHeight: number;
        private updateStyle();
    }
}
declare module "lib/root/Core/Iterator" {
    export class Iterator {
        static iterate(from: number, to: number, callback: (index: number) => void): void;
        static iterateXY(width: number, height: number, action: (x: number, y: number) => void): void;
    }
}
declare module "lib/root/Core/Data/GridCell" {
    export class GridCell<TData> {
        constructor(data: TData, colSpan: number, rowSpan: number);
        readonly data: TData;
        readonly colSpan: number;
        readonly rowSpan: number;
        static readonly placeholder: GridCell<undefined>;
    }
}
declare module "lib/root/Core/Data/IGrid" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/index";
    import { GridCell } from "lib/root/Core/Data/GridCell";
    export interface IGrid<T> extends IReadOnlyCollection<IReadOnlyCollection<GridCell<T>>> {
    }
}
declare module "lib/root/Core/Data/Grid" {
    import { ITreeNodeReadOnlyCollection } from "lib/root/Core/Collections/index";
    import { IGrid } from "lib/root/Core/Data/IGrid";
    export class Grid {
        static buildFromTreeNodes<T>(nodes: ITreeNodeReadOnlyCollection<T>): IGrid<T>;
        static getColumnCount<T>(grid: IGrid<T>): number;
        static transformToRectangularGrid<T>(grid: IGrid<T>): IGrid<T>;
        private static addToGrid<T>(target, source, targetRowOffset?);
        private static buildFromLeafNode<T>(data, rowCount);
        private static buildFromNode<T>(node, rowCount);
        private static buildFromNodes<T>(nodes, rowCount);
        private static buildFromNonLeafNode<T>(node, rowCount);
        private static createCellGrid<T>(rowCount);
        private static createSingleCellGrid<T>(rowCount, cellData, cellColSpan, cellRowSpan);
        private static mergeGrids<T>(grids, rowCount);
    }
}
declare module "lib/root/Core/Data/index" {
    export * from "lib/root/Core/Data/Grid";
    export * from "lib/root/Core/Data/IGrid";
    export * from "lib/root/Core/Data/GridCell";
}
declare module "lib/root/Core/Graphics/StretchHelper" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/index";
    export class StretchHelper {
        static calculateSizes(availableSize: number, minDesired: IReadOnlyCollection<number>, maxDesired: IReadOnlyCollection<number>, canStretch: IReadOnlyCollection<boolean>, ratios: IReadOnlyCollection<number>): IReadOnlyCollection<number>;
    }
}
declare module "lib/root/Layout/IStretchCalculator" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/index";
    export interface IStretchCalculator {
        calculate(availableSize: number, minDesired: IReadOnlyCollection<number>, maxDesired: IReadOnlyCollection<number>, canStretch: IReadOnlyCollection<boolean>): IReadOnlyCollection<number>;
    }
}
declare module "lib/root/Layout/DefaultStretchCalculator" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/index";
    import { IStretchCalculator } from "lib/root/Layout/IStretchCalculator";
    export class DefaultStretchCalculator implements IStretchCalculator {
        calculate(availableSize: number, minDesired: IReadOnlyCollection<number>, maxDesired: IReadOnlyCollection<number>, canStretch: IReadOnlyCollection<boolean>): IReadOnlyCollection<number>;
    }
}
declare module "lib/root/Layout/IGridLayout" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { ILayout } from "lib/root/Layout/ILayout";
    export interface IGridLayout extends ILayout {
        compute(needStretch: boolean, horizontalHeaderLayouts: IReadOnlyCollection<ILayout>, verticalHeaderLayouts: IReadOnlyCollection<ILayout>, availableWidth: number): void;
    }
}
declare module "lib/root/Layout/GridLayout" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    import { IGridLayout } from "lib/root/Layout/IGridLayout";
    import { ILayout } from "lib/root/Layout/ILayout";
    import { ILayoutTarget } from "lib/root/Layout/ILayoutTarget";
    import { IStretchCalculator } from "lib/root/Layout/IStretchCalculator";
    import { Layout } from "lib/root/Layout/Layout";
    export class GridLayout extends Layout implements IGridLayout {
        private _columnStretchFactors;
        private _columnSizeWithoutStretch;
        private _columnMaxWidths;
        private _computedColumnSizes;
        private _computedRowSizes;
        private _desiredColumnSizes;
        private _desiredRowSizes;
        private _columnLayouts;
        private _rowLayouts;
        private _rows;
        private _horizontalStretchFactor;
        private _verticalStretchFactor;
        private _computedHeight;
        private _computedWidth;
        private _isRootTable;
        private _hasChanges;
        constructor(target: ILayoutTarget);
        private _stretchCalculator;
        stretchCalculator: IStretchCalculator;
        setCellLayouts(columnLayouts: IReadOnlyCollection<ILayout>, rowLayouts: IReadOnlyCollection<ILayout>, rows: IReadOnlyCollection<ILayout>): void;
        compute(needStretch: boolean, horizontalHeaderLayouts: IReadOnlyCollection<ILayout>, verticalHeaderLayouts: IReadOnlyCollection<ILayout>, availableWidth: number): void;
        protected measureOverride(availableSize: IVector2d): IVector2d;
        protected arrangeOverride(finalSize: IVector2d): IVector2d;
        private static getSpanSize(index, span, getCellSize, start?);
        private overlaysMeasure();
        private arrangeCell(cell, finalRect, rowIndex, columnIndex);
        private computeCellsInternal(availableSize);
        private measureRow();
        private getCellWidth(columnIndex);
        private getCellHeight(rowIndex);
        private _doubleLineFix;
        private readonly doubleLineFix;
        private computeSize(computedSizes, getSize, layoutHelper?, cellsGroup?);
        private computeStretchFactor(availableSize, layoutsGroup, layoutHelper, sizesWithoutStretch?);
        private findChangeSize(layouts, layoutHelper, computedSize, desiredSize, stretchFactor, sizeByComputed?);
        private isRowVisible(index);
        private setCellsSize();
        private getMaxCellSize(layout, layoutHelper, columnIndex, sizeByComputed?);
        private static isCellVisible(cell);
        private forEachLayoutChild(action);
        private computeLayouts(headerLayouts, layoutHelper, computedCellSizes, desiredSize, useStretchFactor, availableSize);
        private static canStretch(size, layout);
        private static getCellSize(layoutHelper, headerLayout, computedCellSizes, layoutIndex);
        private computeCellHeights();
        private computeCellWidth(condition, computedSize, value);
        readonly columnLayouts: IReadOnlyCollection<ILayout>;
    }
}
declare module "lib/root/Controls/Collections/IControlTreeNodeReadOnlyCollection" {
    import { ITreeNodeReadOnlyCollection } from "lib/root/Core/Collections/index";
    import { Control } from "lib/root/Controls/Control";
    export interface IControlTreeNodeReadOnlyCollection extends ITreeNodeReadOnlyCollection<Control> {
    }
}
declare module "lib/root/Controls/LayoutChildIterator" {
    import { IControl } from "lib/root/Controls/IControl";
    import { IEnumerable } from "lib/root/Core/Collections/IEnumerable";
    import { IEnumerator } from "lib/root/Core/Collections/IEnumerator";
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { ILayout } from "lib/root/Layout/ILayout";
    export class LayoutChildIterator implements IEnumerable<ILayout>, IEnumerator<ILayout> {
        private _position;
        private _controls;
        constructor(controls: IReadOnlyCollection<IControl>);
        controls: IReadOnlyCollection<IControl>;
        getEnumerator(): IEnumerator<ILayout>;
        private _current;
        readonly current: ILayout;
        moveNext(): boolean;
        reset(): void;
    }
}
declare module "lib/root/Controls/Grid/GridCell" {
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    import { IControl } from "lib/root/Controls/IControl";
    import { Panel } from "lib/root/Controls/Panel";
    import { Grid } from "lib/root/Controls/Grid/Grid";
    export class GridCell extends Panel {
        constructor(grid: Grid, columnIndex: number, rowIndex: number);
        private _grid;
        readonly grid: Grid;
        private _position;
        readonly position: IVector2d;
        readonly columnIndex: number;
        readonly rowIndex: number;
        private _content;
        content: IControl;
        isSelected: boolean;
        select(): void;
        unselect(): void;
        isDisabled: boolean;
        enable(): void;
        disable(): void;
        toggleSelection(): void;
    }
}
declare module "lib/root/Controls/Grid/GridCellRange" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { GridCell } from "lib/root/Controls/Grid/GridCell";
    export class GridCellRange {
        private _cells;
        constructor(cells: IReadOnlyCollection<GridCell>);
        readonly cells: IReadOnlyCollection<GridCell>;
        forEachCell(actionFunc: (cell: GridCell) => void): void;
        cellsAllowedToSelect(): IReadOnlyCollection<GridCell>;
        allCellsSelected(): boolean;
        select(): void;
        unselect(): void;
        toggleSelection(): void;
        readonly isEmpty: boolean;
        hasCell(cell: GridCell): boolean;
        addCell(cell: GridCell): GridCell;
        removeCell(cell: GridCell): GridCell;
        addRange(cellRange: GridCellRange): void;
        removeRange(cellRange: GridCellRange): void;
    }
}
declare module "lib/root/Core/Graphics/PathData" {
    import { IRect } from "lib/root/Core/Graphics/IRect";
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    export class PathData {
        private _data;
        constructor();
        readonly data: string;
        moveTo(x: number, y: number): PathData;
        lineTo(x: number, y: number): PathData;
        moveToPoint(point: IVector2d): PathData;
        lineToPoint(point: IVector2d): PathData;
        rectangle(rect: IRect): PathData;
        private addCommand(command, x, y);
    }
}
declare module "lib/root/Core/Graphics/Polygon" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/Collections";
    import { IRect } from "lib/root/Core/Graphics/IRect";
    import { PathData } from "lib/root/Core/Graphics/PathData";
    export class Polygon {
        private _points;
        private constructor();
        renderTo(svgPathData: PathData): void;
        static createRectlinearPolygons(rectangles: IReadOnlyCollection<IRect>): IReadOnlyCollection<Polygon>;
        private static _minRectDistance;
        private static areCoordinatesClose(a, b);
    }
}
declare module "lib/root/Core/Svg" {
    export class Svg {
        static createPathElement(className?: string): Element;
        static createTextElement(x: number, y: number, fontFamily: string, fontSize: number, className: string): Element;
    }
}
declare module "lib/root/Controls/Grid/GridOverlay" {
    import { Grid } from "lib/root/Controls/Grid/Grid";
    import { GridCellRange } from "lib/root/Controls/Grid/GridCellRange";
    export class GridOverlay {
        private _grid;
        private _path;
        protected _cellRange: GridCellRange;
        protected _pathElementClassName: string;
        constructor(grid: Grid, pathElementClassName: string);
        cellRange: GridCellRange;
        protected readonly path: Element;
        protected readonly grid: Grid;
        render(): void;
        static render(cellRange: GridCellRange, path: Element, pathElementClassName: string): void;
    }
}
declare module "lib/root/Controls/Grid/GridDisablement" {
    import { Grid } from "lib/root/Controls/Grid/Grid";
    import { GridCell } from "lib/root/Controls/Grid/GridCell";
    import { GridOverlay } from "lib/root/Controls/Grid/GridOverlay";
    export class GridDisablement extends GridOverlay {
        constructor(grid: Grid);
        enableCell(cell: GridCell): void;
        disableCell(cell: GridCell): void;
        isCellDisabled(cell: GridCell): boolean;
    }
}
declare module "lib/root/Controls/Grid/GridSelection" {
    import { Grid } from "lib/root/Controls/Grid/Grid";
    import { GridCell } from "lib/root/Controls/Grid/GridCell";
    import { GridCellRange } from "lib/root/Controls/Grid/GridCellRange";
    import { GridOverlay } from "lib/root/Controls/Grid/GridOverlay";
    export class GridSelection extends GridOverlay {
        private _pivotPoint;
        private _isCellSelect;
        constructor(grid: Grid, isCellSelect?: boolean);
        readonly isEmpty: boolean;
        private _enabled;
        enabled: boolean;
        selectCell(cell: GridCell): void;
        unselectCell(cell: GridCell): void;
        selectCellRange(cellRange: GridCellRange): void;
        unselectCellRange(cellRange: GridCellRange): void;
        clear(): void;
        change(changeFunc: () => void): void;
        redraw(): void;
        private selectCellImplementation(cell);
        private unselectCellImplementation(cell);
        private renderSelect(cellRangeToSelect);
        private renderMouseSelection(event);
        private getSelectionRect(event);
        private getCellRangeToSelect(event);
        private getCellRangeFromRect(rect);
        private handleMouseDown(event);
        private handleMouseMove(event);
        private handleMouseUp(event);
    }
}
declare module "lib/root/Controls/Grid/GridSelectionHelper" {
    import { Grid } from "lib/root/Controls/Grid/Grid";
    export class GridSelectionHelper {
        private _grid;
        private _pivotPoint;
        private _rectangle;
        constructor(grid: Grid);
        private handleMouseDown(event);
        private handleMouseMove(event);
        private handleMouseUp();
        private initSelection();
        private fixMousePointYRelativeToGrid(y);
    }
}
declare module "lib/root/Controls/Grid/Grid" {
    import { GridCell, GridRow, Panel, Rectangle } from "lib/root/Controls/index";
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { IAction, IAction3 } from "lib/root/Core/Delegates";
    import { ChangeEvent } from "lib/root/Core/Events/ChangeEvent";
    import { ChangeEventHandler } from "lib/root/Core/Events/ChangeEventHandler";
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    import { IColor } from "lib/root/Core/IColor";
    import { GridLayout } from "lib/root/Layout/GridLayout";
    import { ILayout } from "lib/root/Layout/ILayout";
    import { IControlTreeNodeReadOnlyCollection } from "lib/root/Controls/Collections/IControlTreeNodeReadOnlyCollection";
    import { IControl } from "lib/root/Controls/IControl";
    import { GridCellRange } from "lib/root/Controls/Grid/GridCellRange";
    import { GridDisablement } from "lib/root/Controls/Grid/GridDisablement";
    import { GridSelection } from "lib/root/Controls/Grid/GridSelection";
    import { GridSelectionHelper } from "lib/root/Controls/Grid/GridSelectionHelper";
    export interface ISelectionMapFn {
        (cellPositions: IReadOnlyCollection<IVector2d>): IReadOnlyCollection<IVector2d>;
    }
    export class GridSelectionChangeEvent extends ChangeEvent<GridCellRange> {
    }
    export class GridSelectionChangeEventHandler extends ChangeEventHandler<GridCellRange> {
    }
    export class Grid extends Rectangle {
        svg: Element;
        graphics: Element;
        selection: GridSelection;
        selectionHelper: GridSelectionHelper;
        disablement: GridDisablement;
        allowSelectCell: (cell: GridCell) => boolean;
        readonly selectionChange: GridSelectionChangeEventHandler;
        selectionMap: ISelectionMapFn;
        readonly updated: EventHandler;
        readonly gridLayout: GridLayout;
        private _rowContainer;
        private _verticalCellGroups;
        constructor();
        initCalendarFeatures(isCellSelect?: boolean): void;
        doIfSelectionEnabled(action: IAction): void;
        private _overlayPanel;
        readonly overlayPanel: Panel;
        readonly rowCount: number;
        readonly columnCount: number;
        readonly lastRowIndex: number;
        backgroundColor: IColor;
        readonly rows: IReadOnlyCollection<GridRow>;
        forEachCell(action: IAction3<GridCell, number, number>): void;
        getAllCellsRange(): GridCellRange;
        getColumnCellRange(columnIndex: number): GridCellRange;
        getRowCellRange(rowIndex: number): GridCellRange;
        getCellRange(x: number, y: number, width: number, height: number, filterFunc?: (cell: GridCell) => void): GridCellRange;
        getCell(position: IVector2d): GridCell;
        cellAt(rowIndex: number, columnIndex: number): GridCell;
        cellAtPoint(point: IVector2d): GridCell;
        updateCellCount(columnCount: number, rowCount: number): void;
        setCellGroups(horizontalGroups: IReadOnlyCollection<number>, verticalGroups: IReadOnlyCollection<number>): void;
        clear(): void;
        readonly columnLayouts: IReadOnlyCollection<ILayout>;
        createColumns(controls: IReadOnlyCollection<IControl>, columnCount: number): Grid;
        updateFromTree(nodes: IControlTreeNodeReadOnlyCollection): void;
        static createColumns(controls: IReadOnlyCollection<IControl>, columnCount: number): Grid;
        private addLayout(index, cell, layouts);
        private update(rowCount, columnCount);
    }
}
declare module "lib/root/Controls/Grid/GridRow" {
    import { List } from "lib/root/Core/Collections/Collections";
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { IControl } from "lib/root/Controls/IControl";
    import { Panel } from "lib/root/Controls/Panel";
    import { GridCell } from "lib/root/Controls/Grid/GridCell";
    export class GridRow extends Panel {
        constructor();
        private _cells;
        cells: IReadOnlyCollection<GridCell>;
        private _overlays;
        overlays: List<IControl>;
        addOverlay(overlay: IControl): void;
        private updateInternalCollections();
    }
}
declare module "lib/root/Core/IStickyScrollElement" {
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    export interface IStickyScrollElement {
        width: number;
        height: number;
        hScroll: number;
        hScrollMax: number;
        vScroll: number;
        vScrollMax: number;
        readonly minHeight: number;
        sizeUpdated: EventHandler;
    }
}
declare module "lib/root/Layout/IHeaderLayout" {
    import { IEnumerable } from "lib/root/Core/Collections/IEnumerable";
    import { ILayout } from "lib/root/Layout/ILayout";
    export interface IHeaderLayout {
        layouts: IEnumerable<ILayout>;
    }
}
declare module "lib/root/Layout/TableLayout" {
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    import { IGridLayout } from "lib/root/Layout/IGridLayout";
    import { IHeaderLayout } from "lib/root/Layout/IHeaderLayout";
    import { WrapChildrenLayout } from "lib/root/Layout/WrapChildrenLayout";
    export class TableLayout extends WrapChildrenLayout {
        private _gridLayout;
        private _horizontalHeaderLayout;
        private _verticalHeaderLayout;
        protected measureOverride(availableSize: IVector2d): IVector2d;
        private measureHeaderLayout(layouts);
        gridLayout: IGridLayout;
        horizontalHeaderLayout: IHeaderLayout;
        verticalHeaderLayout: IHeaderLayout;
    }
}
declare module "lib/root/Controls/Table/ITableHeader" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    import { IHeaderLayout } from "lib/root/Layout/IHeaderLayout";
    import { IControl } from "lib/root/Controls/IControl";
    export interface ITableHeader extends IControl, IHeaderLayout {
        getCell(cellIndex: number): IControl;
        getCellCount(): number;
        getCellGroups(): IReadOnlyCollection<number>;
        getCellVisibility(cellIndex: number): boolean;
        getCellSize(cellIndex: number): number;
        getCellRowHeight(rowIndex?: number): number;
        cellVisibilityChanged: EventHandler;
        cellCountChanged: EventHandler;
    }
}
declare module "lib/root/Controls/Table/ResizeIndicator" {
    import { Rectangle } from "lib/root/Controls/Rectangle";
    export class ResizeIndicator extends Rectangle {
        constructor();
        private _selector;
        readonly selector: Rectangle;
    }
}
declare module "lib/root/Controls/Table/TableColumnResizeHelpers" {
    import { Grid } from "lib/root/Controls/index";
    import { IBoolean } from "lib/root/Core/Primitives/IBoolean";
    import { ITableHeader } from "lib/root/Controls/Table/ITableHeader";
    export class TableColumnResizeHelpers {
        private _horizontalHeader;
        private _cellGrid;
        private _isStaticColumnWidth;
        private _resizeIndicators;
        constructor(horizontalHeader: ITableHeader, cellGrid: Grid);
        private setIndicatorsVisibility();
        private createResizeIndicators();
        private _allowColumnResize;
        readonly allowColumnResize: IBoolean;
        private makeColumnDraggable(resizeControl, columnLayout);
        private handleDragMove(delta, columnLayout);
        private setStaticWidth();
    }
}
declare module "lib/root/Controls/Table/Sight" {
    import { IRect } from "lib/root/Core/Graphics/IRect";
    import { Control } from "lib/root/Controls/Control";
    export class Sight extends Control {
        private readonly _rectangleV;
        private readonly _rectangleH;
        private readonly _rectangle;
        private readonly _color;
        private readonly _strokeWidth;
        private readonly _centerStroke;
        private readonly _outerStroke;
        constructor();
        setPosition(aimRect: IRect, verticalOverflow: number, horizontalOverflow: number): void;
    }
}
declare module "lib/root/Controls/Table/TableSight" {
    import { Sight } from "lib/root/Controls/Table/Sight";
    import { Table } from "lib/root/Controls/Table/Table";
    export class TableSight {
        private _table;
        private _grid;
        private _lastGlobalPoint;
        private _isCellSelect;
        constructor(table: Table, isCellSelect?: boolean);
        private redraw();
        private _sight;
        readonly sight: Sight;
        private renderIfNoSelection(event);
        private render(mousePosition);
    }
}
declare module "lib/root/Controls/Table/Table" {
    import { Button, Control, Grid, GridCell, Scrollable } from "lib/root/Controls/index";
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    import { IStickyScrollElement } from "lib/root/Core/IStickyScrollElement";
    import { IBoolean } from "lib/root/Core/Primitives/IBoolean";
    import { ISelectionMapFn } from "lib/root/Controls/Grid/Grid";
    import { GridSelection } from "lib/root/Controls/Grid/GridSelection";
    import { ITableHeader } from "lib/root/Controls/Table/ITableHeader";
    import { TableSight } from "lib/root/Controls/Table/TableSight";
    export class Table extends Control implements IStickyScrollElement {
        private _cellGridContainer;
        private _grid;
        private _layoutGrid;
        private _buttonBack;
        private _buttonForward;
        private _tableColumnResizeHelpers;
        readonly horizontalHeaderContainer: Scrollable;
        readonly verticalHeaderContainer: Scrollable;
        constructor(horizontalHeader: ITableHeader, verticalHeader: ITableHeader);
        readonly allowColumnResize: IBoolean;
        private _horizontalHeader;
        readonly horizontalHeader: ITableHeader;
        private _verticalHeader;
        readonly verticalHeader: ITableHeader;
        initSight(isCellSelect?: boolean): void;
        readonly buttonBack: Button;
        readonly buttonForward: Button;
        readonly layoutGrid: Grid;
        readonly grid: Grid;
        readonly cornerCell: GridCell;
        readonly gridCell: GridCell;
        readonly verticalHeaderCell: GridCell;
        readonly horizontalHeaderCell: GridCell;
        readonly selection: GridSelection;
        selectionMap: ISelectionMapFn;
        private _tableSight;
        readonly tableSight: TableSight;
        readonly offset: IVector2d;
        readonly horizontalVisibleCellCount: number;
        width: number;
        height: number;
        hScroll: number;
        readonly hScrollMax: number;
        vScroll: number;
        readonly vScrollMax: number;
        readonly minHeight: number;
        private _sizeUpdated;
        readonly sizeUpdated: EventHandler;
        activeNavigateButtons(): void;
        updateRowVisibility(): void;
        updateTable(): void;
        private setOffset(value);
        private calculateStickyScrollSize(size, gridActualSize, headerActualSize);
        private synchronizeRowVisibility();
    }
}
declare module "lib/root/Core/Graphics/AlignmentHelpers" {
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    import { Orientation } from "lib/root/Core/Graphics/Orientation";
    export class AlignmentHelpers {
        static clampPosition(localPosition: IVector2d, size: IVector2d, containerSize: IVector2d, allowOverflow: boolean, orientation: Orientation): IVector2d;
        static getLocalPosition(normalizedPosition: IVector2d, size: IVector2d, containerSize: IVector2d, allowOverflow: boolean, orientation: Orientation): IVector2d;
        static getNormalizedPosition(localPosition: IVector2d, size: IVector2d, containerSize: IVector2d, allowOverflow: boolean, orientation: Orientation): IVector2d;
        private static getMaxPosition(size, containerSize, allowOverflow);
        private static getMaxSize(size, containerSize, allowOverflow);
        private static getMinPosition(draggableSize, allowOverflow);
        private static safeDivision(dividend, divider);
    }
}
declare module "lib/root/Controls/Draggable" {
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    import { Orientation } from "lib/root/Core/Graphics/Orientation";
    import { Control } from "lib/root/Controls/Control";
    export class Draggable {
        private _draggable;
        private _dragContainer;
        private _detachActions;
        constructor(draggable: Control, dragContainer: Control);
        private _orientation;
        orientation: Orientation;
        private _allowOverflow;
        allowOverflow: boolean;
        cleanup(): void;
        private addListener<TEvent>(handler, listener);
        private getDragContainerSize();
        private getDraggableSize();
        private init();
        private notifyBackgroundDrag(dragPoint);
        private updateDraggablePosition(dragPoint);
        readonly drag: EventHandler;
    }
}
declare module "lib/root/Controls/Slider/SliderLayout" {
    import { Draggable } from "lib/root/Controls/index";
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    import { IVectorModel } from "lib/root/Core/Primitives/index";
    import { ILayoutTarget } from "lib/root/Layout/ILayoutTarget";
    import { WrapChildrenLayout } from "lib/root/Layout/WrapChildrenLayout";
    import { Slider } from "lib/root/Controls/Slider/Slider";
    export class SliderLayout extends WrapChildrenLayout {
        private _slider;
        constructor(target: ILayoutTarget, slider: Slider);
        private _draggable;
        draggable: Draggable;
        private _model;
        model: IVectorModel;
        private _allowOverflow;
        allowOverflow: boolean;
        protected arrangeOverride(finalSize: IVector2d): IVector2d;
        protected measureOverride(availableSize: IVector2d): IVector2d;
    }
}
declare module "lib/root/Controls/Slider/Slider" {
    import { Control } from "lib/root/Controls/index";
    import { Orientation } from "lib/root/Core/Graphics/Orientation";
    import { IVectorModel } from "lib/root/Core/Primitives/index";
    import { IUserInputControl } from "lib/root/Controls/IUserInputControl";
    import { Rectangle } from "lib/root/Controls/Rectangle";
    export class Slider extends Control implements IUserInputControl<IVectorModel> {
        private _draggable;
        private readonly _sliderLayout;
        constructor();
        readonly backgroundRectangle: Rectangle;
        model: IVectorModel;
        allowOverflow: boolean;
        orientation: Orientation;
        private _background;
        background: Control;
        private _thumb;
        thumb: Control;
        private getBackgroundSize();
        private getThumbSize();
        private isInitialized();
        private update();
        private updateToModel();
    }
}
declare module "lib/root/Core/Model/ViewModel/PaginationSelectCellStyle" {
    export enum PaginationSelectCellStyle {
        Header = 0,
        Enabled = 1,
        Disabled = 2,
        OutOfRange = 3,
        StartSelect = 4,
        SecondSelected = 5,
        Selected = 6,
        EndSelect = 7,
    }
}
declare module "lib/root/Controls/PaginationSelect/IPaginationSelectCell" {
    import { PaginationSelectCellStyle } from "lib/root/Core/Model/ViewModel/PaginationSelectCellStyle";
    import { ISelectOption } from "lib/root/Controls/ISelectOption";
    export interface IPaginationSelectCell extends ISelectOption {
        style: PaginationSelectCellStyle;
    }
}
declare module "lib/root/Core/Model/ViewModel/IPaginationSelectCellConfig" {
    import { PaginationSelectCellStyle } from "lib/root/Core/Model/ViewModel/PaginationSelectCellStyle";
    export interface IPaginationSelectCellConfig {
        text: string;
        style: PaginationSelectCellStyle;
    }
}
declare module "lib/root/Core/Model/ViewModel/IPaginationSelectViewModel" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    import { IPaginationSelectCellConfig } from "lib/root/Core/Model/ViewModel/IPaginationSelectCellConfig";
    export interface IPaginationSelectViewModel<TModel> {
        canMoveBackward(): boolean;
        canMoveForward(): boolean;
        changeSelection(index: number): void;
        changeView(): void;
        moveBackward(): void;
        moveForward(): void;
        resetView(): void;
        readonly gridColumnCount: number;
        readonly headerText: string;
        readonly cellsConfigs: IReadOnlyCollection<IPaginationSelectCellConfig>;
        readonly selectionChange: EventHandler;
        readonly change: EventHandler;
        model: TModel;
    }
}
declare module "lib/root/Controls/BaseSelect" {
    import { Grid, Rectangle } from "lib/root/Controls/index";
    import { IReadOnlyCollection } from "lib/root/Core/Collections/Collections";
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    import { Orientation } from "lib/root/Core/Graphics/Orientation";
    import { ISelectOption } from "lib/root/Controls/ISelectOption";
    export class BaseSelect extends Rectangle {
        readonly selectionChange: EventHandler;
        readonly multipleSelectChange: EventHandler;
        readonly optionsChange: EventHandler;
        constructor();
        private _options;
        options: IReadOnlyCollection<ISelectOption>;
        private _filteredOptions;
        readonly filteredOptions: IReadOnlyCollection<ISelectOption>;
        private _columnCount;
        columnCount: number;
        private _selectedIndices;
        selectedIndices: IReadOnlyCollection<number>;
        selectedIndex: number;
        readonly selectedOptions: IReadOnlyCollection<ISelectOption>;
        private _multiple;
        multiple: boolean;
        private _orientation;
        orientation: Orientation;
        private _grid;
        readonly grid: Grid;
        applyFilter(filterText: string): void;
        private getOptions(indexes);
        private setFilteredOptions(value);
        private unselectAll();
        private updateGrid();
        private updateOptions();
    }
}
declare module "lib/root/Controls/StackPanel" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/Collections";
    import { Orientation } from "lib/root/Core/Graphics/Orientation";
    import { Container } from "lib/root/Controls/Container";
    import { IControl } from "lib/root/Controls/IControl";
    export class StackPanel extends Container {
        private _stackLayout;
        constructor();
        static createStackPanel(controls: IReadOnlyCollection<IControl>, orientation?: Orientation): StackPanel;
        static stack(controls: IReadOnlyCollection<IControl>, orientation?: Orientation): IControl;
        orientation: Orientation;
    }
}
declare module "lib/root/Controls/PaginationSelect/PaginationSelectCell" {
    import { IPaginationSelectCellConfig } from "lib/root/Core/Model/ViewModel/IPaginationSelectCellConfig";
    import { PaginationSelectCellStyle } from "lib/root/Core/Model/ViewModel/PaginationSelectCellStyle";
    import { IBoolean } from "lib/root/Core/Primitives/index";
    import { Rectangle } from "lib/root/Controls/Rectangle";
    import { Text } from "lib/root/Controls/Text";
    import { IPaginationSelectCell } from "lib/root/Controls/PaginationSelect/IPaginationSelectCell";
    export class PaginationSelectCell extends Rectangle implements IPaginationSelectCell {
        constructor();
        private _content;
        content: Text;
        private _style;
        style: PaginationSelectCellStyle;
        readonly isChecked: IBoolean;
        readonly isEnabled: IBoolean;
        containsText(text: string): boolean;
        getText(): string;
        static create(config: IPaginationSelectCellConfig): PaginationSelectCell;
    }
}
declare module "lib/root/Controls/PaginationSelect/PaginationSelectHeader" {
    import { Button, Control } from "lib/root/Controls/index";
    import { IControl } from "lib/root/Controls/IControl";
    export class PaginationSelectHeader extends Control {
        constructor();
        readonly prevButton: Button;
        readonly centerButton: Button;
        readonly nextButton: Button;
        readonly container: IControl;
    }
}
declare module "lib/root/Controls/PaginationSelect/PaginationSelect" {
    import { IAction1 } from "lib/root/Core/Delegates";
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    import { IPaginationSelectViewModel } from "lib/root/Core/Model/ViewModel/IPaginationSelectViewModel";
    import { BaseSelect } from "lib/root/Controls/BaseSelect";
    import { Control } from "lib/root/Controls/Control";
    import { IUserInputControl } from "lib/root/Controls/IUserInputControl";
    export class PaginationSelect<TModel> extends Control implements IUserInputControl<TModel> {
        private _header;
        private _viewModel;
        protected viewModel: IPaginationSelectViewModel<TModel>;
        model: TModel;
        readonly selectionChange: EventHandler;
        private _select;
        readonly select: BaseSelect;
        reset(): void;
        private _applyAction;
        setApplyAction(action: IAction1<boolean>): void;
        private getCells();
        private init();
        private redraw();
    }
}
declare module "lib/root/Controls/PaginationSelect/index" {
    export * from "lib/root/Controls/PaginationSelect/IPaginationSelectCell";
    export * from "lib/root/Controls/PaginationSelect/PaginationSelect";
    export * from "lib/root/Controls/PaginationSelect/PaginationSelectHeader";
    export * from "lib/root/Controls/PaginationSelect/PaginationSelectCell";
}
declare module "lib/root/Layout/DockLayout" {
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    import { Layout } from "lib/root/Layout/All";
    import { ILayoutTarget } from "lib/root/Layout/ILayoutTarget";
    export class DockLayout extends Layout {
        constructor(target: ILayoutTarget);
        private _lastChildFill;
        lastChildFill: boolean;
        protected measureOverride(constraint: IVector2d): IVector2d;
        protected arrangeOverride(arrangeSize: IVector2d): IVector2d;
    }
}
declare module "lib/root/Controls/DockPanel" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/Collections";
    import { Container } from "lib/root/Controls/Container";
    import { IControl } from "lib/root/Controls/IControl";
    export class DockPanel extends Container {
        private _dockLayout;
        constructor();
        static dock(controls: IReadOnlyCollection<IControl>): IControl;
    }
}
declare module "lib/root/Controls/PopupWindow" {
    import { Control } from "lib/root/Controls/Control";
    import { Icon } from "lib/root/Controls/Icon";
    import { IControl } from "lib/root/Controls/IControl";
    import { Panel } from "lib/root/Controls/Panel";
    import { StackPanel } from "lib/root/Controls/StackPanel";
    import { Text } from "lib/root/Controls/Text";
    export class PopupWindow extends Control {
        private _header;
        private _headerIcon;
        private _titleContainer;
        private _content;
        private _contentContainer;
        private _footer;
        private _showCloseButton;
        private _popup;
        private _container;
        private _popupContainer;
        private _closeIcon;
        private _helpIcon;
        constructor();
        content: IControl;
        readonly container: StackPanel;
        header: Text;
        footer: IControl;
        showCloseButton: boolean;
        readonly titleContainer: Panel;
        readonly closeIcon: Icon;
        contentContainer: Panel;
        headerIcon: Icon;
        readonly helpIcon: Icon;
        private _helpText;
        helpText: string;
        private init();
    }
}
declare module "lib/root/Controls/UserInputControlStyle" {
    export enum UserInputControlStyle {
        ViewOnly = 0,
        SelectorOnly = 1,
        ViewAndSelector = 2,
    }
}
declare module "lib/root/Controls/UserInputControl" {
    import { Lazy } from "lib/root/Core/Lazy";
    import { IModel } from "lib/root/Core/Primitives/IModel";
    import { Button } from "lib/root/Controls/Button/Button";
    import { Control } from "lib/root/Controls/Control";
    import { IControl } from "lib/root/Controls/IControl";
    import { IUserInputControl } from "lib/root/Controls/IUserInputControl";
    import { PopupWindow } from "lib/root/Controls/PopupWindow";
    import { UserInputControlStyle } from "lib/root/Controls/UserInputControlStyle";
    export class UserInputControl<TModel extends IModel<TModel>> extends Control implements IUserInputControl<TModel> {
        private _unsubscribeModelChange;
        private _unsubscribeSelectorModelChange;
        constructor();
        readonly applyButton: Button;
        readonly cancelButton: Button;
        readonly popupWindow: PopupWindow;
        readonly footer: IControl;
        private _showFooterButtons;
        showFooterButtons: boolean;
        private _model;
        model: TModel;
        private _style;
        style: UserInputControlStyle;
        private _view;
        view: IUserInputControl<TModel>;
        private _selector;
        selector: Lazy<IUserInputControl<TModel>>;
        protected customModelUpdate(): void;
        private apply(hidePopup);
        private cancel();
        private showSelectorPopup();
        private startListenSelectorModel();
        private stopListenChange(unsubscribe, setter);
        private stopListenModelChange();
        private stopListenSelectorModelChange();
        private update();
    }
}
declare module "lib/root/Controls/TimePicker/TimePicker" {
    import { TimePickerInput, TimeSelector } from "lib/root/Controls/TimePicker/index";
    import { Lazy } from "lib/root/Core/Lazy";
    import { ITimeModel } from "lib/root/Core/Primitives/index";
    import { UserInputControl } from "lib/root/Controls/UserInputControl";
    export class TimePicker extends UserInputControl<ITimeModel> {
        constructor();
        hour12: boolean;
        readonly selectorControl: Lazy<TimeSelector>;
        readonly viewControl: TimePickerInput;
    }
}
declare module "lib/root/Controls/TimePicker/TimePickerInput" {
    import { ITimeModel } from "lib/root/Core/Primitives/index";
    import { Input } from "lib/root/Controls/Input/index";
    import { IUserInputControl } from "lib/root/Controls/IUserInputControl";
    export class TimePickerInput extends Input implements IUserInputControl<ITimeModel> {
        private _model;
        model: ITimeModel;
        private _hour12;
        hour12: boolean;
        private updateFromModel(time);
    }
}
declare module "lib/root/Controls/TimePicker/TimeSelector" {
    import { TimePickerSelect } from "lib/root/Controls/TimePicker/index";
    import { Control, Text } from "lib/root/Controls/index";
    import { INumber, ITimeModel } from "lib/root/Core/Primitives/index";
    import { IUserInputControl } from "lib/root/Controls/IUserInputControl";
    export class TimeSelector extends Control implements IUserInputControl<ITimeModel> {
        private readonly _anteMeridiemIndex;
        private readonly _postMeridiemIndex;
        private readonly _hourStep;
        private readonly _minuteStep;
        constructor();
        private _model;
        model: ITimeModel;
        private _hour12;
        hour12: boolean;
        private readonly _hourIntervalIndex;
        hourIntervalIndex: INumber;
        readonly hourSelect: TimePickerSelect;
        readonly separator: Text;
        readonly minuteSelect: TimePickerSelect;
        readonly hourIntervalSelect: TimePickerSelect;
        private updateChildren();
        private updateHourSelect(hour);
        private updateModelFromHourInterval();
    }
}
declare module "lib/root/Controls/TimePicker/TimePickerSelect" {
    import { Button, Control, IControl, Input, Text } from "lib/root/Controls/index";
    import { INumber } from "lib/root/Core/Primitives/index";
    import { IUserInputControl } from "lib/root/Controls/IUserInputControl";
    export class TimePickerSelect extends Control implements IUserInputControl<INumber> {
        constructor();
        private _model;
        model: INumber;
        private _step;
        step: number;
        private _min;
        min: number;
        private _max;
        max: number;
        private decrementNumber();
        private incrementNumber();
        readonly title: Text;
        readonly incrementButton: Button;
        readonly decrementButton: Button;
        readonly input: Input;
        readonly container: IControl;
    }
}
declare module "lib/root/Controls/TimePicker/index" {
    export * from "lib/root/Controls/TimePicker/TimePicker";
    export * from "lib/root/Controls/TimePicker/TimePickerInput";
    export * from "lib/root/Controls/TimePicker/TimeSelector";
    export * from "lib/root/Controls/TimePicker/TimePickerSelect";
}
declare module "lib/root/Controls/ColorPicker/ColorPickerInput" {
    import { IColorModel } from "lib/root/Core/Primitives/index";
    import { Input } from "lib/root/Controls/Input/index";
    import { IUserInputControl } from "lib/root/Controls/IUserInputControl";
    import { Rectangle } from "lib/root/Controls/Rectangle";
    export class ColorPickerInput extends Input implements IUserInputControl<IColorModel> {
        constructor();
        private _model;
        model: IColorModel;
        readonly colorPreview: Rectangle;
    }
}
declare module "lib/root/Controls/ColorPicker/ColorPicker" {
    import { ColorSelector } from "lib/root/Controls/index";
    import { Lazy } from "lib/root/Core/Lazy";
    import { IColorModel } from "lib/root/Core/Primitives/index";
    import { UserInputControl } from "lib/root/Controls/UserInputControl";
    import { ColorPickerInput } from "lib/root/Controls/ColorPicker/ColorPickerInput";
    export class ColorPicker extends UserInputControl<IColorModel> {
        constructor();
        readonly selectorControl: Lazy<ColorSelector>;
        readonly viewControl: ColorPickerInput;
    }
}
declare module "lib/root/Controls/ColorPicker/ColorPickerColorPreview" {
    import { Control, Rectangle } from "lib/root/Controls/index";
    import { IColorModel } from "lib/root/Core/Primitives/index";
    export class ColorPickerColorPreview extends Control {
        constructor();
        readonly new: Rectangle;
        readonly old: Rectangle;
        private _newValue;
        newValue: IColorModel;
        private _oldValue;
        oldValue: IColorModel;
    }
}
declare module "lib/root/Controls/ColorPicker/ColorPickerHueSelectBackground" {
    import { Rectangle } from "lib/root/Controls/index";
    export class ColorPickerHueSelectBackground extends Rectangle {
    }
}
declare module "lib/root/Controls/ColorPicker/ColorPickerHueSelectThumb" {
    import { Button, Control } from "lib/root/Controls/index";
    export class ColorPickerHueSelectThumb extends Control {
        constructor();
        readonly button: Button;
    }
}
declare module "lib/root/Controls/ColorPicker/ColorPickerHueSelect" {
    import { Control, Slider } from "lib/root/Controls/index";
    import { INumber } from "lib/root/Core/Primitives/INumber";
    import { IUserInputControl } from "lib/root/Controls/IUserInputControl";
    import { ColorPickerHueSelectBackground } from "lib/root/Controls/ColorPicker/ColorPickerHueSelectBackground";
    import { ColorPickerHueSelectThumb } from "lib/root/Controls/ColorPicker/ColorPickerHueSelectThumb";
    export class ColorPickerHueSelect extends Control implements IUserInputControl<INumber> {
        constructor();
        readonly slider: Slider;
        readonly background: ColorPickerHueSelectBackground;
        readonly thumb: ColorPickerHueSelectThumb;
        model: INumber;
    }
}
declare module "lib/root/Controls/ColorPicker/ColorSelector" {
    import { Button, ColorPickerColorPreview, ColorPickerHueSelect, ColorPickerRgbInput, ColorPickerValueSelect, Control } from "lib/root/Controls/index";
    import { IAction1 } from "lib/root/Core/Delegates";
    import { IColorModel } from "lib/root/Core/Primitives/index";
    import { IControl } from "lib/root/Controls/IControl";
    import { HexInput } from "lib/root/Controls/Input/HexInput";
    import { IUserInputControl } from "lib/root/Controls/IUserInputControl";
    export class ColorSelector extends Control implements IUserInputControl<IColorModel> {
        constructor();
        private _model;
        model: IColorModel;
        readonly valueSelect: ColorPickerValueSelect;
        readonly hueSelect: ColorPickerHueSelect;
        readonly colorPreview: ColorPickerColorPreview;
        readonly rgbInput: ColorPickerRgbInput;
        readonly hexInput: HexInput;
        readonly applyButton: Button;
        readonly rightContainer: IControl;
        readonly container: IControl;
        reset(): void;
        private _applyAction;
        setApplyAction(action: IAction1<boolean>): void;
    }
}
declare module "lib/root/Controls/ColorPicker/ColorPickerRgbInput" {
    import { Control } from "lib/root/Controls/index";
    import { IColorModel } from "lib/root/Core/Primitives/index";
    import { IControl } from "lib/root/Controls/IControl";
    import { NumberInput } from "lib/root/Controls/Input/NumberInput";
    import { IUserInputControl } from "lib/root/Controls/IUserInputControl";
    export class ColorPickerRgbInput extends Control implements IUserInputControl<IColorModel> {
        constructor();
        readonly rInput: NumberInput;
        readonly gInput: NumberInput;
        readonly bInput: NumberInput;
        readonly container: IControl;
        private _model;
        model: IColorModel;
    }
}
declare module "lib/root/Controls/ColorPicker/ColorPickerValueSelectBackground" {
    import { Control, Rectangle } from "lib/root/Controls/index";
    import { INumber } from "lib/root/Core/Primitives/INumber";
    import { IUserInputControl } from "lib/root/Controls/IUserInputControl";
    export class ColorPickerValueSelectBackground extends Control implements IUserInputControl<INumber> {
        private _topColor;
        private _bottomColor;
        private _leftColor;
        private _leftRightGradientAngle;
        constructor();
        private _model;
        model: INumber;
        private updateFromModel();
        readonly leftRightGradientRectangle: Rectangle;
        readonly topBottomGradientRectangle: Rectangle;
    }
}
declare module "lib/root/Controls/ColorPicker/ColorPickerValueSelectThumb" {
    import { Control, Rectangle } from "lib/root/Controls/index";
    import { IColorModel } from "lib/root/Core/Primitives/index";
    export class ColorPickerValueSelectThumb extends Control {
        constructor();
        private _model;
        model: IColorModel;
        private _innerCircle;
        readonly innerCircle: Rectangle;
        private _outerCircle;
        readonly outerCircle: Rectangle;
    }
}
declare module "lib/root/Controls/ColorPicker/ColorPickerValueSelect" {
    import { Control, Slider } from "lib/root/Controls/index";
    import { IVectorModel } from "lib/root/Core/Primitives/index";
    import { IUserInputControl } from "lib/root/Controls/IUserInputControl";
    import { ColorPickerValueSelectBackground } from "lib/root/Controls/ColorPicker/ColorPickerValueSelectBackground";
    import { ColorPickerValueSelectThumb } from "lib/root/Controls/ColorPicker/ColorPickerValueSelectThumb";
    export class ColorPickerValueSelect extends Control implements IUserInputControl<IVectorModel> {
        constructor();
        readonly slider: Slider;
        readonly background: ColorPickerValueSelectBackground;
        readonly thumb: ColorPickerValueSelectThumb;
        model: IVectorModel;
    }
}
declare module "lib/root/Controls/ColorPicker/index" {
    export * from "lib/root/Controls/ColorPicker/ColorPicker";
    export * from "lib/root/Controls/ColorPicker/ColorPickerColorPreview";
    export * from "lib/root/Controls/ColorPicker/ColorPickerHueSelect";
    export * from "lib/root/Controls/ColorPicker/ColorPickerHueSelectBackground";
    export * from "lib/root/Controls/ColorPicker/ColorPickerHueSelectThumb";
    export * from "lib/root/Controls/ColorPicker/ColorSelector";
    export * from "lib/root/Controls/ColorPicker/ColorPickerRgbInput";
    export * from "lib/root/Controls/ColorPicker/ColorPickerValueSelect";
    export * from "lib/root/Controls/ColorPicker/ColorPickerValueSelectBackground";
    export * from "lib/root/Controls/ColorPicker/ColorPickerValueSelectThumb";
}
declare module "lib/root/Controls/DatePicker/DatePickerInput" {
    import { IDateModel } from "lib/root/Core/Primitives/index";
    import { Input } from "lib/root/Controls/Input/index";
    import { IUserInputControl } from "lib/root/Controls/IUserInputControl";
    export class DatePickerInput extends Input implements IUserInputControl<IDateModel> {
        private _model;
        model: IDateModel;
    }
}
declare module "lib/root/Core/Model/ViewModel/PaginationSelectCellConfig" {
    import { IPaginationSelectCellConfig } from "lib/root/Core/Model/ViewModel/IPaginationSelectCellConfig";
    import { PaginationSelectCellStyle } from "lib/root/Core/Model/ViewModel/PaginationSelectCellStyle";
    export class PaginationSelectCellConfig implements IPaginationSelectCellConfig {
        readonly text: string;
        readonly style: PaginationSelectCellStyle;
        constructor(text: string, style: PaginationSelectCellStyle);
    }
}
declare module "lib/root/Core/Model/ViewModel/Date/IDatePaginationSelectViewModel" {
    import { IDateModel } from "lib/root/Core/Primitives/IDateModel";
    import { IPaginationSelectViewModel } from "lib/root/Core/Model/ViewModel/IPaginationSelectViewModel";
    export interface IDatePaginationSelectViewModel extends IPaginationSelectViewModel<IDateModel> {
    }
}
declare module "lib/root/Core/Model/ViewModel/Date/DatePaginationSelectViewModel" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { DateTime } from "lib/root/Core/DateTime";
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    import { IDateModel } from "lib/root/Core/Primitives/IDateModel";
    import { IPaginationSelectCellConfig } from "lib/root/Core/Model/ViewModel/IPaginationSelectCellConfig";
    import { IDatePaginationSelectViewModel } from "lib/root/Core/Model/ViewModel/Date/IDatePaginationSelectViewModel";
    export abstract class DatePaginationSelectViewModel implements IDatePaginationSelectViewModel {
        constructor(model: IDateModel);
        private _isStartPeriod;
        isStartPeriod: boolean;
        private _model;
        model: IDateModel;
        readonly gridColumnCount: number;
        readonly selectionChange: EventHandler;
        readonly change: EventHandler;
        readonly cellsConfigs: IReadOnlyCollection<IPaginationSelectCellConfig>;
        abstract canMoveBackward(): boolean;
        abstract canMoveForward(): boolean;
        abstract changeSelection(index: number): void;
        changeView(): void;
        abstract moveBackward(): void;
        abstract moveForward(): void;
        readonly abstract headerText: string;
        resetView(): void;
        protected readonly gridRowCount: number;
        protected day: number;
        protected month: number;
        protected year: number;
        protected readonly min: number;
        protected readonly max: number;
        protected abstract createCellsConfigs(): IReadOnlyCollection<IPaginationSelectCellConfig>;
        protected createDateTime(): DateTime;
        protected abstract isNotAllow(date: DateTime): boolean;
    }
}
declare module "lib/root/Core/Model/ViewModel/Date/DayPaginationSelectViewModel" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { DateTime } from "lib/root/Core/DateTime";
    import { IPaginationSelectCellConfig } from "lib/root/Core/Model/ViewModel/IPaginationSelectCellConfig";
    import { DatePaginationSelectViewModel } from "lib/root/Core/Model/ViewModel/Date/DatePaginationSelectViewModel";
    export class DayPaginationSelectViewModel extends DatePaginationSelectViewModel {
        readonly gridColumnCount: number;
        protected readonly gridRowCount: number;
        readonly headerText: string;
        canMoveBackward(): boolean;
        canMoveForward(): boolean;
        changeSelection(index: number): void;
        moveBackward(): void;
        moveForward(): void;
        protected createCellsConfigs(): IReadOnlyCollection<IPaginationSelectCellConfig>;
        protected isNotAllow(date: DateTime): boolean;
        private createPeriodConfigs(dates, startDay, endDay, isSecondStart, currentMonth);
    }
}
declare module "lib/root/Core/Model/ViewModel/Date/MonthPaginationSelectViewModel" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { DateTime } from "lib/root/Core/DateTime";
    import { IPaginationSelectCellConfig } from "lib/root/Core/Model/ViewModel/IPaginationSelectCellConfig";
    import { DatePaginationSelectViewModel } from "lib/root/Core/Model/ViewModel/Date/DatePaginationSelectViewModel";
    export class MonthPaginationSelectViewModel extends DatePaginationSelectViewModel {
        readonly gridColumnCount: number;
        readonly headerText: string;
        canMoveBackward(): boolean;
        canMoveForward(): boolean;
        changeSelection(index: number): void;
        moveBackward(): void;
        moveForward(): void;
        protected createCellsConfigs(): IReadOnlyCollection<IPaginationSelectCellConfig>;
        protected isNotAllow(date: DateTime): boolean;
    }
}
declare module "lib/root/Core/Model/ViewModel/Date/YearPaginationSelectViewModel" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { DateTime } from "lib/root/Core/DateTime";
    import { IPaginationSelectCellConfig } from "lib/root/Core/Model/ViewModel/IPaginationSelectCellConfig";
    import { DatePaginationSelectViewModel } from "lib/root/Core/Model/ViewModel/Date/DatePaginationSelectViewModel";
    export class YearPaginationSelectViewModel extends DatePaginationSelectViewModel {
        readonly gridColumnCount: number;
        protected readonly gridRowCount: number;
        canMoveBackward(): boolean;
        canMoveForward(): boolean;
        changeSelection(index: number): void;
        readonly headerText: string;
        moveBackward(): void;
        moveForward(): void;
        protected createCellsConfigs(): IReadOnlyCollection<IPaginationSelectCellConfig>;
        protected isNotAllow(value: DateTime): boolean;
        private readonly cellCount;
        private readonly yearIntervalFrom;
    }
}
declare module "lib/root/Core/Model/ViewModel/Date/DateSelectorViewModel" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/index";
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    import { IDateModel } from "lib/root/Core/Primitives/IDateModel";
    import { IPaginationSelectCellConfig } from "lib/root/Core/Model/ViewModel/IPaginationSelectCellConfig";
    import { IDatePaginationSelectViewModel } from "lib/root/Core/Model/ViewModel/Date/IDatePaginationSelectViewModel";
    export class DateSelectorViewModel implements IDatePaginationSelectViewModel {
        private _model;
        model: IDateModel;
        private _isStartPeriod;
        isStartPeriod: boolean;
        private readonly _dayPickerViewModel;
        private readonly _monthPickerViewModel;
        private readonly _yearPickerViewModel;
        private _viewModel;
        private readonly _changeViewMap;
        private readonly _changeViewBySelectionMap;
        constructor();
        readonly selectionChange: EventHandler;
        readonly change: EventHandler;
        canMoveBackward(): boolean;
        canMoveForward(): boolean;
        changeSelection(index: number): void;
        changeView(): void;
        moveBackward(): void;
        moveForward(): void;
        readonly gridColumnCount: number;
        readonly headerText: string;
        readonly cellsConfigs: IReadOnlyCollection<IPaginationSelectCellConfig>;
        resetView(): void;
    }
}
declare module "lib/root/Controls/DatePicker/DateSelector" {
    import { DateSelectorViewModel } from "lib/root/Core/Model/ViewModel/Date/DateSelectorViewModel";
    import { IDateModel } from "lib/root/Core/Primitives/IDateModel";
    import { PaginationSelect } from "lib/root/Controls/PaginationSelect/PaginationSelect";
    export class DateSelector extends PaginationSelect<IDateModel> {
        constructor();
        readonly dateSelectorViewModel: DateSelectorViewModel;
    }
}
declare module "lib/root/Controls/DatePicker/DatePicker" {
    import { Lazy } from "lib/root/Core/Lazy";
    import { IDateModel } from "lib/root/Core/Primitives/IDateModel";
    import { UserInputControl } from "lib/root/Controls/UserInputControl";
    import { DatePickerInput } from "lib/root/Controls/DatePicker/DatePickerInput";
    import { DateSelector } from "lib/root/Controls/DatePicker/DateSelector";
    export class DatePicker extends UserInputControl<IDateModel> {
        constructor();
        readonly selectorControl: Lazy<DateSelector>;
        readonly viewControl: DatePickerInput;
        protected customModelUpdate(): void;
    }
}
declare module "lib/root/Controls/DatePicker/index" {
    export * from "lib/root/Controls/DatePicker/DatePicker";
    export * from "lib/root/Controls/DatePicker/DateSelector";
    export * from "lib/root/Controls/DatePicker/DatePickerInput";
}
declare module "lib/root/Core/Model/ViewModel/DatePeriod/DatePeriodViewModel" {
    import { IDateModel } from "lib/root/Core/Primitives/index";
    export class DatePeriodViewModel {
        readonly startDate: IDateModel;
        readonly endDate: IDateModel;
        constructor();
    }
}
declare module "lib/root/Controls/DatePeriod/DatePeriod" {
    import { DatePeriodViewModel } from "lib/root/Core/Model/ViewModel/DatePeriod/DatePeriodViewModel";
    import { Control } from "lib/root/Controls/Control";
    import { DatePicker } from "lib/root/Controls/DatePicker/DatePicker";
    import { Text } from "lib/root/Controls/Text";
    export class DatePeriod extends Control {
        readonly viewModel: DatePeriodViewModel;
        readonly startDate: DatePicker;
        readonly endDate: DatePicker;
        readonly separator: Text;
        constructor();
    }
}
declare module "lib/root/Controls/PopupMenuButton" {
    import { Button, Control, Menu, Popup } from "lib/root/Controls/index";
    import { IFunc } from "lib/root/Core/Delegates";
    export class PopupMenuButton extends Control {
        private _isMenuVisible;
        constructor();
        updateMenu(): void;
        private _button;
        readonly button: Button;
        private _menu;
        readonly menu: Menu;
        private _popup;
        readonly popup: Popup;
        private _createMenu;
        createMenu: IFunc<Menu>;
        private showMenu();
        private hideMenu();
        private attachMenuContent();
    }
}
declare module "lib/root/Controls/Menu" {
    import { Panel } from "lib/root/Controls/index";
    export class Menu extends Panel {
        constructor();
    }
}
declare module "lib/root/Controls/MenuItem" {
    import { Icon, Rectangle, Text } from "lib/root/Controls/index";
    import { IAction } from "lib/root/Core/Delegates";
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    export class MenuItem extends Rectangle {
        private _stackPanel;
        constructor();
        private _action;
        action: IAction;
        private _icon;
        readonly icon: Icon;
        private _text;
        readonly text: Text;
        private _isDisabled;
        isDisabled: boolean;
        private _disabilityChanged;
        readonly disabilityChanged: EventHandler;
        static create(icon: string, text: string, action?: IAction, isDisabled?: boolean): MenuItem;
    }
}
declare module "lib/root/Layout/WrapLayout" {
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    import { Orientation } from "lib/root/Core/Graphics/Orientation";
    import { Layout } from "lib/root/Layout/All";
    import { ILayoutTarget } from "lib/root/Layout/ILayoutTarget";
    export class WrapLayout extends Layout {
        constructor(target: ILayoutTarget);
        private _itemWidth;
        itemWidth: number;
        private _itemHeight;
        itemHeight: number;
        protected measureOverride(constraint: IVector2d): IVector2d;
        protected arrangeOverride(finalSize: IVector2d): IVector2d;
        private arrangeLine(v, lineV, start, end, useItemU, itemU);
        private _orientation;
        orientation: Orientation;
    }
}
declare module "lib/root/Controls/WrapPanel" {
    import { Orientation } from "lib/root/Core/Graphics/Orientation";
    import { Panel } from "lib/root/Controls/Panel";
    export class WrapPanel extends Panel {
        private _wrapLayout;
        constructor();
        itemWidth: number;
        itemHeight: number;
        orientation: Orientation;
    }
}
declare module "lib/root/Controls/InformationCard" {
    import { Icon, Panel, Rectangle, Text } from "lib/root/Controls/index";
    import { IBoolean } from "lib/root/Core/Primitives/index";
    import { ISelectOption } from "lib/root/Controls/ISelectOption";
    export class InformationCard extends Rectangle implements ISelectOption {
        constructor();
        readonly iconControl: Icon;
        readonly iconContainer: Panel;
        readonly textControl: Text;
        readonly hintControl: Text;
        readonly titleControl: Text;
        readonly isEnabled: IBoolean;
        readonly isChecked: IBoolean;
        containsText(text: string): boolean;
        getText(): string;
    }
}
declare module "lib/root/Controls/Alert/AlertType" {
    export enum AlertType {
        Success = 0,
        Info = 1,
        Warning = 2,
        Danger = 3,
    }
}
declare module "lib/root/Controls/Alert/Alert" {
    import { Icon, Rectangle, Text } from "lib/root/Controls/index";
    import { AlertType } from "lib/root/Controls/Alert/AlertType";
    export class Alert extends Rectangle {
        constructor(alertType?: AlertType);
        static create(type: AlertType, text: string, iconName?: string): Alert;
        private _type;
        type: AlertType;
        readonly text: Text;
        readonly icon: Icon;
    }
}
declare module "lib/root/Controls/Alert/index" {
    export { Alert } from "lib/root/Controls/Alert/Alert";
    export { AlertType } from "lib/root/Controls/Alert/AlertType";
}
declare module "lib/root/Controls/TreeView/TreeViewNode" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { Control } from "lib/root/Controls/Control";
    import { Icon } from "lib/root/Controls/Icon";
    import { IControl } from "lib/root/Controls/IControl";
    import { Panel } from "lib/root/Controls/Panel";
    import { StackPanel } from "lib/root/Controls/StackPanel";
    import { TreeView } from "lib/root/Controls/TreeView/TreeView";
    export class TreeViewNode extends Control {
        private readonly _rootContainer;
        private readonly _nodeContainer;
        constructor();
        readonly icon: Icon;
        readonly container: Panel;
        readonly innerContent: StackPanel;
        private _childNodes;
        childNodes: IReadOnlyCollection<TreeViewNode>;
        private _isExpandable;
        isExpandable: boolean;
        private _content;
        content: IControl;
        expanded: boolean;
        collapsed: boolean;
        readonly level: number;
        readonly treeView: TreeView;
        private _isList;
        isList: boolean;
        collapse(notify?: boolean): void;
        expand(notify?: boolean): void;
        expandCollapse(expanded: boolean, notify: boolean): void;
        getParent(): TreeViewNode;
        toggle(notify?: boolean): void;
        traverse(traverseFn: (node: TreeViewNode) => void): void;
        static createTextNode(text: string): TreeViewNode;
        private update();
    }
}
declare module "lib/root/Controls/TreeView/TreeView" {
    import { StackPanel } from "lib/root/Controls/index";
    import { IEnumerable } from "lib/root/Core/Collections/IEnumerable";
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    import { ILayout } from "lib/root/Layout/ILayout";
    import { Rectangle } from "lib/root/Controls/Rectangle";
    import { TreeViewNode } from "lib/root/Controls/TreeView/TreeViewNode";
    export class TreeView extends Rectangle {
        constructor();
        readonly nodeContainer: StackPanel;
        readonly expandCollapse: EventHandler;
        private _childNodes;
        childNodes: IReadOnlyCollection<TreeViewNode>;
        private _leafNodes;
        readonly leafNodes: IReadOnlyCollection<TreeViewNode>;
        private _layouts;
        readonly layouts: IEnumerable<ILayout>;
        getExpandedRootCellsCount(): number;
        toggleCells(): void;
        traverse(traverseFn: (node: TreeViewNode) => void): void;
        private update();
    }
}
declare module "lib/root/Controls/TreeView/index" {
    export * from "lib/root/Controls/TreeView/TreeView";
    export * from "lib/root/Controls/TreeView/TreeViewNode";
}
declare module "lib/root/Controls/ExpandCollapseText" {
    import { Icon } from "lib/root/Controls/Icon";
    import { IControl } from "lib/root/Controls/IControl";
    import { Rectangle } from "lib/root/Controls/Rectangle";
    import { Text } from "lib/root/Controls/Text";
    export class ExpandCollapseText extends Rectangle {
        constructor();
        readonly icon: Icon;
        readonly text: Text;
        readonly container: IControl;
        private _isExpanded;
        isExpanded: boolean;
    }
}
declare module "lib/root/Controls/PivotTable/PivotTable" {
    import { PivotTableHorizontalHeader, PivotTableVerticalHeader } from "lib/root/Controls/PivotTable/index";
    import { ExpandCollapseText, Rectangle, Table } from "lib/root/Controls/index";
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { IBoolean } from "lib/root/Core/Primitives/IBoolean";
    import { GridCell } from "lib/root/Controls/Grid/GridCell";
    import { GridRow } from "lib/root/Controls/Grid/GridRow";
    import { TreeViewNode } from "lib/root/Controls/TreeView/TreeViewNode";
    export class PivotTable extends Rectangle {
        constructor();
        readonly isExpandable: IBoolean;
        readonly expandCollapseAll: ExpandCollapseText;
        readonly topHeader: PivotTableHorizontalHeader;
        readonly leftHeader: PivotTableVerticalHeader;
        readonly table: Table;
        forEachDataRow(action: (row: GridRow, node: TreeViewNode, rowIndex: number) => void): void;
        forEachRow(action: (row: GridRow, node: TreeViewNode, isDataRow: boolean, rowIndex: number) => void): void;
        getDataCells(): IReadOnlyCollection<GridCell>;
    }
}
declare module "lib/root/Controls/Collections/ControlList" {
    import { Control } from "lib/root/Controls/index";
    import { List } from "lib/root/Core/Collections/index";
    export class ControlList extends List<Control> {
    }
}
declare module "lib/root/Controls/Collections/ControlTreeNode" {
    import { TreeNode } from "lib/root/Core/Collections/index";
    import { Control } from "lib/root/Controls/Control";
    export class ControlTreeNode extends TreeNode<Control> {
        static createText(value: string): ControlTreeNode;
    }
}
declare module "lib/root/Controls/Collections/ControlTreeNodeList" {
    import { TreeNodeList } from "lib/root/Core/Collections/index";
    import { Control } from "lib/root/Controls/Control";
    export class ControlTreeNodeList extends TreeNodeList<Control> {
    }
}
declare module "lib/root/Controls/Collections/index" {
    export { IControlTreeNodeReadOnlyCollection } from "lib/root/Controls/Collections/IControlTreeNodeReadOnlyCollection";
    export { ControlList } from "lib/root/Controls/Collections/ControlList";
    export { ControlTreeNode } from "lib/root/Controls/Collections/ControlTreeNode";
    export { ControlTreeNodeList } from "lib/root/Controls/Collections/ControlTreeNodeList";
}
declare module "lib/root/Controls/Table/Header/TableHeader" {
    import { IEnumerable } from "lib/root/Core/Collections/IEnumerable";
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    import { ILayout } from "lib/root/Layout/ILayout";
    import { Control } from "lib/root/Controls/Control";
    import { IControl } from "lib/root/Controls/IControl";
    import { ITableHeader } from "lib/root/Controls/Table/ITableHeader";
    export abstract class TableHeader extends Control implements ITableHeader {
        cellVisibilityChanged: EventHandler;
        cellCountChanged: EventHandler;
        abstract getCell(cellIndex: number): IControl;
        abstract getCellCount(): number;
        getCellGroups(): IReadOnlyCollection<number>;
        abstract getCellVisibility(cellIndex: number): boolean;
        abstract getCellSize(cellIndex: number): number;
        getCellRowHeight(row?: number): number;
        readonly layouts: IEnumerable<ILayout>;
    }
}
declare module "lib/root/Controls/Table/Header/SimpleTableHeader" {
    import { IEnumerable } from "lib/root/Core/Collections/IEnumerable";
    import { ILayout } from "lib/root/Layout/ILayout";
    import { Grid } from "lib/root/Controls/Grid/Grid";
    import { GridCell } from "lib/root/Controls/Grid/GridCell";
    import { TableHeader } from "lib/root/Controls/Table/Header/TableHeader";
    export class SimpleTableHeader extends TableHeader {
        private _grid;
        private _layouts;
        constructor();
        readonly grid: Grid;
        getCell(cellIndex: number): GridCell;
        getCellRowHeight(rowIndex?: number): number;
        getCellCount(): number;
        getCellSize(cellIndex: number): number;
        getCellVisibility(cellIndex: number): boolean;
        readonly layouts: IEnumerable<ILayout>;
        protected update(): void;
    }
}
declare module "lib/root/Controls/PivotTable/PivotTableHorizontalHeader" {
    import { IControlTreeNodeReadOnlyCollection } from "lib/root/Controls/Collections/index";
    import { SimpleTableHeader } from "lib/root/Controls/Table/Header/SimpleTableHeader";
    export class PivotTableHorizontalHeader extends SimpleTableHeader {
        private _nodes;
        nodes: IControlTreeNodeReadOnlyCollection;
        protected update(): void;
    }
}
declare module "lib/root/Controls/Table/Header/TreeMenuHeader" {
    import { IEnumerable } from "lib/root/Core/Collections/IEnumerable";
    import { ILayout } from "lib/root/Layout/ILayout";
    import { TreeView } from "lib/root/Controls/TreeView/TreeView";
    import { TreeViewNode } from "lib/root/Controls/TreeView/TreeViewNode";
    import { ITableHeader } from "lib/root/Controls/Table/ITableHeader";
    import { TableHeader } from "lib/root/Controls/Table/Header/TableHeader";
    export class TreeMenuHeader extends TableHeader implements ITableHeader {
        protected _treeView: TreeView;
        constructor();
        readonly treeView: TreeView;
        readonly layouts: IEnumerable<ILayout>;
        getCell(index: number): TreeViewNode;
        getCellCount(): number;
        getCellSize(cellIndex: number): number;
        getCellVisibility(cellIndex: number): boolean;
    }
}
declare module "lib/root/Controls/PivotTable/PivotTableVerticalHeader" {
    import { IControlTreeNodeReadOnlyCollection } from "lib/root/Controls/Collections/index";
    import { TreeMenuHeader } from "lib/root/Controls/Table/Header/TreeMenuHeader";
    import { ITableHeader } from "lib/root/Controls/Table/ITableHeader";
    export class PivotTableVerticalHeader extends TreeMenuHeader implements ITableHeader {
        private _nodes;
        nodes: IControlTreeNodeReadOnlyCollection;
        private createTreeNodes(controlNodes);
        private update();
    }
}
declare module "lib/root/Controls/PivotTable/index" {
    export { PivotTable } from "lib/root/Controls/PivotTable/PivotTable";
    export { PivotTableHorizontalHeader } from "lib/root/Controls/PivotTable/PivotTableHorizontalHeader";
    export { PivotTableVerticalHeader } from "lib/root/Controls/PivotTable/PivotTableVerticalHeader";
}
declare module "lib/root/Controls/InlineEditor" {
    import { Rectangle } from "lib/root/Controls/Rectangle";
    import { TextEditor } from "lib/root/Controls/TextEditor";
    export enum InlineEditorStatus {
        Success = 0,
        Warning = 1,
        Error = 2,
    }
    export class InlineEditor extends Rectangle {
        readonly editor: TextEditor;
        constructor();
        private _status;
        status: InlineEditorStatus;
    }
}
declare module "lib/root/Controls/Skins/Default/ControlSkin" {
    import { IAction } from "lib/root/Core/Delegates";
    import { IEventHandler } from "lib/root/Core/Events/IEventHandler";
    import { IControl } from "lib/root/Controls/IControl";
    import { IControlSkin } from "lib/root/Controls/IControlSkin";
    import { Skin } from "lib/root/Controls/Skins/Default/Skin";
    export abstract class ControlSkin implements IControlSkin {
        protected _skin: Skin;
        constructor(skin: Skin);
        attach(control: IControl): void;
        detach(): void;
        protected addSkinListener<TEvent>(eventHandler: IEventHandler<TEvent>, applyImmediately: boolean, updateAction: IAction): void;
        protected abstract attachStyle(control: IControl): void;
    }
}
declare module "lib/root/Controls/Skins/Default/ScrollBarSkin" {
    import { ScrollBar } from "lib/root/Controls/ScrollBar/index";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class ScrollBarSkin extends ControlSkin {
        static readonly minThickness: number;
        static readonly defaultThickness: number;
        protected attachStyle(scrollBar: ScrollBar): void;
        private getThickness(scrollBar);
        private update(scrollBar);
    }
}
declare module "lib/root/Controls/ScrollBar/ScrollBarLayout" {
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    import { ILayoutTarget } from "lib/root/Layout/ILayoutTarget";
    import { WrapChildrenLayout } from "lib/root/Layout/WrapChildrenLayout";
    import { ScrollBar } from "lib/root/Controls/ScrollBar/ScrollBar";
    export class ScrollBarLayout extends WrapChildrenLayout {
        private _scrollBar;
        constructor(target: ILayoutTarget, scrollBar: ScrollBar);
        private _contentSize;
        contentSize: number;
        protected arrangeOverride(finalSize: IVector2d): IVector2d;
        protected measureOverride(availableSize: IVector2d): IVector2d;
        private getDownRightButtonRect(sliderSize);
        private getScrollBarLength(availableSize);
        private getScrollBarThickness(availableSize);
        private getSliderRect(sliderSize);
        private getSliderSize(sliderLength, sliderThickness);
        private getSliderThumbLength(scrollBarLength, sliderLength, contentSize);
        private getSliderThumbSize(scrollBarLength, sliderLength, sliderThickness, contentSize);
        private getUpLeftButtonRect(sliderSize);
    }
}
declare module "lib/root/Controls/ScrollBar/ScrollBar" {
    import { Button, Slider } from "lib/root/Controls/index";
    import { Orientation } from "lib/root/Core/Graphics/Orientation";
    import { IVectorModel } from "lib/root/Core/Primitives/index";
    import { IUserInputControl } from "lib/root/Controls/IUserInputControl";
    import { Rectangle } from "lib/root/Controls/Rectangle";
    export class ScrollBar extends Rectangle implements IUserInputControl<IVectorModel> {
        private static readonly _shiftContent;
        private readonly _scrollBarLayout;
        constructor();
        readonly slider: Slider;
        readonly upLeftButton: Button;
        readonly downRightButton: Button;
        static readonly minSliderThumbLength: number;
        model: IVectorModel;
        contentSize: number;
        orientation: Orientation;
        private _hideButtons;
        hideButtons: boolean;
        private scrollBy(delta);
        private updateButtonsVisibility();
    }
}
declare module "lib/root/Controls/ScrollBar/index" {
    export * from "lib/root/Controls/ScrollBar/ScrollBar";
    export * from "lib/root/Controls/ScrollBar/ScrollBarLayout";
}
declare module "lib/root/Controls/ScrollPane/ScrollPaneLayout" {
    import { ScrollPane } from "lib/root/Controls/index";
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    import { ILayoutTarget, WrapChildrenLayout } from "lib/root/Layout/All";
    export class ScrollPaneLayout extends WrapChildrenLayout {
        private readonly _scrollPane;
        private readonly _scrollBarHorizontal;
        private readonly _scrollBarVertical;
        private readonly _corner;
        constructor(target: ILayoutTarget, scrollPane: ScrollPane);
        private readonly content;
        updateContentPosition(finalSize: IVector2d): void;
        protected arrangeOverride(finalSize: IVector2d): IVector2d;
        protected measureOverride(availableSize: IVector2d): IVector2d;
        private arrangeControl(control, positionOffset, size);
        private static getScrollBarDesiredLength(scrollBar);
        private static getScrollBarDesiredThickness(scrollBar);
        private static getScrollBarMinLength(scrollBar);
        private static getScrollBarThickness(scrollBar);
        private static measureControl(control, isVisible, availableSize);
        private static measureScrollBar(scrollBar, needScrollBar, availableSize, model);
    }
}
declare module "lib/root/Controls/ScrollPane/ScrollPane" {
    import { Control, Rectangle, ScrollBar } from "lib/root/Controls/index";
    export class ScrollPane extends Rectangle {
        private readonly _scrollPaneLayout;
        constructor();
        readonly scrollBarHorizontal: ScrollBar;
        readonly scrollBarVertical: ScrollBar;
        readonly corner: Rectangle;
        private _content;
        content: Control;
        private _enableHorizontalScrollBar;
        enableHorizontalScrollBar: boolean;
        private _enableVerticalScrollBar;
        enableVerticalScrollBar: boolean;
    }
}
declare module "lib/root/Controls/ScrollPane/index" {
    export * from "lib/root/Controls/ScrollPane/ScrollPane";
    export * from "lib/root/Controls/ScrollPane/ScrollPaneLayout";
}
declare module "lib/root/Controls/SearchInput" {
    import { Input } from "lib/root/Controls/index";
    export class SearchInput extends Input {
    }
}
declare module "lib/root/Core/Primitives/INumberCollectionModel" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/index";
    import { IAction1 } from "lib/root/Core/Delegates";
    import { IModel } from "lib/root/Core/Primitives/IModel";
    export interface INumberCollectionModel extends IModel<INumberCollectionModel> {
        value: IReadOnlyCollection<number>;
        bindTo(output: IAction1<IReadOnlyCollection<number>>): void;
        updateFrom(model: INumberCollectionModel): void;
    }
}
declare module "lib/root/Core/Primitives/NumberCollectionModel" {
    import { XObject } from "lib/root/Core/Primitives/index";
    import { IReadOnlyCollection } from "lib/root/Core/Collections/index";
    import { INumberCollectionModel } from "lib/root/Core/Primitives/INumberCollectionModel";
    export class NumberCollectionModel extends XObject<IReadOnlyCollection<number>> implements INumberCollectionModel {
        constructor();
        updateFrom(model: INumberCollectionModel): void;
    }
}
declare module "lib/root/Controls/Select/Select" {
    import { SelectButton, SelectSelector } from "lib/root/Controls/index";
    import { Lazy } from "lib/root/Core/Lazy";
    import { INumberCollectionModel } from "lib/root/Core/Primitives/INumberCollectionModel";
    import { UserInputControl } from "lib/root/Controls/UserInputControl";
    export class Select extends UserInputControl<INumberCollectionModel> {
        constructor();
        readonly viewControl: SelectButton;
        readonly selectorControl: Lazy<SelectSelector>;
    }
}
declare module "lib/root/Controls/Select/SelectButton" {
    import { Button } from "lib/root/Controls/index";
    import { IReadOnlyCollection } from "lib/root/Core/Collections/Collections";
    import { INumberCollectionModel } from "lib/root/Core/Primitives/INumberCollectionModel";
    import { ISelectOption } from "lib/root/Controls/ISelectOption";
    import { IUserInputControl } from "lib/root/Controls/IUserInputControl";
    export class SelectButton extends Button implements IUserInputControl<INumberCollectionModel> {
        private _emptySelectionText;
        emptySelectionText: string;
        private _buttonStyle;
        buttonStyle: boolean;
        private _options;
        options: IReadOnlyCollection<ISelectOption>;
        private _model;
        model: INumberCollectionModel;
        private updateText(selectedOptions);
    }
}
declare module "lib/root/Core/Behavior/MasterBooleanBehavior" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/index";
    import { IBoolean } from "lib/root/Core/Primitives/index";
    /**
     * Implements the behavior of the 'master' checkbox. Changing the master IBoolean value results in setting the slave
     * values, and changing any slave IBoolean, if necessary, sets the master value.
     */
    export class MasterBooleanBehavior {
        readonly master: IBoolean;
        readonly slaves: IReadOnlyCollection<IBoolean>;
        constructor(master: IBoolean, slaves: IReadOnlyCollection<IBoolean>);
        free(): void;
        private _masterChangedListener;
        private _slaveChangedListener;
        private getMasterValue();
        private updateMasterValue();
        private updateSlaveValues();
    }
}
declare module "lib/root/Controls/Select/SelectSelector" {
    import { BaseSelect, Button, Control, ScrollPane, SearchInput, StackPanel } from "lib/root/Controls/index";
    import { IAction1 } from "lib/root/Core/Delegates";
    import { Orientation } from "lib/root/Core/Graphics/Orientation";
    import { INumberCollectionModel } from "lib/root/Core/Primitives/INumberCollectionModel";
    import { IUserInputControl } from "lib/root/Controls/IUserInputControl";
    export class SelectSelector extends Control implements IUserInputControl<INumberCollectionModel> {
        private _masterCheckBoxBehavior;
        constructor();
        readonly baseSelect: BaseSelect;
        readonly searchInput: SearchInput;
        readonly masterCheckBox: Button;
        readonly scrollPane: ScrollPane;
        readonly optionalContent: StackPanel;
        private _model;
        model: INumberCollectionModel;
        private _enableFilter;
        enableFilter: boolean;
        orientation: Orientation;
        private _maxSelectOptionCountToView;
        maxSelectOptionCountToView: number;
        reset(): void;
        private _applyAction;
        setApplyAction(action: IAction1<boolean>): void;
        private initMasterCheckBox();
        private updateMasterCheckBox();
        private updateOptionalContent();
    }
}
declare module "lib/root/Controls/Select/index" {
    export * from "lib/root/Controls/Select/Select";
    export * from "lib/root/Controls/Select/SelectButton";
    export * from "lib/root/Controls/Select/SelectSelector";
}
declare module "lib/root/Controls/UniversalSelect/UniversalSelect" {
    import { Control, IUniversalSelectOption, Select, UniversalSelectType } from "lib/root/Controls/index";
    import { IReadOnlyCollection } from "lib/root/Core/Collections/Collections";
    import { IMap } from "lib/root/Core/Delegates";
    import { INumberCollectionModel } from "lib/root/Core/Primitives/INumberCollectionModel";
    import { UserInputControlStyle } from "lib/root/Controls/UserInputControlStyle";
    export class UniversalSelect<TValue = string> extends Control {
        constructor();
        static create(optionsTexts: string[], type: UniversalSelectType): UniversalSelect;
        static createNumeric(options: number[], type: UniversalSelectType): UniversalSelect<number>;
        static createWithValues<TValueType>(options: [string, TValueType][], type: UniversalSelectType): UniversalSelect<TValueType>;
        static withMapper<TOptionType, TValueType>(options: TOptionType[], type: UniversalSelectType, mapper: IMap<TOptionType, [string, TValueType]>): UniversalSelect<TValueType>;
        readonly select: Select;
        private _type;
        type: UniversalSelectType;
        multiple: boolean;
        private _options;
        options: IReadOnlyCollection<IUniversalSelectOption<TValue>>;
        style: UserInputControlStyle;
        model: INumberCollectionModel;
        selectedIndex: number;
        readonly selectedValue: TValue;
        selectedIndices: IReadOnlyCollection<number>;
        readonly selectedValues: IReadOnlyCollection<TValue>;
        columnCount: number;
        emptySelectionText: string;
        enableHorizontalScrollBar: boolean;
        enableVerticalScrollBar: boolean;
        maxSelectOptionCountToView: number;
        private update();
        private static createButtonOptions<TValueType>(type, options);
    }
}
declare module "lib/root/Controls/UniversalSelect/UniversalSelectType" {
    export enum UniversalSelectType {
        CheckBox = 0,
        Radio = 1,
        Switch = 2,
        Tab = 3,
        PrimaryButton = 4,
        DefaultButton = 5,
        InformationCard = 6,
    }
}
declare module "lib/root/Controls/UniversalSelect/UniversalSelectOption/IUniversalSelectOption" {
    export interface IUniversalSelectOption<TValue = string> {
        text: string;
        description: string;
        hintText: string;
        iconName: string;
        iconColor: number;
        iconBackgroundColor: number;
        value: TValue;
    }
}
declare module "lib/root/Controls/UniversalSelect/UniversalSelectOption/UniversalSelectOption" {
    import { IUniversalSelectOption } from "lib/root/Controls/UniversalSelect/UniversalSelectOption/IUniversalSelectOption";
    export class UniversalSelectOption<TValue = string> implements IUniversalSelectOption<TValue> {
        private _text;
        text: string;
        private _description;
        description: string;
        private _hintText;
        hintText: string;
        private _iconName;
        iconName: string;
        private _iconColor;
        iconColor: number;
        private _iconBackgroundColor;
        iconBackgroundColor: number;
        private _value;
        value: TValue;
        static create<TValueType = string>(text: string, description?: string, hintText?: string, iconName?: string, iconColor?: number, iconBackgroundColor?: number): IUniversalSelectOption<TValueType>;
        static createFromUniversalSelectOption(universalSelectOption: IUniversalSelectOption): IUniversalSelectOption;
    }
}
declare module "lib/root/Controls/UniversalSelect/UniversalSelectOption/index" {
    export * from "lib/root/Controls/UniversalSelect/UniversalSelectOption/UniversalSelectOption";
    export * from "lib/root/Controls/UniversalSelect/UniversalSelectOption/IUniversalSelectOption";
}
declare module "lib/root/Controls/UniversalSelect/index" {
    export * from "lib/root/Controls/UniversalSelect/UniversalSelect";
    export * from "lib/root/Controls/UniversalSelect/UniversalSelectType";
    export * from "lib/root/Controls/UniversalSelect/UniversalSelectOption/index";
}
declare module "lib/root/Controls/index" {
    export * from "lib/root/Controls/Control";
    export * from "lib/root/Controls/IControl";
    export * from "lib/root/Controls/Button/index";
    export * from "lib/root/Controls/Link";
    export * from "lib/root/Controls/Icon";
    export * from "lib/root/Controls/Input/index";
    export * from "lib/root/Controls/Badge";
    export * from "lib/root/Controls/Text";
    export * from "lib/root/Controls/Image";
    export * from "lib/root/Controls/Switch";
    export * from "lib/root/Controls/RadioButton";
    export * from "lib/root/Controls/CheckBox";
    export * from "lib/root/Controls/TextEditor";
    export * from "lib/root/Controls/Popup";
    export * from "lib/root/Controls/Tooltip";
    export * from "lib/root/Controls/Input/index";
    export * from "lib/root/Controls/Rectangle";
    export * from "lib/root/Controls/Scrollable";
    export * from "lib/root/Controls/Grid/Grid";
    export * from "lib/root/Controls/Grid/GridCell";
    export * from "lib/root/Controls/Grid/GridRow";
    export * from "lib/root/Controls/Table/Table";
    export * from "lib/root/Controls/Slider/Slider";
    export * from "lib/root/Controls/PaginationSelect/index";
    export * from "lib/root/Controls/TimePicker/index";
    export * from "lib/root/Controls/ColorPicker/index";
    export * from "lib/root/Controls/DatePicker/index";
    export * from "lib/root/Controls/DatePeriod/DatePeriod";
    export * from "lib/root/Controls/Draggable";
    export * from "lib/root/Controls/PopupMenuButton";
    export * from "lib/root/Controls/PopupWindow";
    export * from "lib/root/Controls/Menu";
    export * from "lib/root/Controls/MenuItem";
    export * from "lib/root/Controls/Container";
    export * from "lib/root/Controls/StackPanel";
    export * from "lib/root/Controls/WrapPanel";
    export * from "lib/root/Controls/DockPanel";
    export * from "lib/root/Controls/Panel";
    export * from "lib/root/Controls/BaseSelect";
    export * from "lib/root/Controls/InformationCard";
    export * from "lib/root/Controls/Alert/index";
    export * from "lib/root/Controls/TreeView/index";
    export * from "lib/root/Controls/ExpandCollapseText";
    export * from "lib/root/Controls/PivotTable/index";
    export * from "lib/root/Controls/InlineEditor";
    export * from "lib/root/Controls/ScrollBar/index";
    export * from "lib/root/Controls/ScrollPane/index";
    export * from "lib/root/Controls/SearchInput";
    export * from "lib/root/Controls/Select/index";
    export * from "lib/root/Controls/ISelectOption";
    export * from "lib/root/Controls/UniversalSelect/index";
}
declare module "lib/root/Core/Collections/FunctionDictionary" {
    import { IFunction } from "lib/root/Core/Delegates";
    import { Dictionary } from "lib/root/Core/Collections/Dictionary";
    export class FunctionDictionary<TValue> extends Dictionary<IFunction, TValue> {
        constructor(pairs?: [IFunction, TValue][]);
        getByConstructor(key: object): TValue;
    }
}
declare module "lib/root/Core/Font" {
    import { FontWeight } from "lib/root/Core/FontWeight";
    import { IFont } from "lib/root/Core/IFont";
    export class Font implements IFont {
        private _cachedString;
        constructor(fontFamily: string, fontSize: number, fontWeight?: FontWeight, isItalic?: boolean);
        private _fontFamily;
        readonly fontFamily: string;
        private _fontSize;
        readonly fontSize: number;
        private _fontWeight;
        readonly fontWeight: FontWeight;
        private _isItalic;
        isItalic: boolean;
        toString(): string;
        private updateCachedString();
    }
}
declare module "lib/root/Core/Graphics/Thickness" {
    import { IThickness } from "lib/root/Core/Graphics/IThickness";
    export class Thickness implements IThickness {
        constructor(left: number, top: number, right: number, bottom: number);
        clone(): IThickness;
        static all(value: number): IThickness;
        static horizontal(left: number, right: number): IThickness;
        static orientations(horizontal: number, vertical: number): IThickness;
        static vertical(top: number, bottom: number): IThickness;
        private _left;
        left: number;
        private _top;
        top: number;
        private _right;
        right: number;
        private _bottom;
        bottom: number;
        readonly vertical: number;
        readonly horizontal: number;
    }
}
declare module "lib/root/Render/Filters/IFilter" {
    export interface IFilter {
        toString(): string;
    }
}
declare module "lib/root/Render/Filters/Filter" {
    import { IFilter } from "lib/root/Render/Filters/IFilter";
    export abstract class Filter implements IFilter {
        private _stringValue;
        toString(): string;
        protected updateString(): void;
        protected abstract generateString(): string;
    }
}
declare module "lib/root/Render/Filters/FilterCollection" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/Collections";
    import { IFilter } from "lib/root/Render/Filters/IFilter";
    import { IFilterCollection } from "lib/root/Render/Filters/IFilterCollection";
    export class FilterCollection implements IFilterCollection {
        private _filters;
        constructor(filters: IReadOnlyCollection<IFilter>);
        toString(): string;
        getBoxShadowString(): string;
    }
}
declare module "lib/root/Render/Filters/DropShadowFilter" {
    import { IColor } from "lib/root/Core/IColor";
    import { Filter } from "lib/root/Render/Filters/Filter";
    import { IFilterCollection } from "lib/root/Render/Filters/IFilterCollection";
    export class DropShadowFilter extends Filter {
        constructor();
        static create(offsetX: number, offsetY: number, blurRadius?: number, color?: IColor): DropShadowFilter;
        static createCollection(offsetX: number, offsetY: number, blurRadius?: number, color?: IColor): IFilterCollection;
        private _offsetX;
        offsetX: number;
        private _offsetY;
        offsetY: number;
        private _blurRadius;
        blurRadius: number;
        private _color;
        color: IColor;
        protected generateString(): string;
    }
}
declare module "lib/root/Data/IDataTransferObject" {
    export interface IDataTransferObject {
        applicationData: any;
    }
}
declare module "lib/root/Controls/Calendar/DataStorage/Models/TypeInfo/IMetaStringDataDto" {
    import { IDataTransferObject } from "lib/root/Data/IDataTransferObject";
    export interface IMetaStringDataDto extends IDataTransferObject {
        value: string;
        redefinition?: boolean;
    }
}
declare module "lib/root/Controls/Calendar/DataStorage/Models/TypeInfo/ITypeInfoDto" {
    export interface ITypeInfoDto {
        typeName: string;
    }
}
declare module "lib/root/Controls/Calendar/CalendarCellContent" {
    import { DateTime } from "lib/root/Core/DateTime";
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    import { Control } from "lib/root/Controls/Control";
    import { Rectangle } from "lib/root/Controls/Rectangle";
    import { IMetaStringDataDto } from "lib/root/Controls/Calendar/DataStorage/Models/TypeInfo/IMetaStringDataDto";
    import { ITypeInfoDto } from "lib/root/Controls/Calendar/DataStorage/Models/TypeInfo/ITypeInfoDto";
    export class CalendarCellContent extends Rectangle {
        readonly contentHeader: Rectangle;
        private _date;
        constructor(typeInfo: ITypeInfoDto, data: string | IMetaStringDataDto, date?: DateTime, contentHeader?: Rectangle);
        dataUpdate: EventHandler;
        private _typeInfo;
        readonly typeInfo: ITypeInfoDto;
        readonly date: DateTime;
        private _data;
        data: string | IMetaStringDataDto;
        private _content;
        content: Control;
        private _isDisabled;
        isDisabled: boolean;
    }
}
declare module "lib/root/Controls/Calendar/CalendarDatePeriod" {
    export class CalendarDatePeriod {
        constructor(startTimestampDays: number, daysCount: number);
        private _startTimestampDays;
        readonly startTimestampDays: number;
        private _daysCount;
        daysCount: number;
    }
}
declare module "lib/root/Controls/Table/Header/WeekdayTableHeader" {
    import { SimpleTableHeader } from "lib/root/Controls/Table/Header/SimpleTableHeader";
    export class WeekdayTableHeader extends SimpleTableHeader {
        private static _weekdayCount;
        constructor();
        getCellCount(): number;
        getMonthStartCell(month: number, year: number): number;
        protected update(): void;
    }
}
declare module "lib/root/Controls/Calendar/CalendarMode" {
    export enum CalendarMode {
        Unknown = -1,
        HorizontalDays = 0,
        HorizontalMonths = 1,
        VerticalDays = 2,
        VerticalMonths = 3,
    }
}
declare module "lib/root/Core/ArrayExtensions" {
    export class ArrayExtensions {
        static cartesianProductOf(arrayOfArrays: any[][]): any[];
    }
}
declare module "lib/root/Controls/Calendar/DataStorage/Models/DimensionCalendar/IMeasureDto" {
    import { ITypeInfoDto } from "lib/root/Controls/Calendar/DataStorage/Models/TypeInfo/ITypeInfoDto";
    export interface IMeasureDto {
        id: string;
        name: string;
        abbreviation: string;
        description: string;
        sample: string;
        icon: string;
        typeInfo: ITypeInfoDto;
    }
}
declare module "lib/root/Controls/Calendar/DataStorage/Measure" {
    import { Dimension } from "lib/root/Controls/Calendar/DataStorage/Dimension";
    import { IMeasureDto } from "lib/root/Controls/Calendar/DataStorage/Models/DimensionCalendar/IMeasureDto";
    import { ITypeInfoDto } from "lib/root/Controls/Calendar/DataStorage/Models/TypeInfo/ITypeInfoDto";
    export class Measure {
        private _measureDto;
        constructor(dimension: Dimension, measure: IMeasureDto);
        private _dimension;
        readonly dimension: Dimension;
        readonly id: string;
        readonly name: string;
        readonly shortName: string;
        readonly description: string;
        readonly sample: string;
        readonly abbreviation: string;
        readonly icon: string;
        readonly typeInfo: ITypeInfoDto;
        isAvailable(): boolean;
        isAvailableByMeasure(measure: Measure): boolean;
    }
}
declare module "lib/root/Controls/Calendar/DataStorage/Models/DimensionCalendar/IDimensionDto" {
    import { IMeasureDto } from "lib/root/Controls/Calendar/DataStorage/Models/DimensionCalendar/IMeasureDto";
    export interface IDimensionDto {
        id: string;
        name: string;
        measures: IMeasureDto[];
        selectedMeasures: string[];
        activeMeasureId: string;
    }
}
declare module "lib/root/Controls/Calendar/DataStorage/Dimension" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { DimensionData } from "lib/root/Controls/Calendar/DataStorage/DimensionData";
    import { Measure } from "lib/root/Controls/Calendar/DataStorage/Measure";
    import { IDimensionDto } from "lib/root/Controls/Calendar/DataStorage/Models/DimensionCalendar/IDimensionDto";
    export class Dimension {
        private _dimensionDto;
        private _activeDimensionIds;
        constructor(dimensionData: DimensionData, dimension: IDimensionDto, activeDimensionIds: string[]);
        private _dimensionData;
        readonly dimensionData: DimensionData;
        readonly id: string;
        readonly name: string;
        private _measures;
        readonly measures: IReadOnlyCollection<Measure>;
        readonly selectedMeasures: Measure[];
        selectedMeasureIds: string[];
        activeMeasureId: string;
        readonly activeMeasure: Measure;
        isActive: boolean;
    }
}
declare module "lib/root/Controls/Calendar/DataStorage/Models/DimensionCalendar/IDimensionMeasureIdDto" {
    export interface IDimensionMeasureIdDto {
        dimensionId: string;
        measureId: string;
    }
}
declare module "lib/root/Controls/Calendar/DataStorage/Models/DimensionCalendar/IDimensionConfigurationDto" {
    import { IDimensionMeasureIdDto } from "lib/root/Controls/Calendar/DataStorage/Models/DimensionCalendar/IDimensionMeasureIdDto";
    export interface IDimensionConfigurationDto {
        dimensionMeasures: IDimensionMeasureIdDto[];
    }
}
declare module "lib/root/Controls/Calendar/DataStorage/DimensionConfigurationSet" {
    import { DimensionData } from "lib/root/Controls/Calendar/DataStorage/DimensionData";
    import { Measure } from "lib/root/Controls/Calendar/DataStorage/Measure";
    import { IDimensionConfigurationDto } from "lib/root/Controls/Calendar/DataStorage/Models/DimensionCalendar/IDimensionConfigurationDto";
    export class DimensionConfigurationSet {
        private _configurationsDto;
        private _dimensionData;
        constructor(configurations: IDimensionConfigurationDto[], dimensionData: DimensionData);
        isMeasureAvailable(measure: Measure): boolean;
        isMeasureAvailableByMeasure(measure: Measure, rootMeasure: Measure): boolean;
        private static haveEqualId(measureId, measure);
        private static isMeasureAllowed(measure, measures);
        private getAllowedDimensionMeasures(measure);
    }
}
declare module "lib/root/Controls/Calendar/DataStorage/Models/DimensionCalendar/IEditorSettingsDto" {
    export interface IEditorSettingsDto {
        title: string;
        selectedDimensions: string[];
        dimensionSelectors: string[];
        editSingleDimensionText: string;
        applyToAllDimensionsText: string;
    }
}
declare module "lib/root/Controls/Calendar/DataStorage/EditorSettings" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { Dimension } from "lib/root/Controls/Calendar/DataStorage/Dimension";
    import { DimensionData } from "lib/root/Controls/Calendar/DataStorage/DimensionData";
    import { IEditorSettingsDto } from "lib/root/Controls/Calendar/DataStorage/Models/DimensionCalendar/IEditorSettingsDto";
    export class EditorSettings {
        readonly title: string;
        readonly eraserText: string;
        readonly eraserIcon: string;
        private _dimensionData;
        private _editorSettingsDto;
        private _selectedDimensions;
        private _dimensionSelectors;
        constructor(dimensionData: DimensionData, editorSettings: IEditorSettingsDto);
        readonly selectedDimensions: IReadOnlyCollection<Dimension>;
        readonly dimensionSelectors: IReadOnlyCollection<Dimension>;
        getInactiveDimensionSelectors(): IReadOnlyCollection<Dimension>;
        readonly editSingleDimensionText: string;
        readonly applyToAllDimensionsText: string;
        private filterDimensions(filter);
    }
}
declare module "lib/root/Controls/Calendar/DataStorage/Models/DimensionCalendar/IDataBlockDto" {
    export interface IDataBlockKey {
        [pointId: string]: string;
    }
    export interface IDataBlockDto {
        data: string[];
        redefinitions: boolean[];
        dimensionPoints: IDataBlockKey;
        startDate: number;
        daysCount: number;
    }
}
declare module "lib/root/Controls/Calendar/DataStorage/Models/DimensionCalendar/IDimensionDataDto" {
    import { IDimensionConfigurationDto } from "lib/root/Controls/Calendar/DataStorage/Models/DimensionCalendar/IDimensionConfigurationDto";
    import { IDimensionDto } from "lib/root/Controls/Calendar/DataStorage/Models/DimensionCalendar/IDimensionDto";
    import { IEditorSettingsDto } from "lib/root/Controls/Calendar/DataStorage/Models/DimensionCalendar/IEditorSettingsDto";
    export interface IDimensionDataDto {
        mode: number;
        isReadOnly: boolean;
        allowExpandCollapse: boolean;
        expandCollapseText: string;
        overrideValueHintText: string;
        tableDataIncompleteText: string;
        dimensions: IDimensionDto[];
        leftDimensions: string[];
        topDimensions: string[];
        primaryDimensionId: string;
        selectedDimensions: string[];
        configurations: IDimensionConfigurationDto[];
        editorSettings: IEditorSettingsDto;
        hasRedefinition: boolean;
    }
}
declare module "lib/root/Controls/Calendar/DataStorage/DimensionData" {
    import { CalendarMode } from "lib/root/Controls/Calendar/CalendarMode";
    import { ITreeNodeReadOnlyCollection } from "lib/root/Core/Collections/index";
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { Dimension } from "lib/root/Controls/Calendar/DataStorage/Dimension";
    import { DimensionConfigurationSet } from "lib/root/Controls/Calendar/DataStorage/DimensionConfigurationSet";
    import { EditorSettings } from "lib/root/Controls/Calendar/DataStorage/EditorSettings";
    import { Measure } from "lib/root/Controls/Calendar/DataStorage/Measure";
    import { IDataBlockKey } from "lib/root/Controls/Calendar/DataStorage/Models/DimensionCalendar/IDataBlockDto";
    import { IDimensionDataDto } from "lib/root/Controls/Calendar/DataStorage/Models/DimensionCalendar/IDimensionDataDto";
    import { ITypeInfoDto } from "lib/root/Controls/Calendar/DataStorage/Models/TypeInfo/ITypeInfoDto";
    export class DimensionData {
        private _data;
        private _dimensions;
        private _dimensionConfigurationSet;
        private _editorSettings;
        static specialValueDataClear: number;
        static specialValueDataDoNotChange: number;
        constructor(dimensionData: IDimensionDataDto);
        readonly data: IDimensionDataDto;
        readonly leftDimensions: IReadOnlyCollection<string>;
        readonly topDimensions: IReadOnlyCollection<string>;
        readonly mode: CalendarMode;
        readonly isReadOnly: boolean;
        readonly allowExpandCollapse: boolean;
        readonly expandCollapseText: string;
        readonly overrideValueHintText: string;
        readonly tableDataIncompleteText: string;
        readonly hasRedefinition: boolean;
        readonly dimensions: IReadOnlyCollection<Dimension>;
        readonly filterDimensions: IReadOnlyCollection<Dimension>;
        readonly primaryDimension: Dimension;
        activeDimensions: IReadOnlyCollection<Dimension>;
        readonly configurationSet: DimensionConfigurationSet;
        readonly editorSettings: EditorSettings;
        getSelectedMeasures(activeDimensionIndex: number): Measure[];
        getActivePoints(onlyForActiveMeasure?: boolean): IDataBlockKey[];
        clone(): DimensionData;
        getTypeInfo(firstMeasureIndex: number, secondMeasureIndex: number): ITypeInfoDto;
        findDimension(id: string): Dimension;
        getDataBlockKey(measures: IReadOnlyCollection<Measure>): IDataBlockKey;
        static getAvailableMeasures(dimension1: Dimension, dimension2?: Dimension): ITreeNodeReadOnlyCollection<Measure>;
    }
}
declare module "lib/root/Controls/DimensionCalendar/MonthCalendarTreeMenu" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { DateTime } from "lib/root/Core/DateTime";
    import { DimensionData } from "lib/root/Controls/Calendar/DataStorage/DimensionData";
    import { TreeMenuHeader } from "lib/root/Controls/Table/Header/TreeMenuHeader";
    import { ITableHeader } from "lib/root/Controls/Table/ITableHeader";
    import { TreeViewNode } from "lib/root/Controls/TreeView/TreeViewNode";
    export class MonthCalendarTreeMenu extends TreeMenuHeader implements ITableHeader {
        private _data;
        update(value: DimensionData): void;
        getMonthCellIndices(month: number): IReadOnlyCollection<number>;
        getNode(index: number): TreeViewNode;
        getMonthIndex(cellIndex: number): number;
        getData(): IReadOnlyCollection<TreeViewNode>;
        private _startDate;
        startDate: DateTime;
        private _endDate;
        endDate: DateTime;
        private addChildren(level, targetNodes);
    }
}
declare module "lib/root/Controls/DimensionCalendar/MonthCalendar" {
    import { Control, Grid, Table } from "lib/root/Controls/index";
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { DateTime } from "lib/root/Core/DateTime";
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    import { IStickyScrollElement } from "lib/root/Core/IStickyScrollElement";
    import { CalendarDatePeriod } from "lib/root/Controls/Calendar/CalendarDatePeriod";
    import { WeekdayTableHeader } from "lib/root/Controls/Table/Header/WeekdayTableHeader";
    import { MonthCalendarTreeMenu } from "lib/root/Controls/DimensionCalendar/MonthCalendarTreeMenu";
    export class MonthCalendar extends Control {
        private _table;
        private _dateHeader;
        private _treeHeader;
        constructor();
        readonly stickyScrollElement: IStickyScrollElement;
        readonly table: Table;
        getCellsByDate(date: DateTime): IReadOnlyCollection<IVector2d>;
        startDate: DateTime;
        endDate: DateTime;
        gridUpdate: EventHandler;
        setDateRange(startDate: DateTime, endDate: DateTime): void;
        readonly grid: Grid;
        readonly treeHeader: MonthCalendarTreeMenu;
        readonly dateHeader: WeekdayTableHeader;
        selectedDates(): IReadOnlyCollection<DateTime>;
        selectedDatePeriods(): IReadOnlyCollection<CalendarDatePeriod>;
        private getDateByCell(cell);
        private getRowCells(index);
    }
}
declare module "lib/root/Core/Time" {
    export class Time {
        private constructor();
        private _milliseconds;
        readonly milliseconds: number;
        static zero(): Time;
        static milliseconds(count: number): Time;
        static seconds(count: number): Time;
        static minutes(count: number): Time;
        static hours(count: number): Time;
    }
}
declare module "lib/root/Core/Timer" {
    import { IAction, IFunc } from "lib/root/Core/Delegates";
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    import { Time } from "lib/root/Core/Time";
    export class Timer {
        private _intervalId;
        private _interval;
        constructor(interval: Time);
        start(): void;
        stop(): void;
        readonly isRunning: boolean;
        private _started;
        readonly started: EventHandler;
        private _stopped;
        readonly stopped: EventHandler;
        private _elapsed;
        readonly elapsed: EventHandler;
        static delay(action: IAction, duration: Time): Timer;
        static wait(stopCondition: IFunc<boolean>, maxIterationCount?: number): Timer;
        static zeroDelay(action: IAction): Timer;
        private static repeat(action, duration, stopCondition, maxIterationCount?);
    }
}
declare module "lib/root/Controls/Calendar/DataStorage/Models/EventCalendar/EventCalendarViewType" {
    export enum EventCalendarViewType {
        ByCategory = 1,
        ByFloor = 2,
        ByNameDescending = 3,
        ByNameAscending = 4,
    }
}
declare module "lib/root/Controls/Calendar/DataStorage/Models/EventCalendar/IEventCalendarResponseDto" {
    import { EventCalendarViewType, ITimelineDataDto, ITimelineDto, ITimelineEventDto, ITimelineEventTypeDto } from "lib/root/Controls/Calendar/DataStorage/Models/EventCalendar/Types";
    export interface IEventCalendarResponseDto {
        timelines: ITimelineDto[];
        eventTypes: ITimelineEventTypeDto[];
        defaultEventStartTime: number;
        defaultEventEndTime: number;
        timezoneOffset: number;
        events: ITimelineEventDto[];
        data: ITimelineDataDto[];
        view: EventCalendarViewType;
    }
}
declare module "lib/root/Controls/Calendar/DataStorage/Models/EventCalendar/ITimelineDataDto" {
    import { IMetaStringDataDto } from "lib/root/Controls/Calendar/DataStorage/Models/TypeInfo/IMetaStringDataDto";
    export interface ITimelineDataDto {
        timelineId: string;
        startDate: number;
        data: IMetaStringDataDto[];
    }
}
declare module "lib/root/Controls/Calendar/DataStorage/Models/EventCalendar/TimelineViewType" {
    export enum TimelineViewType {
        Any = 0,
        ByCategory = 1,
        ByFloor = 2,
        ByName = 3,
    }
}
declare module "lib/root/Controls/Calendar/DataStorage/Models/EventCalendar/ITimelineDto" {
    import { IDataTransferObject } from "lib/root/Data/IDataTransferObject";
    import { TimelineViewType } from "lib/root/Controls/Calendar/DataStorage/Models/EventCalendar/TimelineViewType";
    import { ITypeInfoDto } from "lib/root/Controls/Calendar/DataStorage/Models/TypeInfo/ITypeInfoDto";
    export interface ITimelineTooltip {
        [key: string]: string;
    }
    export interface ITimelineDto extends IDataTransferObject {
        id: string;
        name: string;
        markerText: string;
        markerColor: number;
        floor: string;
        typeInfo: ITypeInfoDto;
        children: string[];
        sortIndex: number;
        viewType: TimelineViewType;
        shortCategoryName: string;
        tooltip: ITimelineTooltip;
        icon: string;
        iconColor: number;
    }
}
declare module "lib/root/Controls/Calendar/DataStorage/Models/EventCalendar/OverlayValueStatus" {
    export enum OverlayValueStatus {
        Normal = 0,
        Error = 1,
    }
}
declare module "lib/root/Controls/Calendar/DataStorage/Models/EventCalendar/ITimelineEventDto" {
    import { IDataTransferObject } from "lib/root/Data/IDataTransferObject";
    import { OverlayValueStatus } from "lib/root/Controls/Calendar/DataStorage/Models/EventCalendar/OverlayValueStatus";
    export interface ITimelineEventDto extends IDataTransferObject {
        typeId: string;
        id: string;
        timelineId: string;
        name: string;
        value: string;
        overlayValueStatus: OverlayValueStatus;
        startTime: number;
        endTime: number;
        defaultStartTime: number;
        defaultEndTime: number;
        animateOnLoad: boolean;
        tooltipHtml: string;
    }
}
declare module "lib/root/Controls/Calendar/DataStorage/Models/EventCalendar/ITimelineEventTypeDto" {
    export interface ITimelineEventTypeDto {
        id: string;
        color: number;
        text: string;
        showDefaultEventTimeOffsets: boolean;
    }
}
declare module "lib/root/Controls/Calendar/DataStorage/Models/EventCalendar/ITimelineSortOrderDto" {
    export interface ITimelineSortOrderDto {
        id: string;
        sortIndex: number;
    }
}
declare module "lib/root/Controls/Calendar/DataStorage/Models/EventCalendar/IEventCalendarReloadMessageDto" {
    export interface IEventCalendarReloadMessageDto {
        startDate: number;
        endDate: number;
        fullReload: boolean;
    }
}
declare module "lib/root/Controls/Calendar/DataStorage/Models/EventCalendar/Types" {
    export { EventCalendarViewType } from "lib/root/Controls/Calendar/DataStorage/Models/EventCalendar/EventCalendarViewType";
    export { IEventCalendarResponseDto } from "lib/root/Controls/Calendar/DataStorage/Models/EventCalendar/IEventCalendarResponseDto";
    export { ITimelineDataDto } from "lib/root/Controls/Calendar/DataStorage/Models/EventCalendar/ITimelineDataDto";
    export { ITimelineDto, ITimelineTooltip } from "lib/root/Controls/Calendar/DataStorage/Models/EventCalendar/ITimelineDto";
    export { ITimelineEventDto } from "lib/root/Controls/Calendar/DataStorage/Models/EventCalendar/ITimelineEventDto";
    export { ITimelineEventTypeDto } from "lib/root/Controls/Calendar/DataStorage/Models/EventCalendar/ITimelineEventTypeDto";
    export { ITimelineSortOrderDto } from "lib/root/Controls/Calendar/DataStorage/Models/EventCalendar/ITimelineSortOrderDto";
    export { OverlayValueStatus } from "lib/root/Controls/Calendar/DataStorage/Models/EventCalendar/OverlayValueStatus";
    export { TimelineViewType } from "lib/root/Controls/Calendar/DataStorage/Models/EventCalendar/TimelineViewType";
    export { IEventCalendarReloadMessageDto } from "lib/root/Controls/Calendar/DataStorage/Models/EventCalendar/IEventCalendarReloadMessageDto";
}
declare module "lib/root/Controls/Table/Header/IDateTableHeader" {
    import { DateTime } from "lib/root/Core/DateTime";
    import { GridCell } from "lib/root/Controls/Grid/GridCell";
    import { TableHeader } from "lib/root/Controls/Table/Header/TableHeader";
    export interface IDateTableHeader extends TableHeader {
        readonly startDate: Readonly<DateTime>;
        readonly endDate: Readonly<DateTime>;
        setDateRange(startDate: DateTime, endDate: DateTime): void;
        getDateByCell(cell: GridCell): DateTime;
    }
}
declare module "lib/root/Controls/Table/Header/DateTableHeader" {
    import { DateTime } from "lib/root/Core/DateTime";
    import { GridCell } from "lib/root/Controls/Grid/GridCell";
    import { IDateTableHeader } from "lib/root/Controls/Table/Header/IDateTableHeader";
    import { SimpleTableHeader } from "lib/root/Controls/Table/Header/SimpleTableHeader";
    export abstract class DateTableHeader extends SimpleTableHeader implements IDateTableHeader {
        constructor();
        protected _startDate: DateTime;
        readonly startDate: DateTime;
        protected _endDate: DateTime;
        endDate: DateTime;
        getDateByCell(cell: GridCell): DateTime;
        setDateRange(startDate: DateTime, endDate: DateTime): void;
        getCellCount(): number;
    }
}
declare module "lib/root/Controls/Table/Header/DateMultilineTableHeader" {
    import { StackPanel } from "lib/root/Controls/index";
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    import { DateTableHeader } from "lib/root/Controls/Table/Header/DateTableHeader";
    export class DateMultilineTableHeader extends DateTableHeader {
        private _mainStackPanel;
        private _monthNamesPanel;
        constructor();
        getCellRowHeight(row?: number): number;
        readonly mainStackPanel: StackPanel;
        readonly monthNamesPanel: StackPanel;
        protected update(): void;
        updated: EventHandler;
    }
}
declare module "lib/root/Controls/EventCalendar/CurrentTimeIndicator" {
    import { Control } from "lib/root/Controls/index";
    export class CurrentTimeIndicator extends Control {
        private _rectangle;
        private _icon;
        private _panel;
        private _iconSize;
        constructor();
        height: number;
    }
}
declare module "lib/root/Core/Json" {
    export class Json {
        static assign(object: any, jsonObject: any): void;
        static parse(response: string): any;
    }
}
declare module "lib/root/Core/Net/Url" {
    export class Url {
        static dateFormat: string;
        constructor(address: string);
        private _address;
        address: string;
        set<TValue>(name: string, value: TValue): Url;
        getString(name: string, defaultValue?: string): string;
        getDecimalInteger(name: string, defaultValue?: number): number;
        getBoolean(name: string, defaultValue?: boolean): boolean;
        static buildQueryString(paramsObject: any): string;
        static changeProtocol(absoluteUrl: string, protocol: string): string;
        static getAbsoluteUrl(url: string): string;
        static getStringValue(value: any): string;
        private static parseQueryString(queryString);
        private getParams();
        private getUrlInfo();
        private setParams(params);
    }
}
declare module "lib/root/Core/Net/WebSocket/WebSocketClient" {
    import { WebSocketClientState, WebSocketDisconnectEvent, WebSocketMessageEvent } from "lib/root/Core/Net/WebSocket/index";
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    import { GenericEventHandler } from "lib/root/Core/Events/GenericEventHandler";
    import { Time } from "lib/root/Core/Time";
    export class WebSocketDisconnectEventHandler extends GenericEventHandler<WebSocketDisconnectEvent> {
    }
    export class WebSocketMessageEventHandler extends GenericEventHandler<WebSocketMessageEvent> {
    }
    export class WebSocketClient {
        private static readonly _webSocketApiPath;
        private static readonly _webSocketNormalCloseCode;
        private readonly _url;
        private _webSocket;
        private _reconnectAttemptCount;
        constructor(hubId: string, webSocketProtocol?: string);
        private _autoReconnectInterval;
        autoReconnectInterval: Time;
        private _state;
        readonly state: WebSocketClientState;
        connect(): void;
        disconnect(): void;
        send(message: string): void;
        readonly stateChanged: EventHandler;
        readonly connected: EventHandler;
        readonly reconnected: EventHandler;
        readonly errorReceived: EventHandler;
        readonly disconnected: WebSocketDisconnectEventHandler;
        readonly messageReceived: WebSocketMessageEventHandler;
        private checkStateChange();
        private getWebSocketProtocol(absoluteUrl);
        private onClose(event);
        private onError(event);
        private onMessage(event);
        private onOpen();
        private processSocketEvent(action);
        private reconnect();
    }
}
declare module "lib/root/Core/Net/WebSocket/WebSocketDisconnectEvent" {
    export class WebSocketDisconnectEvent {
        constructor(code: number, reason: string, wasClean: boolean);
        readonly code: number;
        readonly reason: string;
        readonly wasClean: boolean;
    }
}
declare module "lib/root/Core/Net/WebSocket/WebSocketMessageEvent" {
    export class WebSocketMessageEvent {
        constructor(message: string);
        readonly message: string;
    }
}
declare module "lib/root/Core/Net/WebSocket/WebSocketClientState" {
    export enum WebSocketClientState {
        Connecting = 0,
        Connected = 1,
        Disconnecting = 2,
        Disconnected = 3,
    }
}
declare module "lib/root/Core/Net/WebSocket/index" {
    export * from "lib/root/Core/Net/WebSocket/WebSocketClient";
    export * from "lib/root/Core/Net/WebSocket/WebSocketDisconnectEvent";
    export * from "lib/root/Core/Net/WebSocket/WebSocketMessageEvent";
    export * from "lib/root/Core/Net/WebSocket/WebSocketClientState";
}
declare module "lib/root/Controls/EventCalendar/EventCalendarAutoUpdateEvent" {
    import { DateTime } from "lib/root/Core/DateTime";
    export class EventCalendarAutoUpdateEvent {
        constructor(startDate: DateTime, endDate: DateTime, fullReload: boolean);
        readonly startDate: DateTime;
        readonly endDate: DateTime;
        readonly fullReload: boolean;
    }
}
declare module "lib/root/Controls/EventCalendar/EventCalendarAutoUpdate" {
    import { GenericEventHandler } from "lib/root/Core/Events/GenericEventHandler";
    import { EventCalendarAutoUpdateEvent } from "lib/root/Controls/EventCalendar/EventCalendarAutoUpdateEvent";
    export class EventCalendarAutoUpdateEventHandler extends GenericEventHandler<EventCalendarAutoUpdateEvent> {
    }
    export class EventCalendarAutoUpdate {
        private static readonly _hubId;
        private static readonly _updateDelay;
        private static readonly _socketAutoReconnectInterval;
        private readonly _useServerReload;
        private _timer;
        private _socket;
        constructor(useServerReload: boolean);
        start(path: string): void;
        stop(): void;
        readonly updated: EventCalendarAutoUpdateEventHandler;
        private readonly isStarted;
        private initTimer();
        private initWebSocketClient(path);
    }
}
declare module "lib/root/Core/Net/HttpMethod" {
    export class HttpMethod {
        constructor(method: string);
        private _method;
        readonly method: string;
        private static _get;
        static readonly get: HttpMethod;
        private static _post;
        static readonly post: HttpMethod;
        private static _put;
        static readonly put: HttpMethod;
        private static _delete;
        static readonly delete: HttpMethod;
    }
}
declare module "lib/root/Core/Net/IHttpTransport" {
    import { HttpMethod } from "lib/root/Core/Net/HttpMethod";
    export interface IHttpTransport {
        performRequest(httpMethod: HttpMethod, url: string, data?: any): Promise<string>;
    }
}
declare module "lib/root/Core/Net/DefaultHttpTransport" {
    import { HttpMethod } from "lib/root/Core/Net/HttpMethod";
    import { IHttpTransport } from "lib/root/Core/Net/IHttpTransport";
    export class DefaultHttpTransport implements IHttpTransport {
        performRequest(httpMethod: HttpMethod, url: string, data?: any): Promise<string>;
    }
}
declare module "lib/root/Core/Net/HttpService" {
    import { HttpMethod } from "lib/root/Core/Net/HttpMethod";
    import { IHttpTransport } from "lib/root/Core/Net/IHttpTransport";
    export class HttpService {
        static methodOverrideHeaderName: string;
        static overrideMethods: boolean;
        static transport: IHttpTransport;
        static get<TResponse>(url: string, parseResponse?: boolean): Promise<TResponse>;
        static put<TResponse>(url: string, data: any): Promise<TResponse>;
        static post<TResponse>(url: string, data: any): Promise<TResponse>;
        static delete<TResponse>(url: string, data: any): Promise<TResponse>;
        static performRequest<TResponse>(httpMethod: HttpMethod, url: string, data?: any, parseResponse?: boolean): Promise<TResponse>;
        static overrideMethodIfNeeded(settings: any, methodKey: string, headersKey: string): void;
        private static tryConvertToJson(response);
    }
}
declare module "lib/root/Localization/ILocalization" {
    import { ILocalizationParameters } from "lib/root/Localization/ILocalizationParameters";
    export interface ILocalization {
        localize(value: string, parameters?: ILocalizationParameters): string;
        currentLanguage: string;
        numberDecimalSeparator: string;
        numberGroupSeparator: string;
    }
}
declare module "lib/root/IExternalApi" {
    import { IRect } from "lib/root/Core/Graphics/IRect";
    import { ILocalization } from "lib/root/Localization/ILocalization";
    export interface IExternalApi {
        readonly localization: ILocalization;
        canDispatchEvent(event: MouseEvent): boolean;
        getApplicationBoundingRect(): IRect;
        hidePreloader(withoutScrolling?: boolean): void;
        notifyDataLoadError(): void;
        notifyDataSaveError(): void;
        notifyDataSaveSuccess(): void;
        showPreloader(): void;
    }
}
declare module "lib/root/Controls/Calendar/CalendarConstants" {
    export class CalendarConstants {
        static dimensionCalendarDataUrl: string;
        static eventCalendarDataUrl: string;
        static eventCalendarTimeLinesUrl: string;
    }
}
declare module "lib/root/Controls/EventCalendar/ITimelineEventInfo" {
    import { DateTime } from "lib/root/Core/DateTime";
    import { OverlayValueStatus } from "lib/root/Controls/Calendar/DataStorage/Models/EventCalendar/Types";
    export interface ITimelineEventInfo {
        typeId: string;
        id: string;
        timelineId: string;
        name: string;
        value: string;
        overlayValueStatus: OverlayValueStatus;
        startTime: Date;
        endTime: Date;
        defaultStartTime: DateTime;
        defaultEndTime: DateTime;
        animateOnLoad: boolean;
        tooltipHtml: string;
    }
}
declare module "lib/root/Controls/EventCalendar/TimelineEventInfo" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { DateTime } from "lib/root/Core/DateTime";
    import { ITimelineEventDto, ITimelineEventTypeDto, OverlayValueStatus } from "lib/root/Controls/Calendar/DataStorage/Models/EventCalendar/Types";
    import { ITimelineEventInfo } from "lib/root/Controls/EventCalendar/ITimelineEventInfo";
    export class TimelineEventInfo implements ITimelineEventInfo {
        private _event;
        private _eventTypes;
        constructor(event: ITimelineEventDto, eventTypes: IReadOnlyCollection<ITimelineEventTypeDto>);
        static createNew(eventTypes: IReadOnlyCollection<ITimelineEventTypeDto>): TimelineEventInfo;
        readonly type: ITimelineEventTypeDto;
        typeId: string;
        id: string;
        timelineId: string;
        name: string;
        value: string;
        overlayValueStatus: OverlayValueStatus;
        startTime: Date;
        endTime: Date;
        defaultStartTime: DateTime;
        defaultEndTime: DateTime;
        readonly animateOnLoad: boolean;
        readonly applicationData: any;
        tooltipHtml: string;
    }
}
declare module "lib/root/Controls/EventCalendar/IEventCalendarTimelineDataSource" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { IMap } from "lib/root/Core/Delegates";
    import { ITimelineDto, ITimelineEventTypeDto } from "lib/root/Controls/Calendar/DataStorage/Models/EventCalendar/Types";
    import { TimelineEventInfo } from "lib/root/Controls/EventCalendar/TimelineEventInfo";
    export interface IEventCalendarTimelineDataSource {
        timelines: ITimelineDto[];
        eventTypes: IReadOnlyCollection<ITimelineEventTypeDto>;
        defaultEventStartTime: number;
        defaultEventEndTime: number;
        timezoneOffset: number;
        filterEventFn: IMap<TimelineEventInfo, boolean>;
        filterCellFn: IMap<any, boolean>;
    }
}
declare module "lib/root/Controls/EventCalendar/TimelineCellInfo" {
    import { DateTime } from "lib/root/Core/DateTime";
    export class TimelineCellInfo {
        constructor(timelineId: string, date: DateTime, value: any, applicationData: any);
        private _timelineId;
        readonly timelineId: string;
        private _date;
        readonly date: Date;
        private _value;
        readonly value: string;
        private _applicationData;
        readonly applicationData: any;
    }
}
declare module "lib/root/Controls/EventCalendar/EventCalendarData" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { DateTime } from "lib/root/Core/DateTime";
    import { IFunc2, IMap } from "lib/root/Core/Delegates";
    import { EventCalendarViewType, IEventCalendarResponseDto, ITimelineDto, ITimelineEventTypeDto } from "lib/root/Controls/Calendar/DataStorage/Models/EventCalendar/Types";
    import { IEventCalendarTimelineDataSource } from "lib/root/Controls/EventCalendar/IEventCalendarTimelineDataSource";
    import { TimelineCellInfo } from "lib/root/Controls/EventCalendar/TimelineCellInfo";
    import { TimelineEventInfo } from "lib/root/Controls/EventCalendar/TimelineEventInfo";
    export class EventCalendarData implements IEventCalendarTimelineDataSource {
        private static _defaultTimezoneOffset;
        private readonly _loaderCallbacks;
        private _path;
        private _filterEventFn;
        private _filterCellFn;
        private _areInSameGroupFn;
        private _eventTypes;
        private _defaultEventStartTime;
        private _defaultEventEndTime;
        private _rawTimelines;
        private _timelines;
        private _timezoneOffset;
        private _view;
        private _cachedResponse;
        private _cachedResponseString;
        constructor();
        readonly cachedResponse: IEventCalendarResponseDto;
        path: string;
        filterEventFn: IMap<TimelineEventInfo, boolean>;
        filterCellFn: IMap<TimelineCellInfo, boolean>;
        areInSameGroupFn: IFunc2<TimelineEventInfo, TimelineEventInfo, boolean>;
        readonly timelines: ITimelineDto[];
        readonly eventTypes: IReadOnlyCollection<ITimelineEventTypeDto>;
        readonly defaultEventStartTime: number;
        readonly defaultEventEndTime: number;
        timezoneOffset: number;
        readonly view: EventCalendarViewType;
        setView(value: EventCalendarViewType): Promise<any>;
        clear(): void;
        getTimeLines(startTime: DateTime, endTime: DateTime): Promise<any>;
        getData(startTime: DateTime, endTime: DateTime, withoutPreloader?: boolean): Promise<any>;
        updateTimelineSortOrder(timelines: ITimelineDto[]): Promise<any>;
        regroupTimelines(): void;
        isTimelineChild(timelines: ITimelineDto[], timelineId: string): boolean;
        getSortableTimelines(view: EventCalendarViewType): ITimelineDto[];
        private getDataImplementation(startTime, endTime, dataUrl, withoutPreloader?);
        private loadData(startTime, endTime, dataUrl, withoutPreloader?);
        private syncView();
        private clearCache();
        private filterTimelines(view);
        private convertView(value);
        private sortTimelines(view, timelines);
    }
}
declare module "lib/root/Controls/EventCalendar/EventCalendarLayout" {
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    import { ILayoutTarget } from "lib/root/Layout/ILayoutTarget";
    import { WrapChildrenLayout } from "lib/root/Layout/WrapChildrenLayout";
    import { EventCalendar } from "lib/root/Controls/EventCalendar/EventCalendar";
    export class EventCalendarLayout extends WrapChildrenLayout {
        private _eventCalendar;
        private _indicator;
        constructor(target: ILayoutTarget, eventCalendar: EventCalendar);
        updateTime(): void;
        protected arrangeOverride(finalSize: IVector2d): IVector2d;
        private getArrangeRect(rect);
    }
}
declare module "lib/root/Controls/Skins/Layouts/EventCalendarLayout" {
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    import { ILayout } from "lib/root/Layout/ILayout";
    import { WrapChildrenLayout } from "lib/root/Layout/WrapChildrenLayout";
    export class EventCalendarLayout extends WrapChildrenLayout {
        private _collapsedSize;
        collapsedSize: number;
        private _visibleSize;
        visibleSize: number;
        private _visibleChildren;
        visibleChildren: ILayout;
        private _collapsedChildren;
        collapsedChildren: ILayout;
        protected measureOverride(availableSize: IVector2d): IVector2d;
    }
}
declare module "lib/root/Controls/EventCalendar/EventCalendarOverlay" {
    import { Rectangle, Text } from "lib/root/Controls/index";
    import { DateTime } from "lib/root/Core/DateTime";
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    import { Time } from "lib/root/Core/Time";
    import { Timer } from "lib/root/Core/Timer";
    import { Panel } from "lib/root/Controls/Panel";
    import { TimelineEventInfo } from "lib/root/Controls/EventCalendar/TimelineEventInfo";
    export class EventCalendarOverlay extends Rectangle {
        private _event;
        private _text;
        private _valueElement;
        private _valueElementContainer;
        private _timezoneOffset;
        constructor(event: TimelineEventInfo, timezoneOffset: number);
        readonly timezoneOffset: number;
        readonly text: Text;
        readonly valueText: Text;
        readonly valueElementContainer: Panel;
        readonly event: TimelineEventInfo;
        startTime: DateTime;
        endTime: DateTime;
        isDisabledChanged: EventHandler;
        private _isDisabled;
        isDisabled: boolean;
        runStripesAnimation(duration: Time): Timer;
        private attachTooltip();
    }
}
declare module "lib/root/Core/DateTimePeriod" {
    import { DateTime } from "lib/root/Core/DateTime";
    import { IComparable } from "lib/root/Core/IComparable";
    export class DateTimePeriod implements IComparable<DateTimePeriod> {
        private _start;
        private _end;
        constructor(start?: DateTime, end?: DateTime);
        start: DateTime;
        end: DateTime;
        readonly isEndless: boolean;
        readonly dates: DateTimePeriod;
        equals(value: DateTimePeriod): boolean;
    }
}
declare module "lib/root/Core/NumberExtensions" {
    export class NumberExtensions {
        static romanize(value: number): string | boolean;
        static isNaturalNumber(value: string): boolean;
    }
}
declare module "lib/root/Controls/EventCalendar/EventCalendarTimelineInfo" {
    import { Badge, Control, DockPanel, Icon, Text } from "lib/root/Controls/index";
    import { EventCalendarViewType, ITimelineDto } from "lib/root/Controls/Calendar/DataStorage/Models/EventCalendar/Types";
    export class EventCalendarTimelineInfo extends Control {
        constructor(timeline: ITimelineDto, view: EventCalendarViewType, isTopLevel: boolean);
        private _isTopLevel;
        readonly isTopLevel: boolean;
        private _container;
        readonly container: DockPanel;
        private _view;
        readonly view: EventCalendarViewType;
        private _badge;
        readonly badge: Badge;
        private _timeline;
        readonly timeline: ITimelineDto;
        private _text;
        readonly text: Text;
        private _floorTextControl;
        readonly floorTextControl: Text;
        private _floorTextControl1;
        readonly floorTextControl1: Text;
        private _icon;
        readonly icon: Icon;
        private attachTooltipIfPossible(name, target);
    }
}
declare module "lib/root/Core/Events/ArgumentedMouseEvent" {
    import { IMouseEvent } from "lib/root/Core/Events/IMouseEvent";
    export class ArgumentedMouseEvent<TArgs> {
        constructor(mouseEvent: IMouseEvent, args: TArgs);
        private _args;
        args: TArgs;
        private _mouseEvent;
        mouseEvent: IMouseEvent;
    }
}
declare module "lib/root/Controls/EventCalendar/TimelineInfo" {
    import { ITimelineDto, ITimelineTooltip, TimelineViewType } from "lib/root/Controls/Calendar/DataStorage/Models/EventCalendar/Types";
    import { ITypeInfoDto } from "lib/root/Controls/Calendar/DataStorage/Models/TypeInfo/ITypeInfoDto";
    export class TimelineInfo {
        private _timeline;
        constructor(timeline: ITimelineDto);
        id: string;
        name: string;
        markerText: string;
        markerColor: number;
        floor: string;
        readonly typeInfo: ITypeInfoDto;
        readonly applicationData: any;
        sortIndex: number;
        viewType: TimelineViewType;
        shortCategoryName: string;
        tooltip: ITimelineTooltip;
        icon: string;
        iconColor: number;
    }
}
declare module "lib/root/Controls/EventCalendar/ITimelineEventHandler" {
    import { ArgumentedMouseEvent } from "lib/root/Core/Events/ArgumentedMouseEvent";
    import { IEventHandler } from "lib/root/Core/Events/IEventHandler";
    import { TimelineCellInfo } from "lib/root/Controls/EventCalendar/TimelineCellInfo";
    import { TimelineEventInfo } from "lib/root/Controls/EventCalendar/TimelineEventInfo";
    import { TimelineInfo } from "lib/root/Controls/EventCalendar/TimelineInfo";
    export class TimelineEventInfoEvent extends ArgumentedMouseEvent<TimelineEventInfo> {
    }
    export class TimelineInfoEvent extends ArgumentedMouseEvent<TimelineInfo> {
    }
    export class TimelineCellInfoEvent extends ArgumentedMouseEvent<TimelineCellInfo> {
    }
    export interface ITimelineEventInfoEventHandler extends IEventHandler<TimelineEventInfoEvent> {
    }
    export interface ITimelineInfoEventHandler extends IEventHandler<TimelineInfoEvent> {
    }
    export interface ITimelineCellInfoEventHandler extends IEventHandler<TimelineCellInfoEvent> {
    }
    export interface ITimelineEventCreateFn {
        (timelineEventInfo: TimelineEventInfo): Promise<boolean>;
    }
}
declare module "lib/root/Controls/EventCalendar/EventCalendarTreeMenu" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { EventCalendarViewType, ITimelineDto } from "lib/root/Controls/Calendar/DataStorage/Models/EventCalendar/Types";
    import { TreeMenuHeader } from "lib/root/Controls/Table/Header/TreeMenuHeader";
    import { ITableHeader } from "lib/root/Controls/Table/ITableHeader";
    import { ITimelineInfoEventHandler } from "lib/root/Controls/EventCalendar/ITimelineEventHandler";
    export class EventCalendarTreeMenu extends TreeMenuHeader implements ITableHeader {
        private _view;
        private _timelineClick;
        constructor(timelineClick: ITimelineInfoEventHandler);
        getTimelineByIndex(index: number): ITimelineDto;
        update(timelines: IReadOnlyCollection<ITimelineDto>, view: EventCalendarViewType): void;
        private isTimelineChild(timelines, timelineToSearch);
        private addTimelineChildren(timelines, timeline, node);
        private initTimelineEvents(timelineInfo);
        private createTreeViewNode(timeline, isTopLevel?);
        private getTimelineChildren(timelines, parent);
    }
}
declare module "lib/root/Controls/EventCalendar/EventCalendarSelection" {
    import { Control } from "lib/root/Controls/index";
    import { DateTime } from "lib/root/Core/DateTime";
    import { IEventHandler } from "lib/root/Core/Events/IEventHandler";
    import { EventCalendar } from "lib/root/Controls/EventCalendar/EventCalendar";
    import { EventCalendarTreeMenu } from "lib/root/Controls/EventCalendar/EventCalendarTreeMenu";
    import { IEventCalendarTimelineDataSource } from "lib/root/Controls/EventCalendar/IEventCalendarTimelineDataSource";
    import { TimelineEventInfo } from "lib/root/Controls/EventCalendar/TimelineEventInfo";
    export class EventCalendarSelection extends Control {
        private _selectionStartEvent;
        private _selectionRowIndex;
        private _newEventOverlayElement;
        private _newEventDescriptionElement;
        private _dataSource;
        private _eventCalendarTreeMenu;
        private _grid;
        private _startDate;
        private _endDate;
        private _eventCalendar;
        constructor(eventCalendarTreeMenu: EventCalendarTreeMenu, eventCalendar: EventCalendar, dataSource: IEventCalendarTimelineDataSource);
        clear(): void;
        init(startDate: DateTime, endDate: DateTime): void;
        private mouseDownHandler(event);
        private mouseMoveHandler(event);
        private mouseUpHandler(event);
        private findOverlay(period, sortedOverlays, reverse);
        private findCreationPeriod(startDate, startIndex, endIndex);
        private updateNewEventOverlay(startDate, endDate, selectionEndEvent);
        private updateNewOverlayElementPath(path);
        private createOverlays();
        private destroyOverlays();
        eventCreate: IEventHandler<TimelineEventInfo>;
    }
}
declare module "lib/root/Controls/EventCalendar/EventCalendar" {
    import { Control, GridCell, Table } from "lib/root/Controls/index";
    import { IReadOnlyCollection } from "lib/root/Core/Collections/Collections";
    import { DateTime } from "lib/root/Core/DateTime";
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    import { IEventHandler } from "lib/root/Core/Events/IEventHandler";
    import { IStickyScrollElement } from "lib/root/Core/IStickyScrollElement";
    import { EventCalendarViewType, IEventCalendarResponseDto, ITimelineDto } from "lib/root/Controls/Calendar/DataStorage/Models/EventCalendar/Types";
    import { IMetaStringDataDto } from "lib/root/Controls/Calendar/DataStorage/Models/TypeInfo/IMetaStringDataDto";
    import { DateMultilineTableHeader } from "lib/root/Controls/Table/Header/DateMultilineTableHeader";
    import { CurrentTimeIndicator } from "lib/root/Controls/EventCalendar/CurrentTimeIndicator";
    import { EventCalendarAutoUpdate } from "lib/root/Controls/EventCalendar/EventCalendarAutoUpdate";
    import { EventCalendarData } from "lib/root/Controls/EventCalendar/EventCalendarData";
    import { EventCalendarOverlay } from "lib/root/Controls/EventCalendar/EventCalendarOverlay";
    import { EventCalendarTreeMenu } from "lib/root/Controls/EventCalendar/EventCalendarTreeMenu";
    import { ITimelineCellInfoEventHandler, ITimelineEventCreateFn, ITimelineEventInfoEventHandler, ITimelineInfoEventHandler } from "lib/root/Controls/EventCalendar/ITimelineEventHandler";
    import { ITimelineEventInfo } from "lib/root/Controls/EventCalendar/ITimelineEventInfo";
    import { TimelineCellInfo } from "lib/root/Controls/EventCalendar/TimelineCellInfo";
    export class EventCalendar extends Control {
        static defaultDays: number;
        static defaultDateOffset: number;
        private _table;
        private _days;
        private _data;
        private _eventCalendarSelection;
        private _isReloading;
        private _isLoaded;
        private _localTimezoneOffsetInHours;
        private _currentTimeIndicatorUpdate;
        private _eventCalendarLayout;
        private _removeAutoUpdateListener;
        private static readonly _maxStepLength;
        constructor(useServerReload?: boolean);
        readonly autoUpdate: EventCalendarAutoUpdate;
        readonly table: Table;
        private _currentTimeIndicator;
        readonly currentTimeIndicator: CurrentTimeIndicator;
        private _treeHeader;
        readonly treeHeader: EventCalendarTreeMenu;
        private _dateHeader;
        readonly dateHeader: DateMultilineTableHeader;
        readonly stickyScrollElement: IStickyScrollElement;
        readonly data: EventCalendarData;
        private _nativeStartDate;
        nativeStartDate: Date;
        private _startDate;
        startDate: DateTime;
        private _endDate;
        readonly endDate: DateTime;
        view: EventCalendarViewType;
        readonly lastVisibleDate: DateTime;
        private _timelineToggle;
        readonly timelineToggle: EventHandler;
        private _loaded;
        readonly loaded: EventHandler;
        path: string;
        timezoneOffset: number;
        private _timelineEventCreate;
        timelineEventCreate: ITimelineEventCreateFn;
        readonly timelineCellClick: ITimelineCellInfoEventHandler;
        readonly timelineClick: ITimelineInfoEventHandler;
        readonly timelineEventClick: ITimelineEventInfoEventHandler;
        readonly timelineEventDoubleClick: ITimelineEventInfoEventHandler;
        readonly timelineEventMouseEnter: ITimelineEventInfoEventHandler;
        readonly timelineEventMouseLeave: ITimelineEventInfoEventHandler;
        readonly timelineEventMouseMove: ITimelineEventInfoEventHandler;
        readonly startDateChange: IEventHandler<DateTime>;
        getSortableTimelines(view: EventCalendarViewType): ITimelineDto[];
        startListenAutoUpdate(): void;
        stopListenAutoUpdate(): void;
        updateTimelineSortOrder(timelines: ITimelineDto[]): void;
        toggleTimelines(): void;
        areAnyTimelinesExpanded(): boolean;
        reloadData(withoutPreloader?: boolean): Promise<IEventCalendarResponseDto>;
        stopAutoUpdate(): void;
        reload(): Promise<void>;
        getOverlays(rowIndex: number): IReadOnlyCollection<EventCalendarOverlay>;
        getAllOverlays(): IReadOnlyCollection<EventCalendarOverlay>;
        filterEvents(): void;
        filterCells(): void;
        hasVisibleEvents(): boolean;
        hasVisibleDataCells(): boolean;
        applyDefaultEventTime(timelineEventInfo: ITimelineEventInfo): void;
        enumerateCells(enumerateFn: (cell: GridCell, data: IMetaStringDataDto, cellDate: DateTime, cellInfo: TimelineCellInfo, timeline: ITimelineDto) => void, allCells?: boolean): void;
        private navigateToDate(dateTime);
        private processAutoUpdateEvent(updateEvent);
        private stepLength();
        private updateStartDate();
        private renderCells();
        private renderOverlays();
        private renderGrid();
        private handleNewEventCreation(timelineEventInfo);
        overlayCreated: IEventHandler<EventCalendarOverlay>;
        private extendStartDate();
        private extendEndDate();
        private visibleDaysCount();
        private redraw();
        private updateTimelines();
        private getTimezoneOffsetFromLocal();
    }
}
declare module "lib/root/Entity/Fields/IEntityBaseFieldConfig" {
    import { IBoolean } from "lib/root/Core/Primitives/IBoolean";
    export interface IEntityBaseFieldConfig {
        id?: string;
        name?: string;
        tip?: string;
        fieldGroupId?: number;
        isVisible?: IBoolean;
        tableColumnWidth?: number;
        tableColumnStretch?: boolean;
    }
}
declare module "lib/root/Entity/Fields/Config/EntityBaseFieldConfig" {
    import { IBoolean } from "lib/root/Core/Primitives/IBoolean";
    import { IEntityBaseFieldConfig } from "lib/root/Entity/Fields/IEntityBaseFieldConfig";
    export abstract class EntityBaseFieldConfig implements IEntityBaseFieldConfig {
        protected constructor(name?: string, tip?: string, fieldGroupId?: number);
        private _fieldGroupId;
        fieldGroupId: number;
        private _tip;
        tip: string;
        private _name;
        name: string;
        protected _id: string;
        readonly id: string;
        private _isVisible;
        isVisible: IBoolean;
        private _tableColumnWidth;
        tableColumnWidth: number;
        private _tableColumnStretch;
        tableColumnStretch: boolean;
    }
}
declare module "lib/root/Entity/Fields/Config/EntityCheckboxFieldConfig" {
    import { EntityBaseFieldConfig } from "lib/root/Entity/Fields/Config/EntityBaseFieldConfig";
    export class EntityCheckboxFieldConfig extends EntityBaseFieldConfig {
        constructor();
    }
}
declare module "lib/root/Entity/Fields/IEntityField" {
    export interface IEntityField {
    }
}
declare module "lib/root/Entity/Fields/IEntityLockableBooleanField" {
    import { IBoolean } from "lib/root/Core/Primitives/IBoolean";
    import { IEntityField } from "lib/root/Entity/Fields/IEntityField";
    export interface IEntityLockableBooleanField extends IEntityField {
        model: IBoolean;
        isDisabled?: IBoolean;
    }
}
declare module "lib/root/Entity/Action/Availability/IEntityActionAvailability" {
    import { IBoolean } from "lib/root/Core/Primitives/IBoolean";
    export interface IEntityActionAvailability {
        isExists: IBoolean;
        isEnabled: IBoolean;
    }
}
declare module "lib/root/Entity/Action/Availability/IEntityCommonActionsAvailabilityField" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { IEntityField } from "lib/root/Entity/Fields/IEntityField";
    import { IEntityActionAvailability } from "lib/root/Entity/Action/Availability/IEntityActionAvailability";
    export interface IEntityCommonActionsAvailabilityField extends IEntityField {
        setActivity: IEntityActionAvailability;
        edit: IEntityActionAvailability;
        remove: IEntityActionAvailability;
        custom: IReadOnlyCollection<IEntityActionAvailability>;
    }
}
declare module "lib/root/Entity/Fields/IEntityEventInfo" {
    import { DateTime } from "lib/root/Core/DateTime";
    import { INumber } from "lib/root/Core/Primitives/INumber";
    import { IObject } from "lib/root/Core/Primitives/IObject";
    export interface IEntityEventInfo {
        moment: IObject<DateTime>;
        color: INumber;
    }
}
declare module "lib/root/Core/NotificationType/NotificationType" {
    export enum NotificationType {
        Info = 0,
        Success = 1,
        Warning = 2,
        Error = 3,
        InProgress = 4,
        Wait = 5,
    }
}
declare module "lib/root/Entity/Fields/IEntityIconStatusField" {
    import { NotificationType } from "lib/root/Core/NotificationType/NotificationType";
    import { IObject } from "lib/root/Core/Primitives/IObject";
    import { IEntityField } from "lib/root/Entity/Fields/IEntityField";
    export interface IEntityIconStatusFieldData {
        name: string;
        type: NotificationType;
        icon?: string;
    }
    export interface IEntityIconStatusField extends IEntityField {
        value: IObject<IEntityIconStatusFieldData>;
    }
}
declare module "lib/root/Entity/Fields/IEntityImageField" {
    import { INumber } from "lib/root/Core/Primitives/INumber";
    import { IString } from "lib/root/Core/Primitives/IString";
    import { IEntityField } from "lib/root/Entity/Fields/IEntityField";
    export interface IEntityImageField extends IEntityField {
        src: IString;
        count?: INumber;
    }
}
declare module "lib/root/Entity/Fields/IEntityStatusField" {
    import { IObject } from "lib/root/Core/Primitives/IObject";
    import { BadgeType } from "lib/root/Entity/BadgeType";
    import { IEntityField } from "lib/root/Entity/Fields/IEntityField";
    export interface IEntityStatusFieldData {
        name: string;
        description?: string;
        type?: BadgeType;
        color?: number;
    }
    export interface IEntityStatusField extends IEntityField {
        value: IObject<IEntityStatusFieldData>;
    }
}
declare module "lib/root/Entity/Fields/Parameter/IEntityParameterStatus" {
    import { NotificationType } from "lib/root/Core/NotificationType/NotificationType";
    export interface IEntityParameterStatus {
        type: NotificationType;
        iconName?: string;
        tip?: string;
    }
}
declare module "lib/root/Entity/Fields/Parameter/IEntityParameterValue" {
    import { IObject } from "lib/root/Core/Primitives/IObject";
    export interface IEntityParameterValue<TValue = {}> {
        value: IObject<TValue>;
        localizationParameters?: IObject<{
            [key: string]: string;
        }>;
        toString(): string;
    }
}
declare module "lib/root/Entity/Fields/Parameter/IEntityParameter" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { IBoolean } from "lib/root/Core/Primitives/IBoolean";
    import { IObject } from "lib/root/Core/Primitives/IObject";
    import { IString } from "lib/root/Core/Primitives/IString";
    import { IEntityField } from "lib/root/Entity/Fields/IEntityField";
    import { IEntityParameterStatus } from "lib/root/Entity/Fields/Parameter/IEntityParameterStatus";
    import { IEntityParameterValue } from "lib/root/Entity/Fields/Parameter/IEntityParameterValue";
    export interface IEntityParameter<TValue = {}> extends IEntityField {
        isEditable?: IBoolean;
        metadata?: IString;
        oldValue?: IEntityParameterValue<TValue>;
        statuses?: IObject<IReadOnlyCollection<IEntityParameterStatus>>;
        tip?: IString;
        value: IEntityParameterValue<TValue>;
    }
}
declare module "lib/root/Entity/IEntity" {
    import { IReadOnlyDictionary } from "lib/root/Core/Collections/IReadOnlyDictionary";
    import { IComparable } from "lib/root/Core/IComparable";
    import { IBoolean } from "lib/root/Core/Primitives/IBoolean";
    import { INumber } from "lib/root/Core/Primitives/INumber";
    import { IString } from "lib/root/Core/Primitives/IString";
    import { IEntityCommonActionsAvailabilityField } from "lib/root/Entity/Action/Availability/IEntityCommonActionsAvailabilityField";
    import { IEntityEventInfo } from "lib/root/Entity/Fields/IEntityEventInfo";
    import { IEntityIconStatusField } from "lib/root/Entity/Fields/IEntityIconStatusField";
    import { IEntityImageField } from "lib/root/Entity/Fields/IEntityImageField";
    import { IEntityLockableBooleanField } from "lib/root/Entity/Fields/IEntityLockableBooleanField";
    import { IEntityStatusField } from "lib/root/Entity/Fields/IEntityStatusField";
    import { IEntityParameter } from "lib/root/Entity/Fields/Parameter/IEntityParameter";
    export interface IEntity extends IComparable<IEntity> {
        readonly id: IString;
        actionsAvailability: IEntityCommonActionsAvailabilityField;
        activity: IEntityLockableBooleanField;
        isChecked: IEntityLockableBooleanField;
        status: IEntityStatusField;
        iconStatus: IEntityIconStatusField;
        index: IString;
        name: IString;
        description: IString;
        rating: INumber;
        logo: IString;
        image: IEntityImageField;
        unread: IEntityLockableBooleanField;
        parameters: IReadOnlyDictionary<string, IEntityParameter>;
        changeHistoryEntryCount: INumber;
        eventHistoryEntryCount: INumber;
        eventInfo: IEntityEventInfo;
        isNew: IBoolean;
        isDisabled: IBoolean;
        isError: IBoolean;
        isChild: IBoolean;
        isLastChild: IBoolean;
        isMarked: IBoolean;
        isFiltered: IBoolean;
        isCollapsed: IBoolean;
        metadata: IString;
    }
}
declare module "lib/root/Entity/Fields/IGetEntityFieldFn" {
    import { IFunc1 } from "lib/root/Core/Delegates";
    import { IEntity } from "lib/root/Entity/IEntity";
    import { IEntityField } from "lib/root/Entity/Fields/IEntityField";
    export interface IGetEntityFieldFn<TEntityField extends IEntityField> extends IFunc1<IEntity, TEntityField> {
    }
}
declare module "lib/root/Entity/List/View" {
    export enum View {
        Table = 1,
        Tile = 2,
        Card = 3,
    }
}
declare module "lib/root/Controls/List/Field/IField" {
    import { IEntityBaseFieldConfig } from "lib/root/Entity/Fields/IEntityBaseFieldConfig";
    import { IControl } from "lib/root/Controls/IControl";
    export interface IField extends IControl {
        fieldId?: string;
        config: IEntityBaseFieldConfig;
    }
}
declare module "lib/root/Controls/List/Field/BaseField" {
    import { GenericEventHandler } from "lib/root/Core/Events/GenericEventHandler";
    import { IChangeEvent } from "lib/root/Core/Events/IChangeEvent";
    import { IEntityBaseFieldConfig } from "lib/root/Entity/Fields/IEntityBaseFieldConfig";
    import { IEntityField } from "lib/root/Entity/Fields/IEntityField";
    import { IGetEntityFieldFn } from "lib/root/Entity/Fields/IGetEntityFieldFn";
    import { IEntity } from "lib/root/Entity/IEntity";
    import { View } from "lib/root/Entity/List/View";
    import { Control } from "lib/root/Controls/Control";
    import { IControl } from "lib/root/Controls/IControl";
    import { IField } from "lib/root/Controls/List/Field/IField";
    export abstract class BaseField<TEntityField extends IEntityField, TEntityFieldConfig extends IEntityBaseFieldConfig, TChangedByUserEventValue> extends Control implements IField {
        protected _noValueText: string;
        private _getField;
        constructor(entityFieldConfig: TEntityFieldConfig, getField: IGetEntityFieldFn<TEntityField>, entity: IEntity, view: View, fieldId?: string);
        protected _contentControl: IControl;
        readonly contentControl: IControl;
        private _entity;
        readonly entity: IEntity;
        private _view;
        readonly view: View;
        private _fieldId;
        readonly fieldId: string;
        protected _entityFieldConfig: TEntityFieldConfig;
        readonly config: TEntityFieldConfig;
        private _changedByUser;
        readonly changedByUser: GenericEventHandler<IChangeEvent<TChangedByUserEventValue>>;
        protected abstract createContentControl(entityField: TEntityField): IControl;
        protected updateContent(applySkin?: boolean): void;
    }
}
declare module "lib/root/Controls/List/Field/CheckBoxField" {
    import { IBoolean } from "lib/root/Core/Primitives/index";
    import { EntityCheckboxFieldConfig } from "lib/root/Entity/Fields/Config/EntityCheckboxFieldConfig";
    import { IEntityLockableBooleanField } from "lib/root/Entity/Fields/IEntityLockableBooleanField";
    import { CheckBox } from "lib/root/Controls/CheckBox";
    import { IControl } from "lib/root/Controls/IControl";
    import { BaseField } from "lib/root/Controls/List/Field/BaseField";
    export class CheckBoxField extends BaseField<IEntityLockableBooleanField, EntityCheckboxFieldConfig, boolean> {
        private _checkBox;
        readonly checkBox: CheckBox;
        private _isChecked;
        readonly isChecked: IBoolean;
        protected createContentControl(entityField: IEntityLockableBooleanField): IControl;
    }
}
declare module "lib/root/Entity/Fields/Config/EntityDescriptionFieldConfig" {
    import { EntityBaseFieldConfig } from "lib/root/Entity/Fields/Config/EntityBaseFieldConfig";
    export class EntityDescriptionFieldConfig extends EntityBaseFieldConfig {
        readonly isHtml: boolean;
        constructor(name?: string, tip?: string, fieldGroupId?: number, isHtml?: boolean);
    }
}
declare module "lib/root/Controls/List/Field/Description" {
    import { IString } from "lib/root/Core/Primitives/IString";
    import { EntityDescriptionFieldConfig } from "lib/root/Entity/Fields/Config/EntityDescriptionFieldConfig";
    import { IControl } from "lib/root/Controls/IControl";
    import { Text } from "lib/root/Controls/Text";
    import { BaseField } from "lib/root/Controls/List/Field/BaseField";
    export class Description extends BaseField<IString, EntityDescriptionFieldConfig, void> {
        private _textControl;
        readonly textControl: Text;
        protected createContentControl(entityField: IString): IControl;
        private update(entityField);
    }
}
declare module "lib/root/Controls/List/Field/Header" {
    import { Control, Text as TextControl } from "lib/root/Controls/index";
    import { IEntityBaseFieldConfig } from "lib/root/Entity/Fields/IEntityBaseFieldConfig";
    import { View } from "lib/root/Entity/List/View";
    import { Icon } from "lib/root/Controls/Icon";
    import { IField } from "lib/root/Controls/List/Field/IField";
    export class Header extends Control implements IField {
        private _text;
        private _view;
        private _fieldId;
        private _icon;
        private _tip;
        private _stackPanel;
        constructor(config: IEntityBaseFieldConfig, view?: View);
        readonly tip: string;
        readonly icon: Icon;
        readonly text: TextControl;
        readonly view: View;
        readonly fieldId: string;
        private _entityFieldConfig;
        readonly config: IEntityBaseFieldConfig;
    }
}
declare module "lib/root/Entity/Fields/Parameter/IEntityParameterFormat" {
    export interface IEntityParameterFormat {
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/EntityParameterType" {
    export enum EntityParameterType {
        Text = 0,
        Quantity = 1,
        Date = 2,
        DatePeriod = 3,
        Time = 4,
        DateTime = 5,
        Price = 6,
        Binding = 7,
        BindingList = 8,
        Link = 9,
        LinkList = 10,
        Choice = 11,
        IconList = 12,
    }
}
declare module "lib/root/Entity/Fields/Parameter/IEntityParameterFieldConfig" {
    import { IEntity } from "lib/root/Entity/IEntity";
    import { IEntityBaseFieldConfig } from "lib/root/Entity/Fields/IEntityBaseFieldConfig";
    import { IEntityParameterFormat } from "lib/root/Entity/Fields/Parameter/IEntityParameterFormat";
    import { EntityParameterType } from "lib/root/Entity/Fields/Parameter/Types/EntityParameterType";
    export interface IEntityParameterFieldConfig extends IEntityBaseFieldConfig {
        edit(entity: IEntity, domElement: HTMLElement): void;
        getFormat(entity?: IEntity): IEntityParameterFormat;
        getType(entity?: IEntity): EntityParameterType;
    }
}
declare module "lib/root/Entity/Fields/Parameter/IEntityParameterSavingMessagesConfig" {
    export interface IEntityParameterSavingMessagesConfig {
        success: string;
        fail: string;
    }
}
declare module "lib/root/Entity/Fields/Parameter/IEntityParameterSavingConfig" {
    import { IEntity } from "lib/root/Entity/IEntity";
    import { IEntityParameterSavingMessagesConfig } from "lib/root/Entity/Fields/Parameter/IEntityParameterSavingMessagesConfig";
    import { IEntityParameterValue } from "lib/root/Entity/Fields/Parameter/IEntityParameterValue";
    export interface IEntityParameterSavingConfig {
        promise(item: IEntity, value: IEntityParameterValue): Promise<void>;
        messages?: IEntityParameterSavingMessagesConfig;
    }
}
declare module "lib/root/Entity/Fields/Parameter/EntityParameterFieldConfig" {
    import { IAction2 } from "lib/root/Core/Delegates";
    import { IEntity } from "lib/root/Entity/IEntity";
    import { EntityBaseFieldConfig } from "lib/root/Entity/Fields/Config/EntityBaseFieldConfig";
    import { IEntityParameterFieldConfig } from "lib/root/Entity/Fields/Parameter/IEntityParameterFieldConfig";
    import { IEntityParameterFormat } from "lib/root/Entity/Fields/Parameter/IEntityParameterFormat";
    import { IEntityParameterSavingConfig } from "lib/root/Entity/Fields/Parameter/IEntityParameterSavingConfig";
    import { EntityParameterType } from "lib/root/Entity/Fields/Parameter/Types/EntityParameterType";
    export class EntityParameterFieldConfig<TFormat extends IEntityParameterFormat> extends EntityBaseFieldConfig implements IEntityParameterFieldConfig {
        protected _format: TFormat;
        protected _type: EntityParameterType;
        protected constructor(name: string, id: string, type: EntityParameterType, format?: TFormat, tip?: string, save?: IEntityParameterSavingConfig, fieldGroupId?: number);
        getFormat(entity?: IEntity): TFormat;
        getType(entity?: IEntity): EntityParameterType;
        private _edit;
        edit: IAction2<IEntity, HTMLElement>;
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/DynamicType/EntityDynamicTypeParameterConfig" {
    import { IFunc1 } from "lib/root/Core/Delegates";
    import { IEntity } from "lib/root/Entity/IEntity";
    import { EntityParameterFieldConfig } from "lib/root/Entity/Fields/Parameter/EntityParameterFieldConfig";
    import { IEntityParameterFormat } from "lib/root/Entity/Fields/Parameter/IEntityParameterFormat";
    import { IEntityParameterSavingConfig } from "lib/root/Entity/Fields/Parameter/IEntityParameterSavingConfig";
    import { EntityParameterType } from "lib/root/Entity/Fields/Parameter/Types/EntityParameterType";
    export class EntityDynamicTypeParameterConfig extends EntityParameterFieldConfig<IEntityParameterFormat> {
        private _getTypeFunction;
        private _getFormatFunction;
        constructor(name: string, id: string, getType: IFunc1<IEntity, EntityParameterType>, getFormat: IFunc1<IEntity, IEntityParameterFormat>, tip?: string, save?: IEntityParameterSavingConfig, fieldGroupId?: number);
        getType(entity?: IEntity): EntityParameterType;
        getFormat(entity?: IEntity): IEntityParameterFormat;
    }
}
declare module "lib/root/Entity/Fields/Config/EntityBaseHistoryFieldConfig" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { IFunc1 } from "lib/root/Core/Delegates";
    import { INumber } from "lib/root/Core/Primitives/INumber";
    import { IEntity } from "lib/root/Entity/IEntity";
    import { EntityBaseFieldConfig } from "lib/root/Entity/Fields/Config/EntityBaseFieldConfig";
    export abstract class EntityBaseHistoryFieldConfig extends EntityBaseFieldConfig {
        constructor(name: string, getLoadPromise: IFunc1<IEntity, Promise<IReadOnlyCollection<IEntity>>>, getEntryCount: IFunc1<IEntity, INumber>);
        private _getLoadPromise;
        readonly getLoadPromise: IFunc1<IEntity, Promise<IReadOnlyCollection<IEntity>>>;
        private _getEntryCount;
        readonly getEntryCount: IFunc1<IEntity, INumber>;
    }
}
declare module "lib/root/Entity/Fields/Config/EntityChangeHistoryFieldConfig" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { IFunc1, IFunc2 } from "lib/root/Core/Delegates";
    import { IEntity } from "lib/root/Entity/IEntity";
    import { IEntityParameterFieldConfig } from "lib/root/Entity/Fields/Parameter/IEntityParameterFieldConfig";
    import { IEntityParameterFormat } from "lib/root/Entity/Fields/Parameter/IEntityParameterFormat";
    import { EntityParameterType } from "lib/root/Entity/Fields/Parameter/Types/EntityParameterType";
    import { EntityBaseHistoryFieldConfig } from "lib/root/Entity/Fields/Config/EntityBaseHistoryFieldConfig";
    export class EntityChangeHistoryFieldConfig extends EntityBaseHistoryFieldConfig {
        constructor(getLoadPromise: IFunc1<IEntity, Promise<IReadOnlyCollection<IEntity>>>, getParameterType: IFunc2<IEntity, IEntity, EntityParameterType>, getParameterFormat: IFunc2<IEntity, IEntity, IEntityParameterFormat>);
        private _getParameterType;
        readonly getParameterType: IFunc2<IEntity, IEntity, EntityParameterType>;
        private _getParameterFormat;
        readonly getParameterFormat: IFunc2<IEntity, IEntity, IEntityParameterFormat>;
        createValueParameterConfig(entity: IEntity, isOldValue: boolean): IEntityParameterFieldConfig;
    }
}
declare module "lib/root/Core/Formatter/Formats/ITimeFormat" {
    export interface ITimeFormat {
        isWithSeconds: boolean;
    }
}
declare module "lib/root/Core/IPrice" {
    export interface IPrice {
        value: number;
        currency: string;
    }
}
declare module "lib/root/Core/Formatter/Formats/IDateFormat" {
    export interface IDateFormat {
        isFull: boolean;
        isWithDayOfWeek: boolean;
    }
}
declare module "lib/root/Core/Formatter/Formatter" {
    import { DateTime } from "lib/root/Core/DateTime";
    import { DateTimePeriod } from "lib/root/Core/DateTimePeriod";
    import { IPrice } from "lib/root/Core/IPrice";
    import { IDateFormat } from "lib/root/Core/Formatter/Formats/IDateFormat";
    import { ITimeFormat } from "lib/root/Core/Formatter/Formats/ITimeFormat";
    export class Formatter {
        private static _invalidReturningValue;
        private static _intervalSeparator;
        static formatNumber(inputValue: number): string;
        static formatFloat(value: number, fractionSize: number): string;
        static formatPrice(price: IPrice): string;
        static formatDate(value: DateTime, isFull?: boolean, isWithDayOfWeek?: boolean): string;
        static formatTime(value: DateTime, isRoundedToMinutes?: boolean): string;
        static formatDateTime(value: DateTime, isRoundedToMinutes?: boolean): string;
        static formatDatePeriod(value: DateTimePeriod, isFull?: boolean, isWithDayOfWeek?: boolean): string;
        static createDateFormat(formatString: string): IDateFormat;
        static createTimeFormat(formatString: string): ITimeFormat;
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/DateTime/IEntityDateTimeParameterFormat" {
    import { ITimeFormat } from "lib/root/Core/Formatter/Formats/ITimeFormat";
    import { IEntityParameterFormat } from "lib/root/Entity/Fields/Parameter/IEntityParameterFormat";
    export interface IEntityDateTimeParameterFormat extends IEntityParameterFormat {
        timeFormat: ITimeFormat;
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/DateTime/EntityDateTimeParameterFormat" {
    import { ITimeFormat } from "lib/root/Core/Formatter/Formats/ITimeFormat";
    import { IEntityDateTimeParameterFormat } from "lib/root/Entity/Fields/Parameter/Types/DateTime/IEntityDateTimeParameterFormat";
    export class EntityDateTimeParameterFormat implements IEntityDateTimeParameterFormat {
        private _timeFormat;
        constructor(timeFormat?: ITimeFormat);
        readonly timeFormat: ITimeFormat;
        static fromString(formatString: string): EntityDateTimeParameterFormat;
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/DateTime/EntityDateTimeParameterConfig" {
    import { EntityParameterFieldConfig } from "lib/root/Entity/Fields/Parameter/EntityParameterFieldConfig";
    import { IEntityParameterSavingConfig } from "lib/root/Entity/Fields/Parameter/IEntityParameterSavingConfig";
    import { IEntityDateTimeParameterFormat } from "lib/root/Entity/Fields/Parameter/Types/DateTime/IEntityDateTimeParameterFormat";
    export class EntityDateTimeParameterConfig extends EntityParameterFieldConfig<IEntityDateTimeParameterFormat> {
        constructor(name: string, id: string, tip?: string, save?: IEntityParameterSavingConfig, format?: IEntityDateTimeParameterFormat, fieldGroupId?: number);
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/Text/IEntityTextParameterFormat" {
    import { IEntityParameterFormat } from "lib/root/Entity/Fields/Parameter/IEntityParameterFormat";
    export interface IEntityTextParameterFormat extends IEntityParameterFormat {
        isMultiline: boolean;
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/Text/EntityTextParameterFormat" {
    import { IEntityTextParameterFormat } from "lib/root/Entity/Fields/Parameter/Types/Text/IEntityTextParameterFormat";
    export class EntityTextParameterFormat implements IEntityTextParameterFormat {
        constructor(isMultiline?: boolean);
        private _isMultiline;
        readonly isMultiline: boolean;
        static fromString(formatString: string): IEntityTextParameterFormat;
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/Text/EntityTextParameterConfig" {
    import { EntityParameterFieldConfig } from "lib/root/Entity/Fields/Parameter/EntityParameterFieldConfig";
    import { IEntityParameterSavingConfig } from "lib/root/Entity/Fields/Parameter/IEntityParameterSavingConfig";
    import { IEntityTextParameterFormat } from "lib/root/Entity/Fields/Parameter/Types/Text/IEntityTextParameterFormat";
    export class EntityTextParameterConfig extends EntityParameterFieldConfig<IEntityTextParameterFormat> {
        readonly isHtml: boolean;
        readonly isXaml: boolean;
        constructor(name: string, id: string, tip?: string, save?: IEntityParameterSavingConfig, format?: IEntityTextParameterFormat, fieldGroupId?: number, isHtml?: boolean, isXaml?: boolean);
        private _isDescription;
        isDescription: boolean;
    }
}
declare module "lib/root/Entity/Action/IEntityActionArguments" {
    import { IEntity } from "lib/root/Entity/IEntity";
    export interface IEntityActionArguments {
        entity: IEntity;
    }
}
declare module "lib/root/Entity/Action/IEntityActionConfig" {
    import { IAction1, IFunc1 } from "lib/root/Core/Delegates";
    import { IEntityActionArguments } from "lib/root/Entity/Action/IEntityActionArguments";
    export interface IEntityActionConfig<TArguments extends IEntityActionArguments = IEntityActionArguments> {
        name: string;
        icon: string;
        action: IAction1<TArguments>;
        createEntityHref: IFunc1<TArguments, string>;
    }
}
declare module "lib/root/Entity/Action/EntityBaseActionConfig" {
    import { IAction1, IFunc1 } from "lib/root/Core/Delegates";
    import { IEntityActionArguments } from "lib/root/Entity/Action/IEntityActionArguments";
    import { IEntityActionConfig } from "lib/root/Entity/Action/IEntityActionConfig";
    export class EntityBaseActionConfig<TActionArguments extends IEntityActionArguments> implements IEntityActionConfig<TActionArguments> {
        private _createEntityHref;
        constructor(name: string, action?: IAction1<TActionArguments>, createEntityHref?: IFunc1<TActionArguments, string>, icon?: string, id?: string);
        private _name;
        readonly name: string;
        private _id;
        readonly id: string;
        private _icon;
        readonly icon: string;
        private _action;
        readonly action: IAction1<TActionArguments>;
        readonly createEntityHref: IFunc1<TActionArguments, string>;
    }
}
declare module "lib/root/Entity/Action/EntityCustomActionConfig" {
    import { IAction1, IFunc1 } from "lib/root/Core/Delegates";
    import { EntityBaseActionConfig } from "lib/root/Entity/Action/EntityBaseActionConfig";
    import { IEntityActionArguments } from "lib/root/Entity/Action/IEntityActionArguments";
    export class EntityCustomActionConfig extends EntityBaseActionConfig<IEntityActionArguments> {
        constructor(name: string, icon: string, action: IAction1<IEntityActionArguments>, createEntityHref?: IFunc1<IEntityActionArguments, string>, id?: string);
    }
}
declare module "lib/root/Entity/Action/EntityEditActionConfig" {
    import { IAction1, IFunc1 } from "lib/root/Core/Delegates";
    import { EntityBaseActionConfig } from "lib/root/Entity/Action/EntityBaseActionConfig";
    import { IEntityActionArguments } from "lib/root/Entity/Action/IEntityActionArguments";
    export class EntityEditActionConfig extends EntityBaseActionConfig<IEntityActionArguments> {
        constructor(name?: string, action?: IAction1<IEntityActionArguments>, createEntityHref?: IFunc1<IEntityActionArguments, string>, icon?: string);
    }
}
declare module "lib/root/Entity/Action/EntityRemoveActionConfig" {
    import { IAction1 } from "lib/root/Core/Delegates";
    import { EntityBaseActionConfig } from "lib/root/Entity/Action/EntityBaseActionConfig";
    import { IEntityActionArguments } from "lib/root/Entity/Action/IEntityActionArguments";
    export class EntityRemoveActionConfig extends EntityBaseActionConfig<IEntityActionArguments> {
        constructor(action: IAction1<IEntityActionArguments>);
    }
}
declare module "lib/root/Entity/Action/IEntitySetActivityActionArguments" {
    import { IEntityActionArguments } from "lib/root/Entity/Action/IEntityActionArguments";
    export interface IEntitySetActivityActionArguments extends IEntityActionArguments {
        isActive: boolean;
    }
}
declare module "lib/root/Entity/Action/IEntitySetActivityActionStateTips" {
    export interface IEntitySetActivityActionStateTips {
        enabled: string;
        disabled: string;
    }
}
declare module "lib/root/Entity/Action/EntitySetActivityActionConfig" {
    import { IAction1 } from "lib/root/Core/Delegates";
    import { EntityBaseActionConfig } from "lib/root/Entity/Action/EntityBaseActionConfig";
    import { IEntitySetActivityActionArguments } from "lib/root/Entity/Action/IEntitySetActivityActionArguments";
    import { IEntitySetActivityActionStateTips } from "lib/root/Entity/Action/IEntitySetActivityActionStateTips";
    export class EntitySetActivityActionConfig extends EntityBaseActionConfig<IEntitySetActivityActionArguments> {
        constructor(action: IAction1<IEntitySetActivityActionArguments>, stateTips?: IEntitySetActivityActionStateTips, tip?: string);
        private _tip;
        readonly tip: string;
        private _stateTips;
        readonly stateTips: IEntitySetActivityActionStateTips;
    }
}
declare module "lib/root/Entity/Action/EntityActionsConfig" {
    import { ICollection } from "lib/root/Core/Collections/ICollection";
    import { IString } from "lib/root/Core/Primitives/IString";
    import { EntityBaseFieldConfig } from "lib/root/Entity/Fields/Config/EntityBaseFieldConfig";
    import { EntityCustomActionConfig } from "lib/root/Entity/Action/EntityCustomActionConfig";
    import { EntityEditActionConfig } from "lib/root/Entity/Action/EntityEditActionConfig";
    import { EntityRemoveActionConfig } from "lib/root/Entity/Action/EntityRemoveActionConfig";
    import { EntitySetActivityActionConfig } from "lib/root/Entity/Action/EntitySetActivityActionConfig";
    export class EntityActionsConfig extends EntityBaseFieldConfig {
        constructor(name?: string, tip?: string, fieldGroupId?: number, isImportant?: boolean);
        private _setActivity;
        setActivity: EntitySetActivityActionConfig;
        private _edit;
        edit: EntityEditActionConfig;
        private _primary;
        primary: IString;
        private _remove;
        remove: EntityRemoveActionConfig;
        private _custom;
        custom: ICollection<EntityCustomActionConfig>;
    }
}
declare module "lib/root/Entity/Fields/Config/EventInfo/EntityEventInfoMomentFormat" {
    export enum EntityEventInfoMomentFormat {
        DateTime = 0,
        Date = 1,
        Time = 2,
    }
}
declare module "lib/root/Entity/Fields/Config/EventInfo/EntityEventInfoFormat" {
    import { EntityEventInfoMomentFormat } from "lib/root/Entity/Fields/Config/EventInfo/EntityEventInfoMomentFormat";
    export class EntityEventInfoFormat {
        private static _formatFromStringMapping;
        constructor(momentFormat: EntityEventInfoMomentFormat);
        private _momentFormat;
        readonly momentFormat: EntityEventInfoMomentFormat;
        static fromString(momentFormatString: string): EntityEventInfoFormat;
    }
}
declare module "lib/root/Entity/Fields/Config/EntityEventHistoryFieldConfig" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { IFunc1 } from "lib/root/Core/Delegates";
    import { IEntity } from "lib/root/Entity/IEntity";
    import { EntityBaseHistoryFieldConfig } from "lib/root/Entity/Fields/Config/EntityBaseHistoryFieldConfig";
    import { EntityEventInfoFormat } from "lib/root/Entity/Fields/Config/EventInfo/EntityEventInfoFormat";
    export class EntityEventHistoryFieldConfig extends EntityBaseHistoryFieldConfig {
        constructor(getLoadPromise: IFunc1<IEntity, Promise<IReadOnlyCollection<IEntity>>>, eventMomentFormat: EntityEventInfoFormat);
        private _eventMomentFormat;
        readonly eventMomentFormat: EntityEventInfoFormat;
    }
}
declare module "lib/root/Entity/Fields/Config/EntityIconStatusFieldConfig" {
    import { EntityBaseFieldConfig } from "lib/root/Entity/Fields/Config/EntityBaseFieldConfig";
    export class EntityIconStatusFieldConfig extends EntityBaseFieldConfig {
        constructor(name?: string, tip?: string, fieldGroupId?: number);
    }
}
declare module "lib/root/Entity/Fields/Config/EntityImageFieldConfig" {
    import { EntityBaseFieldConfig } from "lib/root/Entity/Fields/Config/EntityBaseFieldConfig";
    export class EntityImageFieldConfig extends EntityBaseFieldConfig {
        constructor(name?: string, tip?: string, fieldGroupId?: number, isImportant?: boolean);
        private _isImportant;
        readonly isImportant: boolean;
    }
}
declare module "lib/root/Entity/Fields/Config/EntityIndexFieldConfig" {
    import { EntityBaseFieldConfig } from "lib/root/Entity/Fields/Config/EntityBaseFieldConfig";
    export class EntityIndexFieldConfig extends EntityBaseFieldConfig {
        constructor(name?: string, tip?: string, fieldGroupId?: number, isRowNumber?: boolean);
        private _isRowNumber;
        readonly isRowNumber: boolean;
    }
}
declare module "lib/root/Entity/Fields/Config/EntityLogoFieldConfig" {
    import { EntityBaseFieldConfig } from "lib/root/Entity/Fields/Config/EntityBaseFieldConfig";
    export class EntityLogoFieldConfig extends EntityBaseFieldConfig {
        constructor(name?: string, tip?: string, fieldGroupId?: number);
    }
}
declare module "lib/root/Entity/Fields/Config/EntityNameFieldConfig" {
    import { EntityBaseFieldConfig } from "lib/root/Entity/Fields/Config/EntityBaseFieldConfig";
    export class EntityNameFieldConfig extends EntityBaseFieldConfig {
        constructor(name?: string, tip?: string, fieldGroupId?: number);
    }
}
declare module "lib/root/Entity/Fields/Config/EntityRatingFieldConfig" {
    import { EntityBaseFieldConfig } from "lib/root/Entity/Fields/Config/EntityBaseFieldConfig";
    export class EntityRatingFieldConfig extends EntityBaseFieldConfig {
        constructor(name?: string, tip?: string, fieldGroupId?: number);
    }
}
declare module "lib/root/Entity/Fields/Config/EntityStatusFieldConfig" {
    import { EntityBaseFieldConfig } from "lib/root/Entity/Fields/Config/EntityBaseFieldConfig";
    export class EntityStatusFieldConfig extends EntityBaseFieldConfig {
        constructor(name?: string, tip?: string, fieldGroupId?: number);
    }
}
declare module "lib/root/Entity/Fields/Config/EntityUnreadFieldConfig" {
    import { IEntity } from "lib/root/Entity/IEntity";
    import { EntityBaseFieldConfig } from "lib/root/Entity/Fields/Config/EntityBaseFieldConfig";
    export interface IEntityUnreadFieldSaveAction {
        (entity: IEntity, isUnread: boolean): Promise<void>;
    }
    export class EntityUnreadFieldConfig extends EntityBaseFieldConfig {
        constructor(save: IEntityUnreadFieldSaveAction, name?: string, tip?: string, fieldGroupId?: number);
        private _save;
        readonly save: IEntityUnreadFieldSaveAction;
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/Binding/IEntityBindingParameterFormat" {
    import { IEntityParameterFormat } from "lib/root/Entity/Fields/Parameter/IEntityParameterFormat";
    export interface IEntityBindingParameterFormat extends IEntityParameterFormat {
        isMaximized: boolean;
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/Binding/EntityBindingParameterFormat" {
    import { IEntityBindingParameterFormat } from "lib/root/Entity/Fields/Parameter/Types/Binding/IEntityBindingParameterFormat";
    export class EntityBindingParameterFormat implements IEntityBindingParameterFormat {
        constructor(isMaximized?: boolean);
        private _isMaximized;
        readonly isMaximized: boolean;
        static fromString(formatString: string): EntityBindingParameterFormat;
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/Date/IEntityDateParameterFormat" {
    import { IDateFormat } from "lib/root/Core/Formatter/Formats/IDateFormat";
    import { IEntityParameterFormat } from "lib/root/Entity/Fields/Parameter/IEntityParameterFormat";
    export interface IEntityDateParameterFormat extends IEntityParameterFormat {
        dateFormat: IDateFormat;
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/Date/EntityDateParameterFormat" {
    import { IDateFormat } from "lib/root/Core/Formatter/Formats/IDateFormat";
    import { IEntityDateParameterFormat } from "lib/root/Entity/Fields/Parameter/Types/Date/IEntityDateParameterFormat";
    export class EntityDateParameterFormat implements IEntityDateParameterFormat {
        private _dateFormat;
        constructor(dateFormat?: IDateFormat);
        readonly dateFormat: IDateFormat;
        static fromString(formatString: string): EntityDateParameterFormat;
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/DatePeriod/IEntityDatePeriodParameterFormat" {
    import { IDateFormat } from "lib/root/Core/Formatter/Formats/IDateFormat";
    import { IEntityParameterFormat } from "lib/root/Entity/Fields/Parameter/IEntityParameterFormat";
    export interface IEntityDatePeriodParameterFormat extends IEntityParameterFormat {
        dateFormat: IDateFormat;
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/DatePeriod/EntityDatePeriodParameterFormat" {
    import { IDateFormat } from "lib/root/Core/Formatter/Formats/IDateFormat";
    import { IEntityDatePeriodParameterFormat } from "lib/root/Entity/Fields/Parameter/Types/DatePeriod/IEntityDatePeriodParameterFormat";
    export class EntityDatePeriodParameterFormat implements IEntityDatePeriodParameterFormat {
        private _dateFormat;
        constructor(dateFormat?: IDateFormat);
        readonly dateFormat: IDateFormat;
        static fromString(formatString: string): EntityDatePeriodParameterFormat;
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/Link/IEntityLinkParameterFormat" {
    import { IEntityParameterFormat } from "lib/root/Entity/Fields/Parameter/IEntityParameterFormat";
    export interface IEntityLinkParameterFormat extends IEntityParameterFormat {
        isFollowable: boolean;
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/Link/EntityLinkParameterFormat" {
    import { IEntityLinkParameterFormat } from "lib/root/Entity/Fields/Parameter/Types/Link/IEntityLinkParameterFormat";
    export class EntityLinkParameterFormat implements IEntityLinkParameterFormat {
        constructor(isFollowable?: boolean);
        private _isFollowable;
        readonly isFollowable: boolean;
        static fromString(formatString: string): EntityLinkParameterFormat;
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/Time/IEntityTimeParameterFormat" {
    import { ITimeFormat } from "lib/root/Core/Formatter/Formats/ITimeFormat";
    import { IEntityParameterFormat } from "lib/root/Entity/Fields/Parameter/IEntityParameterFormat";
    export interface IEntityTimeParameterFormat extends IEntityParameterFormat {
        timeFormat: ITimeFormat;
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/Time/EntityTimeParameterFormat" {
    import { ITimeFormat } from "lib/root/Core/Formatter/Formats/ITimeFormat";
    import { IEntityTimeParameterFormat } from "lib/root/Entity/Fields/Parameter/Types/Time/IEntityTimeParameterFormat";
    export class EntityTimeParameterFormat implements IEntityTimeParameterFormat {
        private _timeFormat;
        constructor(timeFormat?: ITimeFormat);
        readonly timeFormat: ITimeFormat;
        static fromString(formatString: string): EntityTimeParameterFormat;
    }
}
declare module "lib/root/Entity/Fields/Parameter/EntityParameterFormatFactory" {
    import { IEntityParameterFormat } from "lib/root/Entity/Fields/Parameter/IEntityParameterFormat";
    import { EntityParameterType } from "lib/root/Entity/Fields/Parameter/Types/EntityParameterType";
    export class EntityParameterFormatFactory {
        private static _formatFromStringFunctions;
        static factory(type: EntityParameterType, parameterFormatString: string): IEntityParameterFormat;
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/Binding/EntityBindingParameterConfig" {
    import { EntityParameterFieldConfig } from "lib/root/Entity/Fields/Parameter/EntityParameterFieldConfig";
    import { IEntityParameterSavingConfig } from "lib/root/Entity/Fields/Parameter/IEntityParameterSavingConfig";
    import { IEntityBindingParameterFormat } from "lib/root/Entity/Fields/Parameter/Types/Binding/IEntityBindingParameterFormat";
    export class EntityBindingParameterConfig extends EntityParameterFieldConfig<IEntityBindingParameterFormat> {
        constructor(name: string, id: string, tip?: string, save?: IEntityParameterSavingConfig, format?: IEntityBindingParameterFormat, fieldGroupId?: number);
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/BindingList/IEntityBindingListParameterFormat" {
    import { IEntityParameterFormat } from "lib/root/Entity/Fields/Parameter/IEntityParameterFormat";
    export interface IEntityBindingListParameterFormat extends IEntityParameterFormat {
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/BindingList/EntityBindingListParameterFormat" {
    import { IEntityBindingListParameterFormat } from "lib/root/Entity/Fields/Parameter/Types/BindingList/IEntityBindingListParameterFormat";
    export class EntityBindingListParameterFormat implements IEntityBindingListParameterFormat {
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/BindingList/EntityBindingListParameterConfig" {
    import { EntityParameterFieldConfig } from "lib/root/Entity/Fields/Parameter/EntityParameterFieldConfig";
    import { IEntityParameterSavingConfig } from "lib/root/Entity/Fields/Parameter/IEntityParameterSavingConfig";
    import { IEntityBindingListParameterFormat } from "lib/root/Entity/Fields/Parameter/Types/BindingList/IEntityBindingListParameterFormat";
    export class EntityBindingListParameterConfig extends EntityParameterFieldConfig<IEntityBindingListParameterFormat> {
        constructor(name: string, id: string, tip?: string, save?: IEntityParameterSavingConfig, format?: IEntityBindingListParameterFormat, fieldGroupId?: number);
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/Choice/IEntityChoiceParameterFormat" {
    import { IEntityParameterFormat } from "lib/root/Entity/Fields/Parameter/IEntityParameterFormat";
    export interface IEntityChoiceParameterFormat extends IEntityParameterFormat {
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/Choice/EntityChoiceParameterFormat" {
    import { IEntityChoiceParameterFormat } from "lib/root/Entity/Fields/Parameter/Types/Choice/IEntityChoiceParameterFormat";
    export class EntityChoiceParameterFormat implements IEntityChoiceParameterFormat {
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/Choice/IEntityChoiceParameterAvailableValue" {
    export interface IEntityChoiceParameterAvailableValue {
        key: string;
        text: string;
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/Choice/IEntityChoiceParameterAvailableValues" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/Collections";
    import { IEntityChoiceParameterAvailableValue } from "lib/root/Entity/Fields/Parameter/Types/Choice/IEntityChoiceParameterAvailableValue";
    export interface IEntityChoiceParameterAvailableValues extends IReadOnlyCollection<IEntityChoiceParameterAvailableValue> {
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/Choice/EntityChoiceParameterConfig" {
    import { EntityParameterFieldConfig } from "lib/root/Entity/Fields/Parameter/EntityParameterFieldConfig";
    import { IEntityParameterSavingConfig } from "lib/root/Entity/Fields/Parameter/IEntityParameterSavingConfig";
    import { IEntityChoiceParameterAvailableValues } from "lib/root/Entity/Fields/Parameter/Types/Choice/IEntityChoiceParameterAvailableValues";
    import { IEntityChoiceParameterFormat } from "lib/root/Entity/Fields/Parameter/Types/Choice/IEntityChoiceParameterFormat";
    export class EntityChoiceParameterConfig extends EntityParameterFieldConfig<IEntityChoiceParameterFormat> {
        constructor(name: string, id: string, tip?: string, save?: IEntityParameterSavingConfig, format?: IEntityChoiceParameterFormat, fieldGroupId?: number);
        private _values;
        values: IEntityChoiceParameterAvailableValues;
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/Date/EntityDateParameterConfig" {
    import { EntityParameterFieldConfig } from "lib/root/Entity/Fields/Parameter/EntityParameterFieldConfig";
    import { IEntityParameterSavingConfig } from "lib/root/Entity/Fields/Parameter/IEntityParameterSavingConfig";
    import { IEntityDateParameterFormat } from "lib/root/Entity/Fields/Parameter/Types/Date/IEntityDateParameterFormat";
    export class EntityDateParameterConfig extends EntityParameterFieldConfig<IEntityDateParameterFormat> {
        constructor(name: string, id: string, tip?: string, save?: IEntityParameterSavingConfig, format?: IEntityDateParameterFormat, fieldGroupId?: number);
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/DatePeriod/EntityDatePeriodParameterConfig" {
    import { EntityParameterFieldConfig } from "lib/root/Entity/Fields/Parameter/EntityParameterFieldConfig";
    import { IEntityParameterSavingConfig } from "lib/root/Entity/Fields/Parameter/IEntityParameterSavingConfig";
    import { IEntityDatePeriodParameterFormat } from "lib/root/Entity/Fields/Parameter/Types/DatePeriod/IEntityDatePeriodParameterFormat";
    export class EntityDatePeriodParameterConfig extends EntityParameterFieldConfig<IEntityDatePeriodParameterFormat> {
        constructor(name: string, id: string, tip?: string, save?: IEntityParameterSavingConfig, format?: IEntityDatePeriodParameterFormat, fieldGroupId?: number);
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/IconList/IEntityIconListParameterFormat" {
    import { IEntityParameterFormat } from "lib/root/Entity/Fields/Parameter/IEntityParameterFormat";
    export interface IEntityIconListParameterFormat extends IEntityParameterFormat {
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/IconList/EntityIconListParameterFormat" {
    import { IEntityIconListParameterFormat } from "lib/root/Entity/Fields/Parameter/Types/IconList/IEntityIconListParameterFormat";
    export class EntityIconListParameterFormat implements IEntityIconListParameterFormat {
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/IconList/EntityIconListParameterConfig" {
    import { EntityParameterFieldConfig } from "lib/root/Entity/Fields/Parameter/EntityParameterFieldConfig";
    import { IEntityParameterSavingConfig } from "lib/root/Entity/Fields/Parameter/IEntityParameterSavingConfig";
    import { IEntityIconListParameterFormat } from "lib/root/Entity/Fields/Parameter/Types/IconList/IEntityIconListParameterFormat";
    export class EntityIconListParameterConfig extends EntityParameterFieldConfig<{}> {
        constructor(name: string, id: string, tip?: string, save?: IEntityParameterSavingConfig, format?: IEntityIconListParameterFormat, fieldGroupId?: number);
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/Link/EntityLinkParameterConfig" {
    import { EntityParameterFieldConfig } from "lib/root/Entity/Fields/Parameter/EntityParameterFieldConfig";
    import { IEntityParameterSavingConfig } from "lib/root/Entity/Fields/Parameter/IEntityParameterSavingConfig";
    import { IEntityLinkParameterFormat } from "lib/root/Entity/Fields/Parameter/Types/Link/IEntityLinkParameterFormat";
    export class EntityLinkParameterConfig extends EntityParameterFieldConfig<IEntityLinkParameterFormat> {
        constructor(name: string, id: string, tip?: string, save?: IEntityParameterSavingConfig, format?: IEntityLinkParameterFormat, fieldGroupId?: number);
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/LinkList/EntityLinkListParameterConfig" {
    import { EntityParameterFieldConfig } from "lib/root/Entity/Fields/Parameter/EntityParameterFieldConfig";
    import { IEntityParameterSavingConfig } from "lib/root/Entity/Fields/Parameter/IEntityParameterSavingConfig";
    import { IEntityLinkParameterFormat } from "lib/root/Entity/Fields/Parameter/Types/Link/IEntityLinkParameterFormat";
    export class EntityLinkListParameterConfig extends EntityParameterFieldConfig<IEntityLinkParameterFormat> {
        constructor(name: string, id: string, tip?: string, save?: IEntityParameterSavingConfig, format?: IEntityLinkParameterFormat, fieldGroupId?: number);
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/Price/IEntityPriceParameterFormat" {
    import { IEntityParameterFormat } from "lib/root/Entity/Fields/Parameter/IEntityParameterFormat";
    export interface IEntityPriceParameterFormat extends IEntityParameterFormat {
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/Price/EntityPriceParameterFormat" {
    import { IEntityPriceParameterFormat } from "lib/root/Entity/Fields/Parameter/Types/Price/IEntityPriceParameterFormat";
    export class EntityPriceParameterFormat implements IEntityPriceParameterFormat {
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/Price/EntityPriceParameterConfig" {
    import { EntityParameterFieldConfig } from "lib/root/Entity/Fields/Parameter/EntityParameterFieldConfig";
    import { IEntityParameterSavingConfig } from "lib/root/Entity/Fields/Parameter/IEntityParameterSavingConfig";
    import { IEntityPriceParameterFormat } from "lib/root/Entity/Fields/Parameter/Types/Price/IEntityPriceParameterFormat";
    export class EntityPriceParameterConfig extends EntityParameterFieldConfig<IEntityPriceParameterFormat> {
        constructor(name: string, id: string, tip?: string, save?: IEntityParameterSavingConfig, format?: IEntityPriceParameterFormat, fieldGroupId?: number);
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/Quantity/IEntityQuantityParameterFormat" {
    import { IEntityParameterFormat } from "lib/root/Entity/Fields/Parameter/IEntityParameterFormat";
    export interface IEntityQuantityParameterFormat extends IEntityParameterFormat {
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/Quantity/EntityQuantityParameterFormat" {
    import { IEntityQuantityParameterFormat } from "lib/root/Entity/Fields/Parameter/Types/Quantity/IEntityQuantityParameterFormat";
    export class EntityQuantityParameterFormat implements IEntityQuantityParameterFormat {
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/Quantity/EntityQuantityParameterConfig" {
    import { EntityParameterFieldConfig } from "lib/root/Entity/Fields/Parameter/EntityParameterFieldConfig";
    import { IEntityParameterSavingConfig } from "lib/root/Entity/Fields/Parameter/IEntityParameterSavingConfig";
    import { IEntityQuantityParameterFormat } from "lib/root/Entity/Fields/Parameter/Types/Quantity/IEntityQuantityParameterFormat";
    export class EntityQuantityParameterConfig extends EntityParameterFieldConfig<IEntityQuantityParameterFormat> {
        constructor(name: string, id: string, tip?: string, save?: IEntityParameterSavingConfig, format?: IEntityQuantityParameterFormat, fieldGroupId?: number);
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/Time/EntityTimeParameterConfig" {
    import { EntityParameterFieldConfig } from "lib/root/Entity/Fields/Parameter/EntityParameterFieldConfig";
    import { IEntityParameterSavingConfig } from "lib/root/Entity/Fields/Parameter/IEntityParameterSavingConfig";
    import { IEntityTimeParameterFormat } from "lib/root/Entity/Fields/Parameter/Types/Time/IEntityTimeParameterFormat";
    export class EntityTimeParameterConfig extends EntityParameterFieldConfig<IEntityTimeParameterFormat> {
        constructor(name: string, id: string, tip?: string, save?: IEntityParameterSavingConfig, format?: IEntityTimeParameterFormat, fieldGroupId?: number);
    }
}
declare module "lib/root/Entity/Fields/Parameter/EntityParameterConfigFactory" {
    import { IEntityParameterFieldConfig } from "lib/root/Entity/Fields/Parameter/IEntityParameterFieldConfig";
    import { EntityParameterType } from "lib/root/Entity/Fields/Parameter/Types/EntityParameterType";
    export class EntityParameterConfigFactory {
        private static _createParameterConfigFunctions;
        static factory(type: EntityParameterType, name: string, id: string, parameterFormatString?: string, tip?: string, isHtml?: boolean, isXaml?: boolean): IEntityParameterFieldConfig;
    }
}
declare module "lib/root/Entity/Fields/Parameter/IEntityParameterBase" {
    import { IEntityParameter } from "lib/root/Entity/Fields/Parameter/IEntityParameter";
    import { IEntityParameterValue } from "lib/root/Entity/Fields/Parameter/IEntityParameterValue";
    export interface IEntityParameterBase<TValue extends IEntityParameterValue> extends IEntityParameter {
        value: TValue;
        oldValue?: TValue;
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/Date/IEntityDateParameterValue" {
    import { DateTime } from "lib/root/Core/DateTime";
    import { IEntityParameterValue } from "lib/root/Entity/Fields/Parameter/IEntityParameterValue";
    export interface IEntityDateParameterValue extends IEntityParameterValue<DateTime> {
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/Date/IEntityDateParameter" {
    import { IEntityParameterBase } from "lib/root/Entity/Fields/Parameter/IEntityParameterBase";
    import { IEntityDateParameterValue } from "lib/root/Entity/Fields/Parameter/Types/Date/IEntityDateParameterValue";
    export interface IEntityDateParameter extends IEntityParameterBase<IEntityDateParameterValue> {
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/EntityParameterTypeFactory" {
    import { EntityParameterType } from "lib/root/Entity/Fields/Parameter/Types/EntityParameterType";
    export class EntityParameterTypeFactory {
        private static _parameterTypeByString;
        static factory(typeString: string): EntityParameterType;
    }
}
declare module "lib/root/Entity/Fields/Config/EventInfo/EntityEventInfoConfig" {
    import { IEntity } from "lib/root/Entity/IEntity";
    import { IEntityParameterFieldConfig } from "lib/root/Entity/Fields/Parameter/IEntityParameterFieldConfig";
    import { IEntityDateParameter } from "lib/root/Entity/Fields/Parameter/Types/Date/IEntityDateParameter";
    import { EntityBaseFieldConfig } from "lib/root/Entity/Fields/Config/EntityBaseFieldConfig";
    import { EntityEventInfoFormat } from "lib/root/Entity/Fields/Config/EventInfo/EntityEventInfoFormat";
    export class EntityEventInfoConfig extends EntityBaseFieldConfig {
        private static createParameterInfo(title, parameterType, parameterFormat);
        private static _parameterId;
        private static _parameterInfo;
        constructor(format: EntityEventInfoFormat);
        private _parameterConfig;
        readonly parameterConfig: IEntityParameterFieldConfig;
        createParameter(entity: IEntity): IEntityDateParameter;
    }
}
declare module "lib/root/Localization/ICountableCases" {
    export interface ICountableCases {
        zero?: string;
        one?: string;
        two?: string;
        few?: string;
        many?: string;
        other?: string;
    }
}
declare module "lib/root/Entity/IEntityNameConfig" {
    import { ICountableCases } from "lib/root/Localization/ICountableCases";
    import { IEntityBaseFieldConfig } from "lib/root/Entity/Fields/IEntityBaseFieldConfig";
    export interface IEntityNameConfig extends IEntityBaseFieldConfig {
        nominative: string;
        countable: ICountableCases;
    }
}
declare module "lib/root/Entity/IEntityConfig" {
    import { ICollection } from "lib/root/Core/Collections/ICollection";
    import { EntityActionsConfig } from "lib/root/Entity/Action/EntityActionsConfig";
    import { EntityChangeHistoryFieldConfig } from "lib/root/Entity/Fields/Config/EntityChangeHistoryFieldConfig";
    import { EntityCheckboxFieldConfig } from "lib/root/Entity/Fields/Config/EntityCheckboxFieldConfig";
    import { EntityDescriptionFieldConfig } from "lib/root/Entity/Fields/Config/EntityDescriptionFieldConfig";
    import { EntityEventHistoryFieldConfig } from "lib/root/Entity/Fields/Config/EntityEventHistoryFieldConfig";
    import { EntityIconStatusFieldConfig } from "lib/root/Entity/Fields/Config/EntityIconStatusFieldConfig";
    import { EntityImageFieldConfig } from "lib/root/Entity/Fields/Config/EntityImageFieldConfig";
    import { EntityIndexFieldConfig } from "lib/root/Entity/Fields/Config/EntityIndexFieldConfig";
    import { EntityLogoFieldConfig } from "lib/root/Entity/Fields/Config/EntityLogoFieldConfig";
    import { EntityNameFieldConfig } from "lib/root/Entity/Fields/Config/EntityNameFieldConfig";
    import { EntityRatingFieldConfig } from "lib/root/Entity/Fields/Config/EntityRatingFieldConfig";
    import { EntityStatusFieldConfig } from "lib/root/Entity/Fields/Config/EntityStatusFieldConfig";
    import { EntityUnreadFieldConfig } from "lib/root/Entity/Fields/Config/EntityUnreadFieldConfig";
    import { EntityEventInfoConfig } from "lib/root/Entity/Fields/Config/EventInfo/EntityEventInfoConfig";
    import { IEntityParameterFieldConfig } from "lib/root/Entity/Fields/Parameter/IEntityParameterFieldConfig";
    import { IEntityNameConfig } from "lib/root/Entity/IEntityNameConfig";
    export interface IEntityConfig {
        entityName?: IEntityNameConfig;
        index?: EntityIndexFieldConfig;
        unread?: EntityUnreadFieldConfig;
        name?: EntityNameFieldConfig;
        rating?: EntityRatingFieldConfig;
        logo?: EntityLogoFieldConfig;
        image?: EntityImageFieldConfig;
        description?: EntityDescriptionFieldConfig;
        status?: EntityStatusFieldConfig;
        iconStatus?: EntityIconStatusFieldConfig;
        changeHistory?: EntityChangeHistoryFieldConfig;
        eventHistory?: EntityEventHistoryFieldConfig;
        actions?: EntityActionsConfig;
        parameters?: ICollection<IEntityParameterFieldConfig>;
        eventInfo?: EntityEventInfoConfig;
        checkbox?: EntityCheckboxFieldConfig;
    }
}
declare module "lib/root/Entity/List/IListFieldsVisibility" {
    export interface IListFieldsVisibility {
        [fieldId: string]: boolean;
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/Binding/IEntityBindingParameterValue" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/Collections";
    import { IEntityParameterValue } from "lib/root/Entity/Fields/Parameter/IEntityParameterValue";
    export interface IEntityBindingParameterValue extends IEntityParameterValue<IReadOnlyCollection<string>> {
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/Binding/IEntityBindingParameter" {
    import { IEntityParameterBase } from "lib/root/Entity/Fields/Parameter/IEntityParameterBase";
    import { IEntityBindingParameterValue } from "lib/root/Entity/Fields/Parameter/Types/Binding/IEntityBindingParameterValue";
    export interface IEntityBindingParameter extends IEntityParameterBase<IEntityBindingParameterValue> {
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/BindingList/IEntityBindingListParameterValueItem" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    export interface IEntityBindingListParameterValueItem {
        name: string;
        colorIndex: number;
        bindings: IReadOnlyCollection<string>;
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/BindingList/IEntityBindingListParameterValue" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { IEntityParameterValue } from "lib/root/Entity/Fields/Parameter/IEntityParameterValue";
    import { IEntityBindingListParameterValueItem } from "lib/root/Entity/Fields/Parameter/Types/BindingList/IEntityBindingListParameterValueItem";
    export interface IEntityBindingListParameterValue extends IEntityParameterValue<IReadOnlyCollection<IEntityBindingListParameterValueItem>> {
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/BindingList/IEntityBindingListParameter" {
    import { IEntityParameterBase } from "lib/root/Entity/Fields/Parameter/IEntityParameterBase";
    import { IEntityBindingListParameterValue } from "lib/root/Entity/Fields/Parameter/Types/BindingList/IEntityBindingListParameterValue";
    export interface IEntityBindingListParameter extends IEntityParameterBase<IEntityBindingListParameterValue> {
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/Choice/IEntityChoiceParameterValue" {
    import { IEntityParameterValue } from "lib/root/Entity/Fields/Parameter/IEntityParameterValue";
    export interface IEntityChoiceParameterValue extends IEntityParameterValue<string> {
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/Choice/IEntityChoiceParameter" {
    import { IEntityParameterBase } from "lib/root/Entity/Fields/Parameter/IEntityParameterBase";
    import { IEntityChoiceParameterValue } from "lib/root/Entity/Fields/Parameter/Types/Choice/IEntityChoiceParameterValue";
    export interface IEntityChoiceParameter extends IEntityParameterBase<IEntityChoiceParameterValue> {
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/DatePeriod/IEntityDatePeriodParameterValue" {
    import { DateTimePeriod } from "lib/root/Core/DateTimePeriod";
    import { IEntityParameterValue } from "lib/root/Entity/Fields/Parameter/IEntityParameterValue";
    export interface IEntityDatePeriodParameterValue extends IEntityParameterValue<DateTimePeriod> {
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/DatePeriod/IEntityDatePeriodParameter" {
    import { IEntityParameterBase } from "lib/root/Entity/Fields/Parameter/IEntityParameterBase";
    import { IEntityDatePeriodParameterValue } from "lib/root/Entity/Fields/Parameter/Types/DatePeriod/IEntityDatePeriodParameterValue";
    export interface IEntityDatePeriodParameter extends IEntityParameterBase<IEntityDatePeriodParameterValue> {
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/DateTime/IEntityDateTimeParameterValue" {
    import { DateTime } from "lib/root/Core/DateTime";
    import { IEntityParameterValue } from "lib/root/Entity/Fields/Parameter/IEntityParameterValue";
    export interface IEntityDateTimeParameterValue extends IEntityParameterValue<DateTime> {
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/DateTime/IEntityDateTimeParameter" {
    import { IEntityParameterBase } from "lib/root/Entity/Fields/Parameter/IEntityParameterBase";
    import { IEntityDateTimeParameterValue } from "lib/root/Entity/Fields/Parameter/Types/DateTime/IEntityDateTimeParameterValue";
    export interface IEntityDateTimeParameter extends IEntityParameterBase<IEntityDateTimeParameterValue> {
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/IconList/IEntityIconListParameterValueItem" {
    export interface IEntityIconListParameterValueItem {
        icon?: string;
        text?: string;
        colorIndex?: number;
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/IconList/IEntityIconListParameterValue" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { IEntityParameterValue } from "lib/root/Entity/Fields/Parameter/IEntityParameterValue";
    import { IEntityIconListParameterValueItem } from "lib/root/Entity/Fields/Parameter/Types/IconList/IEntityIconListParameterValueItem";
    export interface IEntityIconListParameterValue extends IEntityParameterValue<IReadOnlyCollection<IEntityIconListParameterValueItem>> {
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/IconList/IEntityIconListParameter" {
    import { IEntityParameterBase } from "lib/root/Entity/Fields/Parameter/IEntityParameterBase";
    import { IEntityIconListParameterValue } from "lib/root/Entity/Fields/Parameter/Types/IconList/IEntityIconListParameterValue";
    export interface IEntityIconListParameter extends IEntityParameterBase<IEntityIconListParameterValue> {
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/Link/IEntityLinkParameterValueData" {
    export interface IEntityLinkParameterValueData {
        text?: string;
        url: string;
        target?: string;
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/Link/IEntityLinkParameterValue" {
    import { IEntityParameterValue } from "lib/root/Entity/Fields/Parameter/IEntityParameterValue";
    import { IEntityLinkParameterValueData } from "lib/root/Entity/Fields/Parameter/Types/Link/IEntityLinkParameterValueData";
    export interface IEntityLinkParameterValue extends IEntityParameterValue<IEntityLinkParameterValueData> {
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/Link/IEntityLinkParameter" {
    import { IEntityParameterBase } from "lib/root/Entity/Fields/Parameter/IEntityParameterBase";
    import { IEntityLinkParameterValue } from "lib/root/Entity/Fields/Parameter/Types/Link/IEntityLinkParameterValue";
    export interface IEntityLinkParameter extends IEntityParameterBase<IEntityLinkParameterValue> {
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/LinkList/IEntityLinkListParameterValue" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/Collections";
    import { IEntityParameterValue } from "lib/root/Entity/Fields/Parameter/IEntityParameterValue";
    import { IEntityLinkParameterValueData } from "lib/root/Entity/Fields/Parameter/Types/Link/IEntityLinkParameterValueData";
    export interface IEntityLinkListParameterValue extends IEntityParameterValue<IReadOnlyCollection<IEntityLinkParameterValueData>> {
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/LinkList/IEntityLinkListParameter" {
    import { IEntityParameterBase } from "lib/root/Entity/Fields/Parameter/IEntityParameterBase";
    import { IEntityLinkListParameterValue } from "lib/root/Entity/Fields/Parameter/Types/LinkList/IEntityLinkListParameterValue";
    export interface IEntityLinkListParameter extends IEntityParameterBase<IEntityLinkListParameterValue> {
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/Price/IEntityPriceParameterValue" {
    import { IPrice } from "lib/root/Core/IPrice";
    import { IEntityParameterValue } from "lib/root/Entity/Fields/Parameter/IEntityParameterValue";
    export interface IEntityPriceParameterValue extends IEntityParameterValue<IPrice> {
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/Price/IEntityPriceParameter" {
    import { IEntityParameterBase } from "lib/root/Entity/Fields/Parameter/IEntityParameterBase";
    import { IEntityPriceParameterValue } from "lib/root/Entity/Fields/Parameter/Types/Price/IEntityPriceParameterValue";
    export interface IEntityPriceParameter extends IEntityParameterBase<IEntityPriceParameterValue> {
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/Quantity/IEntityQuantityParameterValue" {
    import { IEntityParameterValue } from "lib/root/Entity/Fields/Parameter/IEntityParameterValue";
    export interface IEntityQuantityParameterValue extends IEntityParameterValue<number> {
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/Quantity/IEntityQuantityParameter" {
    import { IEntityParameterBase } from "lib/root/Entity/Fields/Parameter/IEntityParameterBase";
    import { IEntityQuantityParameterValue } from "lib/root/Entity/Fields/Parameter/Types/Quantity/IEntityQuantityParameterValue";
    export interface IEntityQuantityParameter extends IEntityParameterBase<IEntityQuantityParameterValue> {
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/Text/IEntityTextParameterValue" {
    import { IEntityParameterValue } from "lib/root/Entity/Fields/Parameter/IEntityParameterValue";
    export interface IEntityTextParameterValue extends IEntityParameterValue<string> {
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/Text/IEntityTextParameter" {
    import { IEntityParameterBase } from "lib/root/Entity/Fields/Parameter/IEntityParameterBase";
    import { IEntityTextParameterValue } from "lib/root/Entity/Fields/Parameter/Types/Text/IEntityTextParameterValue";
    export interface IEntityTextParameter extends IEntityParameterBase<IEntityTextParameterValue> {
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/Time/IEntityTimeParameterValue" {
    import { DateTime } from "lib/root/Core/DateTime";
    import { IEntityParameterValue } from "lib/root/Entity/Fields/Parameter/IEntityParameterValue";
    export interface IEntityTimeParameterValue extends IEntityParameterValue<DateTime> {
    }
}
declare module "lib/root/Entity/Fields/Parameter/Types/Time/IEntityTimeParameter" {
    import { IEntityParameterBase } from "lib/root/Entity/Fields/Parameter/IEntityParameterBase";
    import { IEntityTimeParameterValue } from "lib/root/Entity/Fields/Parameter/Types/Time/IEntityTimeParameterValue";
    export interface IEntityTimeParameter extends IEntityParameterBase<IEntityTimeParameterValue> {
    }
}
declare module "lib/root/Controls/List/Field/IBaseFieldWithOldValue" {
    import { IControl } from "lib/root/Controls/IControl";
    import { Text } from "lib/root/Controls/Text";
    import { IField } from "lib/root/Controls/List/Field/IField";
    export interface IBaseFieldWithOldValue extends IField {
        valueControl: IControl;
        oldValueControl: IControl;
        valueTextControl: Text;
    }
}
declare module "lib/root/Controls/List/Field/Parameter/IParameterIcon" {
    import { NotificationType } from "lib/root/Core/NotificationType/NotificationType";
    import { Icon } from "lib/root/Controls/Icon";
    export interface IParameterIcon {
        control: Icon;
        type: NotificationType;
    }
}
declare module "lib/root/Controls/List/Field/Parameter/IBaseParameterField" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { IBoolean } from "lib/root/Core/Primitives/IBoolean";
    import { IEntity } from "lib/root/Entity/IEntity";
    import { IControl } from "lib/root/Controls/IControl";
    import { IBaseFieldWithOldValue } from "lib/root/Controls/List/Field/IBaseFieldWithOldValue";
    import { IParameterIcon } from "lib/root/Controls/List/Field/Parameter/IParameterIcon";
    export interface IBaseParameterField extends IBaseFieldWithOldValue {
        icons: IReadOnlyCollection<IParameterIcon>;
        hasTip: boolean;
        isEditable: IBoolean;
        iconsStackPanel: IControl;
        entity: IEntity;
    }
}
declare module "lib/root/Controls/List/Field/Parameter/BaseParameterField" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { IFunc1 } from "lib/root/Core/Delegates";
    import { Orientation } from "lib/root/Core/Graphics/Orientation";
    import { IBoolean } from "lib/root/Core/Primitives/IBoolean";
    import { IGetEntityFieldFn } from "lib/root/Entity/Fields/IGetEntityFieldFn";
    import { IEntityParameter } from "lib/root/Entity/Fields/Parameter/IEntityParameter";
    import { IEntityParameterFieldConfig } from "lib/root/Entity/Fields/Parameter/IEntityParameterFieldConfig";
    import { IEntityParameterValue } from "lib/root/Entity/Fields/Parameter/IEntityParameterValue";
    import { IEntity } from "lib/root/Entity/IEntity";
    import { View } from "lib/root/Entity/List/View";
    import { Control } from "lib/root/Controls/Control";
    import { IControl } from "lib/root/Controls/IControl";
    import { Text } from "lib/root/Controls/Text";
    import { BaseField } from "lib/root/Controls/List/Field/BaseField";
    import { IBaseParameterField } from "lib/root/Controls/List/Field/Parameter/IBaseParameterField";
    import { IParameterIcon } from "lib/root/Controls/List/Field/Parameter/IParameterIcon";
    export abstract class BaseParameterField<TEntityParameter extends IEntityParameter, TParameterConfig extends IEntityParameterFieldConfig, TEntityParameterValue extends IEntityParameterValue> extends BaseField<TEntityParameter, TParameterConfig, TEntityParameterValue> implements IBaseParameterField {
        constructor(entityParameterConfig: TParameterConfig, getParameter: IGetEntityFieldFn<TEntityParameter>, entity: IEntity, view: View);
        private _valueControl;
        readonly valueControl: IControl;
        private _valueTextControl;
        readonly valueTextControl: Text;
        private _oldValueControl;
        readonly oldValueControl: IControl;
        private _icons;
        readonly icons: IReadOnlyCollection<IParameterIcon>;
        private _hasTip;
        readonly hasTip: boolean;
        private _isEditable;
        readonly isEditable: IBoolean;
        protected createContentControl(entityField: TEntityParameter): IControl;
        protected abstract createParameterValueControl(data: TEntityParameter, isOldValue: boolean): IControl;
        protected stackControls<TControl extends Control, TValue>(entityField: TEntityParameter, mapFn: IFunc1<TValue, TControl>, orientation: Orientation): IReadOnlyCollection<TControl>;
        private createValueControl(entityField, isOldValue);
        private _iconsStackPanel;
        readonly iconsStackPanel: IControl;
        private wrapWithIcons(control, data);
    }
}
declare module "lib/root/Controls/List/Field/Parameter/Binding" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    import { IObject } from "lib/root/Core/Primitives/IObject";
    import { EntityBindingParameterConfig } from "lib/root/Entity/Fields/Parameter/Types/Binding/EntityBindingParameterConfig";
    import { IEntityBindingParameter } from "lib/root/Entity/Fields/Parameter/Types/Binding/IEntityBindingParameter";
    import { IEntityBindingParameterValue } from "lib/root/Entity/Fields/Parameter/Types/Binding/IEntityBindingParameterValue";
    import { Badge } from "lib/root/Controls/Badge";
    import { IControl } from "lib/root/Controls/IControl";
    import { BaseParameterField } from "lib/root/Controls/List/Field/Parameter/BaseParameterField";
    export class Binding extends BaseParameterField<IEntityBindingParameter, EntityBindingParameterConfig, IEntityBindingParameterValue> {
        private _badge;
        readonly badge: Badge;
        private _boundItems;
        readonly boundItems: IObject<IReadOnlyCollection<string>>;
        private _boundItemTexts;
        readonly boundItemTexts: IReadOnlyCollection<IControl>;
        createParameterValueControl(entityField: IEntityBindingParameter, isOldValue: boolean): IControl;
        private _updateBadge;
        readonly updateBadge: EventHandler;
        private updateControl(control, entityField);
    }
}
declare module "lib/root/Controls/List/Field/Parameter/BindingList" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/Collections";
    import { IObject } from "lib/root/Core/Primitives/IObject";
    import { EntityBindingListParameterConfig } from "lib/root/Entity/Fields/Parameter/Types/BindingList/EntityBindingListParameterConfig";
    import { IEntityBindingListParameter } from "lib/root/Entity/Fields/Parameter/Types/BindingList/IEntityBindingListParameter";
    import { IEntityBindingListParameterValue } from "lib/root/Entity/Fields/Parameter/Types/BindingList/IEntityBindingListParameterValue";
    import { Badge } from "lib/root/Controls/Badge";
    import { IControl } from "lib/root/Controls/IControl";
    import { BaseParameterField } from "lib/root/Controls/List/Field/Parameter/BaseParameterField";
    export class BindingList extends BaseParameterField<IEntityBindingListParameter, EntityBindingListParameterConfig, IEntityBindingListParameterValue> {
        private _badges;
        readonly badges: IObject<IReadOnlyCollection<Badge>>;
        createParameterValueControl(entityField: IEntityBindingListParameter, isOldValue: boolean): IControl;
        private updateControl(control, entityField);
    }
}
declare module "lib/root/Controls/Xaml" {
    import { Panel } from "lib/root/Controls/Panel";
    export class Xaml extends Panel {
        private _text;
        text: string;
    }
}
declare module "lib/root/Controls/List/Field/Parameter/BaseTextParameter" {
    import { IEntityParameter } from "lib/root/Entity/Fields/Parameter/IEntityParameter";
    import { IEntityParameterFieldConfig } from "lib/root/Entity/Fields/Parameter/IEntityParameterFieldConfig";
    import { IEntityParameterValue } from "lib/root/Entity/Fields/Parameter/IEntityParameterValue";
    import { IControl } from "lib/root/Controls/IControl";
    import { BaseParameterField } from "lib/root/Controls/List/Field/Parameter/BaseParameterField";
    export abstract class BaseTextParameter<TEntityParameter extends IEntityParameter, TEntityParameterConfig extends IEntityParameterFieldConfig, TEntityParameterValue extends IEntityParameterValue> extends BaseParameterField<TEntityParameter, TEntityParameterConfig, TEntityParameterValue> {
        protected createParameterValueControl(data: TEntityParameter, isOldValue: boolean): IControl;
        protected abstract getString(value: TEntityParameterValue): string;
        private getStringParameterValue(value);
        private updateTextControl(textControl, xString, isOldValue);
    }
}
declare module "lib/root/Controls/List/Field/Parameter/Date" {
    import { EntityDateParameterConfig } from "lib/root/Entity/Fields/Parameter/Types/Date/EntityDateParameterConfig";
    import { IEntityDateParameter } from "lib/root/Entity/Fields/Parameter/Types/Date/IEntityDateParameter";
    import { IEntityDateParameterValue } from "lib/root/Entity/Fields/Parameter/Types/Date/IEntityDateParameterValue";
    import { BaseTextParameter } from "lib/root/Controls/List/Field/Parameter/BaseTextParameter";
    export class Date extends BaseTextParameter<IEntityDateParameter, EntityDateParameterConfig, IEntityDateParameterValue> {
        protected getString(value: IEntityDateParameterValue): string;
    }
}
declare module "lib/root/Controls/List/Field/Parameter/DatePeriod" {
    import { EntityDatePeriodParameterConfig } from "lib/root/Entity/Fields/Parameter/Types/DatePeriod/EntityDatePeriodParameterConfig";
    import { IEntityDatePeriodParameter } from "lib/root/Entity/Fields/Parameter/Types/DatePeriod/IEntityDatePeriodParameter";
    import { IEntityDatePeriodParameterValue } from "lib/root/Entity/Fields/Parameter/Types/DatePeriod/IEntityDatePeriodParameterValue";
    import { BaseTextParameter } from "lib/root/Controls/List/Field/Parameter/BaseTextParameter";
    export class DatePeriod extends BaseTextParameter<IEntityDatePeriodParameter, EntityDatePeriodParameterConfig, IEntityDatePeriodParameterValue> {
        protected getString(value: IEntityDatePeriodParameterValue): string;
    }
}
declare module "lib/root/Controls/List/Field/Parameter/DateTime" {
    import { EntityDateTimeParameterConfig } from "lib/root/Entity/Fields/Parameter/Types/DateTime/EntityDateTimeParameterConfig";
    import { IEntityDateTimeParameter } from "lib/root/Entity/Fields/Parameter/Types/DateTime/IEntityDateTimeParameter";
    import { IEntityDateTimeParameterValue } from "lib/root/Entity/Fields/Parameter/Types/DateTime/IEntityDateTimeParameterValue";
    import { BaseTextParameter } from "lib/root/Controls/List/Field/Parameter/BaseTextParameter";
    export class DateTime extends BaseTextParameter<IEntityDateTimeParameter, EntityDateTimeParameterConfig, IEntityDateTimeParameterValue> {
        protected getString(value: IEntityDateTimeParameterValue): string;
    }
}
declare module "lib/root/Controls/List/Field/Parameter/Enum" {
    import { EntityChoiceParameterConfig } from "lib/root/Entity/Fields/Parameter/Types/Choice/EntityChoiceParameterConfig";
    import { IEntityChoiceParameter } from "lib/root/Entity/Fields/Parameter/Types/Choice/IEntityChoiceParameter";
    import { IEntityChoiceParameterValue } from "lib/root/Entity/Fields/Parameter/Types/Choice/IEntityChoiceParameterValue";
    import { BaseTextParameter } from "lib/root/Controls/List/Field/Parameter/BaseTextParameter";
    export class Enum extends BaseTextParameter<IEntityChoiceParameter, EntityChoiceParameterConfig, IEntityChoiceParameterValue> {
        protected getString(value: IEntityChoiceParameterValue): string;
    }
}
declare module "lib/root/Controls/List/Field/Parameter/IconList" {
    import { Icon } from "lib/root/Controls/index";
    import { IReadOnlyCollection } from "lib/root/Core/Collections/Collections";
    import { IObject } from "lib/root/Core/Primitives/IObject";
    import { EntityIconListParameterConfig } from "lib/root/Entity/Fields/Parameter/Types/IconList/EntityIconListParameterConfig";
    import { IEntityIconListParameter } from "lib/root/Entity/Fields/Parameter/Types/IconList/IEntityIconListParameter";
    import { IEntityIconListParameterValue } from "lib/root/Entity/Fields/Parameter/Types/IconList/IEntityIconListParameterValue";
    import { IControl } from "lib/root/Controls/IControl";
    import { BaseParameterField } from "lib/root/Controls/List/Field/Parameter/BaseParameterField";
    export class IconList extends BaseParameterField<IEntityIconListParameter, EntityIconListParameterConfig, IEntityIconListParameterValue> {
        private _valueIcons;
        readonly valueIcons: IObject<IReadOnlyCollection<Icon>>;
        createParameterValueControl(entityField: IEntityIconListParameter, isOldValue: boolean): IControl;
        private updateControl(control, entityField);
    }
}
declare module "lib/root/Controls/List/Field/Parameter/LinkControlFactory" {
    import { IEntityLinkParameterValueData } from "lib/root/Entity/Fields/Parameter/Types/Link/IEntityLinkParameterValueData";
    import { IControl } from "lib/root/Controls/IControl";
    export class LinkControlFactory {
        private static _maxUrlCharacters;
        static factory(linkData: IEntityLinkParameterValueData, isFollowable: boolean, isSmall: boolean, noValueText: string, existedControl?: IControl): IControl;
    }
}
declare module "lib/root/Controls/List/Field/Parameter/Link" {
    import { EntityLinkParameterConfig } from "lib/root/Entity/Fields/Parameter/Types/Link/EntityLinkParameterConfig";
    import { IEntityLinkParameter } from "lib/root/Entity/Fields/Parameter/Types/Link/IEntityLinkParameter";
    import { IEntityLinkParameterValue } from "lib/root/Entity/Fields/Parameter/Types/Link/IEntityLinkParameterValue";
    import { IControl } from "lib/root/Controls/IControl";
    import { BaseParameterField } from "lib/root/Controls/List/Field/Parameter/BaseParameterField";
    export class Link extends BaseParameterField<IEntityLinkParameter, EntityLinkParameterConfig, IEntityLinkParameterValue> {
        readonly isFollowable: boolean;
        createParameterValueControl(entityField: IEntityLinkParameter, isOldValue: boolean): IControl;
        private updateControl(control, entityField);
    }
}
declare module "lib/root/Controls/List/Field/Parameter/LinkList" {
    import { EntityLinkListParameterConfig } from "lib/root/Entity/Fields/Parameter/Types/LinkList/EntityLinkListParameterConfig";
    import { IEntityLinkListParameter } from "lib/root/Entity/Fields/Parameter/Types/LinkList/IEntityLinkListParameter";
    import { IEntityLinkListParameterValue } from "lib/root/Entity/Fields/Parameter/Types/LinkList/IEntityLinkListParameterValue";
    import { IControl } from "lib/root/Controls/IControl";
    import { BaseParameterField } from "lib/root/Controls/List/Field/Parameter/BaseParameterField";
    export class LinkList extends BaseParameterField<IEntityLinkListParameter, EntityLinkListParameterConfig, IEntityLinkListParameterValue> {
        private _links;
        readonly isFollowable: boolean;
        createParameterValueControl(entityField: IEntityLinkListParameter, isOldValue: boolean): IControl;
        private updateControl(control, entityField);
    }
}
declare module "lib/root/Controls/List/Field/Parameter/Price" {
    import { EntityPriceParameterConfig } from "lib/root/Entity/Fields/Parameter/Types/Price/EntityPriceParameterConfig";
    import { IEntityPriceParameter } from "lib/root/Entity/Fields/Parameter/Types/Price/IEntityPriceParameter";
    import { IEntityPriceParameterValue } from "lib/root/Entity/Fields/Parameter/Types/Price/IEntityPriceParameterValue";
    import { BaseTextParameter } from "lib/root/Controls/List/Field/Parameter/BaseTextParameter";
    export class Price extends BaseTextParameter<IEntityPriceParameter, EntityPriceParameterConfig, IEntityPriceParameterValue> {
        protected getString(value: IEntityPriceParameterValue): string;
    }
}
declare module "lib/root/Controls/List/Field/Parameter/Quantity" {
    import { EntityQuantityParameterConfig } from "lib/root/Entity/Fields/Parameter/Types/Quantity/EntityQuantityParameterConfig";
    import { IEntityQuantityParameter } from "lib/root/Entity/Fields/Parameter/Types/Quantity/IEntityQuantityParameter";
    import { IEntityQuantityParameterValue } from "lib/root/Entity/Fields/Parameter/Types/Quantity/IEntityQuantityParameterValue";
    import { BaseTextParameter } from "lib/root/Controls/List/Field/Parameter/BaseTextParameter";
    export class Quantity extends BaseTextParameter<IEntityQuantityParameter, EntityQuantityParameterConfig, IEntityQuantityParameterValue> {
        protected getString(value: IEntityQuantityParameterValue): string;
    }
}
declare module "lib/root/Controls/List/Field/Parameter/Text" {
    import { EntityTextParameterConfig } from "lib/root/Entity/Fields/Parameter/Types/Text/EntityTextParameterConfig";
    import { IEntityTextParameter } from "lib/root/Entity/Fields/Parameter/Types/Text/IEntityTextParameter";
    import { IEntityTextParameterValue } from "lib/root/Entity/Fields/Parameter/Types/Text/IEntityTextParameterValue";
    import { BaseTextParameter } from "lib/root/Controls/List/Field/Parameter/BaseTextParameter";
    export class Text extends BaseTextParameter<IEntityTextParameter, EntityTextParameterConfig, IEntityTextParameterValue> {
        protected getString(value: IEntityTextParameterValue): string;
    }
}
declare module "lib/root/Controls/List/Field/Parameter/Time" {
    import { EntityTimeParameterConfig } from "lib/root/Entity/Fields/Parameter/Types/Time/EntityTimeParameterConfig";
    import { IEntityTimeParameter } from "lib/root/Entity/Fields/Parameter/Types/Time/IEntityTimeParameter";
    import { IEntityTimeParameterValue } from "lib/root/Entity/Fields/Parameter/Types/Time/IEntityTimeParameterValue";
    import { BaseTextParameter } from "lib/root/Controls/List/Field/Parameter/BaseTextParameter";
    export class Time extends BaseTextParameter<IEntityTimeParameter, EntityTimeParameterConfig, IEntityTimeParameterValue> {
        protected getString(value: IEntityTimeParameterValue): string;
    }
}
declare module "lib/root/Controls/List/Views/ListItemSimpleAction" {
    import { IAction1 } from "lib/root/Core/Delegates";
    import { IBoolean } from "lib/root/Core/Primitives/IBoolean";
    import { IEntityActionConfig } from "lib/root/Entity/Action/IEntityActionConfig";
    import { IEntity } from "lib/root/Entity/IEntity";
    import { IControl } from "lib/root/Controls/IControl";
    export class ListItemSimpleAction {
        private _actionArguments;
        constructor(entity: IEntity, config: IEntityActionConfig, isExists: IBoolean, isEnabled: IBoolean);
        private _config;
        readonly config: IEntityActionConfig;
        private _isExists;
        readonly isExists: IBoolean;
        private _isAvailable;
        readonly isAvailable: IBoolean;
        attach(control: IControl, setIsDisabled: IAction1<boolean>): void;
        private call();
        private getHref();
    }
}
declare module "lib/root/Controls/List/Views/ListItemSimpleActions" {
    import { ICollection } from "lib/root/Core/Collections/Collections";
    import { EntityActionsConfig } from "lib/root/Entity/Action/EntityActionsConfig";
    import { IEntity } from "lib/root/Entity/IEntity";
    import { ListItemSimpleAction } from "lib/root/Controls/List/Views/ListItemSimpleAction";
    export class ListItemSimpleActions {
        constructor(actionsConfig: EntityActionsConfig, entity: IEntity);
        getAll(sorted?: boolean): ICollection<ListItemSimpleAction>;
        private update(entity);
        private _actionsConfig;
        readonly actionsConfig: EntityActionsConfig;
        private _edit;
        readonly edit: ListItemSimpleAction;
        private _custom;
        private _remove;
    }
}
declare module "lib/root/Controls/List/Field/Switch" {
    import { IBoolean } from "lib/root/Core/Primitives/IBoolean";
    import { EntitySetActivityActionConfig } from "lib/root/Entity/Action/EntitySetActivityActionConfig";
    import { IEntityLockableBooleanField } from "lib/root/Entity/Fields/IEntityLockableBooleanField";
    import { IControl } from "lib/root/Controls/IControl";
    import { BaseField } from "lib/root/Controls/List/Field/BaseField";
    export class Switch extends BaseField<IEntityLockableBooleanField, EntitySetActivityActionConfig, boolean> {
        private _switchControl;
        private _isChecked;
        readonly isChecked: IBoolean;
        protected createContentControl(entityField: IEntityLockableBooleanField): IControl;
        private getTooltipText();
        private updateIsChecked(entityField);
        private updateIsReadOnly(entityField);
    }
}
declare module "lib/root/Controls/List/Field/Title" {
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    import { IBoolean } from "lib/root/Core/Primitives/IBoolean";
    import { IString } from "lib/root/Core/Primitives/IString";
    import { XObject } from "lib/root/Core/Primitives/XObject";
    import { EntityLogoFieldConfig } from "lib/root/Entity/Fields/Config/EntityLogoFieldConfig";
    import { EntityNameFieldConfig } from "lib/root/Entity/Fields/Config/EntityNameFieldConfig";
    import { IEntityBaseFieldConfig } from "lib/root/Entity/Fields/IEntityBaseFieldConfig";
    import { IEntityField } from "lib/root/Entity/Fields/IEntityField";
    import { IEntity } from "lib/root/Entity/IEntity";
    import { IEntityConfig } from "lib/root/Entity/IEntityConfig";
    import { View } from "lib/root/Entity/List/View";
    import { Badge } from "lib/root/Controls/Badge";
    import { IControl } from "lib/root/Controls/IControl";
    import { Image } from "lib/root/Controls/Image";
    import { Text } from "lib/root/Controls/Text";
    import { ListItemSimpleAction } from "lib/root/Controls/List/Views/ListItemSimpleAction";
    import { BaseField } from "lib/root/Controls/List/Field/BaseField";
    export interface IListItemTitleData extends IEntityField {
        name?: IString;
        isNew?: IBoolean;
        logo?: IString;
        editAction: ListItemSimpleAction;
    }
    export interface IListItemTitleConfig extends IEntityBaseFieldConfig {
        nameConfig: EntityNameFieldConfig;
        logoConfig: EntityLogoFieldConfig;
    }
    export class Title extends BaseField<IListItemTitleData, IListItemTitleConfig, void> {
        constructor(entityConfig: IEntityConfig, entity: IEntity, editAction: ListItemSimpleAction, view: View);
        readonly skinChange: EventHandler;
        private _titleControl;
        readonly titleControl: XObject<IControl>;
        private _titleTextControl;
        readonly titleTextControl: XObject<Text>;
        private _newBadge;
        readonly newBadge: XObject<Badge>;
        private _logoImage;
        readonly logoImage: XObject<Image>;
        protected createContentControl(entityField: IListItemTitleData): IControl;
        private updateName(entityField);
        private updateIsNew(entityField, isUpdateChildren);
        private updateLogo(entityField, isUpdateChildren);
        private updateTitleControl(entityField, isUpdateChildren);
        private updateChildren();
    }
}
declare module "lib/root/Controls/List/Field/Unread" {
    import { IBoolean } from "lib/root/Core/Primitives/IBoolean";
    import { EntityUnreadFieldConfig } from "lib/root/Entity/Fields/Config/EntityUnreadFieldConfig";
    import { IEntityLockableBooleanField } from "lib/root/Entity/Fields/IEntityLockableBooleanField";
    import { IControl } from "lib/root/Controls/IControl";
    import { Rectangle } from "lib/root/Controls/Rectangle";
    import { BaseField } from "lib/root/Controls/List/Field/BaseField";
    export class Unread extends BaseField<IEntityLockableBooleanField, EntityUnreadFieldConfig, boolean> {
        private _circle;
        readonly circle: Rectangle;
        private _isUnread;
        readonly isUnread: IBoolean;
        private _isDisabled;
        readonly isDisabled: IBoolean;
        protected createContentControl(entityField: IEntityLockableBooleanField): IControl;
    }
}
declare module "lib/root/Controls/List/Views/ListViewItemFields" {
    import { CheckBoxField } from "lib/root/Controls/List/Field/CheckBoxField";
    import { IField } from "lib/root/Controls/List/Field/IField";
    import { Switch } from "lib/root/Controls/List/Field/Switch";
    import { Title } from "lib/root/Controls/List/Field/Title";
    import { Unread } from "lib/root/Controls/List/Field/Unread";
    export class ListViewItemFields {
        private _fields;
        private _fieldsById;
        constructor();
        add(field: IField): void;
        at(index: number): IField;
        getById(id: string): IField;
        readonly count: number;
        private _checkBox;
        readonly checkBox: CheckBoxField;
        private _switch;
        readonly switch: Switch;
        private _title;
        readonly title: Title;
        private _unread;
        readonly unread: Unread;
    }
}
declare module "lib/root/Controls/List/Views/ListViewItem" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/Collections";
    import { IFunc1 } from "lib/root/Core/Delegates";
    import { IBoolean } from "lib/root/Core/Primitives/IBoolean";
    import { IEntityParameter } from "lib/root/Entity/Fields/Parameter/IEntityParameter";
    import { IEntityParameterFieldConfig } from "lib/root/Entity/Fields/Parameter/IEntityParameterFieldConfig";
    import { IEntity } from "lib/root/Entity/IEntity";
    import { IEntityConfig } from "lib/root/Entity/IEntityConfig";
    import { View } from "lib/root/Entity/List/View";
    import { IField } from "lib/root/Controls/List/Field/IField";
    import { ListItemSimpleActions } from "lib/root/Controls/List/Views/ListItemSimpleActions";
    import { ListViewItemFields } from "lib/root/Controls/List/Views/ListViewItemFields";
    export abstract class ListViewItem {
        protected _entityConfig: IEntityConfig;
        protected _view: View;
        protected _elementIndex: number;
        constructor(entity: IEntity, entityConfig: IEntityConfig, view?: View, elementIndex?: number);
        private _entity;
        readonly entity: IEntity;
        private _fields;
        readonly fields: ListViewItemFields;
        private _simpleActions;
        readonly simpleActions: ListItemSimpleActions;
        private _isDisabled;
        readonly isDisabled: IBoolean;
        private _isError;
        readonly isError: IBoolean;
        protected abstract createItem(): void;
        protected createParameterField(parameterConfig: IEntityParameterFieldConfig, getParameter?: IFunc1<IEntity, IEntityParameter>): IField;
        protected getParameterFields(): IReadOnlyCollection<IField>;
    }
}
declare module "lib/root/Controls/List/Views/IListView" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { IBoolean } from "lib/root/Core/Primitives/IBoolean";
    import { IListFieldsVisibility } from "lib/root/Entity/List/IListFieldsVisibility";
    import { Control } from "lib/root/Controls/Control";
    import { ListViewItem } from "lib/root/Controls/List/Views/ListViewItem";
    export interface IListView extends Control {
        viewItems: IReadOnlyCollection<ListViewItem>;
        setFieldsVisibility(fieldVisibilityByIdMap: IListFieldsVisibility): void;
        resetColumnWidths(): void;
        expandableChildren: boolean;
        readonly allowColumnResize: IBoolean;
    }
}
declare module "lib/root/Controls/List/Views/ListView" {
    import { Control } from "lib/root/Controls/index";
    import { List } from "lib/root/Core/Collections/Collections";
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { IBoolean } from "lib/root/Core/Primitives/IBoolean";
    import { IEntity } from "lib/root/Entity/IEntity";
    import { IEntityConfig } from "lib/root/Entity/IEntityConfig";
    import { IListFieldsVisibility } from "lib/root/Entity/List/IListFieldsVisibility";
    import { IListView } from "lib/root/Controls/List/Views/IListView";
    import { ListViewItem } from "lib/root/Controls/List/Views/ListViewItem";
    export abstract class ListView<TListItem extends ListViewItem> extends Control implements IListView {
        protected _data: IReadOnlyCollection<IEntity>;
        protected _config: IEntityConfig;
        constructor(data: IReadOnlyCollection<IEntity>, config: IEntityConfig);
        abstract setFieldsVisibility(fieldVisibilityByIdMap: IListFieldsVisibility): void;
        protected _viewItems: List<TListItem>;
        readonly viewItems: IReadOnlyCollection<TListItem>;
        private _expandableChildren;
        expandableChildren: boolean;
        protected _allowColumnResize: IBoolean;
        readonly allowColumnResize: IBoolean;
        resetColumnWidths(): void;
    }
}
declare module "lib/root/Controls/List/Views/Table/ListTableEmptyHeader" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/Collections";
    import { IEnumerable } from "lib/root/Core/Collections/IEnumerable";
    import { IEntity } from "lib/root/Entity/IEntity";
    import { ILayout } from "lib/root/Layout/ILayout";
    import { IControl } from "lib/root/Controls/IControl";
    import { TableHeader } from "lib/root/Controls/Table/Header/TableHeader";
    import { ITableHeader } from "lib/root/Controls/Table/ITableHeader";
    import { TreeView } from "lib/root/Controls/TreeView/TreeView";
    export class ListTableEmptyHeader extends TableHeader implements ITableHeader {
        private _entities;
        constructor(entity: IReadOnlyCollection<IEntity>);
        private _treeView;
        readonly treeView: TreeView;
        getCell(cellIndex: number): IControl;
        getCellCount(): number;
        getCellVisibility(cellIndex: number): boolean;
        getCellSize(cellIndex: number): number;
        readonly layouts: IEnumerable<ILayout>;
        private getLeafNode(cellIndex);
        private createListTreeViewNode();
        private update();
        private isChild(entity);
        private addTimelineChildren(start);
        private createChildren(entity);
    }
}
declare module "lib/root/Controls/List/Field/CheckBoxHeader" {
    import { Control } from "lib/root/Controls/index";
    import { ChangeEventHandler } from "lib/root/Core/Events/ChangeEventHandler";
    import { IBoolean } from "lib/root/Core/Primitives/index";
    import { EntityCheckboxFieldConfig } from "lib/root/Entity/Fields/Config/EntityCheckboxFieldConfig";
    import { IEntityBaseFieldConfig } from "lib/root/Entity/Fields/IEntityBaseFieldConfig";
    import { CheckBox } from "lib/root/Controls/CheckBox";
    import { IField } from "lib/root/Controls/List/Field/IField";
    export class CheckBoxHeader extends Control implements IField {
        private _checkBox;
        readonly checkBox: CheckBox;
        private _isChecked;
        readonly isChecked: IBoolean;
        readonly config: IEntityBaseFieldConfig;
        readonly toggle: ChangeEventHandler<boolean>;
        constructor(config: EntityCheckboxFieldConfig);
    }
}
declare module "lib/root/Controls/List/Views/Table/ListTableHeaderItem" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { IEntityConfig } from "lib/root/Entity/IEntityConfig";
    import { CheckBoxHeader } from "lib/root/Controls/List/Field/CheckBoxHeader";
    import { IField } from "lib/root/Controls/List/Field/IField";
    export class ListTableHeaderItem {
        private _fields;
        private _config;
        constructor(config: IEntityConfig);
        readonly fields: IReadOnlyCollection<IField>;
        private _checkBoxHeader;
        readonly checkBoxHeader: CheckBoxHeader;
        private createItem();
        private addField(fieldConfig);
    }
}
declare module "lib/root/Controls/List/Views/Table/ListTableHeader" {
    import { IEntityConfig } from "lib/root/Entity/IEntityConfig";
    import { IListFieldsVisibility } from "lib/root/Entity/List/IListFieldsVisibility";
    import { Grid } from "lib/root/Controls/Grid/Grid";
    import { SimpleTableHeader } from "lib/root/Controls/Table/Header/SimpleTableHeader";
    import { ITableHeader } from "lib/root/Controls/Table/ITableHeader";
    import { ListTableHeaderItem } from "lib/root/Controls/List/Views/Table/ListTableHeaderItem";
    export class ListTableHeader extends SimpleTableHeader implements ITableHeader {
        private _config;
        private _listTableHeaderItem;
        constructor(config: IEntityConfig);
        readonly listTableHeaderItem: ListTableHeaderItem;
        getCellCount(): number;
        getGrid(): Grid;
        setFieldsVisibility(fieldVisibilityByIdMap: IListFieldsVisibility): void;
        protected update(): void;
    }
}
declare module "lib/root/Controls/List/Field/EventTitle" {
    import { IString } from "lib/root/Core/Primitives/IString";
    import { EntityNameFieldConfig } from "lib/root/Entity/Fields/Config/EntityNameFieldConfig";
    import { EntityEventInfoConfig } from "lib/root/Entity/Fields/Config/EventInfo/EntityEventInfoConfig";
    import { IEntityBaseFieldConfig } from "lib/root/Entity/Fields/IEntityBaseFieldConfig";
    import { IEntityEventInfo } from "lib/root/Entity/Fields/IEntityEventInfo";
    import { IEntityField } from "lib/root/Entity/Fields/IEntityField";
    import { IEntity } from "lib/root/Entity/IEntity";
    import { IEntityConfig } from "lib/root/Entity/IEntityConfig";
    import { View } from "lib/root/Entity/List/View";
    import { Badge } from "lib/root/Controls/Badge";
    import { IControl } from "lib/root/Controls/IControl";
    import { ListItemSimpleAction } from "lib/root/Controls/List/Views/ListItemSimpleAction";
    import { BaseField } from "lib/root/Controls/List/Field/BaseField";
    export interface IListItemEventTitleData extends IEntityField {
        name?: IString;
        eventInfo: IEntityEventInfo;
    }
    export interface IListItemEventTitleConfig extends IEntityBaseFieldConfig {
        nameConfig: EntityNameFieldConfig;
        eventInfoConfig: EntityEventInfoConfig;
    }
    export class EventTitle extends BaseField<IListItemEventTitleData, IListItemEventTitleConfig, void> {
        constructor(entityConfig: IEntityConfig, entity: IEntity, editAction: ListItemSimpleAction, view: View);
        private _badge;
        readonly badge: Badge;
        protected createContentControl(entityField: IListItemEventTitleData): IControl;
        private updateNameText(entityField);
        private updateColor(entityField);
    }
}
declare module "lib/root/Controls/PopupWindowButton" {
    import { Button, Control } from "lib/root/Controls/index";
    import { Lazy } from "lib/root/Core/Lazy";
    import { ButtonType } from "lib/root/Controls/Button/index";
    import { PopupWindow } from "lib/root/Controls/PopupWindow";
    export class PopupWindowButton extends Control {
        constructor(buttonType: ButtonType);
        private _button;
        readonly button: Button;
        readonly popupWindow: Lazy<PopupWindow>;
    }
}
declare module "lib/root/Controls/List/Field/IListItemHistoryData" {
    import { INumber } from "lib/root/Core/Primitives/INumber";
    import { IString } from "lib/root/Core/Primitives/IString";
    import { IEntityField } from "lib/root/Entity/Fields/IEntityField";
    export interface IListItemHistoryData extends IEntityField {
        entryCount: INumber;
        itemName: IString;
    }
}
declare module "lib/root/Controls/List/Field/History/BaseHistory" {
    import { Text } from "lib/root/Controls/index";
    import { IReadOnlyCollection } from "lib/root/Core/Collections/Collections";
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    import { EntityBaseHistoryFieldConfig } from "lib/root/Entity/Fields/Config/EntityBaseHistoryFieldConfig";
    import { IEntity } from "lib/root/Entity/IEntity";
    import { IEntityConfig } from "lib/root/Entity/IEntityConfig";
    import { View } from "lib/root/Entity/List/View";
    import { IControl } from "lib/root/Controls/IControl";
    import { PopupWindowButton } from "lib/root/Controls/PopupWindowButton";
    import { List as ListControl } from "lib/root/Controls/List/List";
    import { BaseField } from "lib/root/Controls/List/Field/BaseField";
    import { IListItemHistoryData } from "lib/root/Controls/List/Field/IListItemHistoryData";
    export abstract class BaseHistory<THistoryFieldConfig extends EntityBaseHistoryFieldConfig> extends BaseField<IListItemHistoryData, THistoryFieldConfig, void> {
        constructor(entityConfig: IEntityConfig, entity: IEntity, view: View, historyConfig: THistoryFieldConfig, popupHeaderText: string);
        private _popupHeaderText;
        protected abstract createHistoryContent(baseHistoryItems: IReadOnlyCollection<IEntity>): ListControl;
        protected abstract getTooltipText(): string;
        protected createContentControl(entityField: IListItemHistoryData): IControl;
        readonly historyUpdated: EventHandler;
        private _list;
        readonly list: ListControl;
        private _itemNameText;
        readonly itemNameText: Text;
        private _popupWindowButton;
        readonly popupWindowButton: PopupWindowButton;
        private updateControl(entityField);
    }
}
declare module "lib/root/Controls/List/Field/History/EventHistory" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/Collections";
    import { EntityEventHistoryFieldConfig } from "lib/root/Entity/Fields/Config/EntityEventHistoryFieldConfig";
    import { IEntity } from "lib/root/Entity/IEntity";
    import { IEntityConfig } from "lib/root/Entity/IEntityConfig";
    import { View } from "lib/root/Entity/List/View";
    import { List as ListControl } from "lib/root/Controls/List/List";
    import { BaseHistory } from "lib/root/Controls/List/Field/History/BaseHistory";
    export class EventHistory extends BaseHistory<EntityEventHistoryFieldConfig> {
        private _commentFieldId;
        constructor(entityConfig: IEntityConfig, entity: IEntity, view: View);
        protected createHistoryContent(baseHistoryItems: IReadOnlyCollection<IEntity>): ListControl;
        protected getTooltipText(): string;
    }
}
declare module "lib/root/Core/NotificationType/NotificationTypes" {
    import { IColor } from "lib/root/Core/IColor";
    import { NotificationType } from "lib/root/Core/NotificationType/NotificationType";
    export class NotificationTypes {
        private static _typesInfo;
        static getTypeById(typeString: string): NotificationType;
        private static _typesByIdMap;
        static getIcon(typeString: string): string;
        static getColorByTypeId(typeString: string): IColor;
        static getColor(type: NotificationType): IColor;
        private static getColorByPaletteColorId(paletteColorId);
    }
}
declare module "lib/root/Controls/List/Field/IconStatus" {
    import { EntityStatusFieldConfig } from "lib/root/Entity/Fields/Config/EntityStatusFieldConfig";
    import { IEntityIconStatusField } from "lib/root/Entity/Fields/IEntityIconStatusField";
    import { IControl } from "lib/root/Controls/IControl";
    import { BaseField } from "lib/root/Controls/List/Field/BaseField";
    export class IconStatus extends BaseField<IEntityIconStatusField, EntityStatusFieldConfig, void> {
        private _icon;
        protected createContentControl(entityField: IEntityIconStatusField): IControl;
        private update(entityField);
    }
}
declare module "lib/root/Controls/List/Field/Image" {
    import { EntityImageFieldConfig } from "lib/root/Entity/Fields/Config/EntityImageFieldConfig";
    import { IEntityImageField } from "lib/root/Entity/Fields/IEntityImageField";
    import { Badge } from "lib/root/Controls/Badge";
    import { IControl } from "lib/root/Controls/IControl";
    import { Image as ImageControl } from "lib/root/Controls/Image";
    import { BaseField } from "lib/root/Controls/List/Field/BaseField";
    export class Image extends BaseField<IEntityImageField, EntityImageFieldConfig, void> {
        private _badge;
        readonly badge: Badge;
        private _image;
        readonly image: ImageControl;
        protected createContentControl(entityField: IEntityImageField): IControl;
        readonly container: IControl;
        private update(entityField);
    }
}
declare module "lib/root/Controls/List/Field/Index" {
    import { IString } from "lib/root/Core/Primitives/IString";
    import { EntityIndexFieldConfig } from "lib/root/Entity/Fields/Config/EntityIndexFieldConfig";
    import { IControl } from "lib/root/Controls/IControl";
    import { BaseField } from "lib/root/Controls/List/Field/BaseField";
    export class Index extends BaseField<IString, EntityIndexFieldConfig, void> {
        private _textControl;
        protected createContentControl(entityField: IString): IControl;
        private update(entityField);
    }
}
declare module "lib/root/Core/Rating" {
    import { IColor } from "lib/root/Core/IColor";
    export class Rating {
        private _min;
        private _max;
        private _maxFormatFractionSize;
        private _roundedValue;
        constructor(value: number);
        private _value;
        value: number;
        private _color;
        readonly color: IColor;
        toString(): string;
        private setValue(value);
    }
}
declare module "lib/root/Controls/List/Field/Rating" {
    import { IColor } from "lib/root/Core/IColor";
    import { INumber } from "lib/root/Core/Primitives/INumber";
    import { EntityRatingFieldConfig } from "lib/root/Entity/Fields/Config/EntityRatingFieldConfig";
    import { Badge } from "lib/root/Controls/Badge";
    import { IControl } from "lib/root/Controls/IControl";
    import { BaseField } from "lib/root/Controls/List/Field/BaseField";
    export class Rating extends BaseField<INumber, EntityRatingFieldConfig, void> {
        private _rating;
        private _badge;
        readonly badge: Badge;
        readonly value: number;
        readonly color: IColor;
        protected createContentControl(entityField: INumber): IControl;
        private update(entityField);
    }
}
declare module "lib/root/Controls/List/Field/Status" {
    import { EntityStatusFieldConfig } from "lib/root/Entity/Fields/Config/EntityStatusFieldConfig";
    import { IEntityStatusField } from "lib/root/Entity/Fields/IEntityStatusField";
    import { Badge } from "lib/root/Controls/Badge";
    import { IControl } from "lib/root/Controls/IControl";
    import { Text } from "lib/root/Controls/Text";
    import { BaseField } from "lib/root/Controls/List/Field/BaseField";
    export class Status extends BaseField<IEntityStatusField, EntityStatusFieldConfig, void> {
        private _badge;
        readonly badge: Badge;
        private _descriptionText;
        readonly descriptionText: Text;
        protected createContentControl(entityField: IEntityStatusField): IControl;
        private update(entityField);
    }
}
declare module "lib/root/Controls/List/Views/Table/Field/ListTableItemSimpleActions" {
    import { EntityActionsConfig } from "lib/root/Entity/Action/EntityActionsConfig";
    import { IControl } from "lib/root/Controls/IControl";
    import { BaseField } from "lib/root/Controls/List/Field/BaseField";
    import { ListItemSimpleActions } from "lib/root/Controls/List/Views/ListItemSimpleActions";
    export class ListTableItemSimpleActions extends BaseField<ListItemSimpleActions, EntityActionsConfig, void> {
        private _button;
        private _firstAction;
        private _popupMenuButton;
        protected createContentControl(entityField: ListItemSimpleActions): IControl;
        private createMenu(entityField);
        private addMenuItem(menu, action);
        private update(entityField);
        private updateSingleActionButton(entityField);
        private updatePopupMenuButton(entityField);
    }
}
declare module "lib/root/Controls/List/Views/Table/ListTableItem" {
    import { ListViewItem } from "lib/root/Controls/List/Views/ListViewItem";
    export class ListTableItem extends ListViewItem {
        protected createItem(): void;
    }
}
declare module "lib/root/Controls/List/Views/Table/ListTableView" {
    import { Table } from "lib/root/Controls/index";
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { IEntity } from "lib/root/Entity/IEntity";
    import { IEntityConfig } from "lib/root/Entity/IEntityConfig";
    import { IListFieldsVisibility } from "lib/root/Entity/List/IListFieldsVisibility";
    import { ListView } from "lib/root/Controls/List/Views/ListView";
    import { ListTableEmptyHeader } from "lib/root/Controls/List/Views/Table/ListTableEmptyHeader";
    import { ListTableHeader } from "lib/root/Controls/List/Views/Table/ListTableHeader";
    import { ListTableItem } from "lib/root/Controls/List/Views/Table/ListTableItem";
    export class ListTableView extends ListView<ListTableItem> {
        private readonly _rowCheckBoxValues;
        constructor(data: IReadOnlyCollection<IEntity>, config: IEntityConfig);
        private _table;
        readonly table: Table;
        private _horizontalHeader;
        readonly horizontalHeader: ListTableHeader;
        private _verticalHeader;
        readonly verticalHeader: ListTableEmptyHeader;
        resetColumnWidths(): void;
        setFieldsVisibility(fieldsVisibility: IListFieldsVisibility): void;
        readonly entities: IReadOnlyCollection<IEntity>;
        private attachMasterBooleanBehavior();
    }
}
declare module "lib/root/Controls/List/Views/Tile/Field/ListTileItemSimpleActions" {
    import { Button, Rectangle } from "lib/root/Controls/index";
    import { IDictionary } from "lib/root/Core/Collections/IDictionary";
    import { View } from "lib/root/Entity/List/View";
    import { IControl } from "lib/root/Controls/IControl";
    import { Switch } from "lib/root/Controls/List/Field/Switch";
    import { ListItemSimpleAction } from "lib/root/Controls/List/Views/ListItemSimpleAction";
    import { ListItemSimpleActions } from "lib/root/Controls/List/Views/ListItemSimpleActions";
    export class ListTileItemSimpleActions extends Rectangle {
        readonly allButtons: IDictionary<ListItemSimpleAction, Button>;
        readonly entityField: ListItemSimpleActions;
        readonly view: View;
        readonly container: IControl;
        constructor(view: View, switchField: Switch, entityField: ListItemSimpleActions);
        private createButton(action, hasText);
        private createContentControl(entityField, switchField);
    }
}
declare module "lib/root/Controls/List/Views/Tile/ListTileViewHeaderItem" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { IEntityConfig } from "lib/root/Entity/IEntityConfig";
    import { View } from "lib/root/Entity/List/View";
    import { IField } from "lib/root/Controls/List/Field/IField";
    export class ListTileViewHeaderItem {
        private _fields;
        private _config;
        private _view;
        constructor(config: IEntityConfig, view: View);
        readonly fields: IReadOnlyCollection<IField>;
        private createItem();
        private addField(fieldConfig);
    }
}
declare module "lib/root/Controls/List/Views/Tile/ListTileViewTableItem" {
    import { ListViewItem } from "lib/root/Controls/List/Views/ListViewItem";
    export class ListTileViewTableItem extends ListViewItem {
        protected createItem(): void;
    }
}
declare module "lib/root/Controls/List/Views/Tile/ListTileItem" {
    import { IBoolean } from "lib/root/Core/Primitives/IBoolean";
    import { IEntity } from "lib/root/Entity/IEntity";
    import { IEntityConfig } from "lib/root/Entity/IEntityConfig";
    import { IListFieldsVisibility } from "lib/root/Entity/List/IListFieldsVisibility";
    import { View } from "lib/root/Entity/List/View";
    import { Control } from "lib/root/Controls/Control";
    import { DockPanel } from "lib/root/Controls/DockPanel";
    import { Grid } from "lib/root/Controls/Grid/Grid";
    import { Icon } from "lib/root/Controls/Icon";
    import { IControl } from "lib/root/Controls/IControl";
    import { Rectangle } from "lib/root/Controls/Rectangle";
    import { StackPanel } from "lib/root/Controls/StackPanel";
    import { WrapPanel } from "lib/root/Controls/WrapPanel";
    import { Description } from "lib/root/Controls/List/Field/Description";
    import { Status } from "lib/root/Controls/List/Field/Status";
    import { Switch } from "lib/root/Controls/List/Field/Switch";
    import { ListTileViewTableItem } from "lib/root/Controls/List/Views/Tile/ListTileViewTableItem";
    export class ListTileItem extends Control {
        private _entity;
        private _entityConfig;
        private _view;
        private _stackPanel;
        private _stackPanelV;
        private _tableGrid;
        private _description;
        private _tableStackPanel;
        constructor(entity: IEntity, entityConfig: IEntityConfig, view: View, single: boolean);
        private _dockPanel;
        readonly dockPanel: DockPanel;
        private _status;
        readonly status: Status;
        private _image;
        readonly image: IControl;
        private _actionsPanel;
        readonly actionsPanel: Rectangle;
        private _switch;
        readonly switch: Switch;
        private _listViewItem;
        readonly listViewItem: ListTileViewTableItem;
        readonly description: Description;
        private _titleContainer;
        readonly titleContainer: WrapPanel | DockPanel;
        readonly stackPanelV: StackPanel;
        readonly stackPanel: StackPanel;
        readonly tableStackPanel: StackPanel;
        readonly view: View;
        readonly tableGrid: Grid;
        private _collapsedIcon;
        readonly collapsedIcon: Icon;
        readonly collapsed: IBoolean;
        readonly single: boolean;
        setFieldsVisibility(fieldsVisibility: IListFieldsVisibility): void;
        private setTitle(stackPanel);
        private gridItem();
    }
}
declare module "lib/root/Controls/List/Views/Tile/ListTileView" {
    import { Grid } from "lib/root/Controls/index";
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { IEntity } from "lib/root/Entity/IEntity";
    import { IEntityConfig } from "lib/root/Entity/IEntityConfig";
    import { IListFieldsVisibility } from "lib/root/Entity/List/IListFieldsVisibility";
    import { View } from "lib/root/Entity/List/View";
    import { ListView } from "lib/root/Controls/List/Views/ListView";
    import { ListTileViewTableItem } from "lib/root/Controls/List/Views/Tile/ListTileViewTableItem";
    export class ListTileView extends ListView<ListTileViewTableItem> {
        constructor(data: IReadOnlyCollection<IEntity>, config: IEntityConfig, view: View, singleItem: boolean);
        readonly singleItem: boolean;
        private _view;
        readonly view: View;
        private _tableGrid;
        readonly tableGrid: Grid;
        readonly data: IReadOnlyCollection<IEntity>;
        setFieldsVisibility(fieldsVisibility: IListFieldsVisibility): void;
        private setTableSize(tableGrid);
        private setCell(cell, index, cellIndex);
    }
}
declare module "lib/root/Controls/List/List" {
    import { Control } from "lib/root/Controls/index";
    import { IReadOnlyCollection } from "lib/root/Core/Collections/Collections";
    import { IObject } from "lib/root/Core/Primitives/index";
    import { IEntity } from "lib/root/Entity/IEntity";
    import { IEntityConfig } from "lib/root/Entity/IEntityConfig";
    import { IListFieldsVisibility } from "lib/root/Entity/List/IListFieldsVisibility";
    import { View } from "lib/root/Entity/List/View";
    import { IListView } from "lib/root/Controls/List/Views/IListView";
    import { ListViewItem } from "lib/root/Controls/List/Views/ListViewItem";
    export class List extends Control {
        private _config;
        private _data;
        private _fieldsVisibility;
        private _expandableChildren;
        private _singleItem;
        constructor(config: IEntityConfig, fieldsVisibility?: IObject<IListFieldsVisibility>, expandableChildren?: boolean, singleItem?: boolean);
        private _view;
        view: View;
        private _listView;
        readonly listView: IListView;
        readonly viewItems: IReadOnlyCollection<ListViewItem>;
        setData(data: IReadOnlyCollection<IEntity>, view?: View): void;
        setFieldsVisibility(fieldVisibilityByIdMap: IListFieldsVisibility): void;
        static create(data: IReadOnlyCollection<IEntity>, config: IEntityConfig, view: View, fieldsVisibility?: IObject<IListFieldsVisibility>): List;
        private setView(view, force?);
        private updateFieldsVisibility();
        private viewFactory(view);
        private render();
    }
}
declare module "lib/root/Controls/List/Field/History/ChangeHistory" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/Collections";
    import { EntityChangeHistoryFieldConfig } from "lib/root/Entity/Fields/Config/EntityChangeHistoryFieldConfig";
    import { EntityTextParameterConfig } from "lib/root/Entity/Fields/Parameter/Types/Text/EntityTextParameterConfig";
    import { IEntity } from "lib/root/Entity/IEntity";
    import { IEntityConfig } from "lib/root/Entity/IEntityConfig";
    import { View } from "lib/root/Entity/List/View";
    import { List as ListControl } from "lib/root/Controls/List/List";
    import { BaseHistory } from "lib/root/Controls/List/Field/History/BaseHistory";
    export class ChangeHistory extends BaseHistory<EntityChangeHistoryFieldConfig> {
        private _momentFieldId;
        private _fieldNameFieldId;
        private _userNameFieldId;
        private _commentFieldId;
        constructor(entityConfig: IEntityConfig, entity: IEntity, view: View);
        private _entityParameterConfig;
        readonly entityParameterConfig: EntityTextParameterConfig;
        private _userEntityConfig;
        readonly userEntityConfig: EntityTextParameterConfig;
        protected createHistoryContent(baseHistoryItems: IReadOnlyCollection<IEntity>): ListControl;
        protected getTooltipText(): string;
    }
}
declare module "lib/root/Controls/Preloader" {
    import { Control } from "lib/root/Controls/Control";
    import { Icon } from "lib/root/Controls/Icon";
    export class Preloader extends Control {
        constructor();
        private _icon;
        readonly icon: Icon;
    }
}
declare module "lib/root/Controls/Selectors" {
    import { IControl } from "lib/root/Controls/index";
    import { IPredicate1 } from "lib/root/Core/Delegates";
    export class Selectors {
        static readonly any: IPredicate1<IControl>;
        static readonly button: IPredicate1<IControl>;
        static readonly text: IPredicate1<IControl>;
    }
}
declare module "lib/root/Controls/Table/Header/TableHeaderCell" {
    import { Control } from "lib/root/Controls/index";
    import { IControl } from "lib/root/Controls/IControl";
    import { Text } from "lib/root/Controls/Text";
    export class TableHeaderCell extends Control {
        constructor();
        readonly text: Text;
        readonly description: Text;
        readonly container: IControl;
    }
}
declare module "lib/root/Controls/Table/Header/MonthDate" {
    import { DateTime } from "lib/root/Core/DateTime";
    import { Rectangle } from "lib/root/Controls/Rectangle";
    import { TableHeaderCell } from "lib/root/Controls/Table/Header/TableHeaderCell";
    export class MonthDate extends Rectangle {
        private _date;
        constructor(date: DateTime);
        readonly tableHeaderCell: TableHeaderCell;
        readonly date: DateTime;
        readonly isWeekend: boolean;
    }
}
declare module "lib/root/Controls/Table/Header/MonthName" {
    import { DateTime } from "lib/root/Core/DateTime";
    import { Rectangle } from "lib/root/Controls/Rectangle";
    import { Text } from "lib/root/Controls/Text";
    export class MonthName extends Rectangle {
        private _date;
        private _daysCount;
        private _text;
        constructor(date: DateTime, daysCount: number);
        readonly text: Text;
        readonly date: DateTime;
        readonly daysCount: number;
    }
}
declare module "lib/root/Controls/Skins/Default/Classes/BoxStyle" {
    import { IColor } from "lib/root/Core/IColor";
    import { IStroke } from "lib/root/Render/IStroke";
    import { Rectangle } from "lib/root/Controls/Rectangle";
    export class BoxStyle {
        constructor(backgroundColor: number, textColor: number, borderColor: number);
        readonly backgroundColor: IColor;
        readonly textColor: IColor;
        readonly borderColor: IColor;
        readonly border: IStroke;
        attach(control: Rectangle): void;
    }
}
declare module "lib/root/Controls/Skins/Default/AlertSkin" {
    import { Alert } from "lib/root/Controls/Alert/index";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    import { Skin } from "lib/root/Controls/Skins/Default/Skin";
    export class AlertSkin extends ControlSkin {
        protected _skin: Skin;
        protected attachStyle(alert: Alert): void;
        private attachAlertStyle(alert);
        private getAlertStyle(type);
    }
}
declare module "lib/root/Controls/Skins/Default/BadgeSkin" {
    import { Badge } from "lib/root/Controls/Badge";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class BadgeSkin extends ControlSkin {
        protected attachStyle(badge: Badge): void;
    }
}
declare module "lib/root/Controls/List/Field/History/IBaseHistory" {
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    import { IControl } from "lib/root/Controls/IControl";
    import { PopupWindowButton } from "lib/root/Controls/PopupWindowButton";
    import { Text } from "lib/root/Controls/Text";
    import { List } from "lib/root/Controls/List/List";
    export interface IBaseHistory extends IControl {
        historyUpdated: EventHandler;
        list: List;
        itemNameText: Text;
        popupWindowButton: PopupWindowButton;
    }
}
declare module "lib/root/Controls/Skins/Default/BaseHistorySkin" {
    import { IBaseHistory } from "lib/root/Controls/List/Field/History/IBaseHistory";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class BaseHistorySkin extends ControlSkin {
        protected attachStyle(element: IBaseHistory): void;
    }
}
declare module "lib/root/Controls/Skins/Default/ParameterSkin" {
    import { IControl } from "lib/root/Controls/IControl";
    import { IBaseParameterField } from "lib/root/Controls/List/Field/Parameter/IBaseParameterField";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class ParameterSkin extends ControlSkin {
        protected attachStyle(element: IBaseParameterField): void;
        protected attachTextStyle(control: IControl, hasTip: boolean): void;
        private attachTextControlStyle(element);
    }
}
declare module "lib/root/Controls/Skins/Default/BaseTextParameterSkin" {
    import { Text as TextParameter } from "lib/root/Controls/List/Field/Parameter/Text";
    import { ParameterSkin } from "lib/root/Controls/Skins/Default/ParameterSkin";
    export class BaseTextParameterSkin extends ParameterSkin {
        protected attachStyle(element: TextParameter): void;
        private alignValueControlRight(control);
    }
}
declare module "lib/root/Controls/Skins/Default/ButtonSkins/IButtonSkin" {
    import { Button } from "lib/root/Controls/index";
    export interface IButtonSkin {
        attach(button: Button): void;
        detach(button: Button): void;
        update(button: Button): void;
    }
}
declare module "lib/root/Controls/Skins/Default/ButtonSkins/ButtonSkinBase" {
    import { Button } from "lib/root/Controls/index";
    import { HorizontalAlignment } from "lib/root/Core/Graphics/HorizontalAlignment";
    import { Skin } from "lib/root/Controls/Skins/Default/Skin";
    import { IButtonSkin } from "lib/root/Controls/Skins/Default/ButtonSkins/IButtonSkin";
    export abstract class ButtonSkinBase implements IButtonSkin {
        static readonly leftPanelMarginRight: number;
        protected readonly _skin: Skin;
        protected horizontalAlignment: HorizontalAlignment;
        constructor(skin: Skin);
        attach(button: Button): void;
        detach(button: Button): void;
        update(button: Button): void;
        protected abstract attachCheckedStyle(button: Button): void;
        protected abstract attachDisabledStyle(button: Button): void;
        protected attachStyle(button: Button): void;
        protected attachStyleByState(button: Button): void;
        protected abstract attachUncheckedStyle(button: Button): void;
    }
}
declare module "lib/root/Controls/Skins/Default/ButtonSkins/BadgeButtonSkin" {
    import { Button } from "lib/root/Controls/index";
    import { ButtonSkinBase } from "lib/root/Controls/Skins/Default/ButtonSkins/ButtonSkinBase";
    export class BadgeButtonSkin extends ButtonSkinBase {
        protected attachCheckedStyle(button: Button): void;
        protected attachDisabledStyle(button: Button): void;
        protected attachStyle(button: Button): void;
        protected attachUncheckedStyle(button: Button): void;
    }
}
declare module "lib/root/Controls/Skins/Default/ButtonSkins/IconButtonSkinBase" {
    import { Button } from "lib/root/Controls/index";
    import { Skin } from "lib/root/Controls/Skins/Default/Skin";
    import { ButtonSkinBase } from "lib/root/Controls/Skins/Default/ButtonSkins/ButtonSkinBase";
    export class IconButtonSkinBase extends ButtonSkinBase {
        private static readonly _innerButtonSize;
        private readonly _innerButton;
        private readonly _borderRadius;
        private _innerButtonChangedListener;
        constructor(skin: Skin, iconName: string, iconSize: number, borderRadius: number);
        attach(button: Button): void;
        detach(button: Button): void;
        protected attachCheckedStyle(button: Button): void;
        protected attachDisabledStyle(button: Button): void;
        protected attachStyle(button: Button): void;
        protected attachUncheckedStyle(button: Button): void;
        private innerButtonChangedHandler(button);
        private setContent(button);
    }
}
declare module "lib/root/Controls/Skins/Default/ButtonSkins/CheckBoxButtonSkin" {
    import { Skin } from "lib/root/Controls/Skins/Default/Skin";
    import { IconButtonSkinBase } from "lib/root/Controls/Skins/Default/ButtonSkins/IconButtonSkinBase";
    export class CheckBoxButtonSkin extends IconButtonSkinBase {
        constructor(skin: Skin);
    }
}
declare module "lib/root/Controls/Skins/Default/ButtonSkins/IDefaultButtonStyle" {
    import { IColor } from "lib/root/Core/IColor";
    import { ILinearGradient } from "lib/root/Render/ILinearGradient";
    import { IStroke } from "lib/root/Render/IStroke";
    export interface IDefaultButtonStyle {
        readonly hoveredBorder: IStroke;
        readonly normalBorder: IStroke;
        readonly pressedGradient: ILinearGradient;
        readonly hoveredGradient: ILinearGradient;
        readonly normalGradient: ILinearGradient;
        readonly normalTextColor: IColor;
    }
}
declare module "lib/root/Controls/Skins/Default/ButtonSkins/DefaultButtonSkinBase" {
    import { IThickness } from "lib/root/Core/Graphics/IThickness";
    import { IColor } from "lib/root/Core/IColor";
    import { IStroke } from "lib/root/Render/IStroke";
    import { LinearGradient } from "lib/root/Render/LinearGradient";
    import { Button } from "lib/root/Controls/Button/index";
    import { Skin } from "lib/root/Controls/Skins/Default/Skin";
    import { ButtonSkinBase } from "lib/root/Controls/Skins/Default/ButtonSkins/ButtonSkinBase";
    import { IDefaultButtonStyle } from "lib/root/Controls/Skins/Default/ButtonSkins/IDefaultButtonStyle";
    export abstract class DefaultButtonSkinBase extends ButtonSkinBase {
        protected readonly disabledBorder: IStroke;
        protected readonly checkedAndHoveredBorder: IStroke;
        protected readonly checkedBorder: IStroke;
        protected readonly disabledBackgroundColor: IColor;
        protected readonly checkedAndPressedGradient: LinearGradient;
        protected readonly checkedGradient: LinearGradient;
        protected readonly disabledTextColor: IColor;
        protected readonly checkedTextColor: IColor;
        protected buttonBorderRadius: number;
        protected buttonWithIconBorderRadius: number;
        protected iconButtonPadding: IThickness;
        protected hasCustomPadding: boolean;
        private readonly _style;
        protected constructor(skin: Skin, style: IDefaultButtonStyle);
        protected attachCheckedStyle(button: Button): void;
        protected attachDisabledStyle(button: Button): void;
        protected attachStyle(button: Button): void;
        protected attachUncheckedStyle(button: Button): void;
        private getLinearGradient(button);
    }
}
declare module "lib/root/Controls/Skins/Default/ButtonSkins/DefaultButtonSkin" {
    import { Skin } from "lib/root/Controls/Skins/Default/Skin";
    import { DefaultButtonSkinBase } from "lib/root/Controls/Skins/Default/ButtonSkins/DefaultButtonSkinBase";
    export class DefaultButtonSkin extends DefaultButtonSkinBase {
        constructor(skin: Skin);
    }
}
declare module "lib/root/Controls/Skins/Default/ButtonSkins/EventCalendarButtonSkin" {
    import { Skin } from "lib/root/Controls/Skins/Default/Skin";
    import { DefaultButtonSkin } from "lib/root/Controls/Skins/Default/ButtonSkins/DefaultButtonSkin";
    export class EventCalendarButtonSkin extends DefaultButtonSkin {
        constructor(skin: Skin);
    }
}
declare module "lib/root/Controls/Skins/Default/ButtonSkins/InnerIconButtonSkin" {
    import { Button } from "lib/root/Controls/index";
    import { DefaultButtonSkin } from "lib/root/Controls/Skins/Default/ButtonSkins/DefaultButtonSkin";
    export class InnerIconButtonSkin extends DefaultButtonSkin {
        protected attachCheckedStyle(button: Button): void;
        protected attachDisabledStyle(button: Button): void;
        protected attachStyle(button: Button): void;
        protected attachUncheckedStyle(button: Button): void;
    }
}
declare module "lib/root/Controls/Skins/Default/ButtonSkins/LinkButtonSkin" {
    import { Button } from "lib/root/Controls/index";
    import { ButtonSkinBase } from "lib/root/Controls/Skins/Default/ButtonSkins/ButtonSkinBase";
    export class LinkButtonSkin extends ButtonSkinBase {
        protected attachCheckedStyle(button: Button): void;
        protected attachDisabledStyle(button: Button): void;
        protected attachStyle(button: Button): void;
        protected attachUncheckedStyle(button: Button): void;
    }
}
declare module "lib/root/Controls/Skins/Default/ButtonSkins/PrimaryButtonSkin" {
    import { Skin } from "lib/root/Controls/Skins/Default/Skin";
    import { DefaultButtonSkinBase } from "lib/root/Controls/Skins/Default/ButtonSkins/DefaultButtonSkinBase";
    export class PrimaryButtonSkin extends DefaultButtonSkinBase {
        constructor(skin: Skin);
    }
}
declare module "lib/root/Controls/Skins/Default/ButtonSkins/RadioButtonSkin" {
    import { Skin } from "lib/root/Controls/Skins/Default/Skin";
    import { IconButtonSkinBase } from "lib/root/Controls/Skins/Default/ButtonSkins/IconButtonSkinBase";
    export class RadioButtonSkin extends IconButtonSkinBase {
        constructor(skin: Skin);
    }
}
declare module "lib/root/Controls/Skins/Default/ButtonSkins/ScrollBarButtonSkin" {
    import { Skin } from "lib/root/Controls/Skins/Default/Skin";
    import { DefaultButtonSkin } from "lib/root/Controls/Skins/Default/ButtonSkins/DefaultButtonSkin";
    export class ScrollBarButtonSkin extends DefaultButtonSkin {
        constructor(skin: Skin);
    }
}
declare module "lib/root/Core/Easing/EasingMode" {
    /**
     * This enum defines the modes in which classes deriving from EasingFunctionBase
     * can will perform their easing.
     */
    export enum EasingMode {
        EaseIn = 0,
        EaseOut = 1,
        EaseInOut = 2,
    }
}
declare module "lib/root/Core/Easing/EasingFunctionBase" {
    import { EasingMode } from "lib/root/Core/Easing/EasingMode";
    import { IEasingFunction } from "lib/root/Core/Easing/IEasingFunction";
    /**
     * This class is the base class for many easing functions.
     */
    export abstract class EasingFunctionBase implements IEasingFunction {
        protected constructor(easingMode?: EasingMode);
        private _easingMode;
        /**
         * Specifies the easing behavior.
         */
        easingMode: EasingMode;
        /**
         * Transforms normalized time to control the pace of an animation.
         * @param normalizedTime normalized time (progress) of the animation
         * @return transformed progress
         * @description Uses EasingMode in conjunction with EaseInCore to evaluate the easing function.
         */
        ease(normalizedTime: number): number;
        /**
         * Transforms normalized time to control the pace of an animation for the EaseIn EasingMode
         * @param normalizedTime normalized time (progress) of the animation
         * @description You only have to specify your easing function for the 'EaseIn' case because the implementation
         * of Ease will handle transforming normalizedTime & the result of this method to handle 'EaseOut' & 'EaseInOut'.
         */
        protected abstract easeInCore(normalizedTime: number): number;
    }
}
declare module "lib/root/Core/Easing/BackEase" {
    import { EasingFunctionBase } from "lib/root/Core/Easing/EasingFunctionBase";
    import { EasingMode } from "lib/root/Core/Easing/EasingMode";
    /**
     * This class implements an easing function that backs up before going to the destination.
     */
    export class BackEase extends EasingFunctionBase {
        constructor(easingMode?: EasingMode, amplitude?: number);
        private _amplitude;
        /**
         * Specifies how much the function will pull back
         */
        amplitude: number;
        protected easeInCore(normalizedTime: number): number;
    }
}
declare module "lib/root/Core/Easing/DoubleUtil" {
    export class DoubleUtil {
        static isZero(value: number): boolean;
    }
}
declare module "lib/root/Core/Easing/BounceEase" {
    import { EasingFunctionBase } from "lib/root/Core/Easing/EasingFunctionBase";
    import { EasingMode } from "lib/root/Core/Easing/EasingMode";
    /**
     * Specifies the number of bounces.  This does not include the final half bounce.
     */
    export class BounceEase extends EasingFunctionBase {
        constructor(easingMode?: EasingMode, bounces?: number, bounciness?: number);
        private _bounces;
        /**
         * Specifies the number of bounces.  This does not include the final half bounce.
         */
        bounces: number;
        private _bounciness;
        /**
         * Specifies the amount of bounciness.  This corresponds to the scale difference between a bounce and the next
         * bounce.
         * For example, bounciness = 2.0 corresponds to the next bounce being twice as high and taking twice as long.
         */
        bounciness: number;
        protected easeInCore(normalizedTime: number): number;
    }
}
declare module "lib/root/Core/Easing/CircleEase" {
    import { EasingFunctionBase } from "lib/root/Core/Easing/EasingFunctionBase";
    /**
     * This class implements an easing function that gives a circular curve toward the destination.
     */
    export class CircleEase extends EasingFunctionBase {
        constructor();
        protected easeInCore(time: number): number;
    }
}
declare module "lib/root/Core/Easing/CubicBezierEase" {
    import { EasingFunctionBase } from "lib/root/Core/Easing/EasingFunctionBase";
    import { EasingMode } from "lib/root/Core/Easing/EasingMode";
    /**
     * This class implements an easing function that gives a circular curve toward the destination. First and last points
     * of cubic bezier always placed at (0, 0) and (1, 1) correspondingly. Second and third points controls the curve. See
     * http://www.managingecommerce.com/glossary/a-c/cubic-bezier-formula-css3-transitions
     * http://cubic-bezier.com/
     * Implementation taken from
     * http://greweb.me/2012/02/bezier-curve-based-easing-functions-from-concept-to-implementation/
     */
    export class CubicBezierEase extends EasingFunctionBase {
        constructor(easingMode?: EasingMode, x1?: number, y1?: number, x2?: number, y2?: number);
        private _x1;
        /**
         * Specifies x coordinate for first control point of bezier curve.
         */
        x1: number;
        private _y1;
        /**
         * Specifies y coordinate for first control point of bezier curve.
         */
        y1: number;
        private _x2;
        /**
         * Specifies x coordinate for second control point of bezier curve.
         */
        x2: number;
        private _y2;
        /**
         * Specifies y coordinate for second control point of bezier curve.
         */
        y2: number;
        protected easeInCore(time: number): number;
        private getTForX(aX);
        private static getA(aA1, aA2);
        private static getB(aA1, aA2);
        private static getC(aA1);
        private static calcBezier(aT, aA1, aA2);
        private static getSlope(aT, aA1, aA2);
    }
}
declare module "lib/root/Core/Easing/CubicEase" {
    import { EasingFunctionBase } from "lib/root/Core/Easing/EasingFunctionBase";
    /**
     * This class implements an easing function that gives a cubic curve toward the destination
     */
    export class CubicEase extends EasingFunctionBase {
        constructor();
        protected easeInCore(normalizedTime: number): number;
    }
}
declare module "lib/root/Core/Easing/ElasticEase" {
    import { EasingFunctionBase } from "lib/root/Core/Easing/EasingFunctionBase";
    import { EasingMode } from "lib/root/Core/Easing/EasingMode";
    /**
     * This class implements an easing function that gives an elastic/springy curve
     */
    export class ElasticEase extends EasingFunctionBase {
        constructor(easingMode?: EasingMode, oscillations?: number, springiness?: number);
        private _oscillations;
        /**
         *  Specifies the number of oscillations
         */
        oscillations: number;
        private _springiness;
        /**
         *  Specifies the amount of springiness
         */
        springiness: number;
        protected easeInCore(normalizedTime: number): number;
    }
}
declare module "lib/root/Core/Easing/LinearEase" {
    import { EasingFunctionBase } from "lib/root/Core/Easing/EasingFunctionBase";
    /**
     * This class implements an easing function that gives a line toward the destination
     */
    export class LinearEase extends EasingFunctionBase {
        constructor();
        protected easeInCore(normalizedTime: number): number;
    }
}
declare module "lib/root/Core/Easing/PowerEase" {
    import { EasingFunctionBase } from "lib/root/Core/Easing/EasingFunctionBase";
    import { EasingMode } from "lib/root/Core/Easing/EasingMode";
    /**
     * This class implements an easing function that gives a polynomial curve of arbitrary degree.
     * If the curve you desire is cubic, quadratic, quartic, or quintic it is better to use the
     * specialized easing functions.
     */
    export class PowerEase extends EasingFunctionBase {
        constructor(easingMode?: EasingMode, power?: number);
        private _power;
        /**
         * Specifies the power for the polynomial equation.
         */
        power: number;
        protected easeInCore(normalizedTime: number): number;
    }
}
declare module "lib/root/Core/Easing/QuadraticEase" {
    import { EasingFunctionBase } from "lib/root/Core/Easing/EasingFunctionBase";
    /**
     * This class implements an easing function that gives a quadratic curve toward the destination
     */
    export class QuadraticEase extends EasingFunctionBase {
        constructor();
        protected easeInCore(normalizedTime: number): number;
    }
}
declare module "lib/root/Core/Easing/QuarticEase" {
    import { EasingFunctionBase } from "lib/root/Core/Easing/EasingFunctionBase";
    /**
     * This class implements an easing function that gives a quartic curve toward the destination
     */
    export class QuarticEase extends EasingFunctionBase {
        constructor();
        protected easeInCore(normalizedTime: number): number;
    }
}
declare module "lib/root/Core/Easing/QuinticEase" {
    import { EasingFunctionBase } from "lib/root/Core/Easing/EasingFunctionBase";
    /**
     * This class implements an easing function that gives a quintic curve toward the destination
     */
    export class QuinticEase extends EasingFunctionBase {
        constructor();
        protected easeInCore(normalizedTime: number): number;
    }
}
declare module "lib/root/Core/Easing/SineEase" {
    import { EasingFunctionBase } from "lib/root/Core/Easing/EasingFunctionBase";
    /**
     * This class implements an easing function that gives a Sine curve toward the destination.
     */
    export class SineEase extends EasingFunctionBase {
        constructor();
        protected easeInCore(normalizedTime: number): number;
    }
}
declare module "lib/root/Core/Easing/Functions" {
    export { IEasingFunction } from "lib/root/Core/Easing/IEasingFunction";
    export { BackEase } from "lib/root/Core/Easing/BackEase";
    export { BounceEase } from "lib/root/Core/Easing/BounceEase";
    export { CircleEase } from "lib/root/Core/Easing/CircleEase";
    export { CubicBezierEase } from "lib/root/Core/Easing/CubicBezierEase";
    export { CubicEase } from "lib/root/Core/Easing/CubicEase";
    export { ElasticEase } from "lib/root/Core/Easing/ElasticEase";
    export { LinearEase } from "lib/root/Core/Easing/LinearEase";
    export { PowerEase } from "lib/root/Core/Easing/PowerEase";
    export { QuadraticEase } from "lib/root/Core/Easing/QuadraticEase";
    export { QuarticEase } from "lib/root/Core/Easing/QuarticEase";
    export { QuinticEase } from "lib/root/Core/Easing/QuinticEase";
    export { SineEase } from "lib/root/Core/Easing/SineEase";
}
declare module "lib/root/Controls/Skins/Default/ButtonSkins/SwitchButtonSkin" {
    import { Button } from "lib/root/Controls/index";
    import { Skin } from "lib/root/Controls/Skins/Default/Skin";
    import { ButtonSkinBase } from "lib/root/Controls/Skins/Default/ButtonSkins/ButtonSkinBase";
    export class SwitchButtonSkin extends ButtonSkinBase {
        private readonly _leftPanel;
        private readonly _rightPanel;
        private readonly _innerButton;
        private readonly _animation;
        private static readonly _defaultIcon;
        private static readonly _readonlyIcon;
        private static readonly _animationDuration;
        private readonly _switchFalseColor;
        private readonly _switchTrueColor;
        private readonly _leftPanelMargin;
        private static readonly _iconSizes;
        private readonly _iconPaddings;
        private _isChecked;
        private _afterUpdateListener;
        private _innerButtonChangedListener;
        constructor(skin: Skin);
        attach(button: Button): void;
        detach(button: Button): void;
        protected attachCheckedStyle(button: Button): void;
        protected attachDisabledStyle(button: Button): void;
        protected attachStyle(button: Button): void;
        protected attachUncheckedStyle(button: Button): void;
        private getButtonX(button);
        private getIconSize(size);
        private getInnerButtonWidth(button);
        private getPaddingForInnerButton(size);
        private innerButtonChangedHandler(button);
        private setContent(button);
        private updateSizeAndPosition(button);
    }
}
declare module "lib/root/Controls/Skins/Default/ButtonSkins/SwitchInnerButtonSkin" {
    import { DefaultButtonSkin } from "lib/root/Controls/Skins/Default/ButtonSkins/DefaultButtonSkin";
    export class SwitchInnerButtonSkin extends DefaultButtonSkin {
        protected hasCustomPadding: boolean;
    }
}
declare module "lib/root/Controls/Skins/Default/ButtonSkins/TabButtonSkin" {
    import { Button } from "lib/root/Controls/index";
    import { ButtonSkinBase } from "lib/root/Controls/Skins/Default/ButtonSkins/ButtonSkinBase";
    export class TabButtonSkin extends ButtonSkinBase {
        protected attachCheckedStyle(button: Button): void;
        protected attachDisabledStyle(button: Button): void;
        protected attachStyle(button: Button): void;
        protected attachUncheckedStyle(button: Button): void;
    }
}
declare module "lib/root/Controls/Skins/Default/ButtonSkin" {
    import { Button } from "lib/root/Controls/Button/index";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    import { Skin } from "lib/root/Controls/Skins/Default/Skin";
    export class ButtonSkin extends ControlSkin {
        private _buttonSkins;
        constructor(skin: Skin);
        protected attachStyle(button: Button): void;
    }
}
declare module "lib/root/Controls/Calendar/DataStorage/Models/TypeInfo/IBooleanTypeInfoDto" {
    import { ITypeInfoDto } from "lib/root/Controls/Calendar/DataStorage/Models/TypeInfo/ITypeInfoDto";
    export interface IBooleanTypeInfoDto extends ITypeInfoDto {
    }
}
declare module "lib/root/Controls/Calendar/DataStorage/Models/TypeInfo/IChoiceItemDto" {
    export interface IChoiceItemDto {
        value: number;
        title: string;
        description: string;
    }
}
declare module "lib/root/Controls/Calendar/DataStorage/Models/TypeInfo/IChoiceTypeInfoDto" {
    import { IChoiceItemDto } from "lib/root/Controls/Calendar/DataStorage/Models/TypeInfo/IChoiceItemDto";
    import { ITypeInfoDto } from "lib/root/Controls/Calendar/DataStorage/Models/TypeInfo/ITypeInfoDto";
    export interface IChoiceTypeInfoDto extends ITypeInfoDto {
        values: IChoiceItemDto[];
    }
}
declare module "lib/root/Controls/Calendar/DataStorage/Models/TypeInfo/INumberTypeInfoDto" {
    import { ITypeInfoDto } from "lib/root/Controls/Calendar/DataStorage/Models/TypeInfo/ITypeInfoDto";
    export interface INumberTypeInfoDto extends ITypeInfoDto {
    }
}
declare module "lib/root/Controls/Calendar/DataStorage/Models/TypeInfo/IPriceTypeInfoDto" {
    import { ITypeInfoDto } from "lib/root/Controls/Calendar/DataStorage/Models/TypeInfo/ITypeInfoDto";
    export interface IPriceTypeInfoDto extends ITypeInfoDto {
        isoCurrencySymbol: string;
    }
}
declare module "lib/root/Controls/Skins/Default/CalendarCellContentSkin" {
    import { Control } from "lib/root/Controls/index";
    import { CalendarCellContent } from "lib/root/Controls/Calendar/CalendarCellContent";
    import { IMetaStringDataDto } from "lib/root/Controls/Calendar/DataStorage/Models/TypeInfo/IMetaStringDataDto";
    import { ITypeInfoDto } from "lib/root/Controls/Calendar/DataStorage/Models/TypeInfo/ITypeInfoDto";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class CalendarCellContentSkin extends ControlSkin {
        renderCell(cellTypeInfo: ITypeInfoDto, cellData: string | IMetaStringDataDto, calendarCellContent: CalendarCellContent): Control;
        protected attachStyle(calendarCellContent: CalendarCellContent): void;
        private renderNumberCell(cellTypeInfo, cellData);
        private renderPriceCell(cellTypeInfo, cellData);
        private renderCheckboxCell(cellTypeInfo, cellData);
        private renderChoiceCell(cellTypeInfo, cellData, calendarCellContent);
        private renderClosedCell(cellTypeInfo, cellData);
        private renderMetaStringCell(cellTypeInfo, cellData, calendarCellContent);
    }
}
declare module "lib/root/Controls/Skins/Default/ChangeHistorySkin" {
    import { ChangeHistory } from "lib/root/Controls/List/Field/History/ChangeHistory";
    import { BaseHistorySkin } from "lib/root/Controls/Skins/Default/BaseHistorySkin";
    export class ChangeHistorySkin extends BaseHistorySkin {
        protected attachStyle(element: ChangeHistory): void;
    }
}
declare module "lib/root/Controls/Skins/Default/ColorPickerColorPreviewSkin" {
    import { ColorPickerColorPreview } from "lib/root/Controls/ColorPicker/ColorPickerColorPreview";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class ColorPickerColorPreviewSkin extends ControlSkin {
        private _colorPreviewSize;
        private _colorPreviewSideWidth;
        protected attachStyle(element: ColorPickerColorPreview): void;
    }
}
declare module "lib/root/Controls/Skins/Default/ColorPickerHueSelectBackgroundSkin" {
    import { ColorPickerHueSelectBackground } from "lib/root/Controls/ColorPicker/ColorPickerHueSelectBackground";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class ColorPickerHueSelectBackgroundSkin extends ControlSkin {
        private _size;
        protected attachStyle(colorPickerHueSelectBackground: ColorPickerHueSelectBackground): void;
    }
}
declare module "lib/root/Controls/Skins/Default/ColorPickerHueSelectThumbSkin" {
    import { ColorPickerHueSelectThumb } from "lib/root/Controls/ColorPicker/ColorPickerHueSelectThumb";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class ColorPickerHueSelectThumbSkin extends ControlSkin {
        private _size;
        protected attachStyle(colorPickerHueSelectThumb: ColorPickerHueSelectThumb): void;
    }
}
declare module "lib/root/Controls/Skins/Default/InputSkin" {
    import { Input } from "lib/root/Controls/Input/index";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class InputSkin extends ControlSkin {
        protected attachStyle(input: Input): void;
        private updateStyle(input);
    }
}
declare module "lib/root/Controls/Skins/Default/ColorPickerInputSkin" {
    import { ColorPickerInput } from "lib/root/Controls/ColorPicker/ColorPickerInput";
    import { InputSkin } from "lib/root/Controls/Skins/Default/InputSkin";
    export class ColorPickerInputSkin extends InputSkin {
        private readonly _colorRectangleSize;
        private readonly _colorRectangleMargin;
        protected attachStyle(colorPickerInput: ColorPickerInput): void;
    }
}
declare module "lib/root/Controls/Skins/Default/ColorPickerRgbInputSkin" {
    import { ColorPickerRgbInput } from "lib/root/Controls/ColorPicker/ColorPickerRgbInput";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class ColorPickerRgbInputSkin extends ControlSkin {
        private readonly _width;
        private readonly _spacing;
        protected attachStyle(colorPickerRgbInput: ColorPickerRgbInput): void;
    }
}
declare module "lib/root/Controls/Skins/Default/UserInputControlSkin" {
    import { IModel } from "lib/root/Core/Primitives/IModel";
    import { UserInputControl } from "lib/root/Controls/UserInputControl";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class UserInputControlSkin<TModel extends IModel<TModel>> extends ControlSkin {
        private readonly _footerSpacing;
        protected attachStyle(userInputControl: UserInputControl<TModel>): void;
    }
}
declare module "lib/root/Controls/Skins/Default/ColorPickerSkin" {
    import { IColorModel } from "lib/root/Core/Primitives/index";
    import { UserInputControl } from "lib/root/Controls/UserInputControl";
    import { UserInputControlSkin } from "lib/root/Controls/Skins/Default/UserInputControlSkin";
    export class ColorPickerSkin extends UserInputControlSkin<IColorModel> {
        protected attachStyle(colorPicker: UserInputControl<IColorModel>): void;
    }
}
declare module "lib/root/Controls/Skins/Default/ColorPickerValueSelectBackgroundSkin" {
    import { ColorPickerValueSelectBackground } from "lib/root/Controls/ColorPicker/ColorPickerValueSelectBackground";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class ColorPickerValueSelectBackgroundSkin extends ControlSkin {
        protected attachStyle(colorPickerValueSelectBackground: ColorPickerValueSelectBackground): void;
    }
}
declare module "lib/root/Controls/Skins/Default/ColorPickerValueSelectThumbSkin" {
    import { ColorPickerValueSelectThumb } from "lib/root/Controls/ColorPicker/ColorPickerValueSelectThumb";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class ColorPickerValueSelectThumbSkin extends ControlSkin {
        private _size;
        private _innerCircleBorderColor;
        private _outerCircleBorderColor;
        protected attachStyle(element: ColorPickerValueSelectThumb): void;
        private static makeCenteredCircle(rectangle, diameter, borderColor);
        private static makeCircle(rectangle, diameter, borderColor);
    }
}
declare module "lib/root/Controls/Skins/Default/ColorSelectorSkin" {
    import { ColorSelector } from "lib/root/Controls/ColorPicker/ColorSelector";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class ColorSelectorSkin extends ControlSkin {
        protected attachStyle(colorPickerPopup: ColorSelector): void;
    }
}
declare module "lib/root/Controls/Skins/Default/DateMultilineTableHeaderSkin" {
    import { DateMultilineTableHeader } from "lib/root/Controls/Table/Header/DateMultilineTableHeader";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class DateMultilineTableHeaderSkin extends ControlSkin {
        protected attachStyle(element: DateMultilineTableHeader): void;
    }
}
declare module "lib/root/Controls/Skins/Default/DatePeriodSkin" {
    import { DatePeriod } from "lib/root/Controls/DatePeriod/DatePeriod";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class DatePeriodSkin extends ControlSkin {
        protected attachStyle(datePeriod: DatePeriod): void;
    }
}
declare module "lib/root/Controls/Skins/Default/DatePickerInputSkin" {
    import { DatePickerInput } from "lib/root/Controls/DatePicker/DatePickerInput";
    import { InputSkin } from "lib/root/Controls/Skins/Default/InputSkin";
    export class DatePickerInputSkin extends InputSkin {
        protected attachStyle(datePickerInput: DatePickerInput): void;
    }
}
declare module "lib/root/Controls/Skins/Default/DatePickerPopupHeaderSkin" {
    import { PaginationSelectHeader } from "lib/root/Controls/PaginationSelect/PaginationSelectHeader";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class DatePickerPopupHeaderSkin extends ControlSkin {
        private _iconButtonSize;
        protected attachStyle(datePickerPopupHeader: PaginationSelectHeader): void;
        private makeIconButton(button, iconName, dock);
    }
}
declare module "lib/root/Controls/Skins/Default/DatePickerSkin" {
    import { IDateModel } from "lib/root/Core/Primitives/index";
    import { UserInputControl } from "lib/root/Controls/UserInputControl";
    import { UserInputControlSkin } from "lib/root/Controls/Skins/Default/UserInputControlSkin";
    export class DatePickerSkin extends UserInputControlSkin<IDateModel> {
        protected attachStyle(datePicker: UserInputControl<IDateModel>): void;
    }
}
declare module "lib/root/Entity/List/IListViewInfo" {
    import { View } from "lib/root/Entity/List/View";
    export interface IListViewInfo {
        id: string;
        viewType: View;
        name: string;
        iconName: string;
        pageSize: number;
        bigTextCutLength: number;
    }
}
declare module "lib/root/Entity/List/ListViewsInfo" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { IListViewInfo } from "lib/root/Entity/List/IListViewInfo";
    import { View } from "lib/root/Entity/List/View";
    export class ListViewsInfo {
        private static _views;
        private static _viewInfoByIdMap;
        private static _viewInfoByTypeMap;
        private static _viewTypes;
        static readonly viewTypes: IReadOnlyCollection<View>;
        static getViewInfoById(viewId: string): IListViewInfo;
        static getViewInfoByType(viewType: View): IListViewInfo;
        static getViewId(viewType: View): string;
        static getViewType(viewId: string): View;
        static setPageSize(pageSize: number): void;
    }
}
declare module "lib/root/Controls/Skins/Default/DescriptionSkin" {
    import { Description } from "lib/root/Controls/List/Field/Description";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class DescriptionSkin extends ControlSkin {
        protected attachStyle(element: Description): void;
    }
}
declare module "lib/root/Controls/Skins/Default/EventCalendarOverlaySkin" {
    import { EventCalendarOverlay } from "lib/root/Controls/EventCalendar/EventCalendarOverlay";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class EventCalendarOverlaySkin extends ControlSkin {
        private _collapsedSize;
        private _textAreaVisibleSize;
        protected attachStyle(overlay: EventCalendarOverlay): void;
    }
}
declare module "lib/root/Controls/Skins/Default/EventCalendarSkin" {
    import { EventCalendar } from "lib/root/Controls/EventCalendar/EventCalendar";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class EventCalendarSkin extends ControlSkin {
        protected attachStyle(calendar: EventCalendar): void;
        private attachBorderStyle(overlay, calendar, color);
        private attachOverlayStyle(overlay, calendar);
        private changeOverlayGroupFilters(overlay, calendar, filters);
        private computeBorderWidth(timeOffset);
        private getGroupOverlays(overlay, calendar);
        private timeToPixels(time);
        private trimmedBorder(overlay, stroke, color);
    }
}
declare module "lib/root/Controls/Skins/Default/EventCalendarTimelineInfoSkin" {
    import { EventCalendarTimelineInfo } from "lib/root/Controls/EventCalendar/EventCalendarTimelineInfo";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class EventCalendarTimelineInfoSkin extends ControlSkin {
        protected attachStyle(timelineInfo: EventCalendarTimelineInfo): void;
    }
}
declare module "lib/root/Controls/Skins/Default/EventCalendarTreeMenuSkin" {
    import { EventCalendarTreeMenu } from "lib/root/Controls/EventCalendar/EventCalendarTreeMenu";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class EventCalendarTreeMenuSkin extends ControlSkin {
        protected attachStyle(treeMenu: EventCalendarTreeMenu): void;
    }
}
declare module "lib/root/Controls/Skins/Default/ExpandCollapseTextSkin" {
    import { ExpandCollapseText } from "lib/root/Controls/ExpandCollapseText";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class ExpandCollapseTextSkin extends ControlSkin {
        protected attachStyle(expandCollapseText: ExpandCollapseText): void;
        private update(expandCollapseText);
    }
}
declare module "lib/root/Controls/Skins/Default/HeaderSkin" {
    import { Header } from "lib/root/Controls/List/Field/Header";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class HeaderSkin extends ControlSkin {
        tipIcon: string;
        protected attachStyle(element: Header): void;
    }
}
declare module "lib/root/Controls/Skins/Default/ImageSkin" {
    import { Image } from "lib/root/Controls/Image";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class ImageSkin extends ControlSkin {
        private _noImageIconColor;
        protected attachStyle(control: Image): void;
        private attachImageSkin(control);
    }
}
declare module "lib/root/Controls/Skins/Default/InformationCardSkin" {
    import { InformationCard } from "lib/root/Controls/index";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class InformationCardSkin extends ControlSkin {
        private static readonly _iconSize;
        protected attachStyle(selectOption: InformationCard): void;
        private attachInformationCardStyle(selectOption);
    }
}
declare module "lib/root/Controls/Skins/Default/InlineEditorSkin" {
    import { InlineEditor } from "lib/root/Controls/InlineEditor";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class InlineEditorSkin extends ControlSkin {
        protected attachStyle(inlineEditor: InlineEditor): void;
        protected updateStyle(inlineEditor: InlineEditor): void;
    }
}
declare module "lib/root/Controls/Skins/Default/Input/EmailInputSkin" {
    import { EmailInput } from "lib/root/Controls/index";
    import { InputSkin } from "lib/root/Controls/Skins/Default/InputSkin";
    export class EmailInputSkin extends InputSkin {
        protected attachStyle(emailInput: EmailInput): void;
    }
}
declare module "lib/root/Controls/Skins/Default/Input/FaxInputSkin" {
    import { FaxInput } from "lib/root/Controls/index";
    import { InputSkin } from "lib/root/Controls/Skins/Default/InputSkin";
    export class FaxInputSkin extends InputSkin {
        protected attachStyle(faxInput: FaxInput): void;
    }
}
declare module "lib/root/Controls/Skins/Default/Input/HexInputSkin" {
    import { HexInput } from "lib/root/Controls/index";
    import { InputSkin } from "lib/root/Controls/Skins/Default/InputSkin";
    export class HexInputSkin extends InputSkin {
        protected attachStyle(hexInput: HexInput): void;
    }
}
declare module "lib/root/Controls/Skins/Default/Input/MobileInputSkin" {
    import { MobileInput } from "lib/root/Controls/index";
    import { InputSkin } from "lib/root/Controls/Skins/Default/InputSkin";
    export class MobileInputSkin extends InputSkin {
        protected attachStyle(mobileInput: MobileInput): void;
    }
}
declare module "lib/root/Controls/Skins/Default/Input/NumberInputSkin" {
    import { NumberInput } from "lib/root/Controls/index";
    import { InputSkin } from "lib/root/Controls/Skins/Default/InputSkin";
    export class NumberInputSkin extends InputSkin {
        protected attachStyle(numberInput: NumberInput): void;
    }
}
declare module "lib/root/Controls/Skins/Default/Input/PasswordInputSkin" {
    import { PasswordInput } from "lib/root/Controls/index";
    import { InputSkin } from "lib/root/Controls/Skins/Default/InputSkin";
    export class PasswordInputSkin extends InputSkin {
        protected attachStyle(passwordInput: PasswordInput): void;
    }
}
declare module "lib/root/Controls/Skins/Default/Input/PhoneInputSkin" {
    import { PhoneInput } from "lib/root/Controls/index";
    import { InputSkin } from "lib/root/Controls/Skins/Default/InputSkin";
    export class PhoneInputSkin extends InputSkin {
        protected attachStyle(phoneInput: PhoneInput): void;
    }
}
declare module "lib/root/Controls/Skins/Default/Input/TextInputSkin" {
    import { TextInput } from "lib/root/Controls/index";
    import { InputSkin } from "lib/root/Controls/Skins/Default/InputSkin";
    export class TextInputSkin extends InputSkin {
        protected attachStyle(textInput: TextInput): void;
    }
}
declare module "lib/root/Controls/Skins/Default/LinkSkin" {
    import { Link } from "lib/root/Controls/Link";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class LinkSkin extends ControlSkin {
        private _isHovered;
        protected attachStyle(element: Link): void;
        private applyLinkStyle(element);
    }
}
declare module "lib/root/Controls/Skins/Default/ListCheckBoxSkin" {
    import { CheckBoxField } from "lib/root/Controls/List/Field/CheckBoxField";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class ListCheckBoxSkin extends ControlSkin {
        protected attachStyle(element: CheckBoxField): void;
    }
}
declare module "lib/root/Controls/Skins/Default/ListImageSkin" {
    import { Image as ListImage } from "lib/root/Controls/List/Field/Image";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class ListImageSkin extends ControlSkin {
        protected attachStyle(element: ListImage): void;
    }
}
declare module "lib/root/Controls/Skins/Default/ListSkin" {
    import { List } from "lib/root/Controls/List/List";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class ListSkin extends ControlSkin {
        protected attachStyle(list: List): void;
        private attachListStyle(listView);
    }
}
declare module "lib/root/Controls/Skins/Default/ListTableHeaderSkin" {
    import { ListTableHeader } from "lib/root/Controls/List/Views/Table/ListTableHeader";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class ListTableHeaderSkin extends ControlSkin {
        protected attachStyle(listTableHeader: ListTableHeader): void;
    }
}
declare module "lib/root/Layout/TableStretchCalculator" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/index";
    import { IStretchCalculator } from "lib/root/Layout/IStretchCalculator";
    export class TableStretchCalculator implements IStretchCalculator {
        private _stretchConfig;
        stretchConfig: IReadOnlyCollection<number>;
        calculate(availableSize: number, minDesired: IReadOnlyCollection<number>, maxDesired: IReadOnlyCollection<number>, canStretch: IReadOnlyCollection<boolean>): IReadOnlyCollection<number>;
    }
}
declare module "lib/root/Controls/Skins/Default/ListTableViewSkinConstants" {
    import { FunctionDictionary } from "lib/root/Core/Collections/FunctionDictionary";
    import { HorizontalAlignment } from "lib/root/Core/Graphics/HorizontalAlignment";
    export class ListTableViewSkinConstants {
        static readonly alignmentMap: FunctionDictionary<HorizontalAlignment>;
        static readonly headerAlignmentMap: FunctionDictionary<HorizontalAlignment>;
        static readonly widthMap: FunctionDictionary<number>;
        static readonly minWidthMap: FunctionDictionary<number>;
        static readonly stretchMap: FunctionDictionary<number>;
    }
}
declare module "lib/root/Controls/Skins/Default/ListTableViewSkin" {
    import { ListTableView } from "lib/root/Controls/List/Views/Table/ListTableView";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class ListTableViewSkin extends ControlSkin {
        private static readonly _defaultStretchConfig;
        private _hoveredRowIndex;
        protected attachStyle(element: ListTableView): void;
        private attachListTableViewStyle(element);
        private getStretchCalculator(row);
        private getFirstUnfilteredRow(element);
        private updateColumnLayoutWidth(columnLayout, width, cellContent);
        private updateColumnLayoutMinWidth(columnLayout, cellContent);
        private addItemBackgroundListener<TEvent>(eventHandler, row, hoveredRowIndex, rowIndex, viewItem, treeView);
        private updateRowBackground(row, viewItem, rowIndex, treeView);
        private updateCellsHorizontalAlignment(row, rowIndex);
        private getControlMinWidth(control);
    }
}
declare module "lib/root/Controls/Skins/Default/ListTileItemSimpleActionsSkin" {
    import { ListTileItemSimpleActions } from "lib/root/Controls/List/Views/Tile/Field/ListTileItemSimpleActions";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class ListTileItemSimpleActionsSkin extends ControlSkin {
        protected attachStyle(element: ListTileItemSimpleActions): void;
        private updatePrimaryButton(element, id);
    }
}
declare module "lib/root/Controls/Skins/Default/ListTileItemSkin" {
    import { ListTileItem } from "lib/root/Controls/List/Views/Tile/ListTileItem";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class ListTileItemSkin extends ControlSkin {
        private _titleTileMinHeight;
        private _titleTileMinWidth;
        private _titleCardMinWidth;
        private _isHovered;
        protected attachStyle(listItem: ListTileItem): void;
        private addItemBackgroundListener<TEvent>(eventHandler, applyImmediately, viewItem, isHovered, element);
        private styleCollapsed(listItem);
        private styleContainer(listItem, stackPanel, grid);
        private styleData(listItem);
        private updateCollapsedIconState(listItem);
        private updateItemBackground(viewItem, element);
    }
}
declare module "lib/root/Controls/Skins/Default/ListViewSkin" {
    import { ListTileView } from "lib/root/Controls/List/Views/Tile/ListTileView";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class ListViewSkin extends ControlSkin {
        private _titleTileMaxWidth;
        protected attachStyle(listView: ListTileView): void;
        private setCell(count, cell, cellCount, cellIndex, rowIndex);
    }
}
declare module "lib/root/Controls/Skins/Default/MenuItemSkin" {
    import { IThickness } from "lib/root/Core/Graphics/IThickness";
    import { IColor } from "lib/root/Core/IColor";
    import { MenuItem } from "lib/root/Controls/MenuItem";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class MenuItemSkin extends ControlSkin {
        readonly normalBackgroundColor: IColor;
        readonly hoverBackgroundColor: IColor;
        readonly normalColor: IColor;
        readonly hoverColor: IColor;
        readonly disabledColor: IColor;
        readonly padding: IThickness;
        readonly iconMargin: IThickness;
        readonly textMargin: IThickness;
        protected attachStyle(menuItem: MenuItem): void;
    }
}
declare module "lib/root/Controls/Skins/Default/MenuSkin" {
    import { Menu } from "lib/root/Controls/Menu";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class MenuSkin extends ControlSkin {
        protected attachStyle(menu: Menu): void;
    }
}
declare module "lib/root/Controls/Skins/Default/MonthCalendarSkin" {
    import { MonthCalendar } from "lib/root/Controls/DimensionCalendar/MonthCalendar";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class MonthCalendarSkin extends ControlSkin {
        protected attachStyle(calendar: MonthCalendar): void;
        private gridAttachStyle(calendar);
    }
}
declare module "lib/root/Controls/Skins/Default/MonthCalendarTreeMenuSkin" {
    import { MonthCalendarTreeMenu } from "lib/root/Controls/DimensionCalendar/MonthCalendarTreeMenu";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class MonthCalendarTreeMenuSkin extends ControlSkin {
        protected attachStyle(element: MonthCalendarTreeMenu): void;
        private applyStyle(element);
    }
}
declare module "lib/root/Controls/Skins/Default/MonthDateSkin" {
    import { MonthDate } from "lib/root/Controls/Table/Header/MonthDate";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class MonthDateSkin extends ControlSkin {
        protected attachStyle(element: MonthDate): void;
    }
}
declare module "lib/root/Controls/Skins/Default/MonthNameSkin" {
    import { MonthName } from "lib/root/Controls/Table/Header/MonthName";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class MonthNameSkin extends ControlSkin {
        protected attachStyle(element: MonthName): void;
    }
}
declare module "lib/root/Controls/Skins/Default/PaginationSelectCellSkin" {
    import { PaginationSelectCell } from "lib/root/Controls/PaginationSelect/PaginationSelectCell";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class PaginationSelectCellSkin extends ControlSkin {
        private _cellPadding;
        private _cellBorderRadius;
        private _checkedCellBackgroundColor;
        private _secondSelectedCellBackgroundColor;
        private _startSelectCellBackgroundColor;
        protected attachStyle(paginationSelectCell: PaginationSelectCell): void;
        private updateStyle(paginationSelectCell);
    }
}
declare module "lib/root/Controls/Skins/Default/PaginationSelectSkin" {
    import { IDateModel } from "lib/root/Core/Primitives/index";
    import { PaginationSelect } from "lib/root/Controls/PaginationSelect/PaginationSelect";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class PaginationSelectSkin extends ControlSkin {
        private _cellMargin;
        protected attachStyle(paginationSelect: PaginationSelect<IDateModel>): void;
        private updateOptions(select);
    }
}
declare module "lib/root/Controls/Skins/Default/ParameterBindingListSkin" {
    import { BindingList } from "lib/root/Controls/List/Field/Parameter/BindingList";
    import { ParameterSkin } from "lib/root/Controls/Skins/Default/ParameterSkin";
    export class ParameterBindingListSkin extends ParameterSkin {
        protected attachStyle(element: BindingList): void;
        private update(element);
    }
}
declare module "lib/root/Controls/Skins/Default/ParameterBindingSkin" {
    import { Binding } from "lib/root/Controls/List/Field/Parameter/Binding";
    import { ParameterSkin } from "lib/root/Controls/Skins/Default/ParameterSkin";
    export class ParameterBindingSkin extends ParameterSkin {
        protected attachStyle(element: Binding): void;
        private badgeUpdate(element);
        private update(element);
    }
}
declare module "lib/root/Controls/Skins/Default/ParameterIconListSkin" {
    import { IconList } from "lib/root/Controls/List/Field/Parameter/IconList";
    import { ParameterSkin } from "lib/root/Controls/Skins/Default/ParameterSkin";
    export class ParameterIconListSkin extends ParameterSkin {
        protected attachStyle(element: IconList): void;
        private attachIconStyle(element, isTableView);
    }
}
declare module "lib/root/Controls/Skins/Default/ParameterTextSkin" {
    import { Text as TextParameter } from "lib/root/Controls/List/Field/Parameter/Text";
    import { BaseTextParameterSkin } from "lib/root/Controls/Skins/Default/BaseTextParameterSkin";
    export class ParameterTextSkin extends BaseTextParameterSkin {
        protected attachStyle(element: TextParameter): void;
        private attachValueControlStyle(element, control);
    }
}
declare module "lib/root/Controls/Skins/Default/PivotTableSkin" {
    import { PivotTable } from "lib/root/Controls/index";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class PivotTableSkin extends ControlSkin {
        protected attachStyle(pivotTable: PivotTable): void;
        private allowSelectCell(pivotTable, cell);
        private initExpandCollapseAll(pivotTable);
        private setIsExpandable(pivotTable);
        private updateExpandCollapseAllState(pivotTable);
        private updateStyle(pivotTable);
    }
}
declare module "lib/root/Controls/Skins/Default/PopupMenuButtonSkin" {
    import { PopupMenuButton } from "lib/root/Controls/PopupMenuButton";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class PopupMenuButtonSkin extends ControlSkin {
        readonly iconName: string;
        protected attachStyle(popupMenuButton: PopupMenuButton): void;
    }
}
declare module "lib/root/Controls/Skins/Default/PopupSkin" {
    import { Popup } from "lib/root/Controls/Popup";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class PopupSkin extends ControlSkin {
        protected attachStyle(popup: Popup): void;
    }
}
declare module "lib/root/Controls/Skins/Default/PopupWindowSkin" {
    import { PopupWindow } from "lib/root/Controls/PopupWindow";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class PopupWindowSkin extends ControlSkin {
        protected attachStyle(element: PopupWindow): void;
        private applySkin(element);
    }
}
declare module "lib/root/Controls/Skins/Default/PreloaderSkin" {
    import { Preloader } from "lib/root/Controls/Preloader";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class PreloaderSkin extends ControlSkin {
        protected attachStyle(text: Preloader): void;
    }
}
declare module "lib/root/Controls/Skins/Default/RatingSkin" {
    import { Rating } from "lib/root/Controls/List/Field/Rating";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class RatingSkin extends ControlSkin {
        protected attachStyle(element: Rating): void;
    }
}
declare module "lib/root/Controls/Skins/Default/ResizeIndicatorSkin" {
    import { ResizeIndicator } from "lib/root/Controls/Table/ResizeIndicator";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class ResizeIndicatorSkin extends ControlSkin {
        protected attachStyle(element: ResizeIndicator): void;
    }
}
declare module "lib/root/Controls/Skins/Default/ScrollPaneSkin" {
    import { ScrollPane } from "lib/root/Controls/index";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class ScrollPaneSkin extends ControlSkin {
        protected attachStyle(scrollPane: ScrollPane): void;
    }
}
declare module "lib/root/Controls/Skins/Default/SearchInputSkin" {
    import { SearchInput } from "lib/root/Controls/index";
    import { InputSkin } from "lib/root/Controls/Skins/Default/InputSkin";
    export class SearchInputSkin extends InputSkin {
        protected attachStyle(searchInput: SearchInput): void;
    }
}
declare module "lib/root/Controls/Skins/Default/SelectButtonSkin" {
    import { SelectButton } from "lib/root/Controls/index";
    import { ButtonSkin } from "lib/root/Controls/Skins/Default/ButtonSkin";
    export class SelectButtonSkin extends ButtonSkin {
        protected attachStyle(selectButton: SelectButton): void;
    }
}
declare module "lib/root/Controls/Skins/Default/SelectSelectorSkin" {
    import { SelectSelector } from "lib/root/Controls/index";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class SelectSelectorSkin extends ControlSkin {
        protected attachStyle(selectSelector: SelectSelector): void;
        private computeScrollPaneHeight(selectSelector);
        private computeScrollPaneWidth(selectSelector);
        private updateScrollPaneSize(selectSelector);
    }
}
declare module "lib/root/Controls/Skins/Default/SliderSkin" {
    import { Slider } from "lib/root/Controls/index";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class SliderSkin extends ControlSkin {
        protected attachStyle(slider: Slider): void;
    }
}
declare module "lib/root/Controls/Skins/Default/StatusSkin" {
    import { Status } from "lib/root/Controls/List/Field/Status";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class StatusSkin extends ControlSkin {
        protected attachStyle(element: Status): void;
    }
}
declare module "lib/root/Controls/Skins/Default/TableHeaderCellSkin" {
    import { TableHeaderCell } from "lib/root/Controls/Table/Header/TableHeaderCell";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class TableHeaderCellSkin extends ControlSkin {
        protected attachStyle(tableHeaderCell: TableHeaderCell): void;
    }
}
declare module "lib/root/Controls/Skins/Default/TableSkin" {
    import { Table } from "lib/root/Controls/Table/Table";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class TableSkin extends ControlSkin {
        protected attachStyle(element: Table): void;
    }
}
declare module "lib/root/Controls/Skins/Default/TextEditorSkin" {
    import { TextEditor } from "lib/root/Controls/TextEditor";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class TextEditorSkin extends ControlSkin {
        protected attachStyle(textEditor: TextEditor): void;
    }
}
declare module "lib/root/Controls/Skins/Default/TextSkin" {
    import { Text } from "lib/root/Controls/Text";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class TextSkin extends ControlSkin {
        protected attachStyle(text: Text): void;
    }
}
declare module "lib/root/Controls/Skins/Default/TimePickerInputSkin" {
    import { ColorPickerInput } from "lib/root/Controls/ColorPicker/ColorPickerInput";
    import { InputSkin } from "lib/root/Controls/Skins/Default/InputSkin";
    export class TimePickerInputSkin extends InputSkin {
        protected attachStyle(timePickerInput: ColorPickerInput): void;
    }
}
declare module "lib/root/Controls/Skins/Default/TimePickerSelectSkin" {
    import { TimePickerSelect } from "lib/root/Controls/TimePicker/TimePickerSelect";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class TimePickerSelectSkin extends ControlSkin {
        private readonly _buttonWidth;
        private readonly _buttonHeight;
        private readonly _inputWidth;
        private readonly _spacing;
        protected attachStyle(numberSelect: TimePickerSelect): void;
    }
}
declare module "lib/root/Controls/Skins/Default/TimePickerSkin" {
    import { ITimeModel } from "lib/root/Core/Primitives/index";
    import { UserInputControl } from "lib/root/Controls/UserInputControl";
    import { UserInputControlSkin } from "lib/root/Controls/Skins/Default/UserInputControlSkin";
    export class TimePickerSkin extends UserInputControlSkin<ITimeModel> {
        protected attachStyle(timePicker: UserInputControl<ITimeModel>): void;
    }
}
declare module "lib/root/Controls/Skins/Default/TimeSelectorSkin" {
    import { TimeSelector } from "lib/root/Controls/TimePicker/TimeSelector";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class TimeSelectorSkin extends ControlSkin {
        private readonly _hourIntervalSelectMargin;
        private readonly _separatorMargin;
        protected attachStyle(popup: TimeSelector): void;
    }
}
declare module "lib/root/Controls/Skins/Default/TitleSkin" {
    import { Title } from "lib/root/Controls/List/Field/Title";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class TitleSkin extends ControlSkin {
        protected attachStyle(element: Title): void;
        private setContainerStyle(element);
        private updateTitleControl(element);
        private updateTitleTextControl(element);
        private updateBadge(element);
        private updateLogoImage(element);
    }
}
declare module "lib/root/Controls/Skins/Default/TooltipSkin" {
    import { IColor } from "lib/root/Core/IColor";
    import { Tooltip } from "lib/root/Controls/Tooltip";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class TooltipSkin extends ControlSkin {
        maxWidth: number;
        borderColor: IColor;
        borderWidth: number;
        protected attachStyle(tooltip: Tooltip): void;
    }
}
declare module "lib/root/Controls/Skins/Default/TreeViewNodeSkin" {
    import { TreeViewNode } from "lib/root/Controls/TreeView/TreeViewNode";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class TreeViewNodeSkin extends ControlSkin {
        private _borderOffset;
        protected attachStyle(element: TreeViewNode): void;
    }
}
declare module "lib/root/Controls/Skins/Default/UniversalSelectSkin" {
    import { UniversalSelect } from "lib/root/Controls/UniversalSelect/index";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class UniversalSelectSkin extends ControlSkin {
        protected attachStyle(universalSelect: UniversalSelect): void;
    }
}
declare module "lib/root/Controls/Skins/Default/UnreadSkin" {
    import { Unread } from "lib/root/Controls/List/Field/Unread";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class UnreadSkin extends ControlSkin {
        private _enabledBorder;
        private _disabledBorder;
        protected attachStyle(element: Unread): void;
        private updateBackground(element);
        private onIsDisabledChange(element);
        private getColor(isUnread, isDisabled);
    }
}
declare module "lib/root/Controls/Skins/Default/WeekdayTableHeaderSkin" {
    import { WeekdayTableHeader } from "lib/root/Controls/Table/Header/WeekdayTableHeader";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    export class WeekdayTableHeaderSkin extends ControlSkin {
        protected attachStyle(element: WeekdayTableHeader): void;
    }
}
declare module "lib/root/Core/TextParser" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/Collections";
    export class TextParser {
        static parseCommaSeparateStrings(text: string): IReadOnlyCollection<string>;
    }
}
declare module "lib/root/Core/Xml/XmlNode" {
    import { List } from "lib/root/Core/Collections/List";
    import { IFunc1 } from "lib/root/Core/Delegates";
    export class XmlNode {
        private _attributes;
        constructor(htmlNode: Node, children?: List<XmlNode>, parent?: XmlNode);
        private _parent;
        readonly parent: XmlNode;
        private _tagName;
        readonly tagName: string;
        private _html;
        readonly html: string;
        private _text;
        readonly text: string;
        private _children;
        readonly children: List<XmlNode>;
        private _attributePreprocessor;
        attributePreprocessor: IFunc1<string, string>;
        getAttribute(attributeName: string): string;
        private getActualAttributePreprocessor();
    }
}
declare module "lib/root/Core/Xml/XmlParser" {
    import { XmlNode } from "lib/root/Core/Xml/XmlNode";
    export class XmlParser {
        private _source;
        private _node;
        private _root;
        constructor(source: string);
        readonly root: XmlNode;
        private static parseNode(node, parent);
    }
}
declare module "lib/root/Controls/Skins/Default/XamlSkin" {
    import { Xaml } from "lib/root/Controls/Xaml";
    import { ControlSkin } from "lib/root/Controls/Skins/Default/ControlSkin";
    import { Skin } from "lib/root/Controls/Skins/Default/Skin";
    export class XamlSkin extends ControlSkin {
        private static _fontsMap;
        private static _marginValueMap;
        constructor(skin: Skin);
        protected attachStyle(rootControl: Xaml): void;
        private attachControlStyle(rootControl);
        private static createControl(node);
        private static createPanel(node);
        private static createStackPanel(node);
        private static createText(node);
        private static createWrapPanel(node);
        private static parseBooleanAttribute(node, attribName);
        private static parseColor(node);
        private static parseFont(node);
        private static parseMargin(node);
        private static parseNode(node, mapControls);
        private static parseNumberAttribute(node, attribName);
    }
}
declare module "lib/root/Controls/Skins/Default/Skin" {
    import { Control } from "lib/root/Controls/index";
    import { DateTime } from "lib/root/Core/DateTime";
    import { IFunction } from "lib/root/Core/Delegates";
    import { IRect } from "lib/root/Core/Graphics/IRect";
    import { IThickness } from "lib/root/Core/Graphics/IThickness";
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    import { StrokeStyle } from "lib/root/Core/Graphics/StrokeStyle";
    import { TextDecoration } from "lib/root/Core/Graphics/TextDecoration";
    import { IColor } from "lib/root/Core/IColor";
    import { IFont } from "lib/root/Core/IFont";
    import { Cursor } from "lib/root/Render/Cursor";
    import { IFilterCollection } from "lib/root/Render/Filters/IFilterCollection";
    import { IStroke } from "lib/root/Render/IStroke";
    import { LinearGradient } from "lib/root/Render/LinearGradient";
    import { IControl } from "lib/root/Controls/IControl";
    import { ISkin } from "lib/root/Controls/ISkin";
    import { BoxStyle } from "lib/root/Controls/Skins/Default/Classes/BoxStyle";
    import { IControlSkinConstructor } from "lib/root/Controls/Skins/Default/IControlSkinConstructor";
    export class Skin implements ISkin {
        readonly color3: IColor;
        readonly color4: IColor;
        readonly color5: IColor;
        readonly color7: IColor;
        readonly color11: IColor;
        readonly color12: IColor;
        readonly color13: IColor;
        readonly color14: IColor;
        readonly tableHeaderBackgroundColor: IColor;
        readonly defaultBorderColor: IColor;
        readonly colorWhite: IColor;
        readonly colorBlack: IColor;
        readonly menuItemHoverBackgroundColor: IColor;
        readonly defaultTextColor: IColor;
        readonly disabledTextColor: IColor;
        readonly disabledBackgroundColor: IColor;
        readonly linkColor: IColor;
        readonly linkColorInvalidateFix: IColor;
        readonly linkHoverColor: IColor;
        readonly linkDecoration: TextDecoration;
        readonly linkHoverDecoration: TextDecoration;
        readonly linkDecorationStrokeStyle: StrokeStyle;
        readonly linkTextDecorationColor: IColor;
        readonly inlineEditorTextColor: IColor;
        readonly defaultFontFamily: string;
        readonly extraExtraSmallFont: IFont;
        readonly extraSmallFont: IFont;
        readonly smallFont: IFont;
        readonly smallBoldFont: IFont;
        readonly smallItalicFont: IFont;
        readonly smallItalicBoldFont: IFont;
        readonly defaultSmallFont: IFont;
        readonly defaultFont: IFont;
        readonly defaultBoldFont: IFont;
        readonly defaultItalicFont: IFont;
        readonly defaultItalicBoldFont: IFont;
        readonly mediumFont: IFont;
        readonly mediumBoldFont: IFont;
        readonly mediumItalicFont: IFont;
        readonly mediumItalicBoldFont: IFont;
        readonly largeFont: IFont;
        readonly largeBoldFont: IFont;
        readonly largeItalicFont: IFont;
        readonly largeItalicBoldFont: IFont;
        readonly extraLargeFont: IFont;
        readonly preloaderIconSize: number;
        readonly iconSizeBase: number;
        readonly iconSizeSmall: number;
        readonly iconSizeRadioButton: number;
        readonly iconSizeExtraSmall: number;
        readonly borderRadiusBase: number;
        readonly borderRadiusSmall: number;
        readonly borderRadiusLarge: number;
        readonly borderRadiusExtraSmall: number;
        readonly listTileTableCellHeight: number;
        readonly eventCalendarGridCellWidth: number;
        readonly eventCalendarGridCellHeight: number;
        readonly dimensionCalendarGridCellWidth: number;
        readonly dimensionCalendarGridCellHeight: number;
        readonly eventCalendarTimelineDataEventDescriptionFontSize: number;
        readonly eventCalendarOverlayTextColor: IColor;
        readonly eventCalendarOverlayFadeOutColor: IColor;
        readonly tableFilteredTextColor: IColor;
        readonly badgePadding: IThickness;
        readonly buttonBadgePadding: IThickness;
        readonly buttonDefaultGradientStartColor: IColor;
        readonly buttonDefaultGradientEndColor: IColor;
        readonly buttonDefaultGradient: LinearGradient;
        readonly buttonDefaultHoveredGradientEndColor: IColor;
        readonly buttonDefaultHoveredGradient: LinearGradient;
        readonly buttonDefaultPressedGradientStartColor: IColor;
        readonly buttonDefaultPressedGradientEndColor: IColor;
        readonly buttonDefaultPressedGradient: LinearGradient;
        readonly buttonDefaultCheckedGradientStartColor: IColor;
        readonly buttonDefaultCheckedGradientEndColor: IColor;
        readonly buttonDefaultCheckedGradient: LinearGradient;
        readonly buttonDefaultCheckedAndPressedGradientStartColor: IColor;
        readonly buttonDefaultCheckedAndPressedGradientEndColor: IColor;
        readonly buttonDefaultCheckedAndPressedGradient: LinearGradient;
        readonly buttonDefaultBorder: IStroke;
        readonly buttonDefaultHoverBorder: IStroke;
        readonly buttonDefaultDisabledTextColor: IColor;
        readonly buttonDefaultDisabledBorder: IStroke;
        readonly buttonDefaultBorderRadius: number;
        readonly buttonDefaultTextColor: IColor;
        readonly buttonDefaultDisabledBackgroundColor: IColor;
        readonly buttonDefaultCheckedAndHoveredBorder: IStroke;
        readonly buttonDefaultCheckedBorder: IStroke;
        readonly buttonPrimaryGradientStartColor: IColor;
        readonly buttonPrimaryGradientEndColor: IColor;
        readonly buttonPrimaryGradient: LinearGradient;
        readonly buttonPrimaryBorder: IStroke;
        readonly buttonPrimaryPressedGradientStartColor: IColor;
        readonly buttonPrimaryPressedGradientEndColor: IColor;
        readonly buttonPrimaryPressedGradient: LinearGradient;
        readonly buttonPrimaryHoverGradientStartColor: IColor;
        readonly buttonPrimaryHoverGradientEndColor: IColor;
        readonly buttonPrimaryHoverGradient: LinearGradient;
        readonly buttonPrimaryHoverBorder: IStroke;
        readonly buttonBadgeGradientStartColor: IColor;
        readonly buttonBadgeGradientEndColor: IColor;
        readonly buttonBadgeGradient: LinearGradient;
        readonly buttonBadgeHoverGradientStartColor: IColor;
        readonly buttonBadgeHoverGradientEndColor: IColor;
        readonly buttonBadgeHoverGradient: LinearGradient;
        readonly buttonTabPadding: IThickness;
        readonly buttonCheckedTabPadding: IThickness;
        readonly buttonTabCheckedTopBorder: IStroke;
        readonly buttonTabCheckedBackgroundColor: IColor;
        readonly buttonTabCheckedBottomBorder: IStroke;
        readonly buttonTabHoveredBackgroundColor: IColor;
        readonly buttonTabHoveredBorder: IStroke;
        readonly buttonTabBackgroundColor: IColor;
        readonly buttonTabBorder: IStroke;
        readonly buttonTabTextColor: IColor;
        readonly large: number;
        readonly medium: number;
        readonly normal: number;
        readonly small: number;
        readonly horizontalSpacingXs: IVector2d;
        readonly horizontalSpacingSm: IVector2d;
        readonly spacingMd: IVector2d;
        readonly spacingBottomLg: IVector2d;
        readonly thicknessH2: IThickness;
        readonly horizontalMarginSm: IThickness;
        readonly horizontalMarginMd: IThickness;
        readonly treeViewNodeContentMargin: IThickness;
        readonly treeViewNodeIconMargin: IThickness;
        readonly leftMarginSm: IThickness;
        readonly leftMarginMd: IThickness;
        readonly leftMarginLg: IThickness;
        readonly rightMarginSm: IThickness;
        readonly rightMarginMd: IThickness;
        readonly rightMarginLg: IThickness;
        readonly allMarginMd: IThickness;
        readonly verticalMarginMd: IThickness;
        readonly verticalMarginLg: IThickness;
        readonly topMarginXs: IThickness;
        readonly topMarginMd: IThickness;
        readonly topMarginLg: IThickness;
        readonly bottomMarginXs: IThickness;
        readonly bottomMarginSm: IThickness;
        readonly bottomMarginLg: IThickness;
        readonly listTableViewTreeLine: IStroke;
        readonly listTableViewTreeMargin: IThickness;
        readonly buttonPadding: IThickness;
        readonly iconButtonPadding: IThickness;
        readonly overlayHoverShadow: IFilterCollection;
        readonly overlayTextMargin: IThickness;
        readonly timelineInfoBadgeTextMargin: IThickness;
        readonly inputIconSize: number;
        readonly inputBorder: IStroke;
        readonly inputBorderFocus: IStroke;
        readonly inputShadowFocus: IFilterCollection;
        readonly listTableView: IThickness;
        readonly listImageBadgeMargin: IThickness;
        readonly listItemTileStackPadding: IThickness;
        readonly listTileItemStackVPadding: IThickness;
        readonly listCardItemStackVPadding: IThickness;
        readonly listTileItemActionsPanelMargin: IThickness;
        readonly listTileSingleItemActionsPanelMargin: IThickness;
        readonly listItemDataField: IThickness;
        readonly listItemUnreadIconSize: number;
        readonly menuItemPadding: IThickness;
        readonly menuItemIconMargin: IThickness;
        readonly menuItemTextMargin: IThickness;
        readonly monthCalendarDay: IThickness;
        readonly monthDatePadding: IThickness;
        readonly monthNameTextMargin: IThickness;
        readonly listQuantityCancelIconColor: IColor;
        readonly popupShadow: IFilterCollection;
        readonly switchTrueColor: IColor;
        readonly switchMarginDefault: IThickness;
        readonly switchMarginSmall: IThickness;
        readonly titleImageMargin: IThickness;
        readonly tooltip: IThickness;
        readonly weekdayTableHeaderMargin: IThickness;
        readonly dateMultilineTableHeaderMargin: IThickness;
        readonly listTableHeaderMargin: IThickness;
        readonly listTableCheckBoxMargin: IThickness;
        readonly badgeBorderRadius: number;
        readonly badgeBorderWidth: number;
        readonly popupWindowIconColor: IColor;
        readonly popupWindowPadding: IThickness;
        readonly popupWindowCloseIconPadding: IThickness;
        readonly popupWindowHelpIconPadding: IThickness;
        readonly popupWindowTitleContainerPadding: IThickness;
        readonly popupWindowTitleContainerPaddingFix: IThickness;
        readonly popupWindowContentContainerMargin: IThickness;
        readonly popupWindowButtonPopupWidth: number;
        readonly datePickerInputMinWidth: number;
        readonly monthCalendarTextDataMargin: IThickness;
        readonly monthCalendarTreePadding: IThickness;
        readonly defaultBorderStroke: IStroke;
        readonly strokeColorTableHeaderBackground: IStroke;
        readonly tableMark: IStroke;
        readonly colorPickerRectangleSize: number;
        readonly informationCardUncheckedBackgroundColor: IColor;
        readonly informationCardHintColor: IColor;
        readonly informationCardPadding: IThickness;
        readonly informationCardIconMargin: IThickness;
        readonly informationCardIconContainerMargin: IThickness;
        readonly informationCardTitleMargin: IThickness;
        readonly informationCardTextMargin: IThickness;
        readonly selectRowMargin: IThickness;
        readonly selectColumnMargin: IThickness;
        readonly selectCellPadding: IThickness;
        readonly alertDangerStyle: BoxStyle;
        readonly alertWarningStyle: BoxStyle;
        readonly alertInfoStyle: BoxStyle;
        readonly alertSuccessStyle: BoxStyle;
        readonly inlineEditorWarningStyle: BoxStyle;
        readonly alertPadding: IThickness;
        readonly alertIconMargin: IThickness;
        private _cellDefaultBackgroundColors;
        private _cellHighlightBackgroundColors;
        private _listItemBackgroundLightenAmount;
        private _listItemBackgroundColor;
        private _listItemHoverBackgroundColor;
        private _listItemDisabledBackgroundColor;
        private _listItemDisabledHoverBackgroundColor;
        private _listItemErrorBackgroundColor;
        private _listItemErrorHoverBackgroundColor;
        private _listItemBackgroundColors;
        private _listItemDisabledBackgroundColors;
        private _listItemErrorBackgroundColors;
        private _controlSkins;
        constructor();
        addSkin(key: Readonly<IFunction>, value: IControlSkinConstructor): void;
        attach(control: IControl): void;
        computeOverlayBounds(startDate: DateTime, endDate: DateTime, startTime: DateTime, endTime: DateTime): IRect;
        getCellBackgroundColor(isWeekend: boolean, highlight: boolean): IColor;
        getListItemBackgroundColor(isHovered: boolean, isDisabled: boolean, isError: boolean): IColor;
        static setCursor(control: Control, cursor: Cursor): void;
        private timeToPixelsStatic(time);
    }
}
declare module "lib/root/Controls/Skins/Default/IControlSkinConstructor" {
    import { IControlSkin } from "lib/root/Controls/IControlSkin";
    import { Skin } from "lib/root/Controls/Skins/Default/Skin";
    export interface IControlSkinConstructor {
        new (skin: Skin): IControlSkin;
    }
}
declare module "lib/root/Controls/ISkin" {
    import { DateTime } from "lib/root/Core/DateTime";
    import { IFunction } from "lib/root/Core/Delegates";
    import { IRect } from "lib/root/Core/Graphics/IRect";
    import { IThickness } from "lib/root/Core/Graphics/IThickness";
    import { IColor } from "lib/root/Core/IColor";
    import { IFont } from "lib/root/Core/IFont";
    import { IControl } from "lib/root/Controls/IControl";
    import { IControlSkinConstructor } from "lib/root/Controls/Skins/Default/IControlSkinConstructor";
    export interface ISkin {
        colorWhite: IColor;
        defaultTextColor: IColor;
        eventCalendarGridCellWidth: number;
        eventCalendarGridCellHeight: number;
        eventCalendarTimelineDataEventDescriptionFontSize: number;
        defaultFontFamily: string;
        smallFont: IFont;
        smallBoldFont: IFont;
        defaultFont: IFont;
        defaultBoldFont: IFont;
        mediumFont: IFont;
        mediumBoldFont: IFont;
        largeFont: IFont;
        largeBoldFont: IFont;
        extraLargeFont: IFont;
        horizontalMarginMd: IThickness;
        addSkin(key: Readonly<IFunction>, value: IControlSkinConstructor): void;
        attach(control: IControl): void;
        computeOverlayBounds(startDate: DateTime, endDate: DateTime, startTime: DateTime, endTime: DateTime): IRect;
        getCellBackgroundColor(isWeekend: boolean, highlight: boolean): IColor;
    }
}
declare module "lib/root/Controls/ITooltipService" {
    import { Control } from "lib/root/Controls/index";
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    export interface ITooltipService {
        hidden: EventHandler;
        shown: EventHandler;
        hide(): void;
        show(control: Control): void;
        update(control: Control): void;
    }
}
declare module "lib/root/Controls/Control" {
    import { ICollection, IReadOnlyCollection } from "lib/root/Core/Collections/Collections";
    import { IAction, IAction1, IPredicate1 } from "lib/root/Core/Delegates";
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    import { IMouseEventHandler } from "lib/root/Core/Events/IMouseEventHandler";
    import { IWheelEventHandler } from "lib/root/Core/Events/IWheelEventHandler";
    import { MouseEventHandler } from "lib/root/Core/Events/MouseEventHandler";
    import { IAnimation } from "lib/root/Core/Graphics/IAnimation";
    import { IRect } from "lib/root/Core/Graphics/IRect";
    import { IRelativeAlignment } from "lib/root/Core/Graphics/IRelativeAlignment";
    import { IVector2d } from "lib/root/Core/Graphics/IVector2d";
    import { TextDecoration } from "lib/root/Core/Graphics/TextDecoration";
    import { IColor } from "lib/root/Core/IColor";
    import { IFont } from "lib/root/Core/IFont";
    import { INode } from "lib/root/Core/INode";
    import { Lazy } from "lib/root/Core/Lazy";
    import { ILayout } from "lib/root/Layout/All";
    import { ILocalizationParameters } from "lib/root/Localization/ILocalizationParameters";
    import { Cursor } from "lib/root/Render/Cursor";
    import { IFilterCollection } from "lib/root/Render/Filters/IFilterCollection";
    import { IFillStyle } from "lib/root/Render/IFillStyle";
    import { IStroke } from "lib/root/Render/IStroke";
    import { ControlMouseState } from "lib/root/Controls/ControlMouseState";
    import { IControl } from "lib/root/Controls/IControl";
    import { IControlSkin } from "lib/root/Controls/IControlSkin";
    import { ISkin } from "lib/root/Controls/ISkin";
    export abstract class Control implements IControl {
        readonly skinChange: EventHandler;
        protected _children: ICollection<IControl>;
        protected _computeRootDimensions: boolean;
        private _alignmentCalculator;
        private _alignmentListener;
        private _animations;
        private _cleanupAnimationUpdate;
        private _contextMenuListener;
        private _isGlobalMouseEventsEnabled;
        private _layoutChildren;
        private _node;
        private _renderInstance;
        private _resizeObserver;
        private _tooltipMouseEnterListener;
        private _forceAttachEvents;
        protected constructor();
        private static _controlInstances;
        static readonly controlInstances: IReadOnlyCollection<Control>;
        readonly name: string;
        readonly actualHeight: number;
        readonly actualWidth: number;
        readonly actualX: number;
        readonly actualY: number;
        readonly afterApplicationLayout: EventHandler;
        readonly afterApplicationUpdate: EventHandler;
        private _attachedNode;
        readonly attachedNode: HTMLElement;
        private _alignment;
        alignment: IRelativeAlignment;
        cache: boolean;
        readonly children: IReadOnlyCollection<IControl>;
        private _childrenUpdated;
        readonly childrenUpdated: EventHandler;
        readonly click: IMouseEventHandler;
        clipToBounds: boolean;
        readonly contextmenu: IMouseEventHandler;
        private _contextMenuControl;
        contextMenuControl: Lazy<Control>;
        cssClassNames: string;
        cursor: Cursor;
        readonly dblclick: IMouseEventHandler;
        private _defaultRenderId;
        defaultRenderId: string;
        filters: IFilterCollection;
        readonly isAttached: boolean;
        readonly isHovered: boolean;
        readonly isPressed: boolean;
        readonly isVisible: boolean;
        private _globalMousedown;
        readonly globalMousedown: MouseEventHandler;
        private _globalMousemove;
        readonly globalMousemove: MouseEventHandler;
        private _globalMouseup;
        readonly globalMouseup: MouseEventHandler;
        readonly globalX: number;
        readonly globalY: number;
        href: string;
        hrefTarget: string;
        readonly htmlElement: HTMLElement;
        private _layout;
        layout: ILayout;
        metadata: string;
        readonly mousedown: IMouseEventHandler;
        readonly mouseenter: IMouseEventHandler;
        readonly mouseleave: IMouseEventHandler;
        readonly mousemove: IMouseEventHandler;
        readonly mouseout: IMouseEventHandler;
        readonly mouseover: IMouseEventHandler;
        private _mouseState;
        readonly mouseState: ControlMouseState;
        readonly mouseup: IMouseEventHandler;
        protected readonly node: INode;
        protected nodeBorderRadius: number;
        protected nodeAllBorder: IStroke;
        protected nodeBackgroundColor: IColor;
        protected nodeBottomBorder: IStroke;
        protected nodeColor: IColor;
        protected nodeFill: IFillStyle;
        protected nodeFont: IFont;
        protected nodeIconName: string;
        protected nodeImageSource: string;
        protected nodeIsTextSelectable: boolean;
        protected nodeNoPointerEvents: boolean;
        protected nodeLeftBorder: IStroke;
        protected nodeText: string;
        protected nodeTextDecoration: TextDecoration;
        protected nodeTextDecorationStyle: IStroke;
        protected nodeTopBorder: IStroke;
        protected nodeRightBorder: IStroke;
        opacity: number;
        private readonly overlay;
        private _parent;
        parent: Control;
        renderId: string;
        private _skin;
        skin: IControlSkin;
        private _tooltipControl;
        tooltipControl: Lazy<Control>;
        private _tooltipText;
        tooltipText: string;
        readonly topLevelParent: Control;
        readonly wheel: IWheelEventHandler;
        zIndex: number;
        applyBySelector(selectPredicate: IPredicate1<IControl>, action: IAction1<IControl>): void;
        applySkin(): void;
        attach(htmlElement: HTMLElement, noResizeObserver: boolean, forceAttachEvents?: boolean): void;
        cleanup(): void;
        detach(): void;
        enableGlobalMouseEvents(): void;
        enableMouseStateDetection(): void;
        getRelativeBoundingRect(control: IControl): IRect;
        getScreenCoordinates(): IVector2d;
        globalToLocal(point: IVector2d): IVector2d;
        hidePopup(): void;
        hideTooltip(): void;
        isPointInside(point: IVector2d): boolean;
        localToGlobal(point: IVector2d): IVector2d;
        makePointInside(point: IVector2d): IVector2d;
        paint(): void;
        performLayout(): void;
        readyToRender(): boolean;
        renderPngImage(): string;
        runLocalization(): void;
        showPopup(atControl?: IControl): void;
        showTooltip(atControl?: Control): void;
        traverse(action: IAction1<IControl>): void;
        protected _applicationSkin: ISkin;
        protected createAnimation(): IAnimation;
        protected findHorizontal<TControl extends Control>(controls: IReadOnlyCollection<TControl>, x: number): TControl;
        protected findVertical<TControl extends Control>(controls: IReadOnlyCollection<TControl>, y: number): TControl;
        private _localizeAction;
        protected localizeAction: IAction;
        protected localize(text: string, parameters?: ILocalizationParameters): string;
        protected setChildren(value: IControl[], applySkin?: boolean): void;
        private attachRender();
        private createBorder();
        private createContextMenuListener();
        private createFill();
        private detachRender();
        private getBorder(getBorder, setBorder);
        private processAnimations();
        private setBorder(updateFn);
        private startAlign(atControl);
        private stopAlign();
        private updateRender(updateFn);
        private updateTooltip();
    }
}
declare module "lib/root/Controls/IOverlay" {
    import { Control } from "lib/root/Controls/Control";
    export interface IOverlay {
        root: Control;
        width: number;
        height: number;
        attach(element: Element): void;
        detach(): void;
    }
}
declare module "lib/root/Controls/Overlay" {
    import { Control } from "lib/root/Controls/Control";
    import { IOverlay } from "lib/root/Controls/IOverlay";
    export class Overlay implements IOverlay {
        private _containerDivElement;
        private _rootPanel;
        constructor(className: string);
        private _root;
        root: Control;
        width: number;
        height: number;
        attach(element: Element): void;
        detach(): void;
        private updateContent();
    }
}
declare module "lib/root/ApplicationOverlay" {
    import { Control } from "lib/root/Controls/Control";
    import { IApplicationOverlay } from "lib/root/Controls/IApplicationOverlay";
    export class ApplicationOverlay implements IApplicationOverlay {
        private _tooltipOverlay;
        private _popupOverlay;
        private _contentInnerWrapperElement;
        private _mouseDownOutside;
        private _popupRootMouseDownHandler;
        constructor();
        readonly tooltipRoot: Control;
        readonly popupRoot: Control;
        cleanup(): void;
        hidePopup(): void;
        hideTooltip(): void;
        showPopup(control: Control): void;
        showTooltip(control: Control): void;
        private setPopupRoot(value);
    }
}
declare module "lib/root/ApplicationSettings" {
    import { Url } from "lib/root/Core/Net/Url";
    export class ApplicationSettings {
        private _parameterRenderId;
        private _parameterDebugLogTimings;
        private _parameterDebugCreateProfile;
        private _parameterDebugMouseClickRender;
        private _parameterDebugLogger;
        private _parameterListVersion;
        private _parameterListPageSize;
        private _parameterListElementsCount;
        private _parameterExpandableChildren;
        private _parameterEnableGlobalViewCache;
        private _url;
        constructor(url: Url);
        readonly url: Url;
        readonly renderId: string;
        readonly debugLogTimings: boolean;
        readonly debugCreateProfile: boolean;
        readonly debugMouseClickRender: boolean;
        readonly debugLogger: boolean;
        listVersion: number;
        listPageSize: number;
        listElementsCount: number;
        listExpandableChildren: boolean;
        enableGlobalViewCache: boolean;
    }
}
declare module "lib/root/Controls/TooltipService" {
    import { Control } from "lib/root/Controls/index";
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    import { ITooltipService } from "lib/root/Controls/ITooltipService";
    export class TooltipService implements ITooltipService {
        private _control;
        private _tooltipControl;
        private _hideAction;
        private _shown;
        private _hidden;
        constructor();
        readonly isVisible: boolean;
        readonly shown: EventHandler;
        readonly hidden: EventHandler;
        show(control: Control): void;
        hide(): void;
        update(control: Control): void;
        private createTooltip(text);
        private updateControl(control);
    }
}
declare module "lib/root/Core/Factory/FactoryObjectInstance" {
    import { IFactoryObjectInfo } from "lib/root/Core/Factory/IFactoryObjectInfo";
    import { IFactoryObjectInstance } from "lib/root/Core/Factory/IFactoryObjectInstance";
    export class FactoryObjectInstance<TFactoryObject> implements IFactoryObjectInstance<TFactoryObject> {
        private _info;
        private _object;
        constructor(info: IFactoryObjectInfo<TFactoryObject>, instance: TFactoryObject);
        readonly info: IFactoryObjectInfo<TFactoryObject>;
        readonly object: TFactoryObject;
    }
}
declare module "lib/root/Core/Factory/FactoryObjectInfo" {
    import { IFactoryObjectInfo } from "lib/root/Core/Factory/IFactoryObjectInfo";
    import { IFactoryObjectInstance } from "lib/root/Core/Factory/IFactoryObjectInstance";
    export class FactoryObjectInfo<TFactoryObject> implements IFactoryObjectInfo<TFactoryObject> {
        private _constructorFn;
        private _id;
        private _name;
        private _description;
        constructor(constructorFn: () => TFactoryObject, id: string, name: string, description: string);
        create(): IFactoryObjectInstance<TFactoryObject>;
        readonly id: string;
        readonly name: string;
        readonly description: string;
    }
}
declare module "lib/root/Core/Factory/IFactory" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { IFactoryObjectInfo } from "lib/root/Core/Factory/IFactoryObjectInfo";
    export interface IFactory<TFactoryObject> {
        getRegisteredObjects(): IReadOnlyCollection<IFactoryObjectInfo<TFactoryObject>>;
        findRegisteredObject(id: string): IFactoryObjectInfo<TFactoryObject>;
        register(constructorFn: () => any, id: string, name: string, description: string): void;
    }
}
declare module "lib/root/Core/Factory/Factory" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { IFactory } from "lib/root/Core/Factory/IFactory";
    import { IFactoryObjectInfo } from "lib/root/Core/Factory/IFactoryObjectInfo";
    export class Factory<TFactoryObject> implements IFactory<TFactoryObject> {
        private _registeredObjects;
        getRegisteredObjects(): IReadOnlyCollection<IFactoryObjectInfo<TFactoryObject>>;
        findRegisteredObject(id: string): IFactoryObjectInfo<TFactoryObject>;
        register(constructorFn: () => TFactoryObject, id: string, name: string, description: string): void;
    }
}
declare module "lib/root/Core/IFontFile" {
    export interface IFontFile {
        familyName: string;
        url: string;
    }
}
declare module "lib/root/Core/FontFile" {
    import { IFontFile } from "lib/root/Core/IFontFile";
    export class FontFile implements IFontFile {
        constructor(familyName: string, url: string);
        private _familyName;
        readonly familyName: string;
        private _url;
        readonly url: string;
    }
}
declare module "lib/root/Core/FontLoader" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/Collections";
    import { IFontFile } from "lib/root/Core/IFontFile";
    import { IAction } from "lib/root/Core/Delegates";
    export class FontLoader {
        private _genericFontFamily;
        private _genericFontMeasuredWidth;
        private _measureFontSize;
        private _canvas;
        private _renderingContext;
        constructor();
        loadFonts(fontNames: IReadOnlyCollection<IFontFile>, onLoad: IAction): void;
        private getFontCssDeclaration(fontFile);
        private createStyleElement(cssText);
        private createSpanElement(fontFamily);
        private isFontLoaded(fontFamily);
        private measureTextWidth(text, fontFamily);
    }
}
declare module "lib/root/Core/FrameRenderer/IFrameRenderer" {
    import { IAction } from "lib/root/Core/Delegates";
    export interface IFrameRenderer {
        renderAction: IAction;
    }
}
declare module "lib/root/Core/FrameRenderer/BaseFrameRenderer" {
    import { IAction } from "lib/root/Core/Delegates";
    import { IFrameRenderer } from "lib/root/Core/FrameRenderer/IFrameRenderer";
    export abstract class BaseFrameRenderer implements IFrameRenderer {
        private _renderAction;
        renderAction: IAction;
        protected callRenderAction(): void;
        protected abstract onRenderActionChanged(): void;
    }
}
declare module "lib/root/Core/FrameRenderer/MouseClickFrameRenderer" {
    import { BaseFrameRenderer } from "lib/root/Core/FrameRenderer/BaseFrameRenderer";
    export class MouseClickFrameRenderer extends BaseFrameRenderer {
        constructor();
        protected onRenderActionChanged(): void;
    }
}
declare module "lib/root/Core/FrameRenderer/RequestAnimationFrameRenderer" {
    import { BaseFrameRenderer } from "lib/root/Core/FrameRenderer/BaseFrameRenderer";
    export class RequestAnimationFrameRenderer extends BaseFrameRenderer {
        private _frameRequestCallback;
        constructor();
        protected onRenderActionChanged(): void;
    }
}
declare module "lib/root/Core/Logger/ILogger" {
    export interface ILogger {
        debugMode: boolean;
        error(message: {}, ...optionalParams: {}[]): void;
        info(message: {}, ...optionalParams: {}[]): void;
        log(message: {}, ...optionalParams: {}[]): void;
        warn(message: {}, ...optionalParams: {}[]): void;
    }
}
declare module "lib/root/Core/Logger/BrowserConsoleLogger" {
    import { ILogger } from "lib/root/Core/Logger/ILogger";
    export class BrowserConsoleLogger implements ILogger {
        constructor();
        private _debugMode;
        debugMode: boolean;
        error(message: {}, ...optionalParams: {}[]): void;
        info(message: {}, ...optionalParams: {}[]): void;
        log(message: {}, ...optionalParams: {}[]): void;
        warn(message: {}, ...optionalParams: {}[]): void;
    }
}
declare module "lib/root/Core/Profiler/ConsoleProfiler" {
    import { IAction } from "lib/root/Core/Delegates";
    export class ConsoleProfiler {
        constructor();
        profile(text: string, action: IAction): void;
        private _logTimings;
        logTimings: boolean;
        private _createProfile;
        createProfile: boolean;
    }
}
declare module "lib/root/Core/Profiler/IProfiler" {
    import { IAction } from "lib/root/Core/Delegates";
    export interface IProfiler {
        profile(text: string, action: IAction): void;
    }
}
declare module "lib/root/Core/Profiler/NoneProfiler" {
    import { IAction } from "lib/root/Core/Delegates";
    export class NoneProfiler {
        profile(text: string, action: IAction): void;
    }
}
declare module "lib/root/IApplicationColorPalette" {
    import { IColor } from "lib/root/Core/IColor";
    export interface IApplicationColorPalette {
        defaultTextColor: IColor;
        defaultBackgroundColor: IColor;
        defaultBorderColor: IColor;
        color1: IColor;
        color2: IColor;
        color3: IColor;
        color4: IColor;
        color5: IColor;
        color6: IColor;
        color7: IColor;
        color8: IColor;
        color9: IColor;
        color10: IColor;
        color11: IColor;
        color12: IColor;
        color13: IColor;
        color14: IColor;
        successColor: IColor;
        warningColor: IColor;
        errorColor: IColor;
        informationColor: IColor;
        getColorByIndex(index: number): IColor;
    }
}
declare module "lib/root/DefaultApplicationColorPalette" {
    import { IColor } from "lib/root/Core/IColor";
    import { IApplicationColorPalette } from "lib/root/IApplicationColorPalette";
    export class DefaultApplicationColorPalette implements IApplicationColorPalette {
        defaultTextColor: IColor;
        defaultBackgroundColor: IColor;
        defaultBorderColor: IColor;
        color1: IColor;
        color2: IColor;
        color3: IColor;
        color4: IColor;
        color5: IColor;
        color6: IColor;
        color7: IColor;
        color8: IColor;
        color9: IColor;
        color10: IColor;
        color11: IColor;
        color12: IColor;
        color13: IColor;
        color14: IColor;
        successBackgroundColor: IColor;
        warningBackgroundColor: IColor;
        errorBackgroundColor: IColor;
        informationBackgroundColor: IColor;
        inProgressBackgroundColor: IColor;
        waitBackgroundColor: IColor;
        successColor: IColor;
        warningColor: IColor;
        errorColor: IColor;
        informationColor: IColor;
        inProgressColor: IColor;
        waitColor: IColor;
        getColorByIndex(index: number): IColor;
    }
}
declare module "lib/root/DefaultLocalization" {
    import { ILocalizationParameters } from "lib/root/Localization/ILocalizationParameters";
    export class DefaultLocalization {
        localize(value: string, parameters?: ILocalizationParameters): string;
        readonly currentLanguage: string;
        readonly numberDecimalSeparator: string;
        readonly numberGroupSeparator: string;
    }
}
declare module "lib/root/IPreloaderBehavior" {
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    export interface IPreloaderBehavior {
        readonly shown: EventHandler;
        readonly hidden: EventHandler;
        hide(): void;
        show(): void;
    }
}
declare module "lib/root/ServerControls/Core/Primitive/Primitive" {
    import { PrimitiveKind } from "lib/root/ServerControls/Core/Primitive/index";
    export abstract class Primitive {
        protected constructor(kind: PrimitiveKind);
        private readonly _kind;
        readonly kind: PrimitiveKind;
        abstract toString(): string;
    }
}
declare module "lib/root/ServerControls/Core/Primitive/PrimitiveKind" {
    export enum PrimitiveKind {
        Season = 0,
        WeekdayRange = 1,
    }
}
declare module "lib/root/ServerControls/Core/Primitive/SeasonPrimitive" {
    import { Primitive } from "lib/root/ServerControls/Core/Primitive/index";
    export class SeasonPrimitive extends Primitive {
        constructor();
        readonly startDay: number;
        readonly startMonth: number;
        readonly endDay: number;
        readonly endMonth: number;
        toString(): string;
    }
}
declare module "lib/root/ServerControls/Core/Primitive/WeekdayRangePrimitive" {
    import { Primitive } from "lib/root/ServerControls/Core/Primitive/index";
    import { DayOfWeek } from "lib/root/Core/DayOfWeek";
    export class WeekdayRangePrimitive extends Primitive {
        constructor();
        readonly start: DayOfWeek;
        readonly end: DayOfWeek;
        toString(): string;
    }
}
declare module "lib/root/ServerControls/Core/Primitive/index" {
    export { Primitive } from "lib/root/ServerControls/Core/Primitive/Primitive";
    export { PrimitiveFactory } from "lib/root/ServerControls/Core/Primitive/PrimitiveFactory";
    export { PrimitiveKind } from "lib/root/ServerControls/Core/Primitive/PrimitiveKind";
    export { SeasonPrimitive } from "lib/root/ServerControls/Core/Primitive/SeasonPrimitive";
    export { WeekdayRangePrimitive } from "lib/root/ServerControls/Core/Primitive/WeekdayRangePrimitive";
}
declare module "lib/root/ServerControls/Core/Primitive/PrimitiveFactory" {
    import { Primitive } from "lib/root/ServerControls/Core/Primitive/index";
    export class PrimitiveFactory {
        static fromJsonString(json: string): Primitive;
    }
}
declare module "lib/root/ServerControls/Core/LocalizationPreprocessor" {
    export class LocalizationPreprocessor {
        private static readonly _openingTag;
        private static readonly _jsonReplacementPattern;
        static processText(text: string): string;
        private static getXmlFragmentReplacementPattern(tagName);
    }
}
declare module "lib/root/LocalizationProxy" {
    import { ILocalization } from "lib/root/Localization/ILocalization";
    import { ILocalizationParameters } from "lib/root/Localization/ILocalizationParameters";
    export class LocalizationProxy implements ILocalization {
        private readonly _localization;
        constructor(localization: ILocalization);
        localize(value: string, parameters?: ILocalizationParameters): string;
        readonly currentLanguage: string;
        readonly numberDecimalSeparator: string;
        readonly numberGroupSeparator: string;
    }
}
declare module "lib/root/PreloaderBehavior" {
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    import { IPreloaderBehavior } from "lib/root/IPreloaderBehavior";
    export class PreloaderBehavior implements IPreloaderBehavior {
        private _showDelay;
        private _hideDelay;
        private _showTime;
        private _needShow;
        private _isVisible;
        readonly shown: EventHandler;
        readonly hidden: EventHandler;
        constructor(showDelay: number, hideDelay: number);
        hide(): void;
        show(): void;
        private internalShow();
    }
}
declare module "lib/root/Render/Canvas/IDisplayObject" {
    import { IFilterCollection } from "lib/root/Render/Filters/IFilterCollection";
    export interface IDisplayObject {
        x: number;
        y: number;
        width: number;
        height: number;
        visible: boolean;
        zIndex: number;
        opacity: number;
        filters: IFilterCollection;
        parent: IDisplayObject;
        isValid: boolean;
        render(context: CanvasRenderingContext2D, x: number, y: number): void;
        invalidate(): void;
    }
}
declare module "lib/root/Render/Canvas/IDisplayObjectContainer" {
    import { IDisplayObject } from "lib/root/Render/Canvas/IDisplayObject";
    export interface IDisplayObjectContainer extends IDisplayObject {
        addChild(child: IDisplayObject): void;
        clearChildren(): void;
    }
}
declare module "lib/root/Render/Canvas/DisplayObject" {
    import { IBrowser } from "lib/root/Core/Browser/IBrowser";
    import { IFilterCollection } from "lib/root/Render/Filters/IFilterCollection";
    import { ITextMeasurer } from "lib/root/Render/ITextMeasurer";
    import { IDisplayObject } from "lib/root/Render/Canvas/IDisplayObject";
    export abstract class DisplayObject implements IDisplayObject {
        private _isValid;
        private _browser;
        private _textMeasurer;
        protected constructor();
        private _x;
        x: number;
        private _y;
        y: number;
        private _width;
        width: number;
        private _height;
        height: number;
        private _clipToBounds;
        clipToBounds: boolean;
        private _visible;
        visible: boolean;
        private _zIndex;
        zIndex: number;
        private _opacity;
        opacity: number;
        private _filters;
        filters: IFilterCollection;
        private _parent;
        parent: IDisplayObject;
        render(context: CanvasRenderingContext2D, x: number, y: number): void;
        readonly isValid: boolean;
        invalidate(): void;
        protected abstract draw(context: CanvasRenderingContext2D, x: number, y: number): void;
        protected readonly browser: IBrowser;
        protected readonly textMeasurer: ITextMeasurer;
    }
}
declare module "lib/root/Render/Canvas/Rectangle" {
    import { IFillStyle } from "lib/root/Render/IFillStyle";
    import { IRectangleBorder } from "lib/root/Render/IRectangleBorder";
    import { DisplayObject } from "lib/root/Render/Canvas/DisplayObject";
    export class Rectangle extends DisplayObject {
        constructor();
        private _fill;
        fill: IFillStyle;
        private _stroke;
        stroke: IRectangleBorder;
        private _borderRadius;
        borderRadius: number;
        protected draw(context: CanvasRenderingContext2D, xOffset: number, yOffset: number): void;
        private drawAllBorder(context, stroke, isFilled, borderRadius, x, y, width, height);
        private drawSideBorders(context, isFilled, x, y, width, height);
        private drawBorder(context, x1, y1, x2, y2, stroke?);
        private applyFillStyle(context, fillStyle, x, y, width, height);
    }
}
declare module "lib/root/Render/Canvas/DisplayObjectContainer" {
    import { ICollection } from "lib/root/Core/Collections/Collections";
    import { IDisplayObject } from "lib/root/Render/Canvas/IDisplayObject";
    import { IDisplayObjectContainer } from "lib/root/Render/Canvas/IDisplayObjectContainer";
    import { Rectangle } from "lib/root/Render/Canvas/Rectangle";
    export class DisplayObjectContainer extends Rectangle implements IDisplayObjectContainer {
        private _children;
        constructor();
        addChild(child: IDisplayObject): void;
        clearChildren(): void;
        readonly children: ICollection<IDisplayObject>;
        protected draw(context: CanvasRenderingContext2D, x: number, y: number): void;
        private sortByZIndex(displayObjects);
    }
}
declare module "lib/root/Core/Base64Encoding" {
    export class Base64Encoding {
        static decode(value: string): string;
        static encode(value: string): string;
    }
}
declare module "lib/root/Render/ImageSet" {
    import { IColor } from "lib/root/Core/IColor";
    export interface IImageLoadedHandler {
        (image: HTMLImageElement, fromCache: boolean): void;
    }
    export class ImageSet {
        private static _instance;
        private _icons;
        private _images;
        static readonly current: ImageSet;
        icon(iconName: string, color: IColor, loadedHandler: IImageLoadedHandler): void;
        img(src: string, loadedHandler: IImageLoadedHandler): void;
        private loadImage(uri, loadedHandler, storeAction);
    }
}
declare module "lib/root/Core/Predicate" {
    import { IAction } from "lib/root/Core/Delegates";
    export class Predicate {
        static doIfChanged<TValue>(oldValue: TValue, newValue: TValue, action: IAction): void;
    }
}
declare module "lib/root/Render/Canvas/BaseImage" {
    import { IImageLoadedHandler } from "lib/root/Render/ImageSet";
    import { DisplayObject } from "lib/root/Render/Canvas/DisplayObject";
    export abstract class BaseImage extends DisplayObject {
        private _image;
        protected draw(context: CanvasRenderingContext2D, x: number, y: number): void;
        protected abstract loadImage(loadedHandler: IImageLoadedHandler): void;
        protected invalidateImage<TValue>(oldValue: TValue, newValue: TValue): void;
    }
}
declare module "lib/root/Render/Canvas/Icon" {
    import { IColor } from "lib/root/Core/IColor";
    import { IImageLoadedHandler } from "lib/root/Render/ImageSet";
    import { BaseImage } from "lib/root/Render/Canvas/BaseImage";
    export class Icon extends BaseImage {
        constructor();
        private _name;
        name: string;
        private _color;
        color: IColor;
        protected loadImage(loadedHandler: IImageLoadedHandler): void;
    }
}
declare module "lib/root/Render/Canvas/Image" {
    import { IImageLoadedHandler } from "lib/root/Render/ImageSet";
    import { BaseImage } from "lib/root/Render/Canvas/BaseImage";
    export class Image extends BaseImage {
        constructor();
        private _source;
        source: string;
        protected loadImage(loadedHandler: IImageLoadedHandler): void;
    }
}
declare module "lib/root/Render/Canvas/Text" {
    import { TextDecoration } from "lib/root/Core/Graphics/TextDecoration";
    import { IColor } from "lib/root/Core/IColor";
    import { IFont } from "lib/root/Core/IFont";
    import { IStroke } from "lib/root/Render/IStroke";
    import { DisplayObject } from "lib/root/Render/Canvas/DisplayObject";
    export class Text extends DisplayObject {
        constructor();
        private _text;
        text: string;
        private _color;
        color: IColor;
        private _font;
        font: IFont;
        private _decoration;
        decoration: TextDecoration;
        private _decorationStyle;
        decorationStyle: IStroke;
        protected draw(context: CanvasRenderingContext2D, x: number, y: number): void;
    }
}
declare module "lib/root/Render/Canvas/CanvasGraphics" {
    import { INode } from "lib/root/Core/INode";
    import { IGraphics } from "lib/root/Render/IGraphics";
    import { IDisplayObject } from "lib/root/Render/Canvas/IDisplayObject";
    export class CanvasGraphics implements IGraphics {
        private _shapes;
        private _text;
        private _image;
        private _icon;
        constructor();
        readonly content: IDisplayObject;
        readonly htmlElement: HTMLElement;
        append(): IGraphics;
        appendChild(graphics: IGraphics): void;
        empty(): void;
        updateFromNode(node: INode): void;
        private addOwnChildren();
    }
}
declare module "lib/root/Render/Canvas/CanvasRender" {
    import { IGraphics } from "lib/root/Render/IGraphics";
    import { IRender } from "lib/root/Render/IRender";
    export class CanvasRender implements IRender {
        private _isInitialized;
        private _rootGraphics;
        private _canvas;
        private _renderingContext;
        private _containerDiv;
        constructor();
        readonly root: IGraphics;
        readonly element: HTMLElement;
        init(fontScaleRate: number): void;
        private _lastCursor;
        processAnimationFrame(width: number, height: number, cursor: string, performanceLabel?: string): void;
        takeScreenShot(contentType: string, x: number, y: number, width: number, height: number): string;
    }
}
declare module "lib/root/Render/TextMetrics" {
    import { ITextMetrics } from "lib/root/Render/ITextMetrics";
    export class TextMetrics implements ITextMetrics {
        private _width;
        private _height;
        constructor(width: number, height: number);
        readonly width: number;
        readonly height: number;
    }
}
declare module "lib/root/Render/DefaultTextMeasurer" {
    import { IFont } from "lib/root/Core/IFont";
    import { ITextMeasurer } from "lib/root/Render/ITextMeasurer";
    import { ITextMetrics } from "lib/root/Render/ITextMetrics";
    export class DefaultTextMeasurer implements ITextMeasurer {
        private _span;
        private _canvas;
        private _renderingContext;
        private _measurementCache;
        private _zeroTextMetrics;
        constructor();
        private _fontScaleRate;
        readonly fontScaleRate: number;
        measureFont(font: IFont): number;
        measureText(text: string, font: IFont): ITextMetrics;
        private computeFontScaleRate();
        private createMeasurementCache();
        private measureFontHeight(fontString);
        private measureTextWidth(fontString, text);
    }
}
declare module "lib/root/Render/UpdateScheduler" {
    import { IUpdateQueue } from "lib/root/Render/IUpdateQueue";
    import { IUpdateTarget } from "lib/root/Render/IUpdateTarget";
    export class UpdateScheduler implements IUpdateQueue, IUpdateTarget {
        private _updateTargetList;
        constructor();
        update(): void;
        scheduleUpdate(target: IUpdateTarget): void;
    }
}
declare module "lib/root/Render/Html/HtmlRender" {
    import { IGraphics } from "lib/root/Render/IGraphics";
    import { IRender } from "lib/root/Render/IRender";
    export class HtmlRender implements IRender {
        private _isInitialized;
        private _containerDiv;
        private _updateTarget;
        constructor();
        private _root;
        readonly root: IGraphics;
        readonly element: HTMLElement;
        init(fontScaleRate: number): void;
        private _lastWidth;
        private _lastHeight;
        processAnimationFrame(width: number, height: number, cursor: string, performanceLabel?: string): void;
        takeScreenShot(contentType: string, x: number, y: number, width: number, height: number): string;
    }
}
declare module "lib/root/Render/IRenderFactory" {
    import { IFactory } from "lib/root/Core/Factory/IFactory";
    import { IRender } from "lib/root/Render/IRender";
    export interface IRenderFactory extends IFactory<IRender> {
    }
}
declare module "lib/root/Controls/StickyScrollBar" {
    import { Orientation } from "lib/root/Core/Graphics/Orientation";
    import { Control } from "lib/root/Controls/Control";
    export class StickyScrollBar extends Control {
        private _contentNode;
        private _orientation;
        constructor(orientation: Orientation);
        scrollSize: number;
        scrollOffset: number;
        private init();
    }
}
declare module "lib/root/StickyScroll" {
    import { IStickyScrollElement } from "lib/root/Core/IStickyScrollElement";
    export class StickyScroll {
        private static _wheelScrollDelta;
        private _vScrollBarNode;
        private _hScrollBarNode;
        private _element;
        private _vScrollBar;
        private _hScrollBar;
        private _container;
        private _content;
        private _contentInnerWrapper;
        private _isHorizontalScrollingEnabled;
        private _isActive;
        private _lastTouchX;
        private _lastTouchY;
        private _contentHeight;
        private _containerOffsetTop;
        private _detachActions;
        private _jqueryResizeHandler;
        private _gridSelectFix;
        private _vScrollMax;
        private _availableHeight;
        private _reduceHeight;
        constructor();
        activate(element: IStickyScrollElement, container: HTMLElement, isHorizontalScrollingEnabled: boolean): void;
        deactivate(): void;
        resetScrollPosition(): void;
        updateSize(): void;
        private applyScrollOffset(afterApplicationUpdate?);
        private applySize(afterApplicationUpdate?);
        private doActions(afterApplicationUpdate, actions);
        private doAction(afterApplicationUpdate, action);
        private getVerticalDistance(fromElement, toElement);
        private onScroll();
        private onWheel(wheelEvent);
        private setScrollBarVisibility(scrollBar, isVisible);
        private getWheelScrollOffset(delta, wheelDelta);
        private onTouchMove(touchEvent);
        private onTouchEnd();
        private addDebouncedListener<TEvent>(eventTarget, eventType, action);
    }
}
declare module "lib/root/Application" {
    import { ApplicationSettings } from "lib/root/ApplicationSettings";
    import { IApplicationOverlay } from "lib/root/Controls/IApplicationOverlay";
    import { ISkin } from "lib/root/Controls/ISkin";
    import { ITooltipService } from "lib/root/Controls/ITooltipService";
    import { IAction, IFunc1 } from "lib/root/Core/Delegates";
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    import { IFrameRenderer } from "lib/root/Core/FrameRenderer/IFrameRenderer";
    import { IStickyScrollElement } from "lib/root/Core/IStickyScrollElement";
    import { ILogger } from "lib/root/Core/Logger/ILogger";
    import { IProfiler } from "lib/root/Core/Profiler/IProfiler";
    import { IApplicationColorPalette } from "lib/root/IApplicationColorPalette";
    import { IExternalApi } from "lib/root/IExternalApi";
    import { IPreloaderBehavior } from "lib/root/IPreloaderBehavior";
    import { ILocalization } from "lib/root/Localization/ILocalization";
    import { IRenderFactory } from "lib/root/Render/IRenderFactory";
    import { ITextMeasurer } from "lib/root/Render/ITextMeasurer";
    import { IUpdateQueue } from "lib/root/Render/IUpdateQueue";
    export class Application {
        readonly renderFactory: IRenderFactory;
        private static _instance;
        private _showPreloaderDelay;
        private _hidePreloaderDelay;
        private _updateTarget;
        private _stickyScroll;
        private constructor();
        private _skin;
        readonly skin: ISkin;
        private _isLoaded;
        readonly isLoaded: boolean;
        private _isLoading;
        readonly isLoading: boolean;
        private _profiler;
        profiler: IProfiler;
        private _logger;
        logger: ILogger;
        private _frameRenderer;
        frameRenderer: IFrameRenderer;
        private _defaultRenderId;
        defaultRenderId: string;
        private _enableWidgets;
        enableWidgets: boolean;
        private _dataUrl;
        dataUrl: string;
        private _baseApiUrl;
        baseApiUrl: string;
        private _baseHostApiUrl;
        baseHostApiUrl: string;
        createPreloaderBehavior(): IPreloaderBehavior;
        setPreloaderDelays(showDelay: number, hideDelay: number): void;
        private _palette;
        palette: IApplicationColorPalette;
        private _localization;
        readonly localization: ILocalization;
        private _externalApi;
        externalApi: IExternalApi;
        private _overlay;
        readonly overlay: IApplicationOverlay;
        private _textMeasurer;
        readonly textMeasurer: ITextMeasurer;
        private _updateQueue;
        readonly updateQueue: IUpdateQueue;
        private _tooltipService;
        readonly tooltipService: ITooltipService;
        ensureLoaded(action: IAction): void;
        detachControlsWithin(matchParentFn: IFunc1<HTMLElement, boolean>, excludeParentFn?: IFunc1<HTMLElement, boolean>): void;
        load(): void;
        activateStickyScroll(element: IStickyScrollElement, container: JQuery, isHorizontalScrollingEnabled: boolean): void;
        deactivateStickyScroll(): void;
        resetStickyScrollPosition(): void;
        updateStickyScroll(): void;
        runLocalization(): void;
        static readonly current: Application;
        private _loaded;
        readonly loaded: EventHandler;
        private _afterUpdate;
        readonly afterUpdate: EventHandler;
        private _afterLayout;
        readonly afterLayout: EventHandler;
        update(): void;
        private _settings;
        readonly settings: ApplicationSettings;
        private applyDebuggingSettings();
        private render();
        private activateFastClicksForTouchDevices();
    }
}
declare module "lib/root/Core/Quality" {
    export enum Quality {
        Poor = 0,
        Bad = 1,
        NotBad = 2,
        Good = 3,
        Excellent = 4,
    }
}
declare module "lib/root/Core/ColorCategory" {
    import { IColor } from "lib/root/Core/IColor";
    import { Quality } from "lib/root/Core/Quality";
    export class ColorCategory {
        private static _getCategoryColorFunctions;
        static getColorByCategory(category: Quality): IColor;
        static getCategory(categoryValue: number, min: number, max: number): Quality;
        static getColor(value: number, min: number, max: number): IColor;
    }
}
declare module "lib/directives/__controls/colored-number-block/colored-number-block" {
}
declare module "lib/modules/calendar2/controls/calendar/CalendarHelpers" {
    import { IStickyScrollElement } from "lib/root/Core/IStickyScrollElement";
    export class CalendarHelpers {
        static activateStickyScroll(stickyScrollElement: IStickyScrollElement, scope: ng.IScope, elem: ng.IAugmentedJQuery, isHorizontalScrollingEnabled: boolean): void;
    }
}
declare module "lib/root/Angular/ServiceFactory" {
    export class ServiceFactory {
        private static _instance;
        private _angularUtils;
        private _compilation;
        private _application;
        private _notification;
        private _rootScopeService;
        private _localeService;
        private _locationService;
        private _routeParamsService;
        private _qService;
        private _filterService;
        private _httpService;
        private _routeService;
        private _timeoutService;
        constructor();
        static readonly instance: ServiceFactory;
        readonly angularUtils: any;
        readonly compilation: any;
        readonly application: any;
        readonly notification: any;
        readonly rootScopeService: ng.IRootScopeService;
        readonly localeService: ng.ILocaleService;
        readonly locationService: ng.ILocationService;
        readonly routeParamsService: ng.route.IRouteParamsService;
        readonly qService: ng.IQService;
        readonly filterService: ng.IFilterService;
        readonly httpService: ng.IHttpService;
        readonly routeService: ng.route.IRouteService;
        readonly timeoutService: ng.ITimeoutService;
    }
}
declare module "lib/root/Angular/AngularPromise" {
    export class AngularPromise {
        static toAngularPromise<TResult>(promise: Promise<TResult>): ng.IPromise<TResult>;
        static toNativePromise<TResult>(promise: ng.IPromise<TResult>): Promise<TResult>;
    }
}
declare module "lib/root/Angular/TemplateService" {
    export class TemplateService {
        private static _angularReplacements;
        static template(template: string, replacements: any, isXmlSyntax?: boolean): string;
    }
}
declare module "lib/root/Angular/Directive" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/Collections";
    import { IFunction } from "lib/root/Core/Delegates";
    export interface IDirectiveTemplateParameters {
        [name: string]: any;
    }
    export interface IDirectiveApi {
        [name: string]: any;
    }
    export abstract class Directive implements ng.IDirective {
        private _className;
        protected constructor();
        restrict: string;
        readonly terminal: boolean;
        readonly scope: any;
        compile: ng.IDirectiveCompileFn;
        require: any;
        controller: any;
        static register(directiveName: string, inject?: IReadOnlyCollection<string>): void;
        protected abstract getTypeInfo(): any;
        protected abstract getBaseTemplateId(): string;
        protected getTemplateParameters(scope: any, element: ng.IAugmentedJQuery, attrs: any): IDirectiveTemplateParameters;
        protected getApi(scope: any, element: ng.IAugmentedJQuery): IDirectiveApi;
        protected isChildScope(): boolean;
        protected onLink(scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, controller: any, linker: ng.ITranscludeFunction, originalContent: string): void;
        protected readonly templateId: string;
        protected recompile(scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: any): void;
        protected recompileIfChanged(scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: any, getDataFn: (scope: ng.IScope) => any, objectEquality?: boolean): IFunction;
        protected compileFn(templateElement: ng.IAugmentedJQuery, templateAttributes: ng.IAttributes, transclude: ng.ITranscludeFunction): ng.IDirectivePrePost;
        private compileElement(scope, element, attrs);
        private compileAndLink(scope, element, attrs);
    }
}
declare module "lib/root/Core/Task" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/Collections";
    export class Task {
        static whenAll<T>(promises: IReadOnlyCollection<Promise<T>>): Promise<IReadOnlyCollection<T>>;
    }
}
declare module "lib/root/Core/Validator/NumberValidator" {
    export class NumberValidator {
        private static _numberInputRegExp;
        private static _numberRegExpWithoutSpaces;
        private static _numberRegExp;
        private static _integerRegExp;
        isNumber(value: any): boolean;
        isNumberInput(value: any): boolean;
        isRequired(value: any, isRequired: boolean): boolean;
        isInteger(value: any, attrInteger: boolean): boolean;
        isInterval(min: number, max: number, number: number): boolean;
        isMore(min: number, max: number, number: number): boolean;
        isLess(min: number, max: number, number: number): boolean;
        isNonNegative(min: number, max: number, number: number): boolean;
        isPositive(min: number, max: number, number: number): boolean;
        isMaxDecimalPlaces(maxDecimalPlaces: string, number: number): boolean;
    }
}
declare module "lib/root/Controls/Calendar/DataStorage/DataAtom" {
    export class DataAtom {
        private _startTimestampDays;
        private _dataArray;
        constructor(startTimestampDays: number, dataArray: any[]);
        merge(other: DataAtom): boolean;
        hasCompleteData(startTimestampDays: number, daysCount: number): boolean;
        fetchData(startTimestampDays: number, daysCount: number, dataArray: any[], startIndex: number): void;
        deleteData(startTimestampDays: number, daysCount: number): void;
        private static createRange(calendarDataAtom);
        private static copyDataArray(calendarDataAtom, newStartTimestampDays, newDataArray);
    }
}
declare module "lib/root/Controls/Calendar/DataStorage/DataBlock" {
    export class DataBlock {
        private _atoms;
        constructor();
        hasData(startTimestampDays: number, daysCount: number): boolean;
        getData(startTimestampDays: number, dataArray: any[], startIndex: number, daysCount: number): void;
        putData(startTimestampDays: number, dataArray: any[]): void;
        deleteData(startTimestampDays: number, daysCount: number): void;
        private findAtomHavingData(startTimestampDays, daysCount);
    }
}
declare module "lib/root/Controls/Calendar/DataStorage/Models/DimensionCalendar/IData" {
    export interface IData {
        redefinition: boolean;
        value: string;
    }
}
declare module "lib/root/Controls/Calendar/DataStorage/Models/DimensionCalendar/IDatePeriodDto" {
    export interface IDatePeriodDto {
        startDate: number;
        daysCount: number;
    }
}
declare module "lib/root/Controls/Calendar/DataStorage/Models/DimensionCalendar/IDataRequestDto" {
    import { IDataBlockKey } from "lib/root/Controls/Calendar/DataStorage/Models/DimensionCalendar/IDataBlockDto";
    import { IDatePeriodDto } from "lib/root/Controls/Calendar/DataStorage/Models/DimensionCalendar/IDatePeriodDto";
    export interface IDataRequestDto {
        datePeriods: IDatePeriodDto[];
        dimensionPoints: IDataBlockKey[];
        data: any[];
    }
}
declare module "lib/root/Controls/Calendar/DataStorage/Models/DimensionCalendar/IResponseDataDto" {
    import { IDataBlockDto } from "lib/root/Controls/Calendar/DataStorage/Models/DimensionCalendar/IDataBlockDto";
    import { IDimensionDataDto } from "lib/root/Controls/Calendar/DataStorage/Models/DimensionCalendar/IDimensionDataDto";
    export interface IResponseDataDto {
        calendarData: IDataBlockDto[];
        dimensionData: IDimensionDataDto;
    }
}
declare module "lib/root/Controls/Calendar/DataStorage/CalendarData" {
    import { CalendarDatePeriod } from "lib/root/Controls/Calendar/CalendarDatePeriod";
    import { DateTime } from "lib/root/Core/DateTime";
    import { DimensionData } from "lib/root/Controls/Calendar/DataStorage/DimensionData";
    import { IDataBlockKey } from "lib/root/Controls/Calendar/DataStorage/Models/DimensionCalendar/IDataBlockDto";
    import { IDataRequestDto } from "lib/root/Controls/Calendar/DataStorage/Models/DimensionCalendar/IDataRequestDto";
    export class LoaderCallbacks {
        private _silent;
        silent: boolean;
        hidePreloader(withoutScrolling?: boolean): void;
        notifyDataLoadError(): void;
        notifyDataSaveError(): void;
        notifyDataSaveSuccess(): void;
        showPreloader(): void;
        private callExternalApi(callIfSilent, action);
    }
    export class CalendarData {
        private _dimensionData;
        private _blocks;
        readonly loaderCallbacks: LoaderCallbacks;
        readonly dimensionData: DimensionData;
        private _path;
        path: string;
        clear(preserveMeasureSelections?: boolean): void;
        clearBlocks(): void;
        getData(startDate: DateTime, daysCount: number): Promise<any[]>;
        onDimensionDataLoaded: (dimensionData: DimensionData) => void;
        getDataForKeys(startTimestampDays: number, daysCount: number, dataBlockKeys: IDataBlockKey[]): Promise<any[]>;
        putData(data: any[], dataBlockKeys: IDataBlockKey[], datePeriods: CalendarDatePeriod[]): Promise<IDataRequestDto>;
        deleteData(dataBlockKeys: IDataBlockKey[], datePeriods: CalendarDatePeriod[]): Promise<IDataRequestDto>;
        private modifyData(data, dataBlockKeys, datePeriods, httpMethod, onSuccess);
        private getStoredData(dataBlockKeys, startTimestampDays, daysCount);
        private storeSavedData(data);
        private loadData(dataBlockKeys, startTimestampDays, daysCount);
        private findDataBlock(dataBlockKey);
        private getExistingDataBlockOrCreate(dataBlockKey);
        private static getDataBlockKeyString(key);
        private static getQueryParams(dataBlockKeys);
    }
}
declare module "lib/root/ServerControls/DimensionTableData" {
    import { DimensionData } from "lib/root/Controls/Calendar/DataStorage/DimensionData";
    import { Measure } from "lib/root/Controls/Calendar/DataStorage/Measure";
    import { IDataBlockKey } from "lib/root/Controls/Calendar/DataStorage/Models/DimensionCalendar/IDataBlockDto";
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { ITreeNodeReadOnlyCollection } from "lib/root/Core/Collections/ITreeNodeReadOnlyCollection";
    import { DateTime } from "lib/root/Core/DateTime";
    export class DimensionTableData {
        private _calendarData;
        private _date;
        readonly date: DateTime;
        path: string;
        readonly dimensionData: DimensionData;
        private _keys;
        readonly keys: IReadOnlyCollection<IDataBlockKey>;
        private _values;
        readonly values: IReadOnlyCollection<number>;
        private _topMeasures;
        readonly topMeasures: ITreeNodeReadOnlyCollection<Measure>;
        private _leftMeasures;
        readonly leftMeasures: ITreeNodeReadOnlyCollection<Measure>;
        save(values: IReadOnlyCollection<number>): Promise<void>;
        static load(path: string, date: DateTime): Promise<DimensionTableData>;
        static parseValue(value: string): number;
        private findActiveDimension(id);
        private getAvailableMeasures(dimensions);
        private init(path, date);
        private static getKeys(measures);
    }
}
declare module "lib/root/ServerControls/MeasureInfo" {
    import { Control, Text } from "lib/root/Controls/index";
    import { Measure } from "lib/root/Controls/Calendar/DataStorage/Measure";
    export class MeasureInfo extends Control {
        readonly text: Text;
        constructor(measure: Measure, multiline: boolean);
    }
}
declare module "lib/root/ServerControls/Skins/DimensionTableSkin" {
    import { Skin } from "lib/root/Controls/Skins/Default/Skin";
    import { DimensionTable } from "lib/root/ServerControls/DimensionTable";
    export class DimensionTableSkin {
        private static readonly _leftColumnMaxWidth;
        private static readonly _leftColumnPadding;
        apply(skin: Skin, dimensionTable: DimensionTable): void;
    }
}
declare module "lib/root/ServerControls/DimensionTable" {
    import { Alert, Control, IControl, PivotTable } from "lib/root/Controls/index";
    import { DateTime } from "lib/root/Core/DateTime";
    import { IBoolean } from "lib/root/Core/Primitives/index";
    export class DimensionTable extends Control {
        private readonly _numberValidator;
        private readonly _maxEditorLength;
        private _newData;
        private _oldData;
        private _dimensionTableSkin;
        constructor();
        readonly tableDataIncompleteAlert: Alert;
        readonly showTableDataIncompleteAlert: IBoolean;
        readonly pivotTable: PivotTable;
        readonly container: IControl;
        private _needSave;
        readonly needSave: Readonly<IBoolean>;
        load(path: string, newDate: DateTime, oldDate?: DateTime): Promise<void>;
        reload(): Promise<void>;
        save(path?: string): Promise<void>;
        private createOverrideValueTooltip(value);
        private everyCellIsFilled();
        private finishEdit(cell);
        private getAllEditorTexts();
        private getAllEditorValues();
        private getCellValue(data, cell);
        private getDataIndex(cell);
        private render();
        private renderCells();
        private updateEditorState(cell, value);
        private validate(editor, oldText, newText);
        private static createHeaderNodes(measures, multiline);
        private static createHtmlTooltip(text, localizationParameters);
    }
}
declare module "lib/root/ServerControls/index" {
    export { DimensionTable } from "lib/root/ServerControls/DimensionTable";
}
declare module "lib/directives/__controls/dimension-table/DimensionTable" {
    import { Directive } from "lib/root/Angular/Directive";
    import { DimensionTable as DimensionTableControl } from "lib/root/ServerControls/index";
    export interface IDimensionTableScope extends ng.IScope {
        dimensionTable: DimensionTableControl;
    }
    export class DimensionTable extends Directive {
        protected getApi(scope: IDimensionTableScope): tlui.IDimensionTableInstance;
        protected getBaseTemplateId(): string;
        protected getTypeInfo(): any;
        protected onLink(scope: IDimensionTableScope, element: ng.IAugmentedJQuery): void;
        private getDate(date);
    }
}
declare module "lib/directives/__controls/ErrorPage/ErrorPage" {
    import { Directive } from "lib/root/Angular/Directive";
    export class ErrorPage extends Directive {
        protected getTypeInfo(): any;
        protected getBaseTemplateId(): string;
        protected onLink(scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, controller: any, linker: ng.ITranscludeFunction): void;
    }
}
declare module "lib/directives/__controls/fields-visibility/IFieldsVisibilityItem" {
    export interface IFieldsVisibilityItem {
        name: string;
        value: boolean;
        defaultValue?: boolean;
        isVisible?: {
            (): boolean;
        };
    }
}
declare module "lib/directives/__controls/fields-visibility/IFieldsVisibilityGroup" {
    import { IFieldsVisibilityItem } from "lib/directives/__controls/fields-visibility/IFieldsVisibilityItem";
    export interface IFieldsVisibilityGroup {
        name: string;
        items: IFieldsVisibilityItem[];
    }
}
declare module "lib/directives/__controls/fields-visibility/FieldsVisibility" {
    import { Directive, IDirectiveApi } from "lib/root/Angular/Directive";
    export class FieldsVisibility extends Directive {
        protected getTypeInfo(): any;
        protected getBaseTemplateId(): string;
        protected getApi(scope: any, element: ng.IAugmentedJQuery): IDirectiveApi;
        protected onLink(scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, controller: any, linker: ng.ITranscludeFunction): void;
        private static forAllItems(groups, fn);
        private static reset(model);
        private static isDefaultValue(model);
        private static init(scope);
    }
}
declare module "lib/root/Core/BinaryString" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { IComparable } from "lib/root/Core/IComparable";
    export interface IBinaryStringObjectValue {
        [string: string]: boolean;
    }
    export class BinaryString implements IComparable<BinaryString> {
        readonly length: number;
        private _value;
        constructor(stringValue: string, length?: number);
        equals(value: BinaryString): boolean;
        toObject(keys: IReadOnlyCollection<string>): IBinaryStringObjectValue;
        toString(): string;
        static fromObject(obj: IBinaryStringObjectValue, keys: IReadOnlyCollection<string>): BinaryString;
        static objectToString(obj: IBinaryStringObjectValue, keys: IReadOnlyCollection<string>): string;
        static stringToObject(stringValue: string, keys: IReadOnlyCollection<string>): IBinaryStringObjectValue;
    }
}
declare module "lib/root/Entity/ListHeader/IFieldsVisibilityButtonConfig" {
    export interface IFieldsVisibilityButtonConfig {
        fields: string[];
        fieldNames: {
            [id: string]: string;
        };
        value: string;
        defaultValue: string;
        hiddenFields: {
            [id: string]: boolean;
        };
    }
}
declare module "lib/directives/__controls/fields-visibility-button/IFieldsVisibilityItemWithId" {
    import { IFieldsVisibilityItem } from "lib/directives/__controls/fields-visibility/IFieldsVisibilityItem";
    export interface IFieldsVisibilityItemWithId extends IFieldsVisibilityItem {
        id: string;
    }
}
declare module "lib/directives/__controls/fields-visibility-button/FieldsVisibilityButton" {
    import { Directive, IDirectiveApi } from "lib/root/Angular/Directive";
    export class FieldsVisibilityButton extends Directive {
        protected getTypeInfo(): any;
        protected getBaseTemplateId(): string;
        protected getApi(scope: any, element: ng.IAugmentedJQuery): IDirectiveApi;
        protected onLink(scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, controller: any, linker: ng.ITranscludeFunction): void;
    }
}
declare module "lib/directives/__controls/filters/filters" {
    import { Directive, IDirectiveApi } from "lib/root/Angular/Directive";
    export class Filters extends Directive {
        protected getApi(scope: any, element: ng.IAugmentedJQuery): IDirectiveApi;
        protected getBaseTemplateId(): string;
        protected getTypeInfo(): any;
        protected onLink(scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, controller: any, linker: ng.ITranscludeFunction): void;
        private static resetItemValueToDefault(item);
        private static isDefaultValue(item);
        private static isDefaultValues(items?);
        private static resetAll(items?);
    }
}
declare module "lib/root/Core/Html" {
    export interface IRemoveTagsAndGetTextIndexInHtmlResult {
        text: string;
        htmlIndex: number;
    }
    export class Html {
        static closeTags(html: string): string;
        static lineBreaksToBr(value: string): string;
        static removeTagsAndGetTextIndexInHtml(html: string, textIndex: number): IRemoveTagsAndGetTextIndexInHtmlResult;
    }
}
declare module "lib/directives/__controls/inline-cut/inline-cut" {
}
declare module "lib/root/Core/LanguageService" {
    export interface IStringDictionary {
        [code: string]: string;
    }
    export class LanguageService {
        private static _instance;
        private _languageCodeNativeNames;
        private _languageCodeCountryCodes;
        static readonly instance: LanguageService;
        getNativeName(cultureName: string): string;
        getCountryCode(cultureName: string): string;
        getLanguageCode(cultureName: string): string;
    }
}
declare module "lib/directives/__controls/language-selector/language-info" {
}
declare module "lib/directives/__controls/language-selector/language-selector" {
}
declare module "lib/directives/__controls/pagination/pagination" {
}
declare module "lib/directives/__controls/price/price" {
    import { Directive } from "lib/root/Angular/Directive";
    export class Price extends Directive {
        constructor();
        protected getTypeInfo(): any;
        protected getBaseTemplateId(): string;
        protected onLink(scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, controller: any, linker: ng.ITranscludeFunction): void;
    }
}
declare module "lib/directives/__controls/rating/rating" {
}
declare module "lib/directives/__controls/search/search" {
    import { Directive } from "lib/root/Angular/Directive";
    export class Search extends Directive {
        constructor();
        protected getTypeInfo(): any;
        protected getBaseTemplateId(): string;
        protected onLink(scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, controller: any, linker: ng.ITranscludeFunction): void;
    }
}
declare module "lib/directives/__controls/sorting/sorting" {
}
declare module "lib/directives/__controls/tabs/ControlTabs" {
    import { Directive } from "lib/root/Angular/Directive";
    export interface ITabItem extends tlui.ITabItem {
    }
    export interface IControlTabsDirectiveScope extends ng.IScope {
        items: ITabItem[];
        onActivateItem(item: {
            $item: ITabItem;
        }): void;
        onItemLinkClick(event: MouseEvent, item: ITabItem): void;
    }
    export class ControlTabsDirective extends Directive {
        protected getTypeInfo(): any;
        protected getBaseTemplateId(): string;
        protected getApi(scope: IControlTabsDirectiveScope, element: ng.IAugmentedJQuery): tlui.IControlTabApi;
        protected onLink(scope: IControlTabsDirectiveScope): void;
        private static activateItem(item, scope);
        private static getActiveItem(scope);
        private static safeSelectElement(selector);
        private static activateSingleDomElement(element);
        private static makeSingleElementWithClass(element, className);
        private static makeSingleItemActive(item, items);
    }
}
declare module "lib/directives/__controls/unread-indicator/unread-indicator" {
    import { Directive } from "lib/root/Angular/Directive";
    export class UnreadIndicator extends Directive {
        constructor();
        protected getTypeInfo(): any;
        protected getBaseTemplateId(): string;
        protected onLink(scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, controller: any, linker: ng.ITranscludeFunction): void;
    }
}
declare module "lib/directives/__controls/view-mode-button/ViewModeButton" {
    import { Directive, IDirectiveTemplateParameters } from "lib/root/Angular/Directive";
    export class ViewModeButton extends Directive {
        protected getTypeInfo(): any;
        protected getTemplateParameters(scope: any, element: ng.IAugmentedJQuery): IDirectiveTemplateParameters;
        protected getBaseTemplateId(): string;
        protected onLink(scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, controller: any, linker: ng.ITranscludeFunction): void;
    }
}
declare module "lib/root/Angular/Decorators/AngularService" {
    import { IFunc2 } from "lib/root/Core/Delegates";
    export const angularService: IFunc2<string, string, ClassDecorator>;
}
declare module "lib/root/Angular/Decorators/AngularProvider" {
    import { IFunc2 } from "lib/root/Core/Delegates";
    export const angularProvider: IFunc2<string, string, ClassDecorator>;
}
declare module "lib/root/Angular/Decorators/index" {
    export * from "lib/root/Angular/Decorators/AngularService";
    export * from "lib/root/Angular/Decorators/AngularProvider";
}
declare module "lib/directives/__custom-angular/ng-view/services/location-history-service" {
    export class LocationHistoryService {
        private _currentUrl;
        constructor($rootScope: ng.IRootScopeService, $location: ng.ILocationService);
        static readonly $inject: string[];
        private _previousUrl;
        readonly previousUrl: string;
    }
}
declare module "lib/directives/__custom-angular/ng-view/ViewCache/IView" {
    import { ViewData } from "lib/directives/__custom-angular/ng-view/ViewCache/index";
    export interface IView {
        readonly element: ng.IRootElementService;
        readonly data: ViewData;
        readonly scope: ng.IScope;
        destroy(): boolean;
    }
}
declare module "lib/directives/__custom-angular/ng-view/ViewCache/View" {
    import { IView, ViewData } from "lib/directives/__custom-angular/ng-view/ViewCache/index";
    export class View implements IView {
        constructor(element: ng.IRootElementService, scope: ng.IScope, data: ViewData);
        readonly data: ViewData;
        private _element;
        readonly element: ng.IRootElementService;
        private _scope;
        readonly scope: ng.IScope;
        destroy(): boolean;
    }
}
declare module "lib/directives/__custom-angular/ng-view/ViewCache/IViewCache" {
    import { IView, ViewData } from "lib/directives/__custom-angular/ng-view/ViewCache/index";
    import { IFunc1 } from "lib/root/Core/Delegates";
    export interface IViewCache extends tlui.ITLViewCacheProvider, tlui.ITLViewCacheService {
        enableCache(getUrlKey: IFunc1<string, string>): void;
        getView(url: string): IView;
        invalidateAll(): void;
        isEnabledForUrl(url: string): boolean;
        tryAdd(url: string, element: ng.IRootElementService, scope: ng.IScope, viewData: ViewData): IView;
    }
}
declare module "lib/directives/__custom-angular/ng-view/ViewCache/ViewCache" {
    import { IView, IViewCache, ViewData } from "lib/directives/__custom-angular/ng-view/ViewCache/index";
    import { IFunc1 } from "lib/root/Core/Delegates";
    export class ViewCache implements IViewCache {
        private readonly _views;
        private readonly _urlKeys;
        private _getUrlKeyCustom;
        addUrlKey(urlKey: string): void;
        enableCache(getUrlKey: IFunc1<string, string>): void;
        getView(url: string): IView;
        invalidate(urlKey: string): void;
        invalidateAll(): void;
        isEnabledForUrl(url: string): boolean;
        tryAdd(url: string, element: ng.IRootElementService, scope: ng.IScope, viewData: ViewData): IView;
        private getUrlKey(url);
    }
}
declare module "lib/directives/__custom-angular/ng-view/ViewCache/ViewData" {
    export class ViewData {
        constructor(menuId: string, pageTitle: string, pageSubtitle: string);
        readonly menuId: string;
        readonly pageSubtitle: string;
        readonly pageTitle: string;
    }
}
declare module "lib/directives/__custom-angular/ng-view/ViewCache/index" {
    export * from "lib/directives/__custom-angular/ng-view/ViewCache/IView";
    export * from "lib/directives/__custom-angular/ng-view/ViewCache/View";
    export * from "lib/directives/__custom-angular/ng-view/ViewCache/IViewCache";
    export * from "lib/directives/__custom-angular/ng-view/ViewCache/ViewCache";
    export * from "lib/directives/__custom-angular/ng-view/ViewCache/ViewData";
}
declare module "lib/directives/__custom-angular/ng-view/ng-view-factory" {
}
declare module "lib/root/Angular/AngularModel" {
    import { Control } from "lib/root/Controls/index";
    import { IAction1, IFunc } from "lib/root/Core/Delegates";
    import { IEventHandler } from "lib/root/Core/Events/IEventHandler";
    export class AngularModel {
        static bindControlToNgModel<TControlValueType, TEventType>(control: Control, ngModel: ng.INgModelController, element: ng.IAugmentedJQuery, changeControlValueHandler: IEventHandler<TEventType>, setControlValue: IAction1<TControlValueType>, getControlValue: IFunc<TControlValueType>, scope: ng.IScope): void;
        private static fixValue(value);
    }
}
declare module "lib/directives/color-picker/color-picker" {
    import { Directive } from "lib/root/Angular/Directive";
    export class ColorPicker extends Directive {
        constructor();
        protected getBaseTemplateId(): string;
        protected getTypeInfo(): any;
        protected onLink(scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, controller: any, linker: ng.ITranscludeFunction): void;
    }
}
declare module "lib/root/Core/Clipboard" {
    export class Clipboard {
        static copyText(text: string): void;
    }
}
declare module "lib/directives/copy-to-clipboard/copy-to-clipboard" {
}
declare module "lib/directives/footer/footer" {
    import { Directive } from "lib/root/Angular/Directive";
    export class Footer extends Directive {
        protected getTypeInfo(): any;
        protected getBaseTemplateId(): string;
        protected onLink(scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, controller: any, linker: ng.ITranscludeFunction): void;
    }
}
declare module "lib/directives/grid-select/grid-select" {
    import { Directive } from "lib/root/Angular/Directive";
    export class GridSelect extends Directive {
        private static readonly _gridSelectWidth;
        constructor();
        protected getBaseTemplateId(): string;
        protected getTypeInfo(): any;
        protected onLink(scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, controller: any, linker: ng.ITranscludeFunction): void;
    }
}
declare module "lib/directives/icon/IconControl" {
    import { IColor } from "lib/root/Core/IColor";
    export class IconControl {
        private _name;
        private _size;
        private _svg;
        private _use;
        private _htmlElement;
        private static _svgNamespace;
        private static _xlinkNamespace;
        constructor();
        attach(htmlElement: HTMLElement): void;
        name: string;
        size: number;
        private _color;
        color: IColor;
        private doDirtyInternetExplorerHack();
    }
}
declare module "lib/directives/icon/Icon" {
    import { Directive } from "lib/root/Angular/Directive";
    export class IconDirective extends Directive {
        private static _defaultSize;
        protected getTypeInfo(): any;
        protected getBaseTemplateId(): string;
        protected onLink(scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, controller: any, linker: ng.ITranscludeFunction): void;
    }
}
declare module "lib/directives/list/__field-render/__simple/is-unread/list-item-field-is-unread" {
}
declare module "lib/directives/list/__field-render/__simple/parameter/ListItemFieldParameter" {
    export class ListItemFieldParameter {
        static getFormattedValueExpression(itemScope: any, valueParam: string, typeStr: string, formatStr: string, localizationParametersParam?: string): string;
        private static formatDate(value, dateFormat);
        private static formatDatePeriod(value, dateFormat);
        private static formatLink(value, length);
        private static formatTime(value, timeFormat);
        private static getValueOrDash(value, formattedValue);
        private static localizeValue(value, localizationParameters);
    }
}
declare module "lib/directives/list/__field-render/__simple/parameter/list-item-field-parameter" {
}
declare module "lib/directives/list/__field-render/__statistics/summary-info/list-item-field-statistics-summary-info" {
}
declare module "lib/root/Angular/IAngularScopeVariables" {
    export interface IAngularScopeVariables {
        [variableName: string]: any;
    }
}
declare module "lib/root/Angular/AngularEvaluator" {
    import { IAction, IAction2, IFunc } from "lib/root/Core/Delegates";
    import { AngularScope } from "lib/root/Angular/AngularScope";
    import { IAngularScopeVariables } from "lib/root/Angular/IAngularScopeVariables";
    export class AngularEvaluator<TValue> {
        private _expression;
        private _evaluationFunction;
        private _typeToCastTo;
        private _isInterpolate;
        constructor(expressionOrEvaluationFunction: string | IFunc<TValue>, typeToCastTo?: string, isInterpolate?: boolean, isObjectEquality?: boolean);
        private _isObjectEquality;
        readonly isDeepEquality: boolean;
        evaluate(scope: AngularScope, variables?: IAngularScopeVariables): TValue;
        assign(scope: AngularScope, value: TValue): TValue;
        watchExcludeFirstChange(scope: AngularScope, onChange: IAction2<TValue, TValue>): IAction;
    }
}
declare module "lib/root/Angular/Watcher/AngularWatcher" {
    import { IAction, IAction1, IFunc1, IMap } from "lib/root/Core/Delegates";
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    import { IChangeable } from "lib/root/Core/Primitives/IChangeable";
    import { IObject } from "lib/root/Core/Primitives/IObject";
    import { AngularEvaluator } from "lib/root/Angular/AngularEvaluator";
    import { AngularScope } from "lib/root/Angular/AngularScope";
    export class AngularWatcher<TEvaluationResultValue, TValue> implements IChangeable, IObject<TValue> {
        private _evaluator;
        private _scope;
        private _modifier;
        private _defaultValue;
        constructor(evaluator: AngularEvaluator<TEvaluationResultValue>, scope: AngularScope, modifier?: IFunc1<TEvaluationResultValue, TValue>, defaultValue?: TValue);
        private _value;
        value: TValue;
        private readonly _change;
        readonly change: EventHandler;
        bind(object: IObject<TValue>, map: IMap<TValue, TValue>): IAction;
        bindTo(target: IAction1<TValue>): IAction;
        onChange(action: IAction, runAction?: boolean): IAction;
        setValue(value: TValue, listener: IAction): void;
        private updateValue(value);
    }
}
declare module "lib/root/Angular/AngularScope" {
    import { IAction, IFunc, IMap } from "lib/root/Core/Delegates";
    import { IBoolean, IObject, IString, XObject } from "lib/root/Core/Primitives/index";
    export class AngularScope {
        private readonly _scope;
        constructor(scope: any);
        createBooleanWatcher(expression: string, defaultValue?: boolean): IBoolean;
        createStringWatcher(expression: string | IFunc<string>, defaultValue?: string): IString;
        createWatcher<TValue>(expression: string | IFunc<TValue>, defaultValue?: TValue, modifier?: IMap<any, TValue>): IObject<TValue>;
        getExpressionValueWithItem(expression: string, dataItem?: any, type?: string, isInterpolate?: boolean, assignTo?: any, isPredefinedItemName?: boolean): any;
        eval(expression: string, isInterpolate?: boolean, variables?: {
            [key: string]: any;
        }): any;
        assign(expression: string, value: any, variables?: {
            [key: string]: any;
        }): any;
        assignNew(expression: string, value: any): any;
        watch(expression: string | IFunc<any>, action: (value: any, oldValue: any) => void, isDeepEquality?: boolean): IAction;
        watchExcludeFirstChange(expression: string | IFunc<any>, action: (value: any, oldValue: any) => void, isObjectEquality?: boolean): IAction;
        runInDigest(fn: IAction): void;
        createChild(isIsolated: boolean): AngularScope;
        private _itemVariableName;
        itemVariableName: string;
        destroy(): void;
        static bindEvaluated<TValue>(scope: ng.IScope, object: XObject<TValue>, expression: string): void;
    }
}
declare module "lib/root/Angular/Preloader/Preloader" {
    import { XBoolean } from "lib/root/Core/Primitives/XBoolean";
    export class Preloader {
        private _parentScope;
        private _element;
        private _compiledPreloader;
        private _isAttached;
        private _preloaderBehavior;
        constructor(parentScope: ng.IScope, element: HTMLElement);
        private _isActive;
        readonly isActive: XBoolean;
        private _isTopPosition;
        readonly isTopPosition: XBoolean;
        private togglePreloader();
        private update();
        private updatePreloaderInDom();
    }
}
declare module "lib/directives/preloader/preloader" {
}
declare module "lib/root/Data/TopPanel/ILanguage" {
    import { IDataTransferObject } from "lib/root/Data/IDataTransferObject";
    export interface ILanguage extends IDataTransferObject {
        selectedLanguage: string;
        languages: string[];
    }
}
declare module "lib/root/Data/TopPanel/IMenuItem" {
    import { IDataTransferObject } from "lib/root/Data/IDataTransferObject";
    export interface IMenuItem extends IDataTransferObject {
        label: string;
        href: string;
        subMenu: IMenuItem[];
    }
}
declare module "lib/root/Data/TopPanel/IMessage" {
    import { IDataTransferObject } from "lib/root/Data/IDataTransferObject";
    export interface IMessage extends IDataTransferObject {
        id: string;
        date: string;
        text: string;
        isClosed: boolean;
        dateString: string;
    }
}
declare module "lib/root/Data/TopPanel/IUserInfo" {
    import { IDataTransferObject } from "lib/root/Data/IDataTransferObject";
    export interface IUserInfo extends IDataTransferObject {
        name: string;
        email: string;
    }
}
declare module "lib/root/Data/TopPanel/ITopPanel" {
    import { IDataTransferObject } from "lib/root/Data/IDataTransferObject";
    import { ILanguage } from "lib/root/Data/TopPanel/ILanguage";
    import { IMenuItem } from "lib/root/Data/TopPanel/IMenuItem";
    import { IMessage } from "lib/root/Data/TopPanel/IMessage";
    import { IUserInfo } from "lib/root/Data/TopPanel/IUserInfo";
    export interface ITopPanel extends IDataTransferObject {
        menu: IMenuItem[];
        userInfo: IUserInfo;
        language: ILanguage;
        updatesLink: string;
        message: IMessage[];
    }
}
declare module "lib/root/Data/TopPanel/TopPanelProvider" {
    import { IMessage } from "lib/root/Data/TopPanel/IMessage";
    import { ITopPanel } from "lib/root/Data/TopPanel/ITopPanel";
    export class TopPanelProvider {
        private static _instance;
        static readonly instance: TopPanelProvider;
        topPanel(): Promise<ITopPanel>;
        updateIsClosedMessage(id: string, value: boolean): Promise<IMessage[]>;
    }
}
declare module "lib/directives/top-panel/top-panel" {
    import { IFunction } from "lib/root/Core/Delegates";
    import { IMenuItem } from "lib/root/Data/TopPanel/IMenuItem";
    export interface ITopPanelScope extends ng.IScope {
        popupInstance: any;
        controlData: any;
        menu: IMenuItem[];
        login: string;
        email: string;
        selectedLanguage: string;
        languages: string[];
        closeMessage: IFunction;
        message: any[];
        updatesLink: string;
        enabled: boolean;
    }
}
declare module "lib/directives/watch-wrapping/watch-wrapping" {
}
declare module "lib/filters/cut-filter" {
}
declare module "lib/filters/escape-html-entities" {
}
declare module "lib/filters/format-date-filter" {
}
declare module "lib/filters/format-date-period-filter" {
}
declare module "lib/filters/format-float-filter" {
}
declare module "lib/filters/format-price-filter" {
}
declare module "lib/filters/format-time-filter" {
}
declare module "lib/filters/sanitize" {
}
declare module "lib/filters/timezone-date-filter" {
}
declare module "lib/filters/timezone-filter" {
}
declare module "lib/filters/unescape-html-entities" {
}
declare module "lib/root/Controls/DimensionCalendar/DimensionCalendar" {
    import { Control } from "lib/root/Controls/index";
    import { CalendarData } from "lib/root/Controls/Calendar/DataStorage/CalendarData";
    import { DimensionData } from "lib/root/Controls/Calendar/DataStorage/DimensionData";
    import { MonthCalendar } from "lib/root/Controls/DimensionCalendar/MonthCalendar";
    export class DimensionCalendar extends Control {
        private _calendar;
        private _data;
        private _enableAdvancedConfiguration;
        constructor();
        readonly data: CalendarData;
        readonly calendar: MonthCalendar;
        startYear: number;
        readonly dimensionData: DimensionData;
        reload(): void;
        path: string;
        readonly enableAdvancedConfiguration: boolean;
        redrawGrid(): void;
        redraw(redrawHeader?: boolean): Promise<any[]>;
        updateCells(data: string[]): void;
        private renderGrid(gridData);
        private getMeasureData(measureIndex, gridData);
    }
}
declare module "lib/modules/calendar2/controls/calendar/CalendarDirective" {
    import { Directive } from "lib/root/Angular/Directive";
    export abstract class CalendarDirective extends Directive {
        protected getBaseTemplateId(): string;
    }
}
declare module "lib/modules/calendar2/controls/calendar/Calendar2" {
    import { IDirectiveApi } from "lib/root/Angular/Directive";
    import { CalendarDirective } from "lib/modules/calendar2/controls/calendar/CalendarDirective";
    export class Calendar2 extends CalendarDirective {
        private _calendar;
        protected onLink(scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, controller: any, linker: ng.ITranscludeFunction): void;
        protected getTypeInfo(): any;
        protected getApi(): IDirectiveApi;
    }
}
declare module "lib/modules/calendar2/controls/calendar/CalendarDimensionConfigurator" {
    import { IDirectiveTemplateParameters } from "lib/root/Angular/Directive";
    import { CalendarDirective } from "lib/modules/calendar2/controls/calendar/CalendarDirective";
    export class CalendarDimensionConfigurator extends CalendarDirective {
        protected getTypeInfo(): any;
        protected getTemplateParameters(scope: any, element: ng.IAugmentedJQuery): IDirectiveTemplateParameters;
    }
}
declare module "lib/modules/calendar2/controls/calendar/CalendarDimensionSelector" {
    import { CalendarDirective } from "lib/modules/calendar2/controls/calendar/CalendarDirective";
    export class CalendarDimensionSelector extends CalendarDirective {
        protected getTypeInfo(): any;
    }
}
declare module "lib/modules/calendar2/controls/calendar/CalendarDimensionSettings" {
    import { CalendarDirective } from "lib/modules/calendar2/controls/calendar/CalendarDirective";
    export class CalendarDimensionSettings extends CalendarDirective {
        protected onLink(scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, controller: any, linker: ng.ITranscludeFunction): void;
        protected getTypeInfo(): any;
    }
}
declare module "lib/modules/calendar2/controls/calendar/CalendarEditDialog" {
    import { DimensionCalendar } from "lib/root/Controls/DimensionCalendar/DimensionCalendar";
    export class CalendarEditDialog {
        private _dimensionCalendar;
        private _scope;
        private _tabOneCategory;
        private _tabGroupOperation;
        constructor(calendar: DimensionCalendar);
        destroy(): void;
        show(): void;
        private isGroupOperation();
        private loadData();
        private loadDataIntoScope();
        private saveData();
        private setDataBlockKeys(value, index, dataBlockKeys, allDataBlockKeys, data);
    }
}
declare module "lib/modules/calendar2/controls/calendar/CalendarEditDialogSettings" {
    import { CalendarDirective } from "lib/modules/calendar2/controls/calendar/CalendarDirective";
    export class CalendarEditDialogSettings extends CalendarDirective {
        protected getTypeInfo(): any;
    }
}
declare module "lib/modules/calendar2/controls/calendar/CalendarEditorLayout" {
    import { IDirectiveApi } from "lib/root/Angular/Directive";
    import { CalendarDirective } from "lib/modules/calendar2/controls/calendar/CalendarDirective";
    export class CalendarEditorLayout extends CalendarDirective {
        protected onLink(scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, controller: any, linker: ng.ITranscludeFunction): void;
        protected getApi(scope: any, element: ng.IAugmentedJQuery): IDirectiveApi;
        protected getTypeInfo(): any;
        private getDataIndex(scope, firstDimensionMeasureIndex, secondDimensionMeasureIndex);
        private getDataTypeInfo(scope, firstDimensionMeasureIndex, secondDimensionMeasureIndex);
        private getFirstColumnWidth(element);
    }
}
declare module "lib/modules/calendar2/controls/calendar/CalendarEditorLayoutSelector" {
    import { CalendarDirective } from "lib/modules/calendar2/controls/calendar/CalendarDirective";
    export class CalendarEditorLayoutSelector extends CalendarDirective {
        protected onLink(scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, controller: any, linker: ng.ITranscludeFunction): void;
        protected getTypeInfo(): any;
    }
}
declare module "lib/modules/calendar2/controls/calendar/CalendarMeasureName" {
    import { CalendarDirective } from "lib/modules/calendar2/controls/calendar/CalendarDirective";
    export class CalendarMeasureName extends CalendarDirective {
        protected getTypeInfo(): any;
    }
}
declare module "lib/modules/calendar2/controls/calendar/CalendarModeSelector" {
    import { CalendarDirective } from "lib/modules/calendar2/controls/calendar/CalendarDirective";
    export class CalendarModeSelector extends CalendarDirective {
        protected onLink(scope: any): void;
        protected getTypeInfo(): any;
    }
}
declare module "lib/modules/calendar2/controls/calendar/CalendarSettings" {
    import { CalendarDirective } from "lib/modules/calendar2/controls/calendar/CalendarDirective";
    export class CalendarSettings extends CalendarDirective {
        protected getTypeInfo(): any;
    }
}
declare module "lib/modules/calendar2/controls/calendar/CalendarToolbar" {
    import { DimensionCalendar } from "lib/root/Controls/DimensionCalendar/DimensionCalendar";
    import { CalendarDirective } from "lib/modules/calendar2/controls/calendar/CalendarDirective";
    export interface ICalendarToolbarScope extends ng.IScope {
        calendar: DimensionCalendar;
    }
    export class CalendarToolbar extends CalendarDirective {
        protected onLink(scope: ICalendarToolbarScope): void;
        protected getTypeInfo(): any;
    }
}
declare module "lib/modules/calendar2/controls/calendar/CalendarValueEditor" {
    import { CalendarDirective } from "lib/modules/calendar2/controls/calendar/CalendarDirective";
    export class CalendarValueEditor extends CalendarDirective {
        constructor();
        protected onLink(scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, controller: any): void;
        protected getTypeInfo(): any;
        private static parseFloatModel(value);
    }
}
declare module "lib/modules/calendar2/controls/calendar/Corner" {
    import { Control } from "lib/root/Controls/Control";
    export class Corner extends Control {
        constructor(scope: ng.IScope);
    }
}
declare module "lib/modules/calendar2/controls/calendar/EventCalendarService" {
    export class EventCalendarService {
        private _lastStartDate;
        getLastStartDate(): Date;
        setLastStartDate(value: Date): void;
    }
}
declare module "lib/modules/calendar2/controls/calendar/EventCalendar" {
    import { Directive } from "lib/root/Angular/Directive";
    import { EventCalendarService } from "lib/modules/calendar2/controls/calendar/EventCalendarService";
    export class EventCalendarDirective extends Directive {
        private readonly _eventCalendarService;
        constructor(eventCalendarService: EventCalendarService);
        protected getBaseTemplateId(): string;
        protected getTypeInfo(): any;
        protected onLink(scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, controller: any, linker: ng.ITranscludeFunction): void;
    }
}
declare module "lib/root/Angular/HtmlElementWrapper" {
    import { Visibility } from "lib/root/Core/Graphics/Visibility";
    export abstract class HtmlElementWrapper {
        protected _htmlElement: HTMLElement;
        constructor();
        attach(target: HTMLElement): void;
        attachToBeginning(target: HTMLElement): void;
        private _visibility;
        visibility: Visibility;
        protected addClass(className: string): void;
        private updateStyles();
    }
}
declare module "lib/root/Angular/RepeatExpression" {
    export class RepeatExpression {
        private static _repeatRegexp;
        constructor(expression: string);
        private _itemName;
        readonly itemName: string;
        private _collectionName;
        readonly collectionName: string;
        private parse(expression);
    }
}
declare module "lib/root/Angular/Controls/AngularControl" {
    import { IAction } from "lib/root/Core/Delegates";
    import { AngularScope } from "lib/root/Angular/AngularScope";
    import { HtmlElementWrapper } from "lib/root/Angular/HtmlElementWrapper";
    export abstract class AngularControl<TScope extends ng.IScope> extends HtmlElementWrapper {
        protected _scope: TScope;
        protected _angularScope: AngularScope;
        private _applyAsyncAction;
        constructor(parentScope: ng.IScope);
        protected abstract getTemplateUrl(): string;
        protected readonly applyAsyncAction: IAction;
        protected compile(): void;
    }
}
declare module "lib/root/Entity/List/Action/EntityListReorderingConfig" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { IEntity } from "lib/root/Entity/IEntity";
    export class EntityListReorderingConfig {
        private _text;
        private _tip;
        private _save;
        private _getItems;
        constructor(text: string, save: (entities: IReadOnlyCollection<IEntity>) => Promise<void>, getItems: () => Promise<IReadOnlyCollection<IEntity>>, tip?: string);
        readonly text: string;
        readonly tip: string;
        save(entities: IReadOnlyCollection<IEntity>): Promise<void>;
        readonly getItems: () => Promise<IReadOnlyCollection<IEntity>>;
    }
}
declare module "lib/root/Entity/List/ListLoadPromiseResult" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/Collections";
    import { IEntity } from "lib/root/Entity/IEntity";
    export class ListLoadPromiseResult {
        constructor(entities: IReadOnlyCollection<IEntity>, totalCount: number, filteredCount: number);
        private _entities;
        readonly entities: IReadOnlyCollection<IEntity>;
        private _totalCount;
        readonly totalCount: number;
        private _filteredCount;
        readonly filteredCount: number;
        getParameterSummaryValue(parameterId: string): string;
        private getActualCount(count);
    }
}
declare module "lib/root/Entity/List/ListLoadPromise" {
    import { ListLoadPromiseResult } from "lib/root/Entity/List/ListLoadPromiseResult";
    export class ListLoadPromise extends Promise<ListLoadPromiseResult> {
    }
}
declare module "lib/root/Angular/Controls/List/AngularBinding/AngularListItemContext" {
    import { DateTime } from "lib/root/Core/DateTime";
    import { IFunc, IFunc1 } from "lib/root/Core/Delegates";
    import { IBoolean } from "lib/root/Core/Primitives/IBoolean";
    import { INumber } from "lib/root/Core/Primitives/INumber";
    import { IObject } from "lib/root/Core/Primitives/IObject";
    import { IString } from "lib/root/Core/Primitives/IString";
    import { AngularScope } from "lib/root/Angular/AngularScope";
    export class AngularListItemContext {
        constructor(parentScope: AngularScope, dataItem: any);
        private _dataItem;
        readonly dataItem: any;
        private _itemScope;
        readonly itemScope: AngularScope;
        createBooleanWatcher<TEvaluationResult>(expression: string, typeToCastTo?: string, isInterpolate?: boolean): IBoolean;
        createChild(dataItem: any, itemVariableName: string): AngularListItemContext;
        createDateTimeWatcher<TEvaluationResult extends DateTime | Date | string | number | number[]>(expression: string, typeToCastTo?: string, isInterpolate?: boolean, isObjectEquality?: boolean): IObject<DateTime>;
        createModifyingWatcher<TEvaluationResult, TResult>(expression: string, modifier: IFunc1<TEvaluationResult, TResult>, typeToCastTo?: string, isInterpolate?: boolean, isObjectEquality?: boolean): IObject<TResult>;
        createNumberWatcher<TEvaluationResult>(expression: string, typeToCastTo?: string, isInterpolate?: boolean): INumber;
        createStringWatcher<TEvaluationResult>(expression: string, typeToCastTo?: string, isInterpolate?: boolean): IString;
        createValueBooleanWatcher<TEvaluationResult>(expression: string, typeToCastTo?: string, isInterpolate?: boolean): {
            value: IBoolean;
        };
        createValueDateTimeWatcher<TEvaluationResult extends DateTime | Date | string | number | number[]>(expression: string, typeToCastTo?: string, isInterpolate?: boolean, isObjectEquality?: boolean): {
            value: IObject<DateTime>;
        };
        createValueModifyingWatcher<TEvaluationResult, TResult>(expression: string, modifier: IFunc1<TEvaluationResult, TResult>, typeToCastTo?: string, isInterpolate?: boolean, isObjectEquality?: boolean): {
            value: IObject<TResult>;
        };
        createValueStringWatcher<TEvaluationResult>(expression: string, typeToCastTo?: string, isInterpolate?: boolean): {
            value: IString;
        };
        createValueWatcher<TResult>(expressionOrEvaluationFunction: string | IFunc<TResult>, typeToCastTo?: string, isInterpolate?: boolean, isObjectEquality?: boolean): {
            value: IObject<TResult>;
        };
        createWatcher<TResult>(expressionOrEvaluationFunction: string | IFunc<TResult>, typeToCastTo?: string, isInterpolate?: boolean, isObjectEquality?: boolean): IObject<TResult>;
        destroy(): void;
        getExpressionValue(expression: string, type?: string, isInterpolate?: boolean): any;
        private createAngularWatcher<TEvaluationResult, TResult>(expressionOrEvaluationFunction, typeToCastTo?, isInterpolate?, isObjectEquality?, modifier?);
        private createValueObject<TValue>(value);
    }
}
declare module "lib/root/Entity/Entity" {
    import { IReadOnlyDictionary } from "lib/root/Core/Collections/IReadOnlyDictionary";
    import { IBoolean } from "lib/root/Core/Primitives/IBoolean";
    import { INumber } from "lib/root/Core/Primitives/INumber";
    import { IString } from "lib/root/Core/Primitives/IString";
    import { IEntityCommonActionsAvailabilityField } from "lib/root/Entity/Action/Availability/IEntityCommonActionsAvailabilityField";
    import { IEntityEventInfo } from "lib/root/Entity/Fields/IEntityEventInfo";
    import { IEntityIconStatusField } from "lib/root/Entity/Fields/IEntityIconStatusField";
    import { IEntityImageField } from "lib/root/Entity/Fields/IEntityImageField";
    import { IEntityLockableBooleanField } from "lib/root/Entity/Fields/IEntityLockableBooleanField";
    import { IEntityStatusField } from "lib/root/Entity/Fields/IEntityStatusField";
    import { IEntityParameter } from "lib/root/Entity/Fields/Parameter/IEntityParameter";
    import { IEntity } from "lib/root/Entity/IEntity";
    export class Entity implements IEntity {
        constructor(id: IString);
        equals(entity: IEntity): boolean;
        private _actionsAvailability;
        actionsAvailability: IEntityCommonActionsAvailabilityField;
        private _activity;
        activity: IEntityLockableBooleanField;
        private _status;
        status: IEntityStatusField;
        private _iconStatus;
        iconStatus: IEntityIconStatusField;
        private _id;
        readonly id: IString;
        private _index;
        index: IString;
        private _name;
        name: IString;
        private _description;
        description: IString;
        private _rating;
        rating: INumber;
        private _logo;
        logo: IString;
        private _image;
        image: IEntityImageField;
        private _unread;
        unread: IEntityLockableBooleanField;
        private _parameters;
        parameters: IReadOnlyDictionary<string, IEntityParameter>;
        private _changeHistoryEntryCount;
        changeHistoryEntryCount: INumber;
        private _eventHistoryEntryCount;
        eventHistoryEntryCount: INumber;
        private _isNew;
        isNew: IBoolean;
        private _isDisabled;
        isDisabled: IBoolean;
        private _isError;
        isError: IBoolean;
        private _isChild;
        isChild: IBoolean;
        private _isLastChild;
        isLastChild: IBoolean;
        private _isMarked;
        isMarked: IBoolean;
        private _isFiltered;
        isFiltered: IBoolean;
        private _isCollapsed;
        isCollapsed: IBoolean;
        private _isChecked;
        isChecked: IEntityLockableBooleanField;
        private _eventInfo;
        eventInfo: IEntityEventInfo;
        private _metadata;
        metadata: IString;
    }
}
declare module "lib/root/Angular/Controls/List/AngularBinding/TluiXmlParser/IParameterStatusTluiXmlConfig" {
    export interface IParameterStatusTluiXmlConfig {
        type: string;
        condition: string;
        icon: string;
        tip: string;
    }
}
declare module "lib/root/Angular/Controls/List/AngularBinding/EntityParameterAngularFactory" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/Collections";
    import { IEntityParameter } from "lib/root/Entity/Fields/Parameter/IEntityParameter";
    import { IEntityParameterFormat } from "lib/root/Entity/Fields/Parameter/IEntityParameterFormat";
    import { EntityParameterType } from "lib/root/Entity/Fields/Parameter/Types/EntityParameterType";
    import { AngularListItemContext } from "lib/root/Angular/Controls/List/AngularBinding/AngularListItemContext";
    import { IParameterStatusTluiXmlConfig } from "lib/root/Angular/Controls/List/AngularBinding/TluiXmlParser/IParameterStatusTluiXmlConfig";
    export class EntityParameterAngularFactory {
        static factory(itemContext: AngularListItemContext, type: EntityParameterType, format: IEntityParameterFormat, valueExpression: string, oldValueExpression?: string, itemTipExpression?: string, isEditableExpression?: string, localizationParametersExpression?: string, statusesTluiXmlConfig?: IReadOnlyCollection<IParameterStatusTluiXmlConfig>, metadataExpression?: string): IEntityParameter;
        private static convertFollowableLinkParameterData(linkData);
        private static convertLinkParameterData(linkData, isFollowable);
        private static convertTextLinkParameterData(linkData);
        private static createParameterValue(itemContext, valueExpression, parameterFormat, parameterType);
        private static createStatuses(itemContext, statusesTluiXmlConfig);
    }
}
declare module "lib/root/Angular/Controls/List/AngularBinding/IAngularListEntitiesData" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/Collections";
    export interface IAngularListEntitiesData<TData> {
        [entityId: string]: IReadOnlyCollection<TData>;
    }
}
declare module "lib/root/Angular/Controls/List/AngularBinding/IAngularListItemChangeHistoryItemData" {
    import { EntityParameterType } from "lib/root/Entity/Fields/Parameter/Types/EntityParameterType";
    import { IEntity } from "lib/root/Entity/IEntity";
    import { AngularListItemContext } from "lib/root/Angular/Controls/List/AngularBinding/AngularListItemContext";
    export interface IAngularListItemChangeHistoryItemData {
        entity: IEntity;
        itemContext: AngularListItemContext;
        parameterType: EntityParameterType;
    }
}
declare module "lib/root/Angular/Controls/List/AngularBinding/IAngularListItemEventHistoryItemData" {
    import { IEntity } from "lib/root/Entity/IEntity";
    import { AngularListItemContext } from "lib/root/Angular/Controls/List/AngularBinding/AngularListItemContext";
    export interface IAngularListItemEventHistoryItemData {
        entity: IEntity;
        itemContext: AngularListItemContext;
    }
}
declare module "lib/root/Angular/Controls/List/AngularBinding/TluiXmlParser/IEntityHistoryTluiXmlFieldConfig" {
    export interface IEntityHistoryTluiXmlConfig {
        length?: string;
        load?: string;
        items?: string;
        moment?: string;
        comment?: string;
    }
}
declare module "lib/root/Angular/Controls/List/AngularBinding/TluiXmlParser/IEntityChangeHistoryTluiXmlConfig" {
    import { IEntityHistoryTluiXmlConfig } from "lib/root/Angular/Controls/List/AngularBinding/TluiXmlParser/IEntityHistoryTluiXmlFieldConfig";
    export interface IEntityChangeHistoryTluiXmlConfig extends IEntityHistoryTluiXmlConfig {
        fieldName?: string;
        fieldValueType?: string;
        fieldValueFormat?: string;
        newValue?: string;
        oldValue?: string;
        userName?: string;
    }
}
declare module "lib/root/Angular/Controls/List/AngularBinding/TluiXmlParser/IEntityEventHistoryTluiXmlConfig" {
    import { IEntityHistoryTluiXmlConfig } from "lib/root/Angular/Controls/List/AngularBinding/TluiXmlParser/IEntityHistoryTluiXmlFieldConfig";
    export interface IEntityEventHistoryTluiXmlConfig extends IEntityHistoryTluiXmlConfig {
        momentFormat?: string;
        name?: string;
        color?: string;
    }
}
declare module "lib/root/Angular/Controls/List/AngularBinding/TluiXmlParser/IEntityFieldTluiXmlConfig" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { IParameterStatusTluiXmlConfig } from "lib/root/Angular/Controls/List/AngularBinding/TluiXmlParser/IParameterStatusTluiXmlConfig";
    export interface IEntityFieldTluiXmlConfig {
        value: string;
        if?: string;
        oldValue?: string;
        itemTip?: string;
        isDisabled?: string;
        isEditable?: string;
        localizationParameters?: string;
        type?: string;
        color?: string;
        icon?: string;
        description?: string;
        count?: string;
        statuses?: IReadOnlyCollection<IParameterStatusTluiXmlConfig>;
        metadata?: string;
    }
}
declare module "lib/root/Angular/Controls/List/AngularBinding/TluiXmlParser/IEntityTluiXmlActionConfig" {
    export interface IEntityTluiXmlActionConfig {
        isExistsExpression: string;
        isEnabledExpression: string;
    }
}
declare module "lib/root/Angular/Controls/List/AngularBinding/TluiXmlParser/EntityActionsTluiXmlConfig" {
    import { ICollection } from "lib/root/Core/Collections/Collections";
    import { IEntityTluiXmlActionConfig } from "lib/root/Angular/Controls/List/AngularBinding/TluiXmlParser/IEntityTluiXmlActionConfig";
    export class EntityActionsTluiXmlConfig {
        private _setActivity;
        setActivity: IEntityTluiXmlActionConfig;
        private _edit;
        edit: IEntityTluiXmlActionConfig;
        private _remove;
        remove: IEntityTluiXmlActionConfig;
        private _custom;
        custom: ICollection<IEntityTluiXmlActionConfig>;
        readonly all: ICollection<IEntityTluiXmlActionConfig>;
    }
}
declare module "lib/root/Angular/Controls/List/AngularBinding/TluiXmlParser/IEntityTluiXmlConfig" {
    import { ICollection } from "lib/root/Core/Collections/ICollection";
    import { EntityActionsTluiXmlConfig } from "lib/root/Angular/Controls/List/AngularBinding/TluiXmlParser/EntityActionsTluiXmlConfig";
    import { IEntityChangeHistoryTluiXmlConfig } from "lib/root/Angular/Controls/List/AngularBinding/TluiXmlParser/IEntityChangeHistoryTluiXmlConfig";
    import { IEntityEventHistoryTluiXmlConfig } from "lib/root/Angular/Controls/List/AngularBinding/TluiXmlParser/IEntityEventHistoryTluiXmlConfig";
    import { IEntityFieldTluiXmlConfig } from "lib/root/Angular/Controls/List/AngularBinding/TluiXmlParser/IEntityFieldTluiXmlConfig";
    export interface IEntityTluiXmlConfig {
        actions?: EntityActionsTluiXmlConfig;
        itemVariableName?: string;
        getItems?: string;
        getSortingItems?: string;
        reorderingIndexes?: ICollection<string>;
        id?: IEntityFieldTluiXmlConfig;
        index?: IEntityFieldTluiXmlConfig;
        activity?: IEntityFieldTluiXmlConfig;
        unread?: IEntityFieldTluiXmlConfig;
        name?: IEntityFieldTluiXmlConfig;
        rating?: IEntityFieldTluiXmlConfig;
        logo?: IEntityFieldTluiXmlConfig;
        image?: IEntityFieldTluiXmlConfig;
        description?: IEntityFieldTluiXmlConfig;
        parameters?: {
            [key: string]: IEntityFieldTluiXmlConfig;
        };
        statuses?: ICollection<IEntityFieldTluiXmlConfig>;
        iconStatuses?: ICollection<IEntityFieldTluiXmlConfig>;
        changeHistory?: IEntityChangeHistoryTluiXmlConfig;
        eventHistory?: IEntityEventHistoryTluiXmlConfig;
        eventInfo?: {
            moment: string;
            color: string;
        };
        isNew?: string;
        isDisabled?: string;
        isError?: string;
        isChild?: string;
        isLastChild?: string;
        isMarked?: string;
        isFiltered?: string;
        isCollapsed?: string;
        checkbox?: string;
        metadata?: string;
    }
}
declare module "lib/root/Angular/Controls/List/AngularBinding/EntityConverter" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/Collections";
    import { EntityChangeHistoryFieldConfig } from "lib/root/Entity/Fields/Config/EntityChangeHistoryFieldConfig";
    import { EntityEventHistoryFieldConfig } from "lib/root/Entity/Fields/Config/EntityEventHistoryFieldConfig";
    import { IEntity } from "lib/root/Entity/IEntity";
    import { IEntityConfig } from "lib/root/Entity/IEntityConfig";
    import { AngularScope } from "lib/root/Angular/AngularScope";
    import { AngularListItemContext } from "lib/root/Angular/Controls/List/AngularBinding/AngularListItemContext";
    import { IAngularListEntitiesData } from "lib/root/Angular/Controls/List/AngularBinding/IAngularListEntitiesData";
    import { IAngularListItemChangeHistoryItemData } from "lib/root/Angular/Controls/List/AngularBinding/IAngularListItemChangeHistoryItemData";
    import { IAngularListItemEventHistoryItemData } from "lib/root/Angular/Controls/List/AngularBinding/IAngularListItemEventHistoryItemData";
    import { IEntityTluiXmlConfig } from "lib/root/Angular/Controls/List/AngularBinding/TluiXmlParser/IEntityTluiXmlConfig";
    export class EntityConverter {
        private _entityConfig;
        private _entityTluiXmlConfig;
        private _scope;
        constructor(entityConfig: IEntityConfig, entityTluiXmlConfig: IEntityTluiXmlConfig, scope: AngularScope);
        dataItemToEntity(itemContext: AngularListItemContext, id?: string): IEntity;
        createChangeHistoryEntities(changeHistoryConfig: EntityChangeHistoryFieldConfig, itemContext: AngularListItemContext, entity: IEntity, listChangeHistoryData: IAngularListEntitiesData<IAngularListItemChangeHistoryItemData>): IReadOnlyCollection<IEntity>;
        createEventHistoryEntities(eventHistoryConfig: EntityEventHistoryFieldConfig, itemContext: AngularListItemContext, entity: IEntity, listEventHistoryData: IAngularListEntitiesData<IAngularListItemEventHistoryItemData>): IReadOnlyCollection<IEntity>;
        private createParametersFromData(itemContext);
        private createParameterFromData(itemContext, parameterConfig, parameterTluiXmlConfig);
        private getDataItemStatus(itemContext);
        private getDataItemIconStatus(itemContext);
    }
}
declare module "lib/root/Angular/Controls/List/AngularBinding/IGetItemsResult" {
    export interface IGetItemsResult {
        items: object[];
        filteredCount: number;
        totalCount: number;
    }
}
declare module "lib/root/Entity/List/Action/EntityListSimpleActionConfig" {
    import { IAction } from "lib/root/Core/Delegates";
    export class EntityListSimpleActionConfig {
        constructor(action: IAction, text: string, isVisible?: boolean, isActive?: boolean);
        private _action;
        readonly action: IAction;
        private _text;
        readonly text: string;
        private _isVisible;
        isVisible: boolean;
        private _isActive;
        isActive: boolean;
    }
}
declare module "lib/root/Entity/List/Action/EntityListAdditionActionConfig" {
    import { IAction } from "lib/root/Core/Delegates";
    import { EntityListSimpleActionConfig } from "lib/root/Entity/List/Action/EntityListSimpleActionConfig";
    export class EntityListAdditionActionConfig extends EntityListSimpleActionConfig {
        constructor(action: IAction, text?: string, isVisible?: boolean, isActive?: boolean);
    }
}
declare module "lib/root/Entity/List/Action/IEntityListActionsConfig" {
    import { List } from "lib/root/Core/Collections/List";
    import { EntityListAdditionActionConfig } from "lib/root/Entity/List/Action/EntityListAdditionActionConfig";
    import { EntityListReorderingConfig } from "lib/root/Entity/List/Action/EntityListReorderingConfig";
    import { EntityListSimpleActionConfig } from "lib/root/Entity/List/Action/EntityListSimpleActionConfig";
    export interface IEntityListActionsConfig {
        addition?: List<EntityListAdditionActionConfig>;
        custom?: List<EntityListSimpleActionConfig>;
        reordering?: List<EntityListReorderingConfig>;
    }
}
declare module "lib/root/Entity/List/EntityListSearchConfig" {
    import { IString } from "lib/root/Core/Primitives/index";
    export class EntityListSearchConfig {
        readonly model: IString;
        readonly prompt: IString;
        constructor(model: IString, prompt: IString);
    }
}
declare module "lib/root/Entity/List/IListFieldsVisibilityConfig" {
    import { BinaryString } from "lib/root/Core/BinaryString";
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { IString } from "lib/root/Core/Primitives/index";
    export interface IListFieldsVisibilityConfig {
        fieldIds: IReadOnlyCollection<string>;
        value: IString;
        defaultValue: BinaryString;
        hiddenFields: {
            [fieldId: string]: boolean;
        };
        getSavePromise(value: BinaryString): Promise<void>;
    }
}
declare module "lib/root/Entity/List/ListViewsConfig" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { View } from "lib/root/Entity/List/View";
    export class ListViewsConfig {
        constructor(views?: IReadOnlyCollection<View>, currentView?: View);
        private _currentView;
        currentView: View;
        private _views;
        readonly views: IReadOnlyCollection<View>;
    }
}
declare module "lib/root/Entity/List/Summary/EntityListSummaryType" {
    export enum EntityListSummaryType {
        ActiveCount = 0,
        UnreadCount = 1,
        Sum = 2,
    }
}
declare module "lib/root/Entity/List/Summary/IEntityListSummaryItemConfig" {
    import { EntityListSummaryType } from "lib/root/Entity/List/Summary/EntityListSummaryType";
    export interface IEntityListSummaryItemConfig {
        type: EntityListSummaryType;
        text: string;
    }
}
declare module "lib/root/Entity/List/Summary/IEntityListSummaryConfig" {
    import { ICollection } from "lib/root/Core/Collections/index";
    import { IEntityListSummaryItemConfig } from "lib/root/Entity/List/Summary/IEntityListSummaryItemConfig";
    export interface IEntityListSummaryConfig {
        hasGeneralInfo: boolean;
        items: ICollection<IEntityListSummaryItemConfig>;
    }
}
declare module "lib/root/Entity/List/IEntityListConfig" {
    import { IFiltersItem } from 'tlui';
    import { IEntityListActionsConfig } from "lib/root/Entity/List/Action/IEntityListActionsConfig";
    import { EntityListSearchConfig } from "lib/root/Entity/List/EntityListSearchConfig";
    import { IListFieldsVisibilityConfig } from "lib/root/Entity/List/IListFieldsVisibilityConfig";
    import { ListViewsConfig } from "lib/root/Entity/List/ListViewsConfig";
    import { IEntityListSummaryConfig } from "lib/root/Entity/List/Summary/IEntityListSummaryConfig";
    export interface IEntityListConfig {
        actions?: IEntityListActionsConfig;
        summary?: IEntityListSummaryConfig;
        fieldsVisibility?: IListFieldsVisibilityConfig;
        filtersOld?: IFiltersItem[];
        search?: EntityListSearchConfig;
        views?: ListViewsConfig;
        expandableChildren?: boolean;
        startPage?: number;
        getLayout?(): string;
    }
}
declare module "lib/root/Entity/List/Summary/EntityListSummaryItemConfig" {
    import { EntityListSummaryType } from "lib/root/Entity/List/Summary/EntityListSummaryType";
    import { IEntityListSummaryItemConfig } from "lib/root/Entity/List/Summary/IEntityListSummaryItemConfig";
    export abstract class EntityListSummaryItemConfig implements IEntityListSummaryItemConfig {
        protected constructor(type: EntityListSummaryType, text: string);
        private _type;
        readonly type: EntityListSummaryType;
        private _text;
        readonly text: string;
    }
}
declare module "lib/root/Entity/List/Summary/EntityListSummaryActiveCountConfig" {
    import { EntityListSummaryItemConfig } from "lib/root/Entity/List/Summary/EntityListSummaryItemConfig";
    export class EntityListSummaryActiveCountConfig extends EntityListSummaryItemConfig {
        constructor(text: string);
    }
}
declare module "lib/root/Entity/List/Summary/EntityListSummarySumConfig" {
    import { EntityListSummaryItemConfig } from "lib/root/Entity/List/Summary/EntityListSummaryItemConfig";
    export class EntityListSummarySumConfig extends EntityListSummaryItemConfig {
        constructor(text: string, parameterId: string);
        private _parameterId;
        readonly parameterId: string;
    }
}
declare module "lib/root/Entity/List/Summary/EntityListSummaryUnreadCountConfig" {
    import { EntityListSummaryItemConfig } from "lib/root/Entity/List/Summary/EntityListSummaryItemConfig";
    export class EntityListSummaryUnreadCountConfig extends EntityListSummaryItemConfig {
        constructor(text: string);
    }
}
declare module "lib/root/Angular/Controls/List/AngularBinding/TluiXmlParser/ListTluiXmlNodeParser" {
    import { XmlNode } from "lib/root/Core/Xml/XmlNode";
    import { IEntityConfig } from "lib/root/Entity/IEntityConfig";
    import { IEntityListConfig } from "lib/root/Entity/List/IEntityListConfig";
    import { AngularScope } from "lib/root/Angular/AngularScope";
    import { AngularList } from "lib/root/Angular/Controls/List/AngularBinding/AngularList";
    import { IEntityTluiXmlConfig } from "lib/root/Angular/Controls/List/AngularBinding/TluiXmlParser/IEntityTluiXmlConfig";
    export class ListTluiXmlNodeParser {
        private _entityConfig;
        private _entityListConfig;
        private _entityTluiXmlConfig;
        private _scope;
        private _angularList;
        private _generatedParameterIdsCount;
        private _currentFieldGroupId;
        private _insideGroup;
        private _evalVariables;
        private _listItemStatusNode;
        constructor(entityConfig: IEntityConfig, entityListConfig: IEntityListConfig, tluiXmlConfig: IEntityTluiXmlConfig, scope: AngularScope, angularList: AngularList);
        processNode(currentNode: XmlNode, isOpening: boolean): void;
        private updateFieldConfig(fieldConfig, node);
        private setFixedWidth(field, node);
        private parameterConfigFromTluiXmlNode(currentNode, getChoiceParameterValues);
        private createParameterConfig(type, format, name, id, tip, isHtml, isXaml, getChoiceParameterValues?);
        private createParameterStatusesTluiXmlConfig(node);
        private generateNextParameterId();
        private createActionsConfigsIfNotExist();
        private createActionFunction(node);
        private createGoToHrefFunction(node);
        private createActionTluiXmlConfig(node);
        private interpolateAttribute(node, attributeName);
        private evalAttribute(node, attributeName, variables?);
        private evalExpression(expression, isInterpolate?, variables?);
        private watchAttribute(node, attributeName, action);
    }
}
declare module "lib/root/Angular/Controls/List/AngularBinding/TluiXmlParser/ListTluiXmlParser" {
    import { XmlParser } from "lib/root/Core/Xml/XmlParser";
    import { IEntityConfig } from "lib/root/Entity/IEntityConfig";
    import { IEntityListConfig } from "lib/root/Entity/List/IEntityListConfig";
    import { AngularScope } from "lib/root/Angular/AngularScope";
    import { AngularList } from "lib/root/Angular/Controls/List/AngularBinding/AngularList";
    import { IEntityTluiXmlConfig } from "lib/root/Angular/Controls/List/AngularBinding/TluiXmlParser/IEntityTluiXmlConfig";
    export class ListTluiXmlParser {
        private _tluiXml;
        private _scope;
        private _angularList;
        private _nodeParser;
        constructor(tluiXml: XmlParser, scope: AngularScope, angularList: AngularList);
        private _entityConfig;
        readonly entityConfig: IEntityConfig;
        private _entityListConfig;
        readonly entityListConfig: IEntityListConfig;
        private _entityTluiXmlConfig;
        readonly entityTluiXmlConfig: IEntityTluiXmlConfig;
        private processNode(node);
    }
}
declare module "lib/root/Angular/Controls/List/AngularBinding/AngularList" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    import { GenericEventHandler } from "lib/root/Core/Events/GenericEventHandler";
    import { XmlParser } from "lib/root/Core/Xml/XmlParser";
    import { EntityChangeHistoryFieldConfig } from "lib/root/Entity/Fields/Config/EntityChangeHistoryFieldConfig";
    import { EntityEventHistoryFieldConfig } from "lib/root/Entity/Fields/Config/EntityEventHistoryFieldConfig";
    import { IEntity } from "lib/root/Entity/IEntity";
    import { EntityListReorderingConfig } from "lib/root/Entity/List/Action/EntityListReorderingConfig";
    import { IListFieldsVisibility } from "lib/root/Entity/List/IListFieldsVisibility";
    import { ListLoadPromise } from "lib/root/Entity/List/ListLoadPromise";
    import { EntityConverter } from "lib/root/Angular/Controls/List/AngularBinding/EntityConverter";
    import { IEntityChangeHistoryTluiXmlConfig } from "lib/root/Angular/Controls/List/AngularBinding/TluiXmlParser/IEntityChangeHistoryTluiXmlConfig";
    import { IEntityEventHistoryTluiXmlConfig } from "lib/root/Angular/Controls/List/AngularBinding/TluiXmlParser/IEntityEventHistoryTluiXmlConfig";
    import { ListTluiXmlParser } from "lib/root/Angular/Controls/List/AngularBinding/TluiXmlParser/ListTluiXmlParser";
    export class AngularList {
        private _tluiXml;
        private _scope;
        private _currentDataItems;
        private _currentEntities;
        private _currentItemContexts;
        private _itemContexts;
        private readonly _singleEmptyItem;
        constructor(listTluiXml: XmlParser, scope: any, singleEmptyItem?: boolean);
        private _parser;
        readonly parser: ListTluiXmlParser;
        private _visibilityChanged;
        readonly visibilityChanged: GenericEventHandler<IListFieldsVisibility>;
        private _actionsChanged;
        readonly actionsChanged: EventHandler;
        private _entityConverter;
        readonly entityConverter: EntityConverter;
        private _currentDataItemsArray;
        readonly currentDataItemsArray: any[];
        createGetEntitiesPromise(from?: number, to?: number, isAllItems?: boolean): {
            promise: ListLoadPromise;
            dataItems: any[];
        };
        onReorderingSave(reorderingConfig: EntityListReorderingConfig, entities: IReadOnlyCollection<IEntity>): void;
        createChangeHistoryConfig(changeHistoryTluiXmlConfig: IEntityChangeHistoryTluiXmlConfig): EntityChangeHistoryFieldConfig;
        createEventHistoryConfig(eventHistoryTluiXmlConfig: IEntityEventHistoryTluiXmlConfig): EntityEventHistoryFieldConfig;
        getDataItemByEntity(entity: IEntity): any;
        private evalGetDataItemsPromise(isAllItems, from, to);
        private getDataItems(isAllItems, getEntitiesPromise, resolve, reject, result);
        private getElementByEntityIndex<TElement>(collection, entity, entityCollection);
        private getChangeHistoryItemData(listChangeHistoryData, entity, changeHistoryEntity);
        private createHistoryEntitiesLoadPromise(entity, entitiesLoadExpression, getResolveResult);
        private removeItemsContexts();
    }
}
declare module "lib/root/Entity/ListHeader/IListHeaderBaseActionConfig" {
    import { IAction, IFunc } from "lib/root/Core/Delegates";
    export interface IListHeaderBaseActionConfig {
        href?: string;
        action?: IAction;
        isVisibleFn?: IFunc<boolean>;
        isDisabledFn: IFunc<boolean>;
    }
}
declare module "lib/root/Entity/ListHeader/IListHeaderAdditionActionConfig" {
    import { IListHeaderBaseActionConfig } from "lib/root/Entity/ListHeader/IListHeaderBaseActionConfig";
    export interface IListHeaderAdditionActionConfig extends IListHeaderBaseActionConfig {
        text?: string;
    }
}
declare module "lib/root/Entity/ListHeader/IListHeaderCustomActionConfig" {
    import { IListHeaderBaseActionConfig } from "lib/root/Entity/ListHeader/IListHeaderBaseActionConfig";
    export interface IListHeaderCustomActionConfig extends IListHeaderBaseActionConfig {
        text: string;
    }
}
declare module "lib/root/Entity/ListHeader/IListHeaderFieldsVisibilityConfig" {
    import { IFieldsVisibilityButtonConfig } from "lib/root/Entity/ListHeader/IFieldsVisibilityButtonConfig";
    export interface IListHeaderFieldsVisibilityConfig {
        buttonConfig: IFieldsVisibilityButtonConfig;
        getSavePromise(value: string): ng.IPromise<void>;
    }
}
declare module "lib/root/Entity/ListHeader/IListHeaderFiltersConfig" {
    import { IFiltersItem } from 'tlui';
    import { IAction } from "lib/root/Core/Delegates";
    export interface IListHeaderFiltersConfig {
        config: IFiltersItem[];
        onChange: IAction;
    }
}
declare module "lib/root/Entity/ISortingItem" {
    export interface ISortingItem {
        name: string;
    }
}
declare module "lib/root/Entity/ListHeader/IListHeaderReorderingActionConfig" {
    export interface IListHeaderReorderingActionConfig {
        name?: string;
        tip?: string;
    }
}
declare module "lib/root/Entity/ListHeader/IListHeaderReorderingConfig" {
    import { ISortingItem } from "lib/root/Entity/ISortingItem";
    import { IListHeaderReorderingActionConfig } from "lib/root/Entity/ListHeader/IListHeaderReorderingActionConfig";
    export interface IListHeaderReorderingConfig {
        actions: IListHeaderReorderingActionConfig[];
        getItems(reorderingActionConfig: IListHeaderReorderingActionConfig): ng.IPromise<ISortingItem[]>;
        save(reorderingActionConfig: IListHeaderReorderingActionConfig, items: ISortingItem[]): ng.IPromise<void>;
    }
}
declare module "lib/root/Entity/ListHeader/IListHeaderSearchConfig" {
    import { IAction } from "lib/root/Core/Delegates";
    export interface IListHeaderSearchConfig {
        prompt: string;
        model: string;
        onSearch: IAction;
    }
}
declare module "lib/root/Entity/ListHeader/IListHeaderViewConfig" {
    export interface IListHeaderViewConfig {
        id: string;
        name: string;
        icon: string;
    }
}
declare module "lib/root/Entity/ListHeader/Summary/IListHeaderSummaryEntry" {
    export interface IListHeaderSummaryEntry {
        text: string;
        value: string;
        isInvalid?: boolean;
    }
}
declare module "lib/root/Entity/ListHeader/Summary/IListHeaderSummaryConfig" {
    import { IFunc } from "lib/root/Core/Delegates";
    import { IListHeaderSummaryEntry } from "lib/root/Entity/ListHeader/Summary/IListHeaderSummaryEntry";
    export interface IListHeaderSummaryConfig {
        itemNamePluralGenitive?: string;
        getTotalCount: IFunc<number>;
        getFilteredCount: IFunc<number>;
        hasFiltersOrSearch: boolean;
        hasGeneralInfo: boolean;
        items: IListHeaderSummaryEntry[];
    }
}
declare module "lib/root/Entity/ListHeader/IListHeaderConfig" {
    import { IListHeaderAdditionActionConfig } from "lib/root/Entity/ListHeader/IListHeaderAdditionActionConfig";
    import { IListHeaderCustomActionConfig } from "lib/root/Entity/ListHeader/IListHeaderCustomActionConfig";
    import { IListHeaderFieldsVisibilityConfig } from "lib/root/Entity/ListHeader/IListHeaderFieldsVisibilityConfig";
    import { IListHeaderFiltersConfig } from "lib/root/Entity/ListHeader/IListHeaderFiltersConfig";
    import { IListHeaderReorderingConfig } from "lib/root/Entity/ListHeader/IListHeaderReorderingConfig";
    import { IListHeaderSearchConfig } from "lib/root/Entity/ListHeader/IListHeaderSearchConfig";
    import { IListHeaderViewConfig } from "lib/root/Entity/ListHeader/IListHeaderViewConfig";
    import { IListHeaderSummaryConfig } from "lib/root/Entity/ListHeader/Summary/IListHeaderSummaryConfig";
    export interface IListHeaderConfig {
        view: {
            allowedViews: IListHeaderViewConfig[];
            currentViewName: string;
            onChange(): void;
        };
        actions?: {
            addition: IListHeaderAdditionActionConfig[];
            custom: IListHeaderCustomActionConfig[];
            reordering: IListHeaderReorderingConfig;
        };
        fieldsVisibility?: IListHeaderFieldsVisibilityConfig;
        filters?: IListHeaderFiltersConfig;
        search?: IListHeaderSearchConfig;
        summary?: IListHeaderSummaryConfig;
        getLayout?(): string;
    }
}
declare module "lib/root/Angular/Controls/List/ListHeader/IListHeaderScope" {
    import { IListHeaderConfig } from "lib/root/Entity/ListHeader/IListHeaderConfig";
    export interface IListHeaderScope extends ng.IScope {
        config: IListHeaderConfig;
        directiveInstance: any;
        isOnlyAdditionActions: boolean;
        isHidden: boolean;
    }
}
declare module "lib/root/Angular/Controls/List/ListWrapper/IReorderingConfigAndEntities" {
    import { ICollection } from "lib/root/Core/Collections/ICollection";
    import { IEntity } from "lib/root/Entity/IEntity";
    import { EntityListReorderingConfig } from "lib/root/Entity/List/Action/EntityListReorderingConfig";
    export interface IReorderingConfigAndEntities {
        config: EntityListReorderingConfig;
        entities: ICollection<IEntity>;
    }
}
declare module "lib/root/Angular/Controls/List/ListHeader/ListHeader" {
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    import { GenericEventHandler } from "lib/root/Core/Events/GenericEventHandler";
    import { IObject } from "lib/root/Core/Primitives/IObject";
    import { IEntityConfig } from "lib/root/Entity/IEntityConfig";
    import { IEntityListConfig } from "lib/root/Entity/List/IEntityListConfig";
    import { IListFieldsVisibility } from "lib/root/Entity/List/IListFieldsVisibility";
    import { ListLoadPromiseResult } from "lib/root/Entity/List/ListLoadPromiseResult";
    import { AngularControl } from "lib/root/Angular/Controls/AngularControl";
    import { IReorderingConfigAndEntities } from "lib/root/Angular/Controls/List/ListWrapper/IReorderingConfigAndEntities";
    import { IListHeaderScope } from "lib/root/Angular/Controls/List/ListHeader/IListHeaderScope";
    export class ListHeader extends AngularControl<IListHeaderScope> {
        private _entityConfig;
        private _entityListConfig;
        private _data;
        private _viewChanged;
        private _fieldsVisibility;
        private _filtersAndSearchChanged;
        constructor(parentScope: ng.IScope, entityConfig: IEntityConfig, entityListConfig: IEntityListConfig, data: ListLoadPromiseResult);
        readonly viewChanged: EventHandler;
        readonly fieldsVisibility: IObject<IListFieldsVisibility>;
        readonly filtersAndSearchChanged: EventHandler;
        private _reorderingSaved;
        readonly reorderingSaved: GenericEventHandler<IReorderingConfigAndEntities>;
        updateSummary(data: ListLoadPromiseResult): void;
        setHeaderVisibility(isHidden: boolean, isOnlyAdditionActions: boolean): void;
        protected getTemplateUrl(): string;
        private updateFieldsVisibilityFromScope();
        private createSummaryConfig();
        private getFieldName(fieldId);
        private getFieldConfigById(fieldId);
    }
}
declare module "lib/root/Angular/Controls/List/ListPagination/IListPaginationScope" {
    import { INumber } from "lib/root/Core/Primitives/index";
    export interface IListPaginationScope extends ng.IScope {
        currentPage: INumber;
        pageCount: INumber;
    }
}
declare module "lib/root/Angular/Controls/List/ListPagination/ListPagination" {
    import { INumber } from "lib/root/Core/Primitives/index";
    import { AngularControl } from "lib/root/Angular/Controls/AngularControl";
    import { IListPaginationScope } from "lib/root/Angular/Controls/List/ListPagination/IListPaginationScope";
    export class ListPagination extends AngularControl<IListPaginationScope> {
        constructor(parentScope: ng.IScope, pageCount: INumber, currentPageNumber: INumber);
        protected getTemplateUrl(): string;
    }
}
declare module "lib/root/Angular/Controls/List/ListWrapper/IEntityAndBooleanValue" {
    import { IEntity } from "lib/root/Entity/IEntity";
    export interface IEntityAndBooleanValue {
        entity: IEntity;
        value: boolean;
    }
}
declare module "lib/root/Core/Events/IBooleanChangeEvent" {
    import { IChangeEvent } from "lib/root/Core/Events/IChangeEvent";
    export interface IBooleanChangeEvent extends IChangeEvent<boolean> {
    }
}
declare module "lib/root/Core/ScheduledAction" {
    import { IAction } from "lib/root/Core/Delegates";
    export class ScheduledAction {
        private readonly _action;
        private _isScheduled;
        constructor(action: IAction);
        run(): void;
    }
}
declare module "lib/root/Angular/Controls/List/ListWrapper/PaginationBehavior" {
    import { INumber } from "lib/root/Core/Primitives/index";
    export class PaginationBehavior {
        readonly currentPageNumber: INumber;
        readonly pageCount: INumber;
        constructor(startPage?: number);
        update(elementsCount: number, pageSize: number): void;
    }
}
declare module "lib/root/Angular/Controls/List/ListWrapper/ListWrapper" {
    import { GenericEventHandler } from "lib/root/Core/Events/GenericEventHandler";
    import { IEntityConfig } from "lib/root/Entity/IEntityConfig";
    import { IEntityListConfig } from "lib/root/Entity/List/IEntityListConfig";
    import { IListFieldsVisibility } from "lib/root/Entity/List/IListFieldsVisibility";
    import { ListLoadPromise } from "lib/root/Entity/List/ListLoadPromise";
    import { HtmlElementWrapper } from "lib/root/Angular/HtmlElementWrapper";
    import { IReorderingConfigAndEntities } from "lib/root/Angular/Controls/List/ListWrapper/IReorderingConfigAndEntities";
    export class ListWrapper extends HtmlElementWrapper {
        private readonly _paginationBehavior;
        private readonly _entityConfig;
        private readonly _createGetEntitiesPromise;
        private readonly _listContainerWrapper;
        private readonly _listContainer;
        private readonly _listContainerPreloader;
        private readonly _currentPageNumber;
        private readonly _pageCount;
        private readonly _parentScope;
        private readonly _updateAction;
        private _list;
        private _data;
        private _listHeader;
        private _listPaginationTop;
        private _listPaginationBottom;
        private _singleItem;
        constructor(parentScope: ng.IScope, entityConfig: IEntityConfig, entityListConfig: IEntityListConfig, createGetEntitiesPromise: (from: number, to: number) => ListLoadPromise, singleItem: boolean, minWidth?: number);
        readonly entityListConfig: IEntityListConfig;
        readonly reorderingSaved: GenericEventHandler<IReorderingConfigAndEntities>;
        getCurrentPage(): number;
        reload(page?: number): void;
        isFieldVisible(fieldId: string): boolean;
        setFieldsVisibility(fieldVisibility: IListFieldsVisibility): void;
        private initHeaderAndPagination();
        private update();
        private doUpdate();
        private render();
        private attachViewItemListeners();
        private updateSummary();
        private updateElementsVisibility();
    }
}
declare module "lib/root/Angular/Directives/VersionedDirective" {
    import { Directive } from "lib/root/Angular/Directive";
    export abstract class VersionedDirective extends Directive {
        protected getBaseTemplateId(): string;
        protected abstract getTemplate(elementHtml: string, oldDirectiveName: string, version: number, compileScope: any, attrs: ng.IAttributes, controller: any): string;
        protected getDefaultTemplate(elementHtml: string, oldDirectiveName: string, version: number, clearClass?: boolean): string;
        protected getTypeInfo(): any;
        protected onLink(scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, controller: any, linker: ng.ITranscludeFunction): void;
        private formItemContentStretchFix(element);
    }
}
declare module "lib/root/Angular/Directives/List/IListDirectiveApi" {
    export interface IListDirectiveApi {
        reloadItems(): void;
        isFieldVisible(fieldId: string): boolean;
        updateSummary(): void;
    }
}
declare module "lib/root/Angular/Directives/List/List" {
    import { VersionedDirective } from "lib/root/Angular/Directives/VersionedDirective";
    export class ListDirective extends VersionedDirective {
        protected getTemplate(elementHtml: string, oldDirectiveName: string, version: number): string;
    }
}
declare module "lib/root/Angular/Directives/List/List2" {
    import { Directive, IDirectiveApi } from "lib/root/Angular/Directive";
    export class List2Directive extends Directive {
        constructor();
        protected getTypeInfo(): any;
        protected getBaseTemplateId(): string;
        protected getApi(scope: any, element: ng.IAugmentedJQuery): IDirectiveApi;
        protected onLink(scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, controller: any, linker: ng.ITranscludeFunction): void;
    }
}
declare module "lib/root/Angular/Directives/ListItem/ListItem" {
    import { VersionedDirective } from "lib/root/Angular/Directives/VersionedDirective";
    export class ListItemDirective extends VersionedDirective {
        constructor();
        protected getTemplate(elementHtml: string, oldDirectiveName: string, version: number, compileScope: any, attrs: ng.IAttributes, controller: any): string;
    }
}
declare module "lib/root/Controls/Table/Header/EmptyTableHeader" {
    import { IControl } from "lib/root/Controls/index";
    import { IEnumerable } from "lib/root/Core/Collections/Collections";
    import { ILayout } from "lib/root/Layout/All";
    import { ITableHeader } from "lib/root/Controls/Table/ITableHeader";
    import { TableHeader } from "lib/root/Controls/Table/Header/TableHeader";
    export class EmptyTableHeader extends TableHeader implements ITableHeader {
        private _cellCount;
        constructor(cellCount: number);
        getCell(cellIndex: number): IControl;
        getCellCount(): number;
        getCellSize(cellIndex: number): number;
        getCellVisibility(cellIndex: number): boolean;
        readonly layouts: IEnumerable<ILayout>;
    }
}
declare module "lib/root/Core/Crypto" {
    export class Crypto {
        private static hash(currentHash, char);
        static generateHash(source: string | object): number;
    }
}
declare module "lib/root/Core/HtmlScriptLoader" {
    export class HtmlScriptLoader {
        private _htmlScript;
        constructor(htmlScript: string);
        startLoading(): void;
        private loadNodes(nodes, currentNodeIndex);
    }
}
declare module "lib/root/Core/IFontParser" {
    import { IFont } from "lib/root/Core/IFont";
    export interface IFontParser {
        parse(fontString: string): IFont;
    }
}
declare module "lib/root/Core/PerformanceScoreCalculator" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/Collections";
    import { EventHandler } from "lib/root/Core/Events/EventHandler";
    export class PerformanceScoreCalculator {
        private _benchmarkFunctions;
        private _timer;
        private _calculateInterval;
        constructor();
        private _timeValues;
        readonly timeValues: IReadOnlyCollection<number>;
        private _updated;
        readonly updated: EventHandler;
        readonly isRunning: boolean;
        start(): void;
        stop(): void;
        toggle(): void;
        private doBenchmark();
        private squareRootBenchmark();
    }
}
declare module "lib/root/Core/XDateTime" {
    import { DateTime } from "lib/root/Core/DateTime";
    import { XObject } from "lib/root/Core/Primitives/XObject";
    export class XDateTime extends XObject<DateTime> {
        constructor(value?: DateTime);
    }
}
declare module "lib/root/Core/Easing/ExponentialEase" {
    import { EasingFunctionBase } from "lib/root/Core/Easing/EasingFunctionBase";
    import { EasingMode } from "lib/root/Core/Easing/EasingMode";
    /**
     * This class implements an easing function that gives an exponential curve
     */
    export class ExponentialEase extends EasingFunctionBase {
        constructor(easingMode?: EasingMode, exponent?: number);
        private _exponent;
        /**
         * Specifies the factor which controls the shape of easing.
         */
        exponent: number;
        protected easeInCore(normalizedTime: number): number;
    }
}
declare module "lib/root/Core/Events/IWheelEvent" {
    export interface IWheelEvent {
    }
}
declare module "lib/root/Core/Events/WheelEvent" {
    import { IWheelEvent } from "lib/root/Core/Events/IWheelEvent";
    export class WheelEvent implements IWheelEvent {
    }
}
declare module "lib/root/Core/Primitives/BooleanProperty" {
    import { Property } from "lib/root/Core/Primitives/Property";
    export class BooleanProperty extends Property<boolean> {
    }
}
declare module "lib/root/Core/Primitives/StringProperty" {
    import { Property } from "lib/root/Core/Primitives/Property";
    export class StringProperty extends Property<string> {
    }
}
declare module "lib/root/Core/Validator/PhoneValidator" {
    export class PhoneValidator {
        private static _regExp;
        private static _emptyPhoneRegExp;
        isValid(value: string): boolean;
        isRequired(value: string, isRequired: boolean): boolean;
    }
}
declare module "lib/root/Core/Validator/SimpleValidator" {
    export class SimpleValidator {
        private _regExp;
        constructor(regExp: RegExp);
        isValid(value: any): boolean;
        isRequired(value: string, isRequired: boolean): boolean;
    }
}
declare module "lib/root/Core/Validator/TextValidator" {
    export class TextValidator {
        isValid(value: any): boolean;
        isRequired(value: string, isRequired: boolean): boolean;
    }
}
declare module "lib/root/Data/Notification/INotificationItem" {
    import { IDataTransferObject } from "lib/root/Data/IDataTransferObject";
    export interface INotificationItem extends IDataTransferObject {
        id: string;
        date: Date;
        link: string;
        text: string;
        status: string;
    }
}
declare module "lib/root/Data/Notification/INotification" {
    import { IDataTransferObject } from "lib/root/Data/IDataTransferObject";
    import { INotificationItem } from "lib/root/Data/Notification/INotificationItem";
    export interface INotification extends IDataTransferObject {
        items: INotificationItem[];
        widgetsHtmlBase64: string;
    }
}
declare module "lib/root/Data/Notification/NotificationProvider" {
    import { INotification } from "lib/root/Data/Notification/INotification";
    import { INotificationItem } from "lib/root/Data/Notification/INotificationItem";
    export class NotificationProvider {
        private static _instance;
        private _widgetsHtml;
        static readonly instance: NotificationProvider;
        getNotifications(type: string): Promise<INotification>;
        registerDisplayedNotifications(notifications: INotificationItem[]): Promise<number>;
    }
}
declare module "lib/root/Data/Suggestion/IAddressPart" {
    import { IDataTransferObject } from "lib/root/Data/IDataTransferObject";
    export interface IAddressPart extends IDataTransferObject {
        text: string;
        type: string;
        typeFull: string;
    }
}
declare module "lib/root/Data/Suggestion/IAddress" {
    import { IDataTransferObject } from "lib/root/Data/IDataTransferObject";
    import { IAddressPart } from "lib/root/Data/Suggestion/IAddressPart";
    export interface IAddress extends IDataTransferObject {
        country: IAddressPart;
        region: IAddressPart;
        city: IAddressPart;
        street: IAddressPart;
        house: IAddressPart;
        block: IAddressPart;
        flat: IAddressPart;
        geoLatitude: number;
        geoLongitude: number;
    }
}
declare module "lib/root/Data/Suggestion/ISuggestion" {
    import { IDataTransferObject } from "lib/root/Data/IDataTransferObject";
    export interface ISuggestion extends IDataTransferObject {
        value: string;
    }
}
declare module "lib/root/Data/Suggestion/IAddressSuggestion" {
    import { IAddress } from "lib/root/Data/Suggestion/IAddress";
    import { ISuggestion } from "lib/root/Data/Suggestion/ISuggestion";
    export interface IAddressSuggestion extends ISuggestion {
        address: IAddress;
    }
}
declare module "lib/root/Data/Suggestion/ISimpleSuggestion" {
    import { ISuggestion } from "lib/root/Data/Suggestion/ISuggestion";
    export interface ISimpleSuggestion extends ISuggestion {
        description: string;
    }
}
declare module "lib/root/Data/Suggestion/IUserInfo" {
    import { IDataTransferObject } from "lib/root/Data/IDataTransferObject";
    export interface IUserInfo extends IDataTransferObject {
        name: string;
        surname: string;
        patronymic: string;
        gender: string;
        email: string;
        dateOfBirth: string;
    }
}
declare module "lib/root/Data/Suggestion/IUserInfoSuggestion" {
    import { ISuggestion } from "lib/root/Data/Suggestion/ISuggestion";
    import { IUserInfo } from "lib/root/Data/Suggestion/IUserInfo";
    export interface IUserInfoSuggestion extends ISuggestion {
        userInfo: IUserInfo;
    }
}
declare module "lib/root/Data/Suggestion/SuggestionProvider" {
    import { ISuggestion } from "lib/root/Data/Suggestion/ISuggestion";
    export class SuggestionProvider {
        private static _instance;
        static readonly instance: SuggestionProvider;
        suggest(text: string, context: string): Promise<ISuggestion[]>;
    }
}
declare module "lib/root/Entity/Fields/EntityStatusType" {
    export enum EntityStatusType {
        Default = 0,
        Empty = 1,
        Active = 2,
        Inactive = 3,
        InProgress = 4,
        Wait = 5,
    }
}
declare module "lib/root/Entity/List/IEntitiesAndFields" {
    import { IReadOnlyCollection } from "lib/root/Core/Collections/IReadOnlyCollection";
    import { IEntity } from "lib/root/Entity/IEntity";
    export interface IEntitiesAndFields {
        entities: IReadOnlyCollection<IEntity>;
        fieldIds: IReadOnlyCollection<string>;
    }
}
declare module "lib/root/Entity/List/Action/IEntityListAdditionActionConfig" {
    import { IAction } from "lib/root/Core/Delegates";
    export interface IEntityListAdditionActionConfig {
        action: IAction;
        text?: string;
    }
}
declare module "lib/root/Render/Filters/BlurFilter" {
    import { Filter } from "lib/root/Render/Filters/Filter";
    export class BlurFilter extends Filter {
        constructor();
        static create(radius: number): BlurFilter;
        private _radius;
        radius: number;
        protected generateString(): string;
    }
}
declare module "lib/root/Render/Filters/HueRotateFilter" {
    import { Filter } from "lib/root/Render/Filters/Filter";
    export class HueRotateFilter extends Filter {
        constructor();
        static create(angleInDegrees: number): HueRotateFilter;
        private _angleInDegrees;
        angleInDegrees: number;
        protected generateString(): string;
    }
}
interface IDataTransferOptions {
    notification?: {
        successText?: string;
        failText?: string;
    };
    scrollPageToTop: boolean;
    silent?: boolean;
}
declare class DataTransferUtilsService {
    static $inject: string[];
    private _$rootScope;
    private _tlApplication;
    private _tlNotification;
    constructor($rootScope: ng.IRootScopeService, tlApplication: any, tlNotification: any);
    setFormUnsaved(isUnsaved: boolean): void;
    validateForm(form: ng.IFormController, dontSetDirty?: boolean): boolean;
    loadData(loadFn: () => ng.resource.IResource<any>, successFn?: (result: any) => any, failFn?: (result: any) => void, options?: IDataTransferOptions): void;
    saveData(saveFn: () => ng.resource.IResource<any>, successFn?: (result: any) => any, failFn?: (result: any) => void, options?: IDataTransferOptions): void;
}
declare module "lib/services/popup-instance-provider" {
    export interface IPopupInstanceService {
        getInstance(isModal: boolean, eventType: string): any;
        haveNoModalWindows(): boolean;
        hide(isModal: boolean, eventType: string): void;
        hideAll(): void;
        show(isModal: boolean, eventType: string, instance: any): void;
    }
}
declare module "lib/services/ExternalApi" {
}
declare module "api/IHttpErrorInfo" {
    export interface IHttpErrorInfo {
        description: string;
    }
}
declare module "lib/services/http-interceptor-provider" {
}
declare module "lib/services/list-views-constant" {
}
declare module "node_modules/tl-metrics/lib/MetricItemType" {
    export enum MetricItemType {
        String = 0,
        Integer = 1,
        Float = 2,
        Boolean = 3,
    }
}
declare module "node_modules/tl-metrics/lib/IMetricItem" {
    import { MetricItemType } from "node_modules/tl-metrics/lib/MetricItemType";
    export interface IMetricItem {
        name: string;
        value: string;
        type: MetricItemType;
        category: string;
    }
}
declare module "node_modules/tl-metrics/lib/IMetric" {
    import { IMetricItem } from "node_modules/tl-metrics/lib/IMetricItem";
    export interface IMetric {
        items: IMetricItem[];
        timestamp: number;
    }
}
declare module "node_modules/tl-metrics/lib/IMetricRepository" {
    import { IMetric } from "node_modules/tl-metrics/lib/IMetric";
    export interface IMetricRepository {
        add(metric: IMetric): void;
    }
}
declare module "node_modules/tl-metrics/lib/internal/Dto/MetricItemDto" {
    /** @internal */
    export class MetricItemDto {
        name: string;
        value: string;
        type: string;
        category: string;
    }
}
declare module "node_modules/tl-metrics/lib/internal/Dto/MetricDto" {
    import { MetricItemDto } from "node_modules/tl-metrics/lib/internal/Dto/MetricItemDto";
    /** @internal */
    export class MetricDto {
        timestamp: number;
        items: MetricItemDto[];
    }
}
declare module "node_modules/tl-metrics/lib/internal/MetricItem" {
    import { IMetricItem } from "node_modules/tl-metrics/lib/IMetricItem";
    import { MetricItemType } from "node_modules/tl-metrics/lib/MetricItemType";
    import { MetricItemDto } from "node_modules/tl-metrics/lib/internal/Dto/MetricItemDto";
    /** @internal */
    export class MetricItem implements IMetricItem {
        private _name;
        private _value;
        private _type;
        private _category;
        constructor(name: string, value: string, type: MetricItemType, category: string);
        name: string;
        value: string;
        type: MetricItemType;
        category: string;
        static convertToDto(metricItem: IMetricItem): MetricItemDto;
    }
}
declare module "node_modules/tl-metrics/lib/internal/Metric" {
    import { IMetric } from "node_modules/tl-metrics/lib/IMetric";
    import { IMetricItem } from "node_modules/tl-metrics/lib/IMetricItem";
    import { MetricDto } from "node_modules/tl-metrics/lib/internal/Dto/MetricDto";
    /** @internal */
    export class Metric implements IMetric {
        private _items;
        private _timestamp;
        constructor(items: IMetricItem[], timestamp: number);
        items: IMetricItem[];
        timestamp: number;
        static convertToDto(metric: IMetric): MetricDto;
    }
}
declare module "node_modules/tl-metrics/lib/internal/Dto/MetricProcessRequestDto" {
    import { MetricDto } from "node_modules/tl-metrics/lib/internal/Dto/MetricDto";
    /** @internal */
    export class MetricProcessRequestDto {
        metrics: MetricDto[];
    }
}
declare module "node_modules/tl-metrics/lib/internal/HttpMetricTransport" {
    import { MetricProcessRequestDto } from "node_modules/tl-metrics/lib/internal/Dto/MetricProcessRequestDto";
    /** @internal */
    export class HttpMetricTransport {
        static send(data: MetricProcessRequestDto, url: string): void;
    }
}
declare module "node_modules/tl-metrics/lib/internal/MetricRepository" {
    import { IMetric } from "node_modules/tl-metrics/lib/IMetric";
    import { IMetricRepository } from "node_modules/tl-metrics/lib/IMetricRepository";
    /** @internal */
    export class MetricRepository implements IMetricRepository {
        private _metrics;
        private _url;
        private _intervalId;
        private static _metricSendIntervalMilliseconds;
        constructor(url: string);
        stop(): void;
        add(metric: IMetric): void;
        private send();
        private convertToDto();
    }
}
declare module "node_modules/tl-metrics/lib/TlMetrics" {
    import { IMetric } from "node_modules/tl-metrics/lib/IMetric";
    import { IMetricItem } from "node_modules/tl-metrics/lib/IMetricItem";
    import { IMetricRepository } from "node_modules/tl-metrics/lib/IMetricRepository";
    import { MetricItemType } from "node_modules/tl-metrics/lib/MetricItemType";
    export class TlMetrics {
        createMetricRepository(url: string): IMetricRepository;
        createMetricItem(name: string, value: string, type: MetricItemType, category: string): IMetricItem;
        createMetric(items: IMetricItem[], timestamp: number): IMetric;
    }
}
declare module "lib/services/metrics-provider" {
    export interface IMetricsService {
        sendMetric(startTime: number, name: string, isFirst?: boolean): void;
    }
}
declare module "lib/services/preloader-service" {
    import { IMetricsService } from "lib/services/metrics-provider";
    export class PreloaderService {
        static $inject: any[];
        contentPreloaderClassName: string;
        private _$body;
        private _preloaderHides;
        private _contentPreloaderShowTime;
        private _metricsService;
        private _preloaderBehavior;
        constructor(tlMetrics: IMetricsService);
        hideContentPreloader(withoutScrolling?: boolean): void;
        isContentPreloaderVisible(): boolean;
        onHideContentPreloader(callback: () => void): void;
        scrollToTop(): void;
        showContentPreloader(): void;
        private hideContentPreloaderInternal(withoutScrolling?);
        private showContentPreloaderInternal();
    }
}
declare module "lib/services/page-load-metric-service" {
}
declare module "lib/services/popup-overlay-service" {
}
declare module "lib/services/rating-categories-constant" {
}
declare module "lib/services/typescript-proxy-provider" {
    export class TypescriptProxyProvider {
        readonly htmlTextSecurity: {};
        readonly templateService: {};
    }
}
declare module "lib/services/xml-compiler-provider" {
}
