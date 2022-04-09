const Router = require('koa-router')
const {crpytPassword,checkPassword} = require('../middleware/user.middleware')
const {auth} = require('../middleware/auth.middleware')
const {register,login,selectAll,getUserByParams,deleteUser,updateUser, changePassword} = require('../controller/user.controller')

const router = new Router({prefix: '/user'})

// register
router.post('/register',crpytPassword, register)

// login
router.post('/login', checkPassword,login)

// selectAll
router.get('/selectAll',auth, selectAll)

// selectUserByParams
router.post('/selectUsrByParams', getUserByParams)

//deleteUser
router.delete('/deleteUser',auth, deleteUser)

//updateUser
router.patch('/updateUser',auth,crpytPassword, updateUser)

//change password
router.patch('/changePassword',auth,crpytPassword, changePassword)


module.exports = router


