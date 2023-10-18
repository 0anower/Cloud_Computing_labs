// create route
const express = require('express')
const router = express.Router()

// create data model called Film
const Film = require('../models/Film')

// send the films
router.get('/', async (req, res)=> {
    try{
        const films = await Film.find()
        console.log('Films:', films)
        res.send(films)
    } catch(err){
        console.log('Error:', err)
        res.status(500).json({ error: err.message })
    }
})

// get specific film
router.get('/:filmId', async(req, res)=> {
    try{
        const filmsById = await Film.findById(req.params.filmId)
        res.send(filmsById)
    }catch(err){
        console.log('Error:', err)
        res.status(500).json({ error: err.message })
    }
})

module.exports = router
