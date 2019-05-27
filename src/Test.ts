import { ProxyObject, PluginDecorator, CacheStrategy } from "./Decorator";

export class Test  {
    
    public id: string = "12";
    public paramA: string;

    constructor(paramA: string) {
        this.paramA = paramA;
    }

    @ProxyGetMethod(CacheStrategy.SHORT, () => {})
    public getParamA(): string {
        return this.paramA;
    }
}