const express = require('express')

const app = express()

app.get('/', (req,res)=>{
    return res.json('api runing')
})

app.listen(3001,()=>console.log('listeing on port 3001'))