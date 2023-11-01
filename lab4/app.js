// importing libraries
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')

// connect MongoDB
mongoose.connect(process.env.DB_CONNECTOR,  {
    useNewUrlParser: true
  })
  .then(() => {
    console.log('DB is now connected') //callback
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error)
  })

// create Middleware
const filmsRoute = require('./routes/films')
app.use('/api/film', filmsRoute)


// server port
app.listen(3001, ()=>{
    console.log('Server is up and running')
})
