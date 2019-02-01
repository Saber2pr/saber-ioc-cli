import { IFileService } from '../../interface/service/IFileService';
import { IPathService } from '../../interface/service/IPathService';
import { IFileController } from '../../interface/controller/IFileController';
import { IPathSrcService } from '../../interface/service/IPathSrcService';
export declare class FileController implements IFileController {
    private FileService;
    private PathService;
    private PathSrcService;
    constructor(FileService: IFileService, PathService: IPathService, PathSrcService: IPathSrcService);
    create(dirPath: string, name: string, content: string): void;
    createInRoot(name: string, content: string): void;
    createInSrc(name: string, content: string): void;
    createInSrcInjectable(name: string, content: string): void;
    createInSrcInterface(name: string, content: string): void;
}
