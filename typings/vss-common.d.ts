/// <reference types='requirejs' />
/// <reference types='jquery' />

interface EventTarget {
    checked: boolean;
    nodeType: number;
}

interface Date {
    toGMTString(): string;
}

interface IErrorCallback {
    (error: any): void;
}

interface IResultCallback extends Function {
}

interface IArgsFunctionR<TResult> {
    (...args: any[]): TResult;
}

interface IFunctionPR<TParam, TResult> {
    (param: TParam): TResult;
}

interface IFunctionPPR<TParam1, TParam2, TResult> {
    (param1: TParam1, param2: TParam2): TResult;
}

interface IFunctionPPPR<TParam1, TParam2, TParam3, TResult> {
    (param1: TParam1, param2: TParam2, param3: TParam3): TResult;
}

interface IComparer<T> extends IFunctionPPR<T, T, number> {
}

interface IDictionaryStringTo<T> {
    [key: string]: T;
}

interface IDictionaryNumberTo<T> {
    [key: number]: T;
}

interface IEventHandler extends Function {
}

interface JQueryEventHandler {
    (eventObject: JQueryEventObject, args?: any): any;
}

interface IWebApiArrayResult {
    count: number;
    value: any[];
}

interface Window {
    ActiveXObject: any;
    DOMParser: any;
    XSLTProcessor: any;
    vsSdkOnLoad:() => void;
}

interface ServerError {
    typeKey?: string;
}

interface TfsError extends Error {
    status?: string;
    stack?: string;
    serverError?: ServerError;
    [key: string]: any;
}

//These variables defined by server.
declare var exports: any;

declare var _disabledPlugins: string[];

interface IWebAccessPlugin {
    namespace: string;
    loadAfter: string;
}

declare var _plugins: IWebAccessPlugin[];
declare var _builtinPlugins: IWebAccessPlugin[];

interface IWebAccessPluginBase {
    namespace: string;
    base: string;
}

declare var _builtInBases: IWebAccessPluginBase[];
declare var _bases: IWebAccessPluginBase[];

interface IDisposable {
    dispose(): void;
}

interface IKeyValuePair<TKey, TValue> {
    key: TKey;
    value: TValue;
}

declare var require: Require;
declare var define: RequireDefine;
