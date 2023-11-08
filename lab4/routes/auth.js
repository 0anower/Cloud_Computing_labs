/ =====================user authorization ROUTE================================





//----------------------------IMPORT LIBRARIES------------------------------------

const express = require('express') 
const router = express.Router() 

// import user Post
const User = require('../models/User')

//import user-registration-validation
const {registerValidation, loginValidation} = require('../validations/validation')

// import passsword encryption package
const bcryptjs = require('bcryptjs')

// import JWT package
const jsonwebtoken = require('jsonwebtoken')
//-------------------------------------------------------------------------





// -----------------------REGESTRATION ROUTE...............................

// C of CRUD
// creating data model
// POST
router.post('/register', async(req, res)=>{

    // Validation 1 
    //to check user input
    const {error}=registerValidation(req.body) // variable for error input
    if(error){
        return res.status(400).send({message: error.details[0].message}) //[0] selects item only inside []
    }

    // Validation 2
    // check IF user already exists
    const userExists = await User.findOne({email:req.body.email}) // valiable for existing user
    if(userExists){
        return res.status(400).send({message: 'User Aready Exists'})
    }

    // hash the password (encrypt)
    const salt = await bcryptjs.genSalt(5)
    const hashPassword = await bcryptjs.hash(req.body.password,salt)

    // IF no error
    // code to insert data in database 
    const user = new User({
        username:req.body.username,
        email:req.body.email,
        password: hashPassword
    })
    
    // save the data to Database
    try{
        const savedUser = await user.save()
        res.send(savedUser)
    }catch(err){
        res.status(500).send({message:'server error'})
    }

})





// -----------------------LOGIN ROUTE...............................

// C of CRUD
// creating data model
// POST
router.post('/login', async(req,res)=>{

    // Validation 1 
    //to check user input
    const {error} = loginValidation(req.body) // variable for error input
    if(error){
        return res.status(400).send({message: error.details[0].message}) //[0] selects item only inside []
    }

    // Validation 2
    // check IF user already exists
    const user = await User.findOne({email:req.body.email}) // valiable for existing user
    if(!user){
        return res.status(400).send({message: 'User Does not Exist'})
    }

    // Validation 3
    // check IF password correct
    //decrypt to compare
    const passwordValidation = await bcryptjs.compare(req.body.password, user.password)
    if(!passwordValidation){
        return res.status(400).send({message: 'Password Is Incorrect'})
    }

    // ELSE
    // Generate an auth-token
    const token = jsonwebtoken.sign({_id:user._id}, process.env.TOKEN_SECRET)
    res.header('auth-token',token).send({'auth-token':token})

})





//export to router
module.exports = router
