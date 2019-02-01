import { Injectable } from 'saber-ioc'
import { InjSymbol } from '../../symbol/symbol'
import { IPathService } from '../../interface/service/IPathService'
/**
 * PathService
 *
 * @export
 * @class PathService
 */
@Injectable(InjSymbol.PathService)
export class PathService implements IPathService {
  readonly root: string = `${process.cwd()}/__test__`
  readonly src: string = `${this.root}/src`
}
