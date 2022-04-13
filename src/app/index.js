const Koa = require('koa')
const Koabody = require('koa-body')
const KoaStatic = require('koa-static')
const parameter = require('koa-parameter')
const { historyApiFallback } = require('koa2-connect-history-api-fallback')

const path = require('path')

const app = new Koa()

const Router = require('../router')

app.use(historyApiFallback({
    index: '/index.html'
}))


app.use(Koabody({
    multipart: true,
    formidable: {
        uploadDir: './src/uploads',
        keepExtensions: true,
        
    }
}))

app.use(parameter(app))


app.use(KoaStatic(path.join(__dirname, '../uploads')))
app.use(Router.routes()).use(Router.allowedMethods())




module.exports = app