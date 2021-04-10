const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid');

const ProductSchema = new mongoose.Schema({
    id:{
        type:String,
        default:uuidv4()
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        default:0,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('Product', ProductSchema)
