const errorHandler = {};

class alboranError extends Error {
  constructor(message, code, data) {
    super(message);
    this.name = "alboranError";
    this.code = code;
    this.data = data;
  }
}
module.exports = {
  errorHandler,
  alboranError,
};
