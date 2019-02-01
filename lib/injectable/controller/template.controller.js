"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var saber_ioc_1 = require("saber-ioc");
var symbol_1 = require("../../symbol/symbol");
var TemplateController = /** @class */ (function () {
    function TemplateController(TemplateService) {
        this.TemplateService = TemplateService;
    }
    TemplateController.prototype.getServiceName = function (name) {
        return this.TemplateService.getServiceName(name);
    };
    TemplateController.prototype.getIServiceName = function (name) {
        return this.TemplateService.getIServiceName(name);
    };
    TemplateController.prototype.getControllerName = function (name) {
        return this.TemplateService.getControllerName(name);
    };
    TemplateController.prototype.getIControllerName = function (name) {
        return this.TemplateService.getIControllerName(name);
    };
    TemplateController.prototype.getServiceTemplate = function (name) {
        return this.TemplateService.getServiceTemplate(name);
    };
    TemplateController.prototype.getControllerTemplate = function (name) {
        return this.TemplateService.getControllerTemplate(name);
    };
    TemplateController.prototype.getInterfaceTemplate = function (name) {
        return this.TemplateService.getInterfaceTemplate(name);
    };
    TemplateController.prototype.unshiftType = function (name, type) {
        return type + "/" + name;
    };
    TemplateController.prototype.getSymbolTemplate = function () {
        return this.TemplateService.getSymbolTemplate();
    };
    TemplateController.prototype.getSymbolAppended = function (name, type) {
        return this.TemplateService.getSymbolAppended(name, type);
    };
    TemplateController = __decorate([
        saber_ioc_1.Injectable(symbol_1.InjSymbol.TemplateController),
        __param(0, saber_ioc_1.Inject(symbol_1.InjSymbol.TemplateService)),
        __metadata("design:paramtypes", [Object])
    ], TemplateController);
    return TemplateController;
}());
exports.TemplateController = TemplateController;
