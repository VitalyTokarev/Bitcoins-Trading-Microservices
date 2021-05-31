export class ErrorHandler extends Error {
    code: number;
    message: string;
    constructor (code, message) {
      super();
      this.code = code;
      this.message = message;
    }
}

export function error (err: ErrorHandler): ErrorHandler {
  return new ErrorHandler(err.code || 500, err.message || err);
};
