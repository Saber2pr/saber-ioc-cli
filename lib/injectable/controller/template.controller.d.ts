import { ITemplateService, TemplateType } from '../../interface/service/ITemplateService';
import { ITemplateController } from '../../interface/controller/ITemplateController';
export declare class TemplateController implements ITemplateController {
    private TemplateService;
    constructor(TemplateService: ITemplateService);
    getServiceName(name: string): string;
    getIServiceName(name: string): string;
    getControllerName(name: string): string;
    getIControllerName(name: string): string;
    getServiceTemplate(name: string): string;
    getControllerTemplate(name: string): string;
    getInterfaceTemplate(name: string): string;
    unshiftType(name: string, type: TemplateType): string;
    getSymbolTemplate(): string;
    getSymbolAppended(name: string, type: TemplateType): string;
    getIndexTemplate(): string;
    getModuleHeader(name: string): string;
}
