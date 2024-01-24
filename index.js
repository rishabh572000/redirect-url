const express = require('express')
const dotenv = require('dotenv')
const {connectToMongoDB} = require('./connect')
const urlRoute= require('./routes/url')

dotenv.config()
const app = express()
const PORT = 8001

connectToMongoDB().then(()=>console.log('mongo db connected'))
app.use(express.json())
app.use('/url', urlRoute)


app.listen(PORT, ()=> console.log(`Server started at PORT ${PORT}`))