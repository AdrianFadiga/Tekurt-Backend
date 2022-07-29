export declare class GenerateError extends Error {
    statusCode: number;
    constructor(statusCode: number, message: string);
}
