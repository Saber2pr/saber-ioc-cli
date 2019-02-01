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
Object.defineProperty(exports, "__esModule", { value: true });
var saber_ioc_1 = require("saber-ioc");
var saber_node_1 = require("saber-node");
var symbol_1 = require("../../symbol/symbol");
/**
 * @export
 * @class FileService
 */
var FileService = /** @class */ (function () {
    function FileService() {
    }
    FileService.prototype.createFile = function (filePath, content) {
        saber_node_1.File.createFile(filePath, content);
    };
    __decorate([
        PathExistCheck(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", void 0)
    ], FileService.prototype, "createFile", null);
    FileService = __decorate([
        saber_ioc_1.Injectable(symbol_1.InjSymbol.FileService)
    ], FileService);
    return FileService;
}());
exports.FileService = FileService;
/**
 * @returns {MethodDecorator}
 */
function PathExistCheck() {
    return function (target, key) {
        var origin = Reflect.get(target, key);
        Reflect.set(target, key, function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var checkParam = args[0];
            if (saber_node_1.Path.isExist(checkParam)) {
                throw new Error("path is existed!" + checkParam);
            }
            return Reflect.apply(origin, target, args);
        });
        return origin;
    };
}
