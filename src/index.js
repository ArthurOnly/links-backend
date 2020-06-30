const express = require('express')

const authController = require('./controllers/auth')

const app = express()

app.use('/auth',authController)

app.get('/', (req,res)=>{
    return res.json('api runing')
})

app.listen(3001,()=>console.log('listeing on port 3001'))