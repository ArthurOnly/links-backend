const express = require('express')
const bcrypt = require('bcrypt')
const {Account} = require('../models')

const router = express.Router()

const saltRounds = 10

router.get('/sign-in', async(req,res)=>{
    return res.json('sign-in')
})

router.post('/sign-up', async (req,res)=>{
    const json = req.body

    const email = json.email
    const emailExist =  await Account.findOne({where: {email:email}})
    if (emailExist) return res.jsonBAD(null,'Email alery exists')

    const hashPassword = bcrypt.hashSync(json.password,saltRounds)

    const newAccount = await Account.create({email:email,password:hashPassword})

    return res.jsonOK(newAccount)
})

module.exports = router