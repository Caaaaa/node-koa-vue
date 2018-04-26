const router = require('koa-router')()

// 前端页面
router.get('/index', async (ctx, next) => {
    await ctx.render('eWeb/index.html')
}).get('/about', async (ctx, next) => {
    await ctx.render('eWeb/about.html')
})

// 后台页面
router.get('/adminIndex', async (ctx, next) => {
    await ctx.render('aWeb/index.html')
}).get('/adminAbout', async (ctx, next) => {
    await ctx.render('aWeb/about.html')
})

module.exports = router