import { ITemplateService } from '../../interface/service/ITemplateService';
export declare class TemplateService implements ITemplateService {
    private readonly libHeader;
    private readonly injSymbolHeader;
    private readonly commonHeader;
    private getInterfaceHeader;
    getServiceName(name: string): string;
    getIServiceName(name: string): string;
    getControllerName(name: string): string;
    getIControllerName(name: string): string;
    getServiceTemplate(name: string): string;
    getControllerTemplate(name: string): string;
    getInterfaceTemplate(name: string): string;
}
