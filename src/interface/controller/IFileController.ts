export interface IFileController {
  create(dirPath: string, name: string, content: string): Promise<void>
  createInRoot(path: string, content: string): Promise<void>
  createInSrc(name: string, content: string): Promise<void>
  createInSrcInjectable(name: string, content: string): Promise<void>
  createInSrcInterface(name: string, content: string): Promise<void>
  appendInBrace(fileContent: string, appendContent: string): void
  appendSIOCModule(Name: string, fileContent: string): Promise<void>
  unshiftContent(appendContent: string): Promise<void>
  testSIOCModule(Name: string): boolean
}
