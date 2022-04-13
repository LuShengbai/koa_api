const path = require('path')


const goodsdao = require('../dao/goods.dao');

class GoodsController {
    async upload(ctx, next) {

        const { file } = ctx.request.files;


        //return file info
        ctx.body = {
            code: 0,
            msg: '返回成功',
            data: {
                filename: file.name,
                path: path.basename(file.path)
            }
        }


    }

    async addGoods(ctx, next) {

        const { goods_name, goods_price, goods_img, goods_num } = ctx.request.body

        try {
            const {updatedAt,createdAt,...result} = await goodsdao.createGoods(goods_name, goods_price, goods_img, goods_num)


            ctx.body = {
                code: 200,
                result: result,
                msg: '添加成功'
            }


            return

        } catch (error) {

                ctx.body = {
                    code: 400,
                    msg: error.message
                }
                return
            
        }


        return


    }

    async selectAllGoods(ctx, next) {

        try {
            const result = await goodsdao.selectAllGoods()

            ctx.body = {
                code: 200,
                result: result,
                msg: '查询成功'
            }

            return

        } catch (error) {

            ctx.body = {
                code: 400,
                msg: error.message
            }
            return

        }
    }
}


module.exports = new GoodsController()