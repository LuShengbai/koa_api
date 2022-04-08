const Koa = require('koa')
const Koabody = require('koa-body')

const app = new Koa()


const UserRouter = require('../router/user.router')

app.use(Koabody())

app.use(UserRouter.routes()).use(UserRouter.allowedMethods())

module.exports = app