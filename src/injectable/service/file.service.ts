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
  async appendInBrace(filePath: string, content: string) {
    const res = await File.read(filePath)
    const result = res.replace('}', `  ${content.concat('\n}')}`)
    await File.createFile(filePath, result)
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
