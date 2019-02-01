import { Injectable, Inject } from 'saber-ioc'
import { InjSymbol } from '../../symbol/symbol'
import { IFileService } from '../../interface/service/IFileService'
import { Terminal, Path } from 'saber-node'
import { IPathService } from '../../interface/service/IPathService'
import { IFileController } from '../../interface/controller/IFileController'
import { IPathSrcService } from '../../interface/service/IPathSrcService'

@Injectable(InjSymbol.FileController)
export class FileController implements IFileController {
  constructor(
    @Inject(InjSymbol.FileService) private FileService: IFileService,
    @Inject(InjSymbol.PathService) private PathService: IPathService,
    @Inject(InjSymbol.PathSrcService) private PathSrcService: IPathSrcService
  ) {}
  create(dirPath: string, name: string, content: string) {
    try {
      this.FileService.createFile(`${dirPath}/${name}`, content)
    } catch (error) {
      Terminal.Print.error((<Error>error).message)
    }
  }
  createInRoot(name: string, content: string) {
    this.create(this.PathService.root, `${name}.ts`, content)
  }
  createInSrc(name: string, content: string) {
    this.create(this.PathService.src, `${name}.ts`, content)
  }
  createInSrcInjectable(name: string, content: string) {
    this.create(this.PathSrcService.injectable, `${name}.ts`, content)
  }
  createInSrcInterface(name: string, content: string) {
    this.create(this.PathSrcService.interface, `${name}.ts`, content)
  }
  createInSrcSymbol(name: string, content: string) {
    this.create(this.PathSrcService.symbol, `${name}.ts`, content)
  }
  async appendInBrace(fileContent: string, appendContent: string) {
    if (Path.isExist(this.PathSrcService.symbol)) {
      await this.FileService.appendInBrace(
        this.PathSrcService.symbol,
        appendContent
      )
    } else {
      await this.FileService.createFile(this.PathSrcService.symbol, fileContent)
      await this.FileService.appendInBrace(
        this.PathSrcService.symbol,
        appendContent
      )
    }
  }
  async appendSIOCModule(Name: string, fileContent: string) {
    if (Path.isExist(this.PathSrcService.index)) {
      await this.FileService.appendSIOCModule(this.PathSrcService.index, Name)
    } else {
      await this.FileService.createFile(this.PathSrcService.index, fileContent)
      await this.FileService.appendSIOCModule(this.PathSrcService.index, Name)
    }
  }
  async unshiftContent(appendContent: string) {
    this.FileService.unshiftContent(this.PathSrcService.index, appendContent)
  }
}
