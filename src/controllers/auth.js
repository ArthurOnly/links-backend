const express = require('express')
const bcrypt = require('bcrypt')
const {Account} = require('../models')
const getMessage = require('../helpers/messages')
const {accountSignUp,accountSignIn} = require('../validators/account')
const {generateJwt,generateRefreshJwt} = require('../helpers/jwt')
const account = require('../validators/account')

const router = express.Router()

const saltRounds = 10

router.post('/sign-in',accountSignIn, async(req,res)=>{
    const {email,password} = req.body
    const account = await Account.findOne({where: {email:email}})

    //Validar senha
    const passMatch = account ? bcrypt.compareSync(password, account.password) : null
    if (!passMatch) return res.jsonBadRequest(null,getMessage('account.signin.invalid')) 

    const token = generateJwt({id: account.id})
    const refreshToken = generateRefreshJwt({id: account.id})

    return res.jsonOk(account, getMessage('account.signin.invalid'), {token,refreshToken})
})

router.post('/sign-up',accountSignUp, async (req,res)=>{
    const {email,password} = req.body

    const emailExist =  await Account.findOne({where: {email:email}})
    if (emailExist) return res.jsonBadRequest(null,getMessage('account.signup.email_exists'))
    const hashPassword = bcrypt.hashSync(password,saltRounds)
    const newAccount = await Account.create({email:email,password:hashPassword})

    const token = generateJwt({id: newAccount.id})
    const refreshToken = generateRefreshJwt({id: newAccount.id})

    return res.jsonOk(newAccount,getMessage('account.signup.success'),{token,refreshToken})
})

module.exports = router