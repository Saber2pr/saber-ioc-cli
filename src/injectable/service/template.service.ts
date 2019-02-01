import { Injectable } from 'saber-ioc'
import { InjSymbol } from '../../symbol/symbol'
import {
  TemplateType,
  ITemplateService
} from '../../interface/service/ITemplateService'

@Injectable(InjSymbol.TemplateService)
export class TemplateService implements ITemplateService {
  private readonly libHeader: string = `import { Injectable, Inject } from 'saber-ioc'`

  private readonly injSymbolHeader: string = `import { InjSymbol } from '../../symbol/symbol'`

  private readonly commonHeader: string = `${this.libHeader}
  ${this.injSymbolHeader}`

  private getInterfaceHeader(name: string, type: TemplateType) {
    return `import { I${name}${type} } from '../../interface/${type}/I${name}${type}'`
  }
  getServiceName(name: string) {
    return `${name}Service`
  }
  getIServiceName(name: string) {
    return `I${this.getServiceName(name)}`
  }
  getControllerName(name: string) {
    return `${name}Controller`
  }
  getIControllerName(name: string) {
    return `I${this.getControllerName(name)}`
  }
  getServiceTemplate(name: string) {
    const ServiceName = this.getServiceName(name)
    const IServiceName = this.getIServiceName(name)

    return `${this.commonHeader}
    ${this.getInterfaceHeader(name, 'Service')}
    
    @Injectable(InjSymbol.${ServiceName})
    export class ${ServiceName} implements ${IServiceName} {
      constructor(){}
    }`
  }
  getControllerTemplate(name: string) {
    const ControllerName = this.getControllerName(name)
    const IControllerName = this.getIControllerName(name)
    const ServiceName = this.getServiceName(name)
    const IServiceName = this.getIServiceName(name)

    return `${this.commonHeader}
    ${this.getInterfaceHeader(name, 'Controller')}
    ${this.getInterfaceHeader(name, 'Service')}
    
    @Injectable(InjSymbol.${ControllerName})
    export class ${ControllerName} implements ${IControllerName} {
      constructor(
        @Inject(InjSymbol.${ServiceName}) private ${ServiceName}: ${IServiceName}
      ){}
    }`
  }
  getInterfaceTemplate(name: string) {
    return `export interface ${name} {}`
  }
}
