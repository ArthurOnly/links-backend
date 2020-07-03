const joi = require('@hapi/joi')
const {getValidatorError} = require('../helpers/validator')

const rules = {
    email: joi.string().required(),
    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    password_confirmation: joi.string().valid(joi.ref('password')).required()
}

const accountSignIn = (req,res,next) => {
    const {email, password} = req.body

    const schema = joi.object({
        email: rules.email,
        password: rules.password
    })

    const {error} = schema.validate({email, password},{abortEarly: false})
    if (error){
        return res.jsonBadRequest(null,null,{error: getValidatorError(error,'account.signin')})
    }

    next()
}

const accountSignUp = (req,res,next) => {
    const {email, password, password_confirmation} = req.body

    const schema = joi.object({
        email: rules.email,
        password: rules.password,
        password_confirmation: rules.password_confirmation
    })

    const {error} = schema.validate({email, password, password_confirmation},{abortEarly: false})
    if (error){
        return res.jsonBadRequest(null,null,{error: getValidatorError(error,'account.signup')})
    }

    next()
}

module.exports = {accountSignUp,accountSignIn}