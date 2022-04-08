class UserController {
    async register(ctx, next) {
        ctx.body = {
            code: 200,
            msg: '注册成功'
        }
    }

    async login(ctx, next) {
        ctx.body = {
            code: 200,
            msg: '登录成功'
        }
    }
}

module.exports = new UserController()