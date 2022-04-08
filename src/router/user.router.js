const Router = require('koa-router')

const {register,login,selectAll,getUserByParams,deleteUser,updateUser} = require('../controller/user.controller')

const router = new Router({prefix: '/user'})

// register
router.post('/register', register)

// login
router.post('/login', login)

// selectAll
router.get('/selectAll', selectAll)

// selectUserByParams
router.post('/selectUsrByParams', getUserByParams)

//deleteUser
router.post('/deleteUser', deleteUser)

//updateUser
router.post('/updateUser', updateUser)



module.exports = router


