const User = require('../model/user.model')


class UserDao {

    /**
     * 注册
     * @param {*} user_name
     * @param {*} password
     * @returns {Promise<*>}
     */
    async createUser(user_name, password) {
        const result = await User.create({
            user_name,
            password,
            is_admin: false,
        })
        return result
    }


    /**
     * 修改用户信息
     * @param {*} user_name
     * @param {*} password
     * @param {*} is_admin
     * @returns {Promise<*>}
     */
    async updateUser(user_name, password, is_admin) {
        const result = await User.update({
            password,
            is_admin
        }, {
            where: {
                user_name
            }
        })
        return result
    }

    /**
     * 删除用户
     * @param {*} user_name
     * @returns {Promise<*>}
     */
    async deleteUser(user_name) {
        const result = await User.destroy({
            where: {
                user_name
            }
        })
        return result
    }

    /**
     * 查询所有用户
     * @param {*} user_name
     * @returns {Promise<*>}
     */
    async selectAll() {
        const result = await User.findAll()
        return result
    }

    async selectUser(user_name, password) {
        const result = await User.findOne({
            where: {
                user_name,
                password
            }
        })
        return result
    }

    async selectUserByName(user_name) {
        const result = await User.findOne({
            where: {
                user_name
            }
        })
        return result
    }

    //getUserByCondition
    async selectUserByParams(id, user_name, password, is_admin) {

        const whereOpt = {}

        id && Object.assign(whereOpt, { id })
        user_name && Object.assign(whereOpt, { user_name })
        password && Object.assign(whereOpt, { password })
        is_admin && Object.assign(whereOpt, { is_admin })


        console.log(whereOpt);

        const result = await User.findOne({
            attributes: ['id', 'user_name', 'password', 'is_admin'],
            where: whereOpt
        })
        return result
    }

}


module.exports = new UserDao()