const express = require('express')
const {Link} = require('../models')
const router = express.Router()

router.get('/', async(req,res)=>{
    const accountId = 1//req.id

    const links = await Link.findAll({where: {accountId:accountId}})
    !links ? res.jsonNotFound() : res.jsonOk(links)
})

router.get('/:id', async(req,res)=>{
    const {id} = req.params
    const accountId = 1//req.id

    const link = await Link.findOne({where: {id:id,accountId:accountId}})
    !link ? res.jsonNotFound() : res.jsonOk(link)
})

router.post('/', async (req,res)=>{
    const accountId = 1//req.id
    const {label, url, isSocial} = req.body
    const image = 'none'

    const link = await Link.create({label,url,image,isSocial,accountId})

    return res.jsonOk(link)
})

router.put('/:id', async (req,res)=>{
    const {id} = req.params
    const accountId = 1//req.id
    const fields = ['label','url','isSocial']

    const link = await Link.findOne({where: {id:id,accountId:accountId}})
    if (!link) return jsonNotFound()

    fields.map(fieldName=>req.body[fieldName]!=undefined ? link[fieldName]=req.body[fieldName] : null)

    await link.save()

    return res.jsonOk(link)
})

router.delete('/:id', async (req,res)=>{
    const {id} = req.params
    const accountId = 1//req.id

    const link = await Link.findOne({where: {id:id,accountId:accountId}})
    if (link){
        link.destroy()
        res.jsonOk()
    } else{
        res.jsonNotFound()
    }
})

module.exports = router