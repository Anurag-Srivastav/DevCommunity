const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const Comments = new mongoose.Schema({
    content:{type: String, required : true},
    Post : {type: ObjectId, required : true}, 
    Author : {type : ObjectId, required : true},
    likes_count : {type : Number, required : true}
})

module.exports = mongoose.model('Comments', Comments);