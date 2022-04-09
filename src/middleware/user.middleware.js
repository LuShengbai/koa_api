const bcrypt = require('bcryptjs')

const userdao = require('../dao/user.dao');

const crpytPassword = async (ctx, next) => {
    const { password } = ctx.request.body

    if (!password) {
        ctx.request.body.password = ""

    }else{

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
    
        ctx.request.body.password = hash
    }

   
    await next()
}


const checkPassword = async (ctx, next) => {

    const { user_name, password } = ctx.request.body

    //check user_name and  password is not null
    if (!user_name || !password) {
        ctx.status = 400
        ctx.body = {
            code: -1,
            msg: '用户名或密码不能为空'
        }

        return
    }


    try {
      const  result = await userdao.selectUserByName(user_name);

        //check result is not null
        if (!result) {
            ctx.status = 400
            ctx.body = {
                code: -1,
                msg: '用户名不存在'
            }
            return
        }

        //check password is right.

        const isRight = bcrypt.compareSync(password, result.password.trim())

        if (!isRight) {
            ctx.status = 400
            ctx.body = {
                code: -1,
                msg: '密码错误'
            }
            return
        }

    } catch (error) {
        ctx.status = 400
        ctx.body = {
            code: -1,
            msg: '登录失败'
        }
        return

    }


    await next()

}

module.exports = { crpytPassword, checkPassword }