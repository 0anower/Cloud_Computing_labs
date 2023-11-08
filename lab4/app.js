// import libraries
const express = require('express')
const app = express()

const mongoose = require('mongoose')

require('dotenv/config')

const bodyParser = require('body-parser')
app.use(bodyParser.json())





// create Middleware
const filmsRoute = require('./routes/films') //endpoint
app.use('/api/film', filmsRoute)

const authRoute = require('./routes/auth') //endpoint
app.use('/api/user', authRoute)





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





// server port
app.listen(3000, ()=>{
    console.log('Server is up and running')
})

