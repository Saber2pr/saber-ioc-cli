export interface IFileController {
  create(dirPath: string, name: string, content: string): void
  createInRoot(path: string, content: string): void
  createInSrc(name: string, content: string): void
  createInSrcInjectable(name: string, content: string): void
  createInSrcInterface(name: string, content: string): void
  appendInBrace(fileContent: string, appendContent: string): void
  appendSIOCModule(Name: string, fileContent: string): Promise<void>
  unshiftContent(appendContent: string): Promise<void>
}
