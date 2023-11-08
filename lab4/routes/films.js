// =======================films ROUTE==========================





//---------------IMPORTS------------------
// import libraries
const express = require('express')
const router = express.Router()

// import user Post
const Film = require('../models/Film')

// import verifyToken
const verifyToken = require('../verifyToken')
//----------------------------------------





// R of CRUD
// get(read) all data
// GET
router.get('/', verifyToken, async(req,res)=> {
    try{
        const films = await Film.find()
        res.send(films) //callback

    }catch(err){
        res.status(400).send({message:err})
    }
})





// export route
module.exports = router
