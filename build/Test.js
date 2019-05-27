"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Decorator_1 = require("./Decorator");
var Test = (function () {
    function Test(paramA) {
        this.id = "12";
        this.paramA = paramA;
    }
    Test.prototype.getParamA = function () {
        return this.paramA;
    };
    Test = __decorate([
        Decorator_1.PluginDecorator("ehdsa")
    ], Test);
    return Test;
}());
exports.Test = Test;
//# sourceMappingURL=Test.js.map