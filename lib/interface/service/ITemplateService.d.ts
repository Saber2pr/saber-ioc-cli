export declare type TemplateType = 'Service' | 'Controller';
export interface ITemplateService {
    getServiceName(name: string): string;
    getIServiceName(name: string): string;
    getControllerName(name: string): string;
    getIControllerName(name: string): string;
    getServiceTemplate(name: string): string;
    getControllerTemplate(name: string): string;
    getInterfaceTemplate(name: string): string;
    getSymbolTemplate(): string;
    getSymbolAppended(name: string, type: TemplateType): string;
}
