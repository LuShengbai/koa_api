const {createUser} = require('../service/user.service')


class UserController {
    // 注册
    async register(ctx, next) {
        // console.log(ctx.request.body)

        const {user_name, password} = ctx.request.body
        
        const result = await createUser(user_name, password)

        console.log(result);

        ctx.body = {
            code: 200,
            msg: result
        }
    }

    // 登录
    async login(ctx, next) {
        ctx.body = {
            code: 200,
            msg: '登录成功'
        }
    }
}

module.exports = new UserController()