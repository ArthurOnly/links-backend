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
    if (emailExist) return res.json('Email alery exists')

    const hashPassword = bcrypt.hashSync(json.password,saltRounds)

    const newAccount = await Account.create({email:email,password:hashPassword})

    return res.json(newAccount)
})

module.exports = router