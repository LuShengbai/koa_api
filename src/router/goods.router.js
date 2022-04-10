const Router = require('koa-router')
const {auth,hasAdminPermission} = require('../middleware/auth.middleware')

const {checkFileType}  = require('../middleware/checkFileType.middle')
const {validator}  = require('../middleware/goods.middle')

const {upload,addGoods} = require('../controller/goods.controller')

const router = new Router({prefix: '/goods'})

//上传图片
router.post('/upload',auth,hasAdminPermission,checkFileType, upload)

//post a new goods
router.post('/addGoods',auth,hasAdminPermission,validator,addGoods)

module.exports = router

