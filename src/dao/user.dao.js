const User = require('../model/user.model')


class UserDao {


    async createUser(user_name, password) {
        const result = await User.create({
            user_name,
            password,
            is_admin: false,
        })
        return result
    }

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

    async deleteUser(user_name) {
        const result = await User.destroy({
            where: {
                user_name
            }
        })
        return result
    }

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

}


module.exports = new UserDao()