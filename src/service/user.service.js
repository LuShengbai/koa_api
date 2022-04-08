const userdao = require('../dao/user.dao');


class UserServive {
    async createUser(user_name, password) {

        const selecUser = await userdao.selectUserByName(user_name);

        if (selecUser) {
            return {
                code: 400,
                msg: '用户名已存在'
            }
        }

        const result = await userdao.createUser(user_name, password);
console.log("//////////////////////////////////////////////////////////////////");
        console.log(result);
        return {
            code: 200,
            result: result,
            msg: '注册成功'
        }


    }

    async updateUser(user_name, password, is_admin) {

        const result = await userdao.updateUser(user_name, password, is_admin);

        return {
            code: 200,
            result: result,
            msg: '修改成功'
        }

    }

    async deleteUser(user_name) {

        const result = await userdao.deleteUser(user_name);

        return {
            code: 200,
            result: result,
            msg: '删除成功'
        }

    }

    async selectAll() {
        const result = await userdao.selectAll();

        return {
            code: 200,
            result: result,
            msg: '查询成功'
        }
    }

    async login(user_name, password) {
        const result = await userdao.selectUser(user_name, password);

        if (result) {
            return {
                code: 200,
                msg: '登录成功'
            }
        } else {
            return {
                code: 400,
                msg: '用户名或密码错误'
            }
        }
    }



}

module.exports = new UserServive()