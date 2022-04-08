class UserServive {
    async createUser(user_name, user_password) {

        return 'user_name:' + user_name + ' user_password:' + user_password
    }
}

module.exports = new UserServive()