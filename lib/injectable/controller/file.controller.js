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
var symbol_1 = require("../../symbol/symbol");
var saber_node_1 = require("saber-node");
var FileController = /** @class */ (function () {
    function FileController(FileService, PathService, PathSrcService) {
        this.FileService = FileService;
        this.PathService = PathService;
        this.PathSrcService = PathSrcService;
    }
    FileController.prototype.create = function (dirPath, name, content) {
        try {
            this.FileService.createFile(dirPath + "/" + name, content);
        }
        catch (error) {
            saber_node_1.Terminal.Print.error(error.message);
        }
    };
    FileController.prototype.createInRoot = function (name, content) {
        this.create(this.PathService.root, name + ".ts", content);
    };
    FileController.prototype.createInSrc = function (name, content) {
        this.create(this.PathService.src, name + ".ts", content);
    };
    FileController.prototype.createInSrcInjectable = function (name, content) {
        this.create(this.PathSrcService.injectable, name + ".ts", content);
    };
    FileController.prototype.createInSrcInterface = function (name, content) {
        this.create(this.PathSrcService.interface, name + ".ts", content);
    };
    FileController.prototype.createInSrcSymbol = function (name, content) {
        this.create(this.PathSrcService.symbol, name + ".ts", content);
    };
    FileController.prototype.appendInBrace = function (fileContent, appendContent) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!saber_node_1.Path.isExist(this.PathSrcService.symbol)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.FileService.appendInBrace(this.PathSrcService.symbol, appendContent)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 2: return [4 /*yield*/, this.FileService.createFile(this.PathSrcService.symbol, fileContent)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.FileService.appendInBrace(this.PathSrcService.symbol, appendContent)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    FileController.prototype.appendSIOCModule = function (Name, fileContent) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!saber_node_1.Path.isExist(this.PathSrcService.index)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.FileService.appendSIOCModule(this.PathSrcService.index, Name)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 2: return [4 /*yield*/, this.FileService.createFile(this.PathSrcService.index, fileContent)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.FileService.appendSIOCModule(this.PathSrcService.index, Name)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    FileController.prototype.unshiftContent = function (appendContent) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.FileService.unshiftContent(this.PathSrcService.index, appendContent);
                return [2 /*return*/];
            });
        });
    };
    FileController = __decorate([
        saber_ioc_1.Injectable(symbol_1.InjSymbol.FileController),
        __param(0, saber_ioc_1.Inject(symbol_1.InjSymbol.FileService)),
        __param(1, saber_ioc_1.Inject(symbol_1.InjSymbol.PathService)),
        __param(2, saber_ioc_1.Inject(symbol_1.InjSymbol.PathSrcService)),
        __metadata("design:paramtypes", [Object, Object, Object])
    ], FileController);
    return FileController;
}());
exports.FileController = FileController;
