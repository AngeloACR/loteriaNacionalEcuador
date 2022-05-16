const errorHandler = {};

class exalogicError extends Error {
  constructor(message, code, data) {
    super(message);
    this.name = "exalogicError";
    this.code = code;
    this.data = data;
  }
}

module.exports = {
  errorHandler,
  exalogicError,
};
