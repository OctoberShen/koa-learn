const {HttpException} = require('../app/core/http-exception');
const catchError = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    if(global.env === 'dev') {
      throw error
    }
    if(error instanceof HttpException) {
      ctx.body = {
        msg: error.msg,
        err: error.err,
        request: `${ctx.method} ${ctx.path}`,
      }
      ctx.status = error.code;
    }else {
      ctx.body = {
        msg: 'unkown error',
        err: 9999,
        request: `${ctx.method} ${ctx.path}`,
      }
      ctx.status = 500;
    }
  }
}
// AOP 面向切面编程 --全局异常处理

module.exports = catchError;
