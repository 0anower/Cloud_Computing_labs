const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('HOMEPAGE')
})

//mongoose packet
const mongoose = require('mongoose')

// dotenv
require('dotenv/config')

// export posts.js and import in app.js
//recieve data from user
//user posting to server
const bodyParser = require('body-parser')
const postRoute = require('./routes/posts')

app.use(bodyParser.json())
app.use('/posts', postRoute)

//connector
mongoose.connect(process.env.DB_CONNECTOR,  {
    useNewUrlParser: true
  })
  .then(() => {
    console.log('DB is now connected') //callback
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error)
  })


app.listen(3000, ()=> {
    console.log('Server is up and running...') //callback
})
