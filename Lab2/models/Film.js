const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')

const FilmSchema = new mongoose.Schema({
    _id:{
        type:ObjectId
    },
    film_name:{
        type:String
    },
    Release_year:{
        type:String
    },
    YT_Link:{
        type:String
    },
    film_type:{
        type:String
    }
    
})

// name of mongodb data
module.exports = mongoose.model('films', FilmSchema)
