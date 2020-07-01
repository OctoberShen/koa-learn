const Router = require('koa-router');
const router = new Router();
const {PositiveIntValidator} = require('../../validator/validator')
router.post('/v1/:id/classic/laster', (ctx, next) => {
  const path = ctx.params;
  const query = ctx.request.query;
  const header = ctx.request.header;
  const body = ctx.request.body;

  const v = new PositiveIntValidator().validate(ctx);

  ctx.body = {
    key: 'classic'
  }
 // throw new HttpException('error msg', 10016, 400);
 //  throw new global.errs.ParameterException();
})

module.exports = {
  classic: router
}


