export interface IFileService {
    createFile(filePath: string, content: string): Promise<void>;
    appendInBrace(filePath: string, content: string): Promise<void>;
    appendSIOCModule(filePath: string, appendContent: string): Promise<void>;
    unshiftContent(filePath: string, appendContent: string): Promise<void>;
}
