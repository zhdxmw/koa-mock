const router = require('koa-router')()
var Mock = require('mockjs')
const Random = Mock.Random;

// router.prefix('/index')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  // ctx.body = 'koa2 string'
  const produceNewsData = function() {
    let articles = [];
    for(let i = 0; i< 50; i++) {
      // let newArticleObject = {
      //   title: Random.csentence(5, 30), //  Random.csentence( min, max )
      //   author: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      //   age: 
      // }
      let kk = Mock.mock({
        title: '@title',
        author: '@name',
        age: '@integer(1,70)',
        ip: '@ip'
    })
      articles.push(kk)
    }
    return {
        articles: articles
    }
  }
  ctx.body = await  produceNewsData()
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
