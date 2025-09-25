class HttpException extends Error {
  constructor(status, message, data) {
    let msg = message?.message ? message.message : message;
    super(msg);
    this.status = status;
    this.message = msg;
    this.data = data;
  }
}

module.exports = HttpException;
