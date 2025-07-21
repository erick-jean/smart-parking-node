declare module 'yamljs' {
  const yamljs: {
    load(path: string): any;
    parse(yaml: string): any;
    stringify(obj: any, inline?: number, spaces?: number): string;
  };
  export default yamljs;
}
