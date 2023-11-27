const mongoose=require('mongoose');

const urlSchema= new mongoose.Schema({
    givenUrl:{
        type:String,
        unique:true,
        required:true
    },
    shortUrl:{
        unique:true,
        type:String,
        required:true
    },
    clicks:{
        type:Number,
        default:0,
        required:true
    },
    qrImagelocation:{
        type:String,
         required:true
    }
})

module.exports= mongoose.model('urls',urlSchema);