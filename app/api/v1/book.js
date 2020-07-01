const Router = require('koa-router');
const router = new Router();
router.get('/book/laster', (ctx, next) => {
  ctx.body = {
    key: 'book'
  }
})

module.exports = router
