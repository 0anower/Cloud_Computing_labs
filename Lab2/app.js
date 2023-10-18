// import library called 'express'
const express = require('express')
const app = express()

// route
app.get('/', (req, res)=> {
    res.send('HOMEPAGE')
})

//Middleware 
const filmRoute = require('./routes/films')
app.use('/films', filmRoute)


// import mongodp package
const mongoose = require('mongoose')
const MURL = 'mongodb+srv://oboniuser:1234@cluster1.wvhrfba.mongodb.net/MiniFilms?retryWrites=true&w=majority'
// Connect to MongoDB using Promises
mongoose.connect(MURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });



app.listen(3000, ()=> {
    console.log('Your server is up and running....')
})
