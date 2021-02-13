var express = require('express');
var app = express();
var mongoose = require('mongoose')
var bodyParser = require('body-parser');
const { CommentRoute, UserRoute, PostRoute} = require('./config/Routes')
require('./db')()
// const commentRoutes = require('./config/Routes/CommentRoute');
// const userRoutes = require('./config/Routes/UserRoute');
// const Post_ActionRoutes = require('./config/Routes/Post_ActionRoute');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// let uri = "mongodb+srv://mongodbuser:TwGvvbosCHMcEBuD@cluster0.v7thc.mongodb.net/Twitter?retryWrites=true&w=majority"

app.use("/my_api",CommentRoute);
app.use("/my_api",UserRoute);
app.use("/my_api",PostRoute);

// try {
//   mongoose.connect( uri, {useNewUrlParser: true, useUnifiedTopology: true}, () =>
//   console.log("Successfully Connected To Database"));    
//   }catch (error) { 
//   console.log(error);    
// }

app.listen(3000, function () {
  console.log('Server running at port 3000');
});