import { Injectable, Inject } from 'saber-ioc'
import { InjSymbol } from '../../symbol/symbol'
import { IPathService } from '../../interface/service/IPathService'
import { IPathSrcService } from '../../interface/service/IPathSrcService'

/**
 * PathSrcService
 *
 * @export
 * @class PathSrcService
 */
@Injectable(InjSymbol.PathSrcService)
export class PathSrcService implements IPathSrcService {
  constructor(
    @Inject(InjSymbol.PathService) private PathService: IPathService
  ) {}
  readonly index: string = `${this.PathService.src}/index.ts`
  readonly injectable: string = `${this.PathService.src}/injectable`
  readonly interface: string = `${this.PathService.src}/interface`
}
