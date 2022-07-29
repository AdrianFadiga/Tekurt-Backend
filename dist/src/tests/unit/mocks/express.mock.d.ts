/// <reference types="qs" />
import { Request, Response } from "express";
declare const _default: {
    mockRequest: () => Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    mockResponse: () => Response<any, Record<string, any>>;
};
export default _default;
