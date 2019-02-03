import { Injectable } from 'saber-ioc'
import { File, Path } from 'saber-node'
import { InjSymbol } from '../../symbol/symbol'
import { IFileService } from '../../interface/service/IFileService'

@Injectable(InjSymbol.FileService)
export class FileService implements IFileService {
  @PathExistCheck()
  async createFile(filePath: string, content: string) {
    await File.createFile(filePath, content)
  }
  async appendSIOCSymbolInBrace(filePath: string, content: string) {
    await File.joinFile(filePath, 'export namespace InjSymbol {', content)
  }
  async unshiftContent(filePath: string, appendContent: string) {
    const res = await File.read(filePath)
    await File.createFile(filePath, `${appendContent}\n${res}`)
  }
  async appendSIOCModule(filePath: string, appendContent: string) {
    const res = await File.read(filePath)
    const target = 'SaIOC.Container('
    const targetIndex = res.indexOf(target)
    const pos = targetIndex + target.length
    const bas = res.charAt(pos)
    let append: string
    if (bas === ')') {
      append = appendContent
    } else {
      append = `${appendContent},`
    }
    const anchor = res.slice(pos)
    const next = res.replace(anchor, append.concat(anchor))
    await File.createFile(filePath, next)
  }
}

function PathExistCheck(): MethodDecorator {
  return (target, key) => {
    const origin: Function = Reflect.get(target, key)
    Reflect.set(target, key, (...args: any[]) => {
      const checkParam: string = args[0]
      if (Path.isExist(checkParam)) {
        throw new Error(`path is existed!${checkParam}`)
      }
      return Reflect.apply(origin, target, args)
    })
    return <any>origin
  }
}
