const mongoose = require('mongoose')

async function connectToMongoDB(){
    return mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser:true,
    })
}

module.exports={
    connectToMongoDB
}