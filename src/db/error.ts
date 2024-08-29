export default class DBError extends Error {
  constructor(error: any, service?: string) {
    super(error);
    const message = error instanceof Error ? error.message : error;
    this.message = `DBError[${service ?? "Unknown"}]: ${message}`;
  }
}
