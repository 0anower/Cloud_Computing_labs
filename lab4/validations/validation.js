// creating a validation for User registration
// to control user input validations

// import joi
const joi = require('joi')

// user registration validation
const registerValidation = (data) => {
    const schemaValidation = joi.object({
        username:joi.string().required().min(3).max(256),
        email:joi.string().required().email().min(6).max(256),
        password:joi.string().required().min(6).max(1024)
    })
    return schemaValidation.validate(data)
}

// user login validation
const loginValidation = (data) => {
    const schemaValidation = joi.object({
        email:joi.string().required().email().min(6).max(256),
        password:joi.string().required().min(6).max(1024)
    })
    return schemaValidation.validate(data)
}


// export validation
module.exports = {registerValidation, loginValidation}
