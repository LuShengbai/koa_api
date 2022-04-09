const Router = require('koa-router')
const {crpytPassword,checkPassword} = require('../middleware/user.middleware')
const {auth} = require('../middleware/auth.middleware')
const {register,login,selectAll,getUserByParams,deleteUser,updateUser} = require('../controller/user.controller')

const router = new Router({prefix: '/user'})

// register
router.post('/register',crpytPassword, register)

// login
router.post('/login', checkPassword,login)

// selectAll
router.get('/selectAll', selectAll)

// selectUserByParams
router.post('/selectUsrByParams', getUserByParams)

//deleteUser
router.delete('/deleteUser', deleteUser)

//updateUser
router.patch('/updateUser',auth,crpytPassword, updateUser)



module.exports = router


