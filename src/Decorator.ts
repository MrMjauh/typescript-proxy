import { Test } from "./Test";

export function ProxyObject<T extends {new(...args:any[]):{}}>(constructor:T) {
    return class extends constructor {

        getParamA() {
            return (this as any).paramA + " hej!";
        }
    }
}

export function PluginDecorator(name: string) {
    return (ctor: Function) => {
        ctor.prototype.getParamA = () => {return ctor.prototype.getParamA.call()}
        console.log(JSON.stringify(ctor));
    }
}

export enum CacheStrategy {
    NO_CACHE = 0,
    SHORT = 60, // 1 min
    MEDIUM = 3600, // 1 hours
    LONG = 3600*24, // 1 day
    FOREVER = Number.MAX_SAFE_INTEGER
}