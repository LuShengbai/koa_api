const Goods = require('../model/goods.model')

class GoodsDao {

    async createGoods(goods_name, goods_price, goods_img, goods_num) {
        const { dataValues } = await Goods.create({
            goods_name,
            goods_price,
            goods_img,
            goods_num,
        })
        return dataValues
    }

    async updateGoods(goods_name, goods_price, goods_img, goods_num, id) {
        const { dataValues } = await Goods.update({
            goods_name,
            goods_price,
            goods_img,
            goods_num,
        }, {
            where: {
                id
            }
        })
        return dataValues
    }

    async updateGoodsByCondition({ id, goods_name, goods_price, goods_img, goods_num }) {
        const whereOpt = { id }
        const newGoods = {}

        goods_name && Object.assign(newGoods, { goods_name })
        goods_price && Object.assign(newGoods, { goods_price })
        goods_img && Object.assign(newGoods, { goods_img })
        goods_num && Object.assign(newGoods, { goods_num })

        let res = null

        try {
            res = await Goods.update(newGoods, { where: whereOpt })

        } catch (error) {
            throw new Error(error)

        }

        return res[0] > 0 ? true : false
    }

    async deleteGoods(id) {
        const { dataValues } = await Goods.destroy({
            where: {
                id
            }
        })
        return dataValues
    }

    async selectGoodsById(id) {
        const { dataValues } = await Goods.findOne({
            where: {
                id
            }
        })
        return dataValues
    }

    async selectAllGoods() {
        const result = await Goods.findAll()
        return result
    }

    async selectGoodsByParams({ id, goods_name, goods_price, goods_img, goods_num }) {

        const whereOpt = {}

        id && Object.assign(whereOpt, { id })
        goods_name && Object.assign(whereOpt, { goods_name })
        goods_price && Object.assign(whereOpt, { goods_price })
        goods_img && Object.assign(whereOpt, { goods_img })
        goods_num && Object.assign(whereOpt, { goods_num })


        const result = await Goods.findOne({
            attributes: ['id', 'goods_name', 'goods_price', 'goods_img', 'goods_num'],
            where: whereOpt

        })
        return result
    }


}


module.exports = new GoodsDao()