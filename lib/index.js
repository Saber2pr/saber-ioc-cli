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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var saber_node_1 = require("saber-node");
var Application = /** @class */ (function () {
    function Application(FileController, TemplateController) {
        this.FileController = FileController;
        this.TemplateController = TemplateController;
    }
    Application.prototype.getParams = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, saber_node_1.Terminal.getParams()];
            });
        });
    };
    Application.prototype.createModule = function (Name) {
        return __awaiter(this, void 0, void 0, function () {
            var ServiceName, ControllerName, IServiceName, IControllerName, ServiceTemplate, ControllerTemplate, IServiceTemplate, IControllerTemplate, SymbolTemplate, ServiceSymbolAppendedTemplate, ControllerSymbolAppendedTemplate, indexTemplate, ModuleHeader;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ServiceName = this.TemplateController.getServiceName(Name);
                        ControllerName = this.TemplateController.getControllerName(Name);
                        IServiceName = this.TemplateController.getIServiceName(Name);
                        IControllerName = this.TemplateController.getIControllerName(Name);
                        ServiceTemplate = this.TemplateController.getServiceTemplate(Name);
                        ControllerTemplate = this.TemplateController.getControllerTemplate(Name);
                        IServiceTemplate = this.TemplateController.getInterfaceTemplate(IServiceName, 'Service');
                        IControllerTemplate = this.TemplateController.getInterfaceTemplate(IControllerName, 'Controller');
                        return [4 /*yield*/, this.FileController.createInSrcInjectable(this.TemplateController.unshiftType(ServiceName, 'Service'), ServiceTemplate)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.FileController.createInSrcInjectable(this.TemplateController.unshiftType(ControllerName, 'Controller'), ControllerTemplate)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.FileController.createInSrcInterface(this.TemplateController.unshiftType(IServiceName, 'Service'), IServiceTemplate)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.FileController.createInSrcInterface(this.TemplateController.unshiftType(IControllerName, 'Controller'), IControllerTemplate)];
                    case 4:
                        _a.sent();
                        SymbolTemplate = this.TemplateController.getSymbolTemplate();
                        ServiceSymbolAppendedTemplate = this.TemplateController.getSymbolAppended(Name, 'Service');
                        ControllerSymbolAppendedTemplate = this.TemplateController.getSymbolAppended(Name, 'Controller');
                        this.FileController.appendInBrace(SymbolTemplate, ServiceSymbolAppendedTemplate + "\n  " + ControllerSymbolAppendedTemplate);
                        indexTemplate = this.TemplateController.getIndexTemplate();
                        return [4 /*yield*/, this.FileController.appendSIOCModule(ServiceName, indexTemplate)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.FileController.appendSIOCModule(ControllerName, indexTemplate)];
                    case 6:
                        _a.sent();
                        ModuleHeader = this.TemplateController.getModuleHeader(Name);
                        return [4 /*yield*/, this.FileController.unshiftContent(ModuleHeader)];
                    case 7:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Application.prototype.main = function () {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getParams()];
                    case 1:
                        params = _a.sent();
                        params.forEach(function (name) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.createModule(name)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); });
                        return [2 /*return*/];
                }
            });
        });
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
