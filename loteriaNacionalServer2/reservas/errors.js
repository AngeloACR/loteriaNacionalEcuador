const errorHandler = {};

class apiError extends Error {
  constructor(message, code, errorData) {
    super(message);
    this.name = "apiError";
    this.code = code;
    this.data = errorData;
  }
}
module.exports = {
  errorHandler,
  apiError,
};
