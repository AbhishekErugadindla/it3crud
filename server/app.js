const express = require('express')
const mongoose= require('mongoose')
const cors=require('cors')
const alienRouter = require('./routes/aliens')
const url = 'mongodb+srv://abhishekerugadindla:pFCfyNFZH4bviDLW@cluster0.xh0vqp7.mongodb.net/?retryWrites=true&w=majority'
const app=express()
app.use(cors())
mongoose.connect(url)
const con=mongoose.connection
con.on('open',()=>{
    console.log('connected')
})
app.use(express.json())
app.use('/aliens',alienRouter)
app.listen(9000,()=>{
    console.log('server started')
})