const errorHandler = {};

class loteriaError extends Error {
  constructor(message, code, errorData) {
    super(message);
    this.name = "loteriaError";
    this.code = code;
    this.data = errorData;
  }
}
module.exports = {
  errorHandler,
  loteriaError,
};
