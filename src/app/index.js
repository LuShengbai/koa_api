const Koa = require('koa')


const app = new Koa()


const UserRouter = require('../router/user.router')

app.use(UserRouter.routes()).use(UserRouter.allowedMethods())

module.exports = app