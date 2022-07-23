export class GenerateError extends Error {
  constructor(public statusCode: number, message: string) {
    super(message);
  }
}