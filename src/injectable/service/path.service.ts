import { Injectable } from 'saber-ioc'
import { InjSymbol } from '../../symbol/symbol'
import { IPathService } from '../../interface/service/IPathService'

@Injectable(InjSymbol.PathService)
export class PathService implements IPathService {
  readonly root: string = `${process.cwd()}`
  readonly src: string = `${this.root}/src`
}
