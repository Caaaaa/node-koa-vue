const router = require('koa-router')()

router.get('/index', async (ctx, next) => {
    await ctx.render('index.html')
}).get('/about', async (ctx, next) => {
    await ctx.render('about.html')
})

module.exports = router