const path = require('path')

class GoodsController {
    async upload(ctx, next) {

        const { file } = ctx.request.files;

        const fileTypes = ['image/jpeg', 'image/png', 'image/gif'];

        if (file) {

            if (!fileTypes.includes(file.type)) {
                return ctx.body = {
                    code: -1,
                    msg: '文件类型错误'
                }
            }

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
        else {
            ctx.body = {
                code: -1,
                msg: '上传失败'
            }
        }






    }
}


module.exports = new GoodsController()