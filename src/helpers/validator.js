const getMessage = require('./messages')

const getValidatorError = (error, messagePath) =>{
    if (!error) return null
    
    const errorMessages = {}
    error.details.map(item=>{
        const type = item.type
        const key = item.context.key

        const path = [messagePath,key,type].join('.')
        console.log(path)
        
        errorMessages[item.context.key] = getMessage(path) || item.message
    })

    return errorMessages
}

module.exports = {getValidatorError, getMessage}