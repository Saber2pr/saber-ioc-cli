#!/usr/bin/env node
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
var symbol_1 = require("./symbol/symbol");
var file_controller_1 = require("./injectable/controller/file.controller");
var file_service_1 = require("./injectable/service/file.service");
var template_controller_1 = require("./injectable/controller/template.controller");
var path_service_1 = require("./injectable/service/path.service");
var pathsrc_service_1 = require("./injectable/service/pathsrc.service");
var template_service_1 = require("./injectable/service/template.service");
var Application = /** @class */ (function () {
    function Application(FileController, TemplateController) {
        this.FileController = FileController;
        this.TemplateController = TemplateController;
    }
    Application.prototype.main = function () {
        var Name = 'Hello';
        var ServiceName = "" + this.TemplateController.getServiceName(Name);
        var ControllerName = "" + this.TemplateController.getControllerName(Name);
        var IServiceName = "" + this.TemplateController.getIServiceName(Name);
        var IControllerName = "" + this.TemplateController.getIControllerName(Name);
        var ServiceTemplate = this.TemplateController.getServiceTemplate(Name);
        var ControllerTemplate = this.TemplateController.getControllerTemplate(Name);
        var IServiceTemplate = this.TemplateController.getInterfaceTemplate(IServiceName, 'Service');
        var IControllerTemplate = this.TemplateController.getInterfaceTemplate(IControllerName, 'Controller');
        this.FileController.createInSrcInjectable(this.TemplateController.unshiftType(ServiceName, 'Service'), ServiceTemplate);
        this.FileController.createInSrcInjectable(this.TemplateController.unshiftType(ControllerName, 'Controller'), ControllerTemplate);
        this.FileController.createInSrcInterface(this.TemplateController.unshiftType(IServiceName, 'Service'), IServiceTemplate);
        this.FileController.createInSrcInterface(this.TemplateController.unshiftType(IControllerName, 'Controller'), IControllerTemplate);
    };
    Application = __decorate([
        saber_ioc_1.Bootstrap,
        __param(0, saber_ioc_1.Inject(symbol_1.InjSymbol.FileController)),
        __param(1, saber_ioc_1.Inject(symbol_1.InjSymbol.TemplateController)),
        __metadata("design:paramtypes", [Object, Object])
    ], Application);
    return Application;
}());
new saber_ioc_1.SaIOC.Container(Application, file_controller_1.FileController, file_service_1.FileService, template_controller_1.TemplateController, path_service_1.PathService, pathsrc_service_1.PathSrcService, template_service_1.TemplateService).run();
