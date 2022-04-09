const jwt = require('jsonwebtoken')

const { JWT_SECRET } = require('../config/config.default')

const ErrorType = require('../constant/err.type')

const auth = async (ctx, next) => {

    //get authorization 
    const { authorization } = ctx.request.header;

    //get token
    const token = authorization.split(' ')[1];


    //check token is vaild
    try {
        const res = jwt.verify(token, JWT_SECRET)
        ctx.state.user = res

    }
    catch (error) {
        switch (error.message) {
            case 'jwt expired': {
                ctx.status = 400
                ctx.body = ErrorType.tokenExpiredError
                break
            }
            case 'jwt malformed': {
                ctx.status = 400
                ctx.body = ErrorType.tokenMalformedError
                break
            }
            case 'jwt must be provided': {

                ctx.status = 400
                ctx.body = ErrorType.tokenSignatureRequiredError
                break
            }
            case 'invalid signature': {
                ctx.status = 400
                ctx.body = ErrorType.tokenInvalidSignatureError
                break
            }
            default: {
                ctx.status = 400
                ctx.body = {
                    code: -1,
                    msg: error.message
                }
                break
            }

        }

        return
   
    }

    await next()
}

module.exports = { auth }