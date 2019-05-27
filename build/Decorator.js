"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
function ProxyObject(constructor) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.getParamA = function () {
            return this.paramA + " hej!";
        };
        return class_1;
    }(constructor));
}
exports.ProxyObject = ProxyObject;
function PluginDecorator(name) {
    return function (ctor) {
        ctor.prototype.getParamA = function () { return ctor.prototype.getParamA.call(); };
        console.log(JSON.stringify(ctor));
    };
}
exports.PluginDecorator = PluginDecorator;
var CacheStrategy;
(function (CacheStrategy) {
    CacheStrategy[CacheStrategy["NO_CACHE"] = 0] = "NO_CACHE";
    CacheStrategy[CacheStrategy["SHORT"] = 60] = "SHORT";
    CacheStrategy[CacheStrategy["MEDIUM"] = 3600] = "MEDIUM";
    CacheStrategy[CacheStrategy["LONG"] = 86400] = "LONG";
    CacheStrategy[CacheStrategy["FOREVER"] = Number.MAX_SAFE_INTEGER] = "FOREVER";
})(CacheStrategy = exports.CacheStrategy || (exports.CacheStrategy = {}));
//# sourceMappingURL=Decorator.js.map