const STATUS_CODE_OK = 201
const STATUS_CODE_BAD_REQUEST = 400
const STATUS_CODE_UNAUTHORIZED = 401
const STATUS_CODE_NOT_FOUND = 404
const STATUS_CODE_SERVER_ERROR = 500

const TYPE_JSON = 'application/json'

const jsonOK = function(data, message, metadata){      
    this.message = message = message ? message : 'Created'
    this.metadata = metadata = metadata ? metadata : {}

    this.status(STATUS_CODE_OK)
    this.type(TYPE_JSON)

    return this.json({message, data, metadata})
}

const jsonBAD = function(data, message, metadata){      
    this.message = message = message ? message : 'Bad request'
    this.metadata = metadata = metadata ? metadata : {}

    this.status(STATUS_CODE_BAD_REQUEST)
    this.type(TYPE_JSON)

    return this.json({message, data, metadata})
}

const jsonUNAUTHORIZED = function(data, message, metadata){      
    this.message = message = message ? message : 'UNAUTHORIZED'
    this.metadata = metadata = metadata ? metadata : {}

    this.status(STATUS_CODE_UNAUTHORIZED)
    this.type(TYPE_JSON)

    return this.json({message, data, metadata})
}

const jsonNOT_FOUND = function(data, message, metadata){      
    this.message = message = message ? message : 'Not found'
    this.metadata = metadata = metadata ? metadata : {}

    this.status(STATUS_CODE_NOT_FOUND)
    this.type(TYPE_JSON)

    return this.json({message, data, metadata})
}

const jsonSERVER_ERROR = function(data, message, metadata){      
    this.message = message = message ? message : 'Server error'
    this.metadata = metadata = metadata ? metadata : {}

    this.status(STATUS_CODE_SERVER_ERROR)
    this.type(TYPE_JSON)

    return this.json({message, data, metadata})
}

const response = (req,res,next) => {
    res.jsonOK = jsonOK
    res.jsonBAD = jsonBAD
    res.jsonUNAUTHORIZED = jsonUNAUTHORIZED
    res.jsonNOT_FOUND = jsonNOT_FOUND
    res.jsonSERVER_ERROR = jsonSERVER_ERROR
    next()
}

module.exports = response