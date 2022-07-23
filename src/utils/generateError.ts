export class GenerateError extends Error {
  constructor(private statusCode: number, message: string) {
    super(message);
  }
}