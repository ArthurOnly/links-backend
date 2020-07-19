const express = require('express')
const db = require('./models/index')
const cors = require('cors')

const response = require('./middlewares/response')
const checkJwt = require('./middlewares/jwt')

const authController = require('./controllers/auth')
const linkController = require('./controllers/link')

const app = express()
app.use(cors())

app.use(response)
app.use(checkJwt)
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/auth',authController)
app.use('/link',linkController)

app.get('/', (req,res)=>{
    return res.json('api runing')
})

db.sequelize.sync().then(()=>{
    app.listen(3001,()=>console.log('listeing on port 3001'))
})