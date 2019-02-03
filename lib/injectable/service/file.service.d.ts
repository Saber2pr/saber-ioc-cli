import { IFileService } from '../../interface/service/IFileService';
export declare class FileService implements IFileService {
    createFile(filePath: string, content: string): Promise<void>;
    appendSIOCSymbolInBrace(filePath: string, content: string): Promise<void>;
    unshiftContent(filePath: string, appendContent: string): Promise<void>;
    appendSIOCModule(filePath: string, appendContent: string): Promise<void>;
}
