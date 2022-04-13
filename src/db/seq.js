const { Sequelize } = require('sequelize')

const {
    PG_HOST,
    PG_PORT,
    PG_USER,
    PG_PWD,
    PG_DB,
} = require('../config/config.default')


const seq = new Sequelize(PG_DB, PG_USER, PG_PWD, {
    host: PG_HOST,
    dialect: 'postgres',
    port: PG_PORT,
    pool: {   //连接池设置
        max: 5, //最大连接数
        min: 0, //最小连接数
        idle: 10000
    },
})

// const {
//     MYSQL_HOST,
//     MYSQL_PORT,
//     MYSQL_USER,
//     MYSQL_PWD,
//     MYSQL_DB,
// } = require('../config/config.default')


// const seq = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
//     host: MYSQL_HOST,
//     dialect: 'mysql',
//     port: MYSQL_PORT,
//     pool: {   //连接池设置
//         max: 5, //最大连接数
//         min: 0, //最小连接数
//         idle: 10000
//     },
// })


// try {
//     seq.authenticate()
//     console.log('Connection has been established successfully.')
// } catch (error) {
//     console.error('Unable to connect to the database:', error)
// }

module.exports = seq


