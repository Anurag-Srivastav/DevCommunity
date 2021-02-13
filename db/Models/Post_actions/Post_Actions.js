const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const Post_Actions = new mongoose.Schema({ 
    Author : {type : ObjectId, required : true, ref : 'Users'},
    Post : {type : ObjectId, required : true, ref : 'Posts'}
})

module.exports = mongoose.model('Post_Actions', Post_Actions);