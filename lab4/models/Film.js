/ FILM MODEL

// import mongoose
const mongoose = require('mongoose')

// create Film Schema
const filmSchema = mongoose.Schema({
    file_name:{
        type:String,
    },
    Release_year:{
        type:String,
    },
    YT_Link:{
        type:String,
    },
    film_type:{
        type:String,
    }
})

//export schema to database collection
module.exports = mongoose.model('films', filmSchema)
