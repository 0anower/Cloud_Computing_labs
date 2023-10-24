const express = require('express')
const router = express.Router()


// import user Post
const Post = require('../models/Post')

// C of CRUD
// creating data model
// POST
router.post('/', async(req, res)=>{
    console.log(req.body) //prints in console

    //extract from Postman, insert in MongoDB(database)
    const postData = new Post( {
        user: req.body.user,
        title: req.body.title,
        text: req.body.text,
        hashtag: req.body.hashtag,
        location: req.body.location,
        url: req.body.url 
    })
    //try to insert
    try{
        const postToSave = await postData.save()
        res.send(postToSave) //callback

    }catch(err){
        res.send({message:err})
    }
})

// R of CRUD
// get(read) all data/post
// GET
router.get('/', async(req,res)=> {
    try{
        const getPosts = await Post.find()
        res.send(getPosts) //callback

    }catch(err){
        res.send({message:err})
    }
})

// R of CRUD
// get(read) by ID
// GET
router.get('/:postId', async(req,res)=> {
    try{
        const getPostById = await Post.findById(req.params.postId)
        res.send(getPostById) //callback

    }catch(err){
        res.send({message:err})
    }
})

// U of CRUD
// update data
// PATCH
router.patch('/:postId', async(req, res)=>{
    //try to insert
    try{
        const updatePostById = await Post.updateOne(
        {_id: req.params.postId}, // choose id
        // update anything
        {$set: {
            user: req.body.user,
            title: req.body.title,
            text: req.body.text,
            hashtag: req.body.hashtag,
            location: req.body.location,
            url: req.body.url 
           }
        })
        res.send(updatePostById) //callback
    }catch(err){
        res.send({message:err})
    }
})

// D of CRUD
// DELETE
router.delete('/:postId', async(req, res)=>{
    //try to insert
    try{
        const deletePostById = await Post.deleteOne(
        {_id: req.params.postId}, // choose id
        // delete anything
        {$set: {
            user: req.body.user,
            title: req.body.title,
            text: req.body.text,
            hashtag: req.body.hashtag,
            location: req.body.location,
            url: req.body.url 
           }
        })
        res.send(deletePostById) //callback
    }catch(err){
        res.send({message:err})
    }
}) 


//export to router
module.exports = router
