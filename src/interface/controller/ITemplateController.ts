import { TemplateType } from '../service/ITemplateService'

export interface ITemplateController {
  getServiceName(name: string): string
  getIServiceName(name: string): string
  getControllerName(name: string): string
  getIControllerName(name: string): string
  getServiceTemplate(name: string): string
  getControllerTemplate(name: string): string
  getInterfaceTemplate(name: string, type: TemplateType): string
  unshiftType(name: string, type: TemplateType): string
  getSymbolTemplate(): string
  getSymbolAppended(name: string, type: TemplateType): string
}
