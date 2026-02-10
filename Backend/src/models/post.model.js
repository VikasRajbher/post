const mongoose = require('mongoose');

const post = new mongoose.Schema({
    image: String,
    caption:String,
})

const postSchema = mongoose.model('post',post);

module.exports = postSchema;