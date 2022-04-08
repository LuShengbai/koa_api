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
})

// try {
//     seq.authenticate()
//     console.log('Connection has been established successfully.')
// } catch (error) {
//     console.error('Unable to connect to the database:', error)
// }

module.exports = seq


