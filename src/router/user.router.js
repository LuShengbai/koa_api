const Router = require('koa-router')

const {register,login} = require('../controller/user.controller')

const router = new Router({prefix: '/user'})

// register
router.post('/register', register)

// login
router.post('/login', login)

module.exports = router

