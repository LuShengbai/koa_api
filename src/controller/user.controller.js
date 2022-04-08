const userdao = require('../dao/user.dao');


class UserController {
    // 注册
    async register(ctx, next) {
        // console.log(ctx.request.body)

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

        //check user_name is not exist
        const selecUser = await userdao.selectUserByName(user_name);

        if (selecUser) {
            ctx.status = 400
            ctx.body = {
                code: 400,
                msg: '用户名已存在'
            }

            return
        }

        //create user
        const result = await userdao.createUser(user_name, password);


        ctx.body = {
            code: 200,
            result: {
                id: result.id,
                user_name: result.user_name,
            },
            msg: '注册成功'
        }
    }

    // 登录
    async login(ctx, next) {
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

        const result = await userdao.selectUser(user_name, password);

        if (result) {
            ctx.status = 200
            ctx.body = {
                code: 200,
                msg: '登录成功'
            }
        } else {
            ctx.status = 400
            ctx.body = {
                code: 400,
                msg: '用户名或密码错误'
            }
        }


    }

    // 更新用户
    async updateUser(ctx, next) {
        const { user_name, password, is_admin } = ctx.request.body

        //check user_name is not null
        if (!user_name) {
            ctx.status = 400
            ctx.body = {
                code: -1,
                msg: '用户名不能为空'
            }

            return
        }

        const result = await userdao.updateUser(user_name, password, is_admin);

        if (!result[0]) {
            ctx.status = 400
            ctx.body = {
                code: 400,
                msg: '无此用户,更新失败'
            }
            return
        }

        ctx.body = {
            code: 200,
            result: result,
            msg: '修改成功'
        }
    }

    // 删除用户
    async deleteUser(ctx, next) {
        const { user_name } = ctx.request.body
        const result = await userdao.deleteUser(user_name);

        if (!result[0]) {
            ctx.body = {
                code: 400,
                msg: '删除失败'
            }
            return
        }

        ctx.body = {
            code: 200,
            result: result,
            msg: '删除成功'
        }

    }


    // 查询所有用户
    async selectAll(ctx, next) {

        const result = await userdao.selectAll();

        ctx.body = {
            code: 200,
            result: result,
            msg: '查询成功'
        }
    }

    //根据参数查询用户
    async getUserByParams(ctx, next) {
        const { id, user_name, password, is_admin } = ctx.request.body
        const result = await userdao.selectUserByParams(id, user_name, password, is_admin);

        //check result is not null
        if (!result) {
            ctx.body = {
                code: 400,
                msg: '查询失败'
            }
            return
        }

        ctx.body = {
            code: 200,
            result: result,
            msg: '查询成功'
        }
    }
}

module.exports = new UserController()