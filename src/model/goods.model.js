const { DataTypes } = require('sequelize')
const seq = require('../db/seq')


// create table Goods
const Goods = seq.define('zd_goods', {
    goods_name: {
        type: DataTypes.STRING,
        allowNull: false,
        comment:'货物名称'
    },
    goods_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        comment:'货物价格'
    },
    goods_img: {
        type: DataTypes.STRING,
        allowNull: false,
        comment:'货物图片'
    },
    goods_num: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment:'货物数量'

    }
})


// Goods.sync({ force: true })

module.exports = Goods
