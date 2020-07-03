const getMessage = require('../helpers/messages')

const STATUS_CODE_OK = 200
const STATUS_CODE_BAD_REQUEST = 400
const STATUS_CODE_UNAUTHORIZED = 401
const STATUS_CODE_NOT_FOUND = 404
const STATUS_CODE_SERVER_ERROR = 500

const TYPE_JSON = 'application/json'

const jsonOk = function(data, message, metadata){      
    this.message = message = message ? message : getMessage('response.jsonOk')
    this.metadata = metadata = metadata ? metadata : {}

    this.status(STATUS_CODE_OK)
    this.type(TYPE_JSON)

    return this.json({message, data, metadata})
}

const jsonBadRequest = function(data, message, metadata){      
    this.message = message = message ? message : getMessage('response.badRequest')
    this.metadata = metadata = metadata ? metadata : {}

    this.status(STATUS_CODE_BAD_REQUEST)
    this.type(TYPE_JSON)

    return this.json({message, data, metadata})
}

const jsonUnauthorized = function(data, message, metadata){      
    this.message = message = message ? message : getMessage('response.unauthorized')
    this.metadata = metadata = metadata ? metadata : {}

    this.status(STATUS_CODE_UNAUTHORIZED)
    this.type(TYPE_JSON)

    return this.json({message, data, metadata})
}

const jsonNotFound = function(data, message, metadata){      
    this.message = message = message ? message : getMessage('response.notFound')
    this.metadata = metadata = metadata ? metadata : {}

    this.status(STATUS_CODE_NOT_FOUND)
    this.type(TYPE_JSON)

    return this.json({message, data, metadata})
}

const jsonServerError = function(data, message, metadata){      
    this.message = message = message ? message : getMessage('response.serverError')
    this.metadata = metadata = metadata ? metadata : {}

    this.status(STATUS_CODE_SERVER_ERROR)
    this.type(TYPE_JSON)

    return this.json({message, data, metadata})
}

const response = (req,res,next) => {
    res.jsonOk = jsonOk
    res.jsonBadRequest = jsonBadRequest
    res.jsonUnauthorized = jsonUnauthorized
    res.jsonNotFound = jsonNotFound
    res.jsonServerError = jsonServerError
    next()
}

module.exports = response