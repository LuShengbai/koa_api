const Router = require('koa-router')

const {register,login,selectAll} = require('../controller/user.controller')

const router = new Router({prefix: '/user'})

// register
router.post('/register', register)

// login
router.post('/login', login)

// selectAll
router.get('/selectAll', selectAll)



module.exports = router


