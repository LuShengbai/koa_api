const Goods = require('../model/goods.model')

class GoodsDao {

    async createGoods(goods_name, goods_price, goods_img, goods_num) {
        const {dataValues} = await Goods.create({
            goods_name,
            goods_price,
            goods_img,
            goods_num,
        })
        return dataValues
    }

}


module.exports = new GoodsDao()