const { DataTypes } = require('sequelize')
const seq = require('../db/seq')


// create table user
const User = seq.define('zd_user', {
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        comment:'用户名'
    },
    password: {
        type: DataTypes.CHAR(64),
        allowNull: false,
        comment:'密码'
    },
    is_admin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: '0',
        comment:'是否是管理员',
    }
})

// create table user_info
// User.sync({ force: false })

module.exports = User
