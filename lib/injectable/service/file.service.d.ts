import { IFileService } from '../../interface/service/IFileService';
/**
 * @export
 * @class FileService
 */
export declare class FileService implements IFileService {
    createFile(filePath: string, content: string): Promise<void>;
    appendInBrace(filePath: string, content: string): Promise<void>;
}
