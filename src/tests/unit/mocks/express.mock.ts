import { Request, Response } from "express";

type request = {
  body?: jest.Mock;
  params?: jest.Mock;
  headers?: jest.Mock;
}

type response = {
  send?: jest.Mock;
  status?: jest.Mock;
  json?: jest.Mock;
}

export default {
  mockRequest: () => {
    const req: request = {}
    req.body = jest.fn().mockReturnValue(req);
    req.params = jest.fn().mockReturnValue(req);
    req.headers = jest.fn().mockReturnValue(req);

    return req as unknown as Request;
  },

  mockResponse: () => {
    const res: response = {};
    res.send = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);

    return res as unknown as Response;
  }
}