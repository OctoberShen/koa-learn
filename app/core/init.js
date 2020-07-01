const requireDirectory = require('require-directory');
const Router = require('koa-router');

class InitManager {
  // 入口方法
  static initCore(app) {
    InitManager.app = app;
    InitManager.initLoadRouters();
    InitManager.loadHttpException();
    InitManager.loadEnv();
  }
  static initLoadRouters() {
    // process.cwd() 返回项目根目录
    const apiDirectory = `${process.cwd()}/app/api`
    requireDirectory(module, apiDirectory, {
      visit: whenRouterLoad
    });

    function whenRouterLoad(obj) {
      if(obj instanceof Router) {
        InitManager.app.use(obj.routes());
      } else if (typeof obj === "object") {
        // 兼容 module.exports 导出对象的写法
        for (let k in obj) {
          if (obj[k] instanceof Router) {
            InitManager.app.use(obj[k].routes());
          }
        }
      }
    }
  }

  static loadHttpException() {
    const errors = require('./http-exception');
    global.errs = errors;
  }
  static loadEnv() {
    const {env} = require('../../config/config');
    global.env = env;
  }
}

module.exports = InitManager
