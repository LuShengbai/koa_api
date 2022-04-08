const Koa = require('koa')

const app = new Koa()

app.use((ctx,next) => {
    ctx.body = "Hello World ggggggggggggggg"
})


app.listen(3000, () => {
  console.log('server is running at port 3000: http://localhost:3000')
})