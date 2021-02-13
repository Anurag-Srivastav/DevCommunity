const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const Posts = new mongoose.Schema({
    content:{type: String, required : true},
    Author : {type : ObjectId, required : true},
    likes_count : {type : Number, required : true},
    comments_count : {type: Number,  required : true}
})

module.exports = mongoose.model('Posts', Posts);