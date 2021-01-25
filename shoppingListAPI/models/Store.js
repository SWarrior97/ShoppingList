const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid');

const StoreSchema = new mongoose.Schema({
    id:{
        type:String,
        default:uuidv4()
    },
    name:{
        type:String,
        required:true
    },
    products:{
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    }
})

module.exports = mongoose.model('Store', StoreSchema)
