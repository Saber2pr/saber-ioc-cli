import { IPathService } from '../../interface/service/IPathService';
import { IPathSrcService } from '../../interface/service/IPathSrcService';
/**
 * PathSrcService
 *
 * @export
 * @class PathSrcService
 */
export declare class PathSrcService implements IPathSrcService {
    private PathService;
    constructor(PathService: IPathService);
    readonly index: string;
    readonly injectable: string;
    readonly interface: string;
    readonly symbol: string;
}
