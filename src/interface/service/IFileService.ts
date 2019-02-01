export interface IFileService {
  createFile(filePath: string, content: string): Promise<void>
  appendInBrace(filePath: string, content: string): Promise<void>
}
