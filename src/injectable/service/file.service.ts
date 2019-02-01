import { Injectable } from 'saber-ioc'
import { File, Path } from 'saber-node'
import { InjSymbol } from '../../symbol/symbol'
import { IFileService } from '../../interface/service/IFileService'
/**
 * @export
 * @class FileService
 */
@Injectable(InjSymbol.FileService)
export class FileService implements IFileService {
  @PathExistCheck()
  createFile(filePath: string, content: string) {
    File.createFile(filePath, content)
  }
}
/**
 * @returns {MethodDecorator}
 */
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
