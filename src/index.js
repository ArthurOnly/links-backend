const express = require('express')
const db = require('./models/index')
const authController = require('./controllers/auth')

const app = express()

app.use('/auth',authController)

app.get('/', (req,res)=>{
    return res.json('api runing')
})

db.sequelize.sync().then(()=>{
    app.listen(3001,()=>console.log('listeing on port 3001'))
})