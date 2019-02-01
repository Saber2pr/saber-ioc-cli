import { Injectable, Inject } from 'saber-ioc'
import { InjSymbol } from '../../symbol/symbol'
import {
  ITemplateService,
  TemplateType
} from '../../interface/service/ITemplateService'
import { ITemplateController } from '../../interface/controller/ITemplateController'

@Injectable(InjSymbol.TemplateController)
export class TemplateController implements ITemplateController {
  constructor(
    @Inject(InjSymbol.TemplateService) private TemplateService: ITemplateService
  ) {}
  getServiceName(name: string) {
    return this.TemplateService.getServiceName(name)
  }
  getIServiceName(name: string) {
    return this.TemplateService.getIServiceName(name)
  }
  getControllerName(name: string) {
    return this.TemplateService.getControllerName(name)
  }
  getIControllerName(name: string) {
    return this.TemplateService.getIControllerName(name)
  }
  getServiceTemplate(name: string) {
    return this.TemplateService.getServiceTemplate(name)
  }
  getControllerTemplate(name: string) {
    return this.TemplateService.getControllerTemplate(name)
  }
  getInterfaceTemplate(name: string) {
    return this.TemplateService.getInterfaceTemplate(name)
  }
  unshiftType(name: string, type: TemplateType) {
    return `${type}/${name}`
  }
  getSymbolTemplate() {
    return this.TemplateService.getSymbolTemplate()
  }
  getSymbolAppended(name: string, type: TemplateType) {
    return this.TemplateService.getSymbolAppended(name, type)
  }
}
