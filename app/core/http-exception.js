class HttpException extends Error{
  constructor(msg='服务器错误', err=10016, code=400) {
    super();
    this.err = err;
    this.code = code;
    this.msg = msg;
  }
}

class ParameterException extends HttpException {
  constructor(msg, errCode) {
    super();
    this.code = 400;
    this.msg = msg || '参数错误';
    this.errCode = errCode || 10016;
  }
}

module.exports = {
  HttpException,
  ParameterException
};
