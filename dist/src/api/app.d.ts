import express from 'express';
declare class App {
    app: express.Express;
    constructor();
    private config;
    start(PORT: string | number): void;
}
export { App };
