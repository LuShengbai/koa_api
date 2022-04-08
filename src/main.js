const Koa = require('koa')


const env = require('./config/config.default')

const app = new Koa()

const port = env.APP_PORT

app.use((ctx, next) => {
  ctx.body = "Hello World FWFWFWFW"
})



app.listen(port, () => {
  console.log(`server is running at port ${port}: http://localhost:3000`)
})