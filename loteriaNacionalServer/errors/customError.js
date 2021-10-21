class exalogicError extends Error {
  constructor(message, code, data) {
    super(message);
    this.name = "exalogicError";
    this.code = code;
    this.data = data;
  }
}

module.exports.exalogicError = exalogicError;

class loteriaError extends Error {
  constructor(message, code, errorData) {
    super(message);
    this.name = "loteriaError";
    this.code = code;
    this.data = errorData;
  }
}
module.exports.loteriaError = loteriaError;

class apiError extends Error {
  constructor(message, code, errorData) {
    super(message);
    this.name = "apiError";
    this.code = code;
    this.data = errorData;
  }
}

module.exports.apiError = apiError;
