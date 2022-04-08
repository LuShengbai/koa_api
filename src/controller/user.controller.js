const {createUser,login,selectAll} = require('../service/user.service')


class UserController {
    // 注册
    async register(ctx, next) {
        // console.log(ctx.request.body)

        const {user_name, password} = ctx.request.body
        
        const result = await createUser(user_name, password)


        ctx.body = result
    }

    // 登录
    async login(ctx, next)  {
        const {user_name, password} = ctx.request.body

        const result = await login(user_name, password)

        ctx.body = result
    }

    // 查询所有用户
    async selectAll(ctx, next) {
        const result = await selectAll()

        ctx.body = result
    }
}

module.exports = new UserController()