"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var saber_ioc_1 = require("saber-ioc");
var symbol_1 = require("../../symbol/symbol");
var TemplateService = /** @class */ (function () {
    function TemplateService() {
        this.libHeader = "import { Injectable, Inject } from 'saber-ioc';";
        this.injSymbolHeader = "import { InjSymbol } from '../../symbol/symbol';";
        this.commonHeader = this.libHeader + "\n" + this.injSymbolHeader;
    }
    TemplateService.prototype.getInterfaceHeader = function (name, type) {
        return "import { I" + name + type + " } from '../../interface/" + type + "/I" + name + type + "';";
    };
    TemplateService.prototype.getServiceName = function (name) {
        return name + "Service";
    };
    TemplateService.prototype.getIServiceName = function (name) {
        return "I" + this.getServiceName(name);
    };
    TemplateService.prototype.getControllerName = function (name) {
        return name + "Controller";
    };
    TemplateService.prototype.getIControllerName = function (name) {
        return "I" + this.getControllerName(name);
    };
    TemplateService.prototype.getServiceTemplate = function (name) {
        var ServiceName = this.getServiceName(name);
        var IServiceName = this.getIServiceName(name);
        return this.commonHeader + "\n" + this.getInterfaceHeader(name, 'Service') + "\n\n@Injectable(InjSymbol." + ServiceName + ")\nexport class " + ServiceName + " implements " + IServiceName + " {\n  constructor(){}\n};";
    };
    TemplateService.prototype.getControllerTemplate = function (name) {
        var ControllerName = this.getControllerName(name);
        var IControllerName = this.getIControllerName(name);
        var ServiceName = this.getServiceName(name);
        var IServiceName = this.getIServiceName(name);
        return this.commonHeader + "\n" + this.getInterfaceHeader(name, 'Controller') + "\n" + this.getInterfaceHeader(name, 'Service') + "\n\n@Injectable(InjSymbol." + ControllerName + ")\nexport class " + ControllerName + " implements " + IControllerName + " {\n  constructor(\n    @Inject(InjSymbol." + ServiceName + ") private " + ServiceName + ": " + IServiceName + "\n  ){}\n};";
    };
    TemplateService.prototype.getInterfaceTemplate = function (name) {
        return "export interface " + name + " {};";
    };
    TemplateService.prototype.getSymbolTemplate = function () {
        return "export namespace InjSymbol {\n};";
    };
    TemplateService.prototype.getSymbolAppended = function (name, type) {
        return "export const " + name + type + " = '" + name + type + "';";
    };
    TemplateService = __decorate([
        saber_ioc_1.Injectable(symbol_1.InjSymbol.TemplateService)
    ], TemplateService);
    return TemplateService;
}());
exports.TemplateService = TemplateService;
