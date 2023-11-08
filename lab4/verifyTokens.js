//--------------IMPORT LIBRARIES---------------------
const { send } = require('express/lib/response')

// import JWT
const jsonwebtoken = require('jsonwebtoken')
//---------------------------------------------------




//-------------------token-control function-------------------------------
function auth(req, res, next){
    // extract token from header
    const token = req.header('auth-token')
    // IF no token in header
    if(!token){
        return res.status(401).send({message:'Access denied'})
    }
    // IF token present
    try{
        const verified = jsonwebtoken.verify(token,process.env.TOKEN_SECRET)
        req.user = verified
        next()
    }catch(err){
        return res.status(401).send({message:'Invalid token'})
    }
}




// export auth module
module.exports = auth
