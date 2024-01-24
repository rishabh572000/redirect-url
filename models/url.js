const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
    shortId:{
        type:String,
        require:true,
        unique:true
    },
    redirectURL:{
        type: String,
        require:true
    },
    visitHistry:[{
        timeStamp:{
            type:Number
        }
    }]
},
{timestamps:true}
)

const URL = mongoose.model('url', urlSchema)

module.exports = URL