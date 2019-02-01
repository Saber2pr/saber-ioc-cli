#!/usr/bin/env node
import { SaIOC, Inject, Bootstrap } from 'saber-ioc'
import { InjSymbol } from './symbol/symbol'
import { IFileController } from './interface/controller/IFileController'
import { FileController } from './injectable/controller/file.controller'
import { FileService } from './injectable/service/file.service'
import { ITemplateController } from './interface/controller/ITemplateController'
import { TemplateController } from './injectable/controller/template.controller'
import { PathService } from './injectable/service/path.service'
import { PathSrcService } from './injectable/service/pathsrc.service'
import { TemplateService } from './injectable/service/template.service'
import { Terminal } from 'saber-node'

@Bootstrap
class Application {
  constructor(
    @Inject(InjSymbol.FileController) private FileController: IFileController,
    @Inject(InjSymbol.TemplateController)
    private TemplateController: ITemplateController
  ) {}
  async getParams() {
    return Terminal.getParams()
  }
  async createModule(Name: string) {
    const ServiceName = this.TemplateController.getServiceName(Name)
    const ControllerName = this.TemplateController.getControllerName(Name)
    const IServiceName = this.TemplateController.getIServiceName(Name)
    const IControllerName = this.TemplateController.getIControllerName(Name)

    const ServiceTemplate = this.TemplateController.getServiceTemplate(Name)
    const ControllerTemplate = this.TemplateController.getControllerTemplate(
      Name
    )
    const IServiceTemplate = this.TemplateController.getInterfaceTemplate(
      IServiceName,
      'Service'
    )
    const IControllerTemplate = this.TemplateController.getInterfaceTemplate(
      IControllerName,
      'Controller'
    )

    await this.FileController.createInSrcInjectable(
      this.TemplateController.unshiftType(ServiceName, 'Service'),
      ServiceTemplate
    )
    await this.FileController.createInSrcInjectable(
      this.TemplateController.unshiftType(ControllerName, 'Controller'),
      ControllerTemplate
    )
    await this.FileController.createInSrcInterface(
      this.TemplateController.unshiftType(IServiceName, 'Service'),
      IServiceTemplate
    )
    await this.FileController.createInSrcInterface(
      this.TemplateController.unshiftType(IControllerName, 'Controller'),
      IControllerTemplate
    )
    const SymbolTemplate = this.TemplateController.getSymbolTemplate()
    const ServiceSymbolAppendedTemplate = this.TemplateController.getSymbolAppended(
      Name,
      'Service'
    )
    const ControllerSymbolAppendedTemplate = this.TemplateController.getSymbolAppended(
      Name,
      'Controller'
    )
    this.FileController.appendInBrace(
      SymbolTemplate,
      `${ServiceSymbolAppendedTemplate}\n  ${ControllerSymbolAppendedTemplate}`
    )
    const indexTemplate = this.TemplateController.getIndexTemplate()
    await this.FileController.appendSIOCModule(ServiceName, indexTemplate)
    await this.FileController.appendSIOCModule(ControllerName, indexTemplate)
    const ModuleHeader = this.TemplateController.getModuleHeader(Name)
    await this.FileController.unshiftContent(ModuleHeader)
  }
  async main() {
    const params = await this.getParams()
    params.forEach(async name => await this.createModule(name))
  }
}

new SaIOC.Container(
  Application,
  FileController,
  FileService,
  TemplateController,
  PathService,
  PathSrcService,
  TemplateService
).run()
