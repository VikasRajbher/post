const express = require('express');
const connectDB = require('./db/db');
const uploadImage = require('./services/storage.service');
const multer = require('multer');
const postSchema = require('./models/post.model');


const app = express();
connectDB()
app.use(express.json())

const upload = multer({storage:multer.memoryStorage()})

app.post('/',upload.single('image'),async(req, res)=>{

    console.log(req.file.originalname); // image.jpg
        console.log(req.body.caption);    
    
    const result = await uploadImage(req.file.buffer);
    console.log(req.body)

    const Post = await postSchema.create({
        image:result.url,
        caption: req.body.caption
    })

    res.status(201).json({
        message:"Post Created Sucessfully",
        Post
    })
})


app.get('/post',async(req,res)=>{

    const post = await postSchema.find();

    res.status(200).json({
        message:"All Posts fetched Sucessfully",
        post
    })
})



module.exports = app;