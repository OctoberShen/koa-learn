const Koa = require('koa');
const initManager = require('./app/core/init');
const paster = require('koa-bodyparser');
const catchError = require('./middlewares/exception');

// 应用程序对象
const app = new Koa();
app.use(catchError);
app.use(paster());
initManager.initCore(app);

app.listen(3000);
