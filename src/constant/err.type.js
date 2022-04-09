const ErrorType = {

    /**
     * 
     * message:
     * 
     */
    //  'invalid token' - the header or payload could not be parsed
    //  'jwt malformed' - the token does not have three components (delimited by a .)
    //  'jwt must be provided'
    //  'invalid signature'

    //jwt errors codes

    //  'invalid token' - the header or payload could not be parsed
    tokenExpiredError: {
        code: '10101',
        message: 'token已过期',
        result: '',
      },

    //  'jwt malformed' - the token does not have three components (delimited by a .)
    tokenMalformedError: {
        code: '10102',
        message: 'token格式错误',
        result: '',
        },

    //  'jwt must be provided'
    tokenSignatureRequiredError: {
        code: '10103',
        message: 'token签名不存在',
        result: '',
        },

    //  'invalid signature'
    tokenInvalidSignatureError: {
        code: '10104',
        message: 'token签名错误',
        result: '',
        }


}

module.exports = ErrorType