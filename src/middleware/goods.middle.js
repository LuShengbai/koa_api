const validator = async (ctx, next) => {

    try {
        ctx.verifyParams({
            goods_name: { type: 'string', required: true },
            goods_price: { type: 'number', required: true },
            goods_img: { type: 'string', required: true },
            goods_num: { type: 'number', required: true },

        })
    } catch (err) {
      
        ctx.status = 400
        ctx.body = {
            code: 400,
            msg: err.errors[0]
        }
        return 
    }

    await next()
}

module.exports ={
    validator
}