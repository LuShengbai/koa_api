
const checkFileType = async (ctx, next) => {
    
        const { file } = ctx.request.files;
    
        const fileTypes = ['image/jpeg', 'image/png', 'image/gif'];

        if (file) {
    
            if (!fileTypes.includes(file.type)) {
                return ctx.body = {
                    code: -1,
                    msg: '文件类型错误'
                }
            }
    
        }
        else {
            ctx.body = {
                code: -1,
                msg: '上传失败'
            }
            return
        }

        await next()
    }

    module.exports = {checkFileType}